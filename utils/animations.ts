import { Variants } from 'framer-motion';

// Transition configurations
export const TRANSITION = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Custom cubic-bezier for "luxurious" feel
};

// Container stagger
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Item fade up
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: TRANSITION 
  },
};

// Section reveal (used with whileInView)
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { ...TRANSITION, duration: 1 } 
  },
};

// Project Item Hover
export const projectHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeInOut" }
  },
};

// Line Hover (Underline expansion)
export const underlineHover: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: { 
    scaleX: 1, 
    originX: 0,
    transition: { duration: 0.3, ease: "circOut" }
  },
};