"use client";

import { motion, type Variants } from "framer-motion";

const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const wishes = [
  {
    icon: "🌷",
    title: "Que lleguen días ligeros",
    text: "De esos donde todo fluye sin pesar tanto y puedes respirar con calma.",
  },
  {
    icon: "💫",
    title: "Que te sorprenda lo bonito",
    text: "No por grande, sino por aparecer justo cuando menos lo esperas.",
  },
  {
    icon: "🦋",
    title: "Que no pierdas tu esencia",
    text: "Que sigas siendo tú, con esa forma tan especial de iluminar lo simple.",
  },
  {
    icon: "🌙",
    title: "Que tengas noches tranquilas",
    text: "De esas donde el corazón descansa y la mente deja de correr tantito.",
  },
  {
    icon: "👑",
    title: "Que te elijas más",
    text: "Que recuerdes ponerte primero cuando algo no te dé paz ni alegría.",
  },
  {
    icon: "🎀",
    title: "Que guardes recuerdos lindos",
    text: "Pequeñitos, sinceros y de esos que después dan ganas de volver a sonreír.",
  },
];

export default function BirthdayWishesPanel() {
  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      className="relative min-w-0 w-full max-w-full overflow-hidden rounded-xl border border-pink-100/70 bg-white/90 p-2.5 shadow-md shadow-pink-100/20 sm:p-3"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-14 h-36 w-36 rounded-full bg-rose-200/25 blur-3xl" />

      <motion.div
        variants={itemVariants}
        className="relative min-w-0 w-full max-w-full overflow-hidden rounded-2xl border border-pink-100/80 bg-gradient-to-br from-white via-pink-50/40 to-white p-3 shadow-sm shadow-pink-100/30 sm:p-4"
      >
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-lg shadow-sm shadow-pink-100 sm:h-11 sm:w-11 sm:text-xl">
            ✨
          </div>

          <div className="min-w-0 flex-1">
            <p className="break-words text-[8px] font-black uppercase tracking-[0.22em] text-rose-400">
              Deseos para ti
            </p>

            <h2 className="mt-1 break-words text-base font-black leading-snug text-gray-800 sm:text-lg">
              Que este año te trate bonito en formas que todavía no imaginas.
            </h2>

            <p className="mt-2 max-w-2xl break-words text-[11px] leading-5 text-slate-500 sm:text-[12px]">
              Que no falten razones para ilusionarte, lugares donde sentirte en
              casa y momentos que se queden contigo por lo especiales que fueron.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="relative mt-3 grid min-w-0 w-full max-w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
      >
        {wishes.map((wish) => (
          <motion.div
            key={wish.title}
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.01 }}
            transition={{ duration: 0.18 }}
            className="min-w-0 rounded-xl border border-pink-100/80 bg-white/85 p-3 shadow-sm shadow-pink-100/30"
          >
            <div className="mb-1.5 text-base">{wish.icon}</div>

            <h3 className="break-words text-[10px] font-black text-gray-800">
              {wish.title}
            </h3>

            <p className="mt-1 break-words text-[9px] leading-4 text-slate-500">
              {wish.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}