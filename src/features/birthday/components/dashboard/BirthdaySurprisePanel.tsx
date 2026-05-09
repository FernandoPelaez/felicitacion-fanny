"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

type SurpriseStep = "fake" | "second" | "final";

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const heartVariants: Variants = {
  animate: {
    scale: [1, 1.08, 1],
    rotate: [0, -2, 2, 0],
    transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
  },
};

const finalCards = [
  {
    icon: "💗",
    title: "Un momento especial",
    text: "Hecho para que esta parte se sintiera diferente y bonita.",
  },
  {
    icon: "🎁",
    title: "Una pausa para ti",
    text: "Solo respira, mira el detalle y quédate con lo lindo del momento.",
  },
  {
    icon: "✨",
    title: "Con cariño",
    text: "Porque esto no salió rápido, salió pensado para ti.",
  },
];

function AnimatedCake() {
  return (
    <div className="relative flex w-full max-w-[210px] items-center justify-center sm:max-w-[240px]">
      <svg
        viewBox="0 0 200 220"
        className="h-auto w-full drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="100" cy="198" rx="72" ry="10" fill="#f9a8d4" opacity="0.4" />
        <rect x="28" y="140" width="144" height="52" rx="14" fill="#fce7f3" />
        <rect x="28" y="140" width="144" height="14" rx="7" fill="#fbcfe8" />

        {[50, 78, 106, 134].map((cx) => (
          <circle key={cx} cx={cx} cy="172" r="4" fill="#f472b6" opacity="0.7" />
        ))}

        <path
          d="M28 155 Q50 148 72 155 Q94 162 116 155 Q138 148 160 155 Q172 158 172 158"
          stroke="#f9a8d4"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        <rect x="48" y="92" width="104" height="52" rx="12" fill="#fdf2f8" />
        <rect x="48" y="92" width="104" height="13" rx="6.5" fill="#fbcfe8" />

        {[68, 100, 132].map((cx) => (
          <circle key={cx} cx={cx} cy="122" r="3.5" fill="#ec4899" opacity="0.6" />
        ))}

        <path
          d="M48 106 Q68 99 88 106 Q108 113 128 106 Q148 99 152 103"
          stroke="#f9a8d4"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        <ellipse cx="100" cy="92" rx="52" ry="9" fill="#fff1f5" />

        {[
          { x: 54, h: 14 },
          { x: 66, h: 10 },
          { x: 80, h: 16 },
          { x: 96, h: 11 },
          { x: 112, h: 15 },
          { x: 126, h: 9 },
          { x: 138, h: 13 },
        ].map((d) => (
          <motion.rect
            key={d.x}
            x={d.x - 4}
            y={92}
            width={8}
            height={d.h}
            rx={4}
            fill="#fce7f3"
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              delay: 0.4 + d.x * 0.005,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        <motion.rect
          x="72"
          y="58"
          width="10"
          height="30"
          rx="5"
          fill="#f9a8d4"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          style={{ transformOrigin: "77px 88px" }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.rect
          x="95"
          y="50"
          width="10"
          height="38"
          rx="5"
          fill="#c084fc"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          style={{ transformOrigin: "100px 88px" }}
          transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.rect
          x="118"
          y="60"
          width="10"
          height="28"
          rx="5"
          fill="#fda4af"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          style={{ transformOrigin: "123px 88px" }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.ellipse
          cx="77"
          cy="55"
          rx="5"
          ry="7"
          fill="#fbbf24"
          animate={{
            scaleY: [1, 1.2, 0.85, 1.15, 1],
            scaleX: [1, 0.85, 1.1, 0.9, 1],
            rotate: [0, 3, -3, 2, 0],
          }}
          style={{ transformOrigin: "77px 58px" }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.ellipse
          cx="77"
          cy="54"
          rx="2.5"
          ry="4"
          fill="#fef08a"
          animate={{ scaleY: [1, 1.3, 0.8, 1.2, 1] }}
          style={{ transformOrigin: "77px 56px" }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        />

        <motion.ellipse
          cx="100"
          cy="47"
          rx="5"
          ry="7"
          fill="#f97316"
          animate={{
            scaleY: [1, 1.25, 0.8, 1.2, 1],
            scaleX: [1, 0.8, 1.1, 0.85, 1],
            rotate: [0, -3, 3, -2, 0],
          }}
          style={{ transformOrigin: "100px 50px" }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.15,
          }}
        />

        <motion.ellipse
          cx="100"
          cy="46"
          rx="2.5"
          ry="4"
          fill="#fef08a"
          animate={{ scaleY: [1, 1.3, 0.75, 1.25, 1] }}
          style={{ transformOrigin: "100px 48px" }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />

        <motion.ellipse
          cx="123"
          cy="57"
          rx="5"
          ry="7"
          fill="#fbbf24"
          animate={{
            scaleY: [1, 1.15, 0.9, 1.1, 1],
            scaleX: [1, 0.9, 1.05, 0.95, 1],
            rotate: [0, 2, -2, 1, 0],
          }}
          style={{ transformOrigin: "123px 60px" }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.05,
          }}
        />

        <motion.ellipse
          cx="123"
          cy="56"
          rx="2.5"
          ry="4"
          fill="#fef08a"
          animate={{ scaleY: [1, 1.2, 0.85, 1.15, 1] }}
          style={{ transformOrigin: "123px 58px" }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.12,
          }}
        />

        {[
          { cx: 40, cy: 80 },
          { cx: 162, cy: 75 },
          { cx: 55, cy: 45 },
          { cx: 148, cy: 50 },
          { cx: 100, cy: 25 },
        ].map((s, i) => (
          <motion.circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r="3"
            fill="#f472b6"
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function Countdown({ seconds }: { seconds: number }) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    if (remaining <= 0) return;

    const t = window.setTimeout(() => setRemaining((r) => r - 1), 1000);

    return () => window.clearTimeout(t);
  }, [remaining]);

  return (
    <motion.span
      key={remaining}
      initial={{ scale: 1.4, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="inline-block text-rose-400 font-black"
    >
      {remaining}s
    </motion.span>
  );
}

export default function BirthdaySurprisePanel() {
  const [step, setStep] = useState<SurpriseStep>("fake");

  useEffect(() => {
    const t1 = window.setTimeout(() => setStep("second"), 7000);
    const t2 = window.setTimeout(() => setStep("final"), 14000);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <div className="relative min-w-0 w-full max-w-full overflow-hidden rounded-xl border border-pink-100/70 bg-white/90 p-2.5 shadow-md shadow-pink-100/20 sm:p-3">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-14 h-36 w-36 rounded-full bg-rose-200/20 blur-3xl" />

      <AnimatePresence mode="wait">
        {step === "fake" && (
          <motion.div
            key="fake"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative flex min-h-[190px] w-full max-w-full flex-col items-center justify-center rounded-2xl border border-pink-100/80 bg-gradient-to-br from-white via-pink-50/40 to-white p-4 text-center sm:min-h-[200px] sm:p-5"
          >
            <motion.div
              variants={heartVariants}
              animate="animate"
              className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-2xl shadow-sm"
            >
              🤭
            </motion.div>

            <p className="text-[8px] font-black uppercase tracking-widest text-rose-400">
              Espera tantito
            </p>

            <h2 className="mt-2 text-lg font-black text-gray-800">
              Te mentí...
            </h2>

            <p className="mt-2 max-w-sm text-[12px] leading-5 text-slate-500">
              No hay sorpresa. Solo quería hacerte esperar unos segundos para
              darle más drama al asunto.
            </p>

            <p className="mt-3 text-[10px] font-bold text-rose-400">
              <Countdown seconds={7} />
            </p>
          </motion.div>
        )}

        {step === "second" && (
          <motion.div
            key="second"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative flex min-h-[190px] w-full max-w-full flex-col items-center justify-center rounded-2xl border border-pink-100/80 bg-gradient-to-br from-white via-rose-50/50 to-white p-4 text-center sm:min-h-[200px] sm:p-5"
          >
            <motion.div
              variants={heartVariants}
              animate="animate"
              className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-2xl shadow-sm"
            >
              🎀
            </motion.div>

            <p className="text-[8px] font-black uppercase tracking-widest text-rose-400">
              Ah no te creas
            </p>

            <h2 className="mt-2 text-lg font-black text-gray-800">
              Sí sí hay sorpresa.
            </h2>

            <p className="mt-2 max-w-sm text-[12px] leading-5 text-slate-500">
              Cierra los ojos un momento. No hagas trampa, porque esta parte
              está hecha para que se sienta más bonita.
            </p>

            <p className="mt-3 text-[10px] font-bold text-rose-400">
              Preparando el pastel... <Countdown seconds={7} />
            </p>
          </motion.div>
        )}

        {step === "final" && (
          <motion.div
            key="final"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative min-w-0 w-full max-w-full overflow-hidden rounded-2xl border border-pink-100/80 bg-gradient-to-br from-white via-pink-50/30 to-white p-3 sm:p-4"
          >
            <div className="flex min-w-0 w-full max-w-full flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex w-full shrink-0 justify-center sm:w-auto"
              >
                <AnimatedCake />
              </motion.div>

              <div className="min-w-0 w-full text-center sm:text-left">
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.38 }}
                  className="text-[11px] leading-5 text-slate-500 sm:text-[12px]"
                >
                  Antes de apagar las velitas, quédate un momentito aquí y pide
                  un deseo de esos que se sienten en el corazón, aunque nadie
                  más lo escuche.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.38 }}
                  className="mt-2 text-[11px] leading-5 text-slate-500 sm:text-[12px]"
                >
                  Que sea algo que te ilusione, algo que te dé paz o algo que te
                  haga sonreír cada vez que lo imagines.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.54, duration: 0.38 }}
                  className="mt-3 text-[12px] font-black leading-5 text-gray-800"
                >
                  Que este detalle se quede contigo como un recuerdo lindo. 💗
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.4 }}
              className="mt-4 grid min-w-0 w-full max-w-full gap-2 sm:grid-cols-3"
            >
              {finalCards.map((card) => (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="min-w-0 rounded-xl border border-pink-100/80 bg-white/85 p-3 shadow-sm"
                >
                  <div className="mb-1.5 text-base">{card.icon}</div>
                  <h3 className="break-words text-[10px] font-black text-gray-800">
                    {card.title}
                  </h3>
                  <p className="mt-1 break-words text-[9px] leading-4 text-slate-500">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
