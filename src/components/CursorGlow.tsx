import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springConfig = { stiffness: 140, damping: 28, mass: 0.5 };
const secondaryConfig = { stiffness: 80, damping: 35, mass: 0.8 };
const tertiaryConfig = { stiffness: 60, damping: 40, mass: 1.2 };

const CursorGlow = () => {
  const [isEnabled, setEnabled] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  // Primary glow
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  
  // Secondary glow
  const secondaryX = useMotionValue(-300);
  const secondaryY = useMotionValue(-300);
  
  // Tertiary ambient glow
  const tertiaryX = useMotionValue(-300);
  const tertiaryY = useMotionValue(-300);

  const animatedX = useSpring(x, springConfig);
  const animatedY = useSpring(y, springConfig);
  const animatedSecondaryX = useSpring(secondaryX, secondaryConfig);
  const animatedSecondaryY = useSpring(secondaryY, secondaryConfig);
  const animatedTertiaryX = useSpring(tertiaryX, tertiaryConfig);
  const animatedTertiaryY = useSpring(tertiaryY, tertiaryConfig);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion.matches || isTouch) {
      setEnabled(false);
      return;
    }

    const handleMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      
      // Primary glow (closest to cursor)
      x.set(clientX - 140);
      y.set(clientY - 140);
      
      // Secondary glow (medium distance)
      secondaryX.set(clientX - 100);
      secondaryY.set(clientY - 100);
      
      // Tertiary ambient glow (furthest, most subtle)
      tertiaryX.set(clientX - 200);
      tertiaryY.set(clientY - 200);
    };

    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.matches('button, a, [role="button"], .glass-button, .hover-lift')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [x, y, secondaryX, secondaryY, tertiaryX, tertiaryY]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      {/* Primary cursor glow - most prominent */}
      <motion.div 
        className={`cursor-glow-primary ${isHovering ? 'cursor-glow-active' : ''}`}
        style={{ translateX: animatedX, translateY: animatedY }} 
        aria-hidden 
      />
      
      {/* Secondary glow - medium prominence */}
      <motion.div
        className={`cursor-glow-secondary ${isHovering ? 'cursor-glow-active' : ''}`}
        style={{ translateX: animatedSecondaryX, translateY: animatedSecondaryY }}
        aria-hidden
      />
      
      {/* Tertiary ambient glow - most subtle */}
      <motion.div
        className={`cursor-glow-tertiary ${isHovering ? 'cursor-glow-active' : ''}`}
        style={{ translateX: animatedTertiaryX, translateY: animatedTertiaryY }}
        aria-hidden
      />
    </>
  );
};

export default CursorGlow;
