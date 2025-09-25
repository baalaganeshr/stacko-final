import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface ConversionEvent {
  event_name: string;
  currency?: string;
  value?: number;
  items?: Array<{
    item_id: string;
    item_name: string;
    category?: string;
    price?: number;
    quantity?: number;
  }>;
}

// Enhanced analytics service with privacy-first approach
class AnalyticsService {
  private isEnabled: boolean = false;
  private isInitialized: boolean = false;
  private queue: Array<() => void> = [];

  constructor() {
    // Check user consent and privacy settings
    this.checkConsent();
  }

  private checkConsent(): void {
    // Check for user consent (GDPR/CCPA compliance)
    const consent = localStorage.getItem('analytics-consent');
    const doNotTrack = navigator.doNotTrack === '1' || 
                      (window as any).doNotTrack === '1' ||
                      (navigator as any).msDoNotTrack === '1';
    
    this.isEnabled = consent === 'true' && !doNotTrack;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized || !this.isEnabled) return;

    try {
      // Initialize Google Analytics 4 (replace with your measurement ID)
      const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
      
      if (GA_MEASUREMENT_ID && typeof window !== 'undefined') {
        // Load gtag script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        // Initialize gtag
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).gtag = function() {
          (window as any).dataLayer.push(arguments);
        };

        (window as any).gtag('js', new Date());
        (window as any).gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
          anonymize_ip: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: false
        });

        this.isInitialized = true;

        // Process queued events
        this.queue.forEach(fn => fn());
        this.queue = [];
      }
    } catch (error) {
      console.warn('Analytics initialization failed:', error);
    }
  }

  private executeOrQueue(fn: () => void): void {
    if (this.isInitialized && this.isEnabled) {
      fn();
    } else if (this.isEnabled) {
      this.queue.push(fn);
    }
  }

  trackPageView(path: string, title?: string): void {
    this.executeOrQueue(() => {
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
          page_path: path,
          page_title: title || document.title,
          page_location: `${window.location.origin}${path}`
        });
      }
    });
  }

  trackEvent({ action, category, label, value, custom_parameters }: AnalyticsEvent): void {
    this.executeOrQueue(() => {
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
          ...custom_parameters
        });
      }
    });
  }

  trackConversion({ event_name, currency = 'USD', value, items }: ConversionEvent): void {
    this.executeOrQueue(() => {
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', event_name, {
          currency,
          value,
          items
        });
      }
    });
  }

  trackTiming(name: string, value: number, category: string = 'Performance'): void {
    this.executeOrQueue(() => {
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'timing_complete', {
          name,
          value: Math.round(value),
          event_category: category
        });
      }
    });
  }

  setUserProperties(properties: Record<string, string>): void {
    this.executeOrQueue(() => {
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
          custom_map: properties
        });
      }
    });
  }

  enableAnalytics(): void {
    localStorage.setItem('analytics-consent', 'true');
    this.isEnabled = true;
    this.initialize();
  }

  disableAnalytics(): void {
    localStorage.setItem('analytics-consent', 'false');
    this.isEnabled = false;
    
    // Disable GA
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  }
}

// Singleton instance
const analyticsService = new AnalyticsService();

// Main analytics hook
export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    analyticsService.initialize();
  }, []);

  // Track page views automatically
  useEffect(() => {
    analyticsService.trackPageView(location.pathname + location.search);
  }, [location]);

  const trackEvent = useCallback((event: AnalyticsEvent) => {
    analyticsService.trackEvent(event);
  }, []);

  const trackConversion = useCallback((conversion: ConversionEvent) => {
    analyticsService.trackConversion(conversion);
  }, []);

  const trackTiming = useCallback((name: string, value: number, category?: string) => {
    analyticsService.trackTiming(name, value, category);
  }, []);

  const setUserProperties = useCallback((properties: Record<string, string>) => {
    analyticsService.setUserProperties(properties);
  }, []);

  return {
    trackEvent,
    trackConversion,
    trackTiming,
    setUserProperties,
    enableAnalytics: analyticsService.enableAnalytics.bind(analyticsService),
    disableAnalytics: analyticsService.disableAnalytics.bind(analyticsService)
  };
};

// Performance tracking hook
export const usePerformanceTracking = () => {
  const { trackTiming } = useAnalytics();

  useEffect(() => {
    // Track core web vitals (commented out until web-vitals is installed)
    const trackWebVitals = async () => {
      try {
        // Install web-vitals: npm install web-vitals
        // const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        // getCLS((metric: any) => trackTiming('CLS', metric.value * 1000, 'Core Web Vitals'));
        // getFID((metric: any) => trackTiming('FID', metric.value, 'Core Web Vitals'));
        // getFCP((metric: any) => trackTiming('FCP', metric.value, 'Core Web Vitals'));
        // getLCP((metric: any) => trackTiming('LCP', metric.value, 'Core Web Vitals'));
        // getTTFB((metric: any) => trackTiming('TTFB', metric.value, 'Core Web Vitals'));
        
        console.log('Web Vitals tracking available but not installed');
      } catch (error) {
        console.warn('Web Vitals tracking failed:', error);
      }
    };

    // Track navigation timing
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        trackTiming('DOM_Load', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        trackTiming('Page_Load', navigation.loadEventEnd - navigation.loadEventStart);
        trackTiming('DNS_Lookup', navigation.domainLookupEnd - navigation.domainLookupStart);
      }
    }

    trackWebVitals();
  }, [trackTiming]);

  // Track custom performance metrics
  const trackCustomTiming = useCallback((name: string, startTime: number) => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    trackTiming(name, duration, 'Custom Performance');
  }, [trackTiming]);

  return { trackCustomTiming };
};

// Conversion tracking hook for e-commerce
export const useConversionTracking = () => {
  const { trackConversion, trackEvent } = useAnalytics();

  const trackCourseEnrollment = useCallback((courseId: string, courseName: string, price: number) => {
    trackConversion({
      event_name: 'purchase',
      currency: 'USD',
      value: price,
      items: [{
        item_id: courseId,
        item_name: courseName,
        category: 'Course',
        price: price,
        quantity: 1
      }]
    });
  }, [trackConversion]);

  const trackLeadGeneration = useCallback((leadType: string, value?: number) => {
    trackConversion({
      event_name: 'generate_lead',
      value: value || 10,
      items: [{
        item_id: leadType,
        item_name: `Lead - ${leadType}`,
        category: 'Lead Generation'
      }]
    });
  }, [trackConversion]);

  const trackEngagement = useCallback((action: string, content: string) => {
    trackEvent({
      action,
      category: 'Engagement',
      label: content,
      custom_parameters: {
        engagement_time_msec: Date.now()
      }
    });
  }, [trackEvent]);

  return {
    trackCourseEnrollment,
    trackLeadGeneration,
    trackEngagement
  };
};