import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Call optional error handler
    this.props.onError?.(error, errorInfo);
    
    // Report to error tracking service in production
    if (import.meta.env.PROD) {
      // Analytics or error reporting service would go here
      this.reportError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Implementation for error reporting service
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Send to analytics/monitoring service
    console.error('Error Report:', errorReport);
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorFallback 
          error={this.state.error} 
          onRetry={this.handleRetry}
        />
      );
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error?: Error;
  onRetry: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, onRetry }) => {
  const isDev = import.meta.env.DEV;

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-surface rounded-[3rem] border border-red-500/20 p-12 max-w-2xl w-full text-center space-y-8"
      >
        <div className="space-y-4">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
            <svg 
              className="w-10 h-10 text-red-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
              />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-white">
            Something went wrong
          </h2>
          
          <p className="text-white/70 text-lg leading-relaxed">
            We encountered an unexpected error. This has been logged and our team will investigate.
          </p>
        </div>

        {isDev && error && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6 text-left">
            <h3 className="text-red-400 font-semibold mb-3 text-lg">
              Development Error Details:
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-white/90">
                <span className="font-medium text-red-300">Error:</span> {error.message}
              </p>
              {error.stack && (
                <pre className="text-white/70 overflow-x-auto text-xs bg-black/30 p-3 rounded-lg">
                  {error.stack}
                </pre>
              )}
            </div>
          </div>
        )}

        <div className="flex gap-4 justify-center">
          <motion.button
            onClick={onRetry}
            className="btn btn-primary px-6 py-3 rounded-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Try Again
          </motion.button>
          
          <motion.button
            onClick={() => window.location.reload()}
            className="btn btn-secondary px-6 py-3 rounded-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Reload Page
          </motion.button>
        </div>

        <div className="flex justify-center">
          <a
            href="/"
            className="text-purple-400 hover:text-purple-300 underline transition-colors"
          >
            Return to Home
          </a>
        </div>
      </motion.div>
    </div>
  );
};

// Async boundary for handling promise rejections in components
export const AsyncBoundary: React.FC<{ children: ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      // Could trigger error boundary or show notification
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return <>{children}</>;
};

// HOC for wrapping components with error boundary
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorFallback?: ReactNode
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary fallback={errorFallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}