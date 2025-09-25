import { useEffect } from 'react';

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (fontUrl: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.href = fontUrl;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // Preload Inter and JetBrains Mono fonts
    preloadFont('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2');
    preloadFont('https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2');

    // Optimize scroll performance
    let ticking = false;
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add scroll optimizations here if needed
          ticking = false;
        });
        ticking = true;
      }
    };

    // Debounced resize handler
    let resizeTimeout: number;
    const optimizeResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        // Trigger layout recalculations
        window.dispatchEvent(new Event('optimized-resize'));
      }, 150);
    };

    window.addEventListener('scroll', optimizeScroll, { passive: true });
    window.addEventListener('resize', optimizeResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', optimizeScroll);
      window.removeEventListener('resize', optimizeResize);
      clearTimeout(resizeTimeout);
    };
  }, []);
};

export const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -10% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
      ...options,
    });

    return () => observer.disconnect();
  }, [callback, options]);
};