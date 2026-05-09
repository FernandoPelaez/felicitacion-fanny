"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";

type BirthdayCelebrationProps = {
  onFinish?: () => void;
};

const confettiColors = [
  "#ec4899",
  "#f43f5e",
  "#fb7185",
  "#f472b6",
  "#c026d3",
  "#a855f7",
  "#facc15",
  "#38bdf8",
  "#ffffff",
];

const isSmallScreen = () => {
  if (typeof window === "undefined") return false;

  return window.innerWidth < 640;
};

export default function BirthdayCelebration({
  onFinish,
}: BirthdayCelebrationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confettiRef = useRef<ReturnType<typeof confetti.create> | null>(null);

  const [visible, setVisible] = useState(true);
  const [showCard, setShowCard] = useState(false);

  const fireBigConfetti = useCallback(() => {
    const fire = confettiRef.current;

    if (!fire) return;

    const mobile = isSmallScreen();

    fire({
      particleCount: mobile ? 55 : 120,
      spread: mobile ? 70 : 85,
      startVelocity: mobile ? 34 : 48,
      scalar: mobile ? 0.85 : 1.05,
      colors: confettiColors,
      origin: { x: 0.18, y: 0.52 },
    });

    fire({
      particleCount: mobile ? 55 : 120,
      spread: mobile ? 70 : 85,
      startVelocity: mobile ? 34 : 48,
      scalar: mobile ? 0.85 : 1.05,
      colors: confettiColors,
      origin: { x: 0.82, y: 0.52 },
    });

    fire({
      particleCount: mobile ? 80 : 170,
      spread: mobile ? 95 : 120,
      startVelocity: mobile ? 38 : 52,
      scalar: mobile ? 0.9 : 1.1,
      colors: confettiColors,
      origin: { x: 0.5, y: 0.42 },
    });
  }, []);

  const fireRainConfetti = useCallback(() => {
    const fire = confettiRef.current;

    if (!fire) return;

    const mobile = isSmallScreen();

    fire({
      particleCount: mobile ? 90 : 180,
      spread: mobile ? 130 : 170,
      startVelocity: mobile ? 24 : 34,
      gravity: 0.7,
      ticks: mobile ? 210 : 260,
      scalar: mobile ? 0.8 : 0.95,
      colors: confettiColors,
      origin: { x: 0.5, y: 0 },
    });
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    confettiRef.current = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    });

    const cardTimer = window.setTimeout(() => {
      setShowCard(true);
      fireBigConfetti();
    }, 350);

    const secondBurstTimer = window.setTimeout(() => {
      fireBigConfetti();
    }, 1300);

    const rainTimer = window.setTimeout(() => {
      fireRainConfetti();
    }, 2400);

    const finalBurstTimer = window.setTimeout(() => {
      fireBigConfetti();
    }, 3600);

    const hideCardTimer = window.setTimeout(() => {
      setShowCard(false);
    }, 5200);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, 6100);

    return () => {
      window.clearTimeout(cardTimer);
      window.clearTimeout(secondBurstTimer);
      window.clearTimeout(rainTimer);
      window.clearTimeout(finalBurstTimer);
      window.clearTimeout(hideCardTimer);
      window.clearTimeout(hideTimer);

      confettiRef.current?.reset();
    };
  }, [fireBigConfetti, fireRainConfetti, onFinish]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-pink-50/75 via-pink-50/50 to-pink-100/60 backdrop-blur-[2px]" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-20 block h-full w-full"
      />

      <AnimatePresence>
        {showCard && (
          <motion.div
            key="card"
            initial={{
              opacity: 0,
              scale: 0.88,
              y: 24,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: -16,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-1/2 z-30 w-[calc(100%-2rem)] max-w-[300px] -translate-x-1/2 -translate-y-1/2 px-0 sm:max-w-[320px]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-pink-200/70 bg-white/95 px-4 py-4 text-center shadow-2xl shadow-pink-200/40 backdrop-blur-2xl sm:px-5">
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -15,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.12,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 shadow-md shadow-pink-200/30"
              >
                <span className="text-2xl">🎂</span>
              </motion.div>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.35,
                }}
                className="text-[8px] font-black uppercase tracking-widest text-rose-400"
              >
                Sorpresa desbloqueada
              </motion.p>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.28,
                  duration: 0.35,
                }}
                className="mt-1.5 text-lg font-black tracking-tight text-gray-800"
              >
                Feliz cumpleaños,{" "}
                <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
                  Fanny
                </span>{" "}
                🎀
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.35,
                }}
                className="mt-1 text-[10px] font-semibold leading-4 text-gray-400"
              >
                Ahora sí, que empiece lo bonito.
              </motion.p>

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  delay: 0.42,
                  duration: 4.1,
                  ease: "linear",
                }}
                style={{
                  originX: 0,
                }}
                className="mt-3 h-0.5 w-full rounded-full bg-gradient-to-r from-rose-300 via-pink-400 to-fuchsia-300"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
