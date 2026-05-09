import type { Variants } from "framer-motion";

export const loginCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.94,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.09,
    },
  },
  exit: {
    opacity: 0,
    y: -24,
    scale: 0.96,
    filter: "blur(8px)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const loginItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const floatingDetailVariants: Variants = {
  animate: {
    y: [0, -18, 4, -10, 0],
    rotate: [0, 8, -5, 3, 0],
    scale: [1, 1.15, 0.95, 1.08, 1],
    opacity: [0.3, 1, 0.6, 0.95, 0.3],
    transition: {
      duration: 5.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const ribbonVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -15,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
      delay: 0.2,
    },
  },
  pulse: {
    scale: [1, 1.08, 1],
    rotate: [0, -4, 4, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.2,
    },
  },
};

export const shimmerVariants: Variants = {
  animate: {
    x: ["-100%", "200%"],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "easeInOut",
    },
  },
};
