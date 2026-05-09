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
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: "easeOut",
    },
  },
};

const wishes = [
  {
    icon: "🌷",
    title: "Un inicio bonito",
    text: "Para que este día empiece con una sonrisa tuya.",
  },
  {
    icon: "💗",
    title: "Algo muy tuyo",
    text: "Un detalle sencillo, pero pensado con el corazón.",
  },
  {
    icon: "🎀",
    title: "Una pequeña sorpresa",
    text: "Porque quería regalarte algo diferente esta vez.",
  },
];

export default function BirthdayLetterPanel() {
  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      className="relative min-w-0 w-full max-w-full overflow-hidden rounded-xl border border-pink-100/70 bg-white/90 p-3 shadow-md shadow-pink-100/20"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-pink-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-14 h-36 w-36 rounded-full bg-rose-200/20 blur-3xl" />

      <motion.div
        variants={itemVariants}
        className="relative min-w-0 w-full max-w-full overflow-hidden rounded-2xl border border-pink-100/80 bg-gradient-to-br from-white via-pink-50/35 to-white p-3 shadow-sm shadow-pink-100/30 sm:p-4"
      >
        <div className="mb-2.5 flex min-w-0 items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-base shadow-sm shadow-pink-100">
            💌
          </div>

          <div className="min-w-0">
            <p className="break-words text-[8px] font-black uppercase tracking-[0.2em] text-rose-400">
              Desde mi corazón
            </p>
          </div>
        </div>

        <div className="min-w-0 space-y-2 text-[11px] leading-5 text-slate-600 sm:text-[12px] sm:leading-6">
          <p>
            Buenos días, mi nenita hermosa. Hoy quería que despertaras con algo
            distinto, algo que no fuera solo un mensaje rápido, sino un detalle
            hecho con calma y con muchas ganas de sacarte una sonrisa.
          </p>

          <p>
            Mientras preparaba esto, me puse a pensar en todo lo bonito que hay
            en ti: tu forma de ser, tu manera de hacer especiales los momentos
            simples y esa luz tuya que se nota sin que tengas que intentarlo.
          </p>

          <p>
            Por eso quise guardar aquí una parte de lo que siento, no con algo
            exagerado, sino con palabras, música y recuerdos que hablaran por mí
            poquito a poquito.
          </p>

          <p className="font-bold text-gray-800">
            Ojalá al ver esto sientas lo importante que eres para mí y lo mucho
            que me alegra poder hacerte este detalle en tu día. 🎀
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="relative mt-2.5 grid min-w-0 w-full max-w-full gap-2 sm:grid-cols-3"
      >
        {wishes.map((wish) => (
          <motion.div
            key={wish.title}
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.01 }}
            transition={{ duration: 0.18 }}
            className="min-w-0 rounded-xl border border-pink-100/80 bg-white/85 p-2.5 shadow-sm shadow-pink-100/30"
          >
            <div className="mb-1 text-base">{wish.icon}</div>

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
