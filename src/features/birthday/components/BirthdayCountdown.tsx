"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import BirthdayFireworks from "@/features/birthday/components/dashboard/BirthdayFireworks";
import { birthdayCountdownData } from "@/features/birthday/data/birthday.data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.3, rotate: -12, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 1.6,
    rotate: 8,
    filter: "blur(6px)",
    transition: { duration: 0.38, ease: "easeIn" },
  },
};

const orbitVariants: Variants = {
  animate: {
    rotate: 360,
    transition: { duration: 12, repeat: Infinity, ease: "linear" },
  },
};

const orbitReverseVariants: Variants = {
  animate: {
    rotate: -360,
    transition: { duration: 18, repeat: Infinity, ease: "linear" },
  },
};

const NUMBER_LABELS: Record<number, string> = {
  10: "Respira tantito...",
  9: "Ya casi, mi amor...",
  8: "Casi casi...",
  7: "Sigue esperando...",
  6: "Ya merito...",
  5: "A la mitad...",
  4: "Un momento más...",
  3: "Falta poquito...",
  2: "Ya casi ya...",
  1: "¡Ya casi!",
};

export default function BirthdayCountdown() {
  const router = useRouter();
  const [count, setCount] = useState(10);
  const [phase, setPhase] = useState<"counting" | "ready">("counting");

  const { route, content } = birthdayCountdownData;

  useEffect(() => {
    if (phase === "ready") {
      const redirectTimer = window.setTimeout(() => {
        router.replace(route);
      }, 1200);

      return () => window.clearTimeout(redirectTimer);
    }

    const timer = window.setTimeout(() => {
      if (count <= 1) {
        setCount(0);
        setPhase("ready");
        return;
      }

      setCount((currentCount) => currentCount - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [count, phase, route, router]);

  const progress = phase === "ready" ? 100 : ((10 - count) / 10) * 100;

  return (
    <div className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden px-4 py-8">
      <BirthdayFireworks active />

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[min(460px,90vw)] w-[min(460px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-soft/20 blur-3xl" />
        <div className="absolute -left-28 top-1/4 h-56 w-56 rounded-full bg-gold/25 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute -right-28 bottom-1/4 h-56 w-56 rounded-full bg-primary/15 blur-3xl sm:h-80 sm:w-80" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[min(440px,82vw)] w-[min(440px,82vw)] -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: 0.07 }}
        >
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <div
              key={deg}
              className="absolute left-1/2 top-0 h-full w-[1px] bg-primary-dark"
              style={{
                transform: `rotate(${deg}deg)`,
                transformOrigin: "50% 50%",
              }}
            />
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full max-w-[360px] flex-col items-center sm:max-w-md"
      >
        <motion.div variants={itemVariants} className="mb-7 text-center sm:mb-8">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary-soft/50 bg-white/65 px-4 py-2 backdrop-blur-sm sm:px-5">
            <motion.span
              animate={{ rotate: [0, 15, -10, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-base"
            >
              🎀
            </motion.span>

            <span className="text-[9px] font-black uppercase tracking-[0.24em] text-primary-dark sm:text-[11px] sm:tracking-[0.28em]">
              {content.badge}
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative mb-9 flex items-center justify-center sm:mb-10"
        >
          <motion.div
            variants={orbitVariants}
            animate="animate"
            className="absolute h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64"
          >
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <motion.div
                key={deg}
                className="absolute left-1/2 top-0 text-base sm:text-lg"
                style={{
                  transform: `translateX(-50%) rotate(${deg}deg) translateY(clamp(-112px, -24vw, -88px)) rotate(-${deg}deg)`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              >
                {["💗", "✦", "🌸", "✨", "♡"][i]}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={orbitReverseVariants}
            animate="animate"
            className="absolute h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40"
          >
            {[0, 90, 180, 270].map((deg, i) => (
              <motion.div
                key={deg}
                className="absolute left-1/2 top-0 text-xs"
                style={{
                  transform: `translateX(-50%) rotate(${deg}deg) translateY(clamp(-68px, -16vw, -54px)) rotate(-${deg}deg)`,
                }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: "easeInOut",
                }}
              >
                ·
              </motion.div>
            ))}
          </motion.div>

          <div className="relative flex h-30 w-30 items-center justify-center rounded-full bg-white/75 shadow-2xl shadow-primary/25 ring-1 ring-primary-soft/40 backdrop-blur-xl sm:h-36 sm:w-36">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-soft/30 via-transparent to-primary/20" />

            <AnimatePresence mode="wait">
              {phase === "counting" ? (
                <motion.div
                  key={count}
                  variants={numberVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative flex flex-col items-center"
                >
                  <span className="text-6xl font-black leading-none text-primary-dark sm:text-7xl">
                    {count}
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="ready"
                  variants={numberVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative flex flex-col items-center gap-1"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: 2 }}
                    className="text-4xl"
                  >
                    💗
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={phase === "ready" ? "ready" : count}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-dark/70 sm:text-xs sm:tracking-[0.22em]"
              aria-live="polite"
            >
              {phase === "ready"
                ? content.finalText
                : NUMBER_LABELS[count] ?? content.finalText}
            </motion.p>
          </AnimatePresence>

          <h1 className="mt-3 text-balance text-[1.65rem] font-black tracking-tight text-foreground sm:text-3xl">
            {content.title}
          </h1>

          <p className="mx-auto mt-2 max-w-[280px] text-pretty text-xs leading-5 text-foreground-muted sm:max-w-xs sm:text-sm sm:leading-6">
            {content.subtitle}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 w-full max-w-[260px]">
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-primary-soft/20">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary-dark via-primary to-primary-soft"
            />

            <motion.div
              animate={{ x: ["0%", "200%", "0%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/3 rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
          </div>

          <div className="mt-2 flex justify-between">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((dot) => (
              <motion.div
                key={dot}
                animate={{
                  scale: count === 10 - dot + 1 ? [1, 1.4, 1] : 1,
                  backgroundColor:
                    phase === "ready" || 10 - dot + 1 >= count
                      ? "rgb(232, 69, 124)"
                      : "rgba(232, 69, 124, 0.2)",
                }}
                transition={{ duration: 0.4 }}
                className="h-1.5 w-1.5 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}