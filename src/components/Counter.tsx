import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
};

const Counter = ({ value, duration = 1.6, prefix = "", suffix = "" }: CounterProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [isAnimated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.35 }
    );

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimated]);

  useEffect(() => {
    if (!isAnimated || !spanRef.current) return;

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (!spanRef.current) return;
        spanRef.current.textContent = prefix + Math.round(latest).toString() + suffix;
      },
    });

    return () => controls.stop();
  }, [isAnimated, value, duration, prefix, suffix]);

  return <span ref={spanRef} className="text-4xl font-semibold text-white" />;
};

export default Counter;
