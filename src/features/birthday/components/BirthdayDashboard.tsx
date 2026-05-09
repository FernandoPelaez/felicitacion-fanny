"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import BirthdaySpotifyPlayer from "@/features/birthday/components/BirthdaySpotifyPlayer";
import BirthdayCelebration from "@/features/birthday/components/dashboard/BirthdayCelebration";
import BirthdayLetterPanel from "@/features/birthday/components/dashboard/BirthdayLetterPanel";
import BirthdayMemoriesPanel from "@/features/birthday/components/dashboard/BirthdayMemoriesPanel";
import BirthdaySurprisePanel from "@/features/birthday/components/dashboard/BirthdaySurprisePanel";
import BirthdayWishesPanel from "@/features/birthday/components/dashboard/BirthdayWishesPanel";

type BirthdayDashboardTab =
  | "carta"
  | "cancion"
  | "recuerdos"
  | "sorpresa"
  | "deseos";

type DashboardOption = {
  id: BirthdayDashboardTab;
  icon: string;
  label: string;
  description: string;
};

const options: DashboardOption[] = [
  {
    id: "carta",
    icon: "💌",
    label: "Carta",
    description: "Palabras desde el corazón",
  },
  {
    id: "cancion",
    icon: "🎶",
    label: "Canción",
    description: "Una melodía especial",
  },
  {
    id: "recuerdos",
    icon: "📸",
    label: "Momentos",
    description: "Instantes bonitos",
  },
  {
    id: "sorpresa",
    icon: "🎁",
    label: "Sorpresa",
    description: "El cierre especial",
  },
  {
    id: "deseos",
    icon: "✨",
    label: "Deseos",
    description: "Para tus 22",
  },
];

const panelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.99,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.99,
    transition: {
      duration: 0.18,
      ease: "easeInOut",
    },
  },
};

export default function BirthdayDashboard() {
  const [activeTab, setActiveTab] = useState<BirthdayDashboardTab>("carta");
  const [showSongPlayer, setShowSongPlayer] = useState(false);

  const activeOption = useMemo(
    () => options.find((option) => option.id === activeTab),
    [activeTab],
  );

  return (
    <div className="mx-auto flex min-w-0 w-full max-w-5xl flex-col gap-2.5 overflow-x-hidden px-0 py-3 sm:px-4 sm:py-4">
      <BirthdayCelebration />

      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-full overflow-hidden rounded-2xl border border-pink-200/70 bg-white/85 px-4 py-3 shadow-lg shadow-pink-100/30 backdrop-blur-xl sm:px-5 sm:py-4"
      >
        <div className="pointer-events-none absolute -top-10 left-1/3 h-32 w-32 rounded-full bg-pink-200/25 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-8 -right-4 h-24 w-24 rounded-full bg-rose-200/20 blur-2xl" />

        <div className="relative z-10 flex min-w-0 items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <span className="inline-flex max-w-full items-center gap-1 rounded-full border border-pink-300/50 bg-pink-50/80 px-2.5 py-0.5 text-[8px] font-black uppercase tracking-widest text-rose-500 sm:text-[9px]">
              💝 Para mi niña hermosa
            </span>

            <h1 className="mt-1.5 break-words text-[1.35rem] font-black leading-tight tracking-tight text-gray-800 sm:text-2xl lg:text-3xl">
              Feliz cumpleaños,{" "}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
                Fanny
              </span>{" "}
              🎀
            </h1>

            <p className="mt-0.5 max-w-full text-[11px] leading-5 text-gray-400 sm:text-xs">
              Hice este detalle pensando en ti, en tu sonrisa y en lo especial
              que eres para mí.
            </p>
          </div>

          <div className="hidden shrink-0 rounded-xl border border-pink-100 bg-white/90 px-4 py-2 text-center shadow-md shadow-pink-100/40 sm:block">
            <p className="text-xl">🎂</p>
            <p className="mt-0.5 text-[8px] font-black uppercase tracking-[0.18em] text-rose-400">
              Felices 22
            </p>
          </div>
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {showSongPlayer && (
          <motion.div
            key="spotify-player"
            initial={{ opacity: 0, y: -8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 w-full max-w-full overflow-hidden"
          >
            <BirthdaySpotifyPlayer />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.38 }}
        className="grid min-w-0 w-full max-w-full items-start gap-2.5 overflow-hidden lg:grid-cols-[180px_minmax(0,1fr)]"
      >
        <aside className="min-w-0 w-full max-w-full self-start overflow-hidden rounded-2xl border border-pink-100/80 bg-white/80 p-2 shadow-lg shadow-pink-100/20 backdrop-blur-xl">
          <div className="px-2 pb-2 pt-1">
            <p className="text-[8px] font-black uppercase tracking-[0.22em] text-rose-400">
              Opciones
            </p>
            <p className="text-[9px] font-semibold text-gray-400">
              Elige una sección
            </p>
          </div>

          <div className="flex max-w-full gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {options.map((option, index) => {
              const isActive = activeTab === option.id;

              return (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                  type="button"
                  onClick={() => setActiveTab(option.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className={[
                    "relative flex min-w-[138px] shrink-0 items-center gap-2 rounded-xl border p-2 text-left transition-all duration-200 lg:min-w-0 lg:shrink",
                    isActive
                      ? "border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50 shadow-sm shadow-pink-100/40"
                      : "border-transparent bg-white/60 hover:border-pink-100 hover:bg-pink-50/40",
                  ].join(" ")}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-rose-400 to-pink-400"
                    />
                  )}

                  <span
                    className={[
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm transition-all duration-200",
                      isActive ? "bg-pink-100/80 shadow-sm" : "bg-gray-50",
                    ].join(" ")}
                  >
                    {option.icon}
                  </span>

                  <span className="min-w-0">
                    <span
                      className={[
                        "block text-[11px] font-black transition-colors duration-150",
                        isActive ? "text-rose-500" : "text-gray-700",
                      ].join(" ")}
                    >
                      {option.label}
                    </span>

                    <span className="block truncate text-[9px] font-semibold text-gray-400">
                      {option.description}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </aside>

        <div className="min-w-0 w-full max-w-full overflow-hidden rounded-2xl border border-pink-100/80 bg-white/70 p-2.5 shadow-lg shadow-pink-100/20 backdrop-blur-xl">
          <div className="mb-2.5 flex min-w-0 w-full items-center gap-2 rounded-xl border border-pink-100/60 bg-white/80 px-2.5 py-1.5 shadow-sm">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-100 to-rose-100 text-sm shadow-sm">
              {activeOption?.icon}
            </span>

            <div className="min-w-0">
              <p className="truncate text-[8px] font-black uppercase tracking-[0.2em] text-rose-400">
                {activeOption?.label}
              </p>
              <p className="truncate text-[9px] font-semibold text-gray-400">
                {activeOption?.description}
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "carta" ? (
              <motion.div
                key="carta-panel"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="min-w-0 w-full max-w-full overflow-hidden"
              >
                <BirthdayLetterPanel />
              </motion.div>
            ) : activeTab === "cancion" ? (
              <motion.div
                key="cancion-panel"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative min-w-0 w-full max-w-full overflow-hidden rounded-xl border border-pink-100/60 bg-white/90 p-4 shadow-md shadow-pink-100/20"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-200/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-14 h-36 w-36 rounded-full bg-rose-200/20 blur-3xl" />

                <div className="relative min-w-0">
                  <h2 className="text-base font-black leading-snug tracking-tight text-gray-800 sm:text-lg">
                    Esta canción me recordó a ti.
                  </h2>

                  <p className="mt-1.5 max-w-2xl text-[11px] leading-5 text-gray-500 sm:text-xs">
                    Esta canción habla de alguien que siente algo grande pero no
                    sabe muy bien cómo decirlo. La elegí porque a veces hay
                    cosas que se expresan mejor con música que con palabras.
                    Espero te guste.
                  </p>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={() => setShowSongPlayer(true)}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-pink-400 px-4 py-2 text-[11px] font-black text-white shadow-md shadow-pink-200/60 transition hover:scale-[1.01] active:scale-95 sm:w-auto"
                    >
                      {showSongPlayer
                        ? "La canción ya está arriba 🎶"
                        : "Mostrar canción arriba 🎶"}
                    </button>

                    <p className="text-[10px] font-semibold text-gray-400">
                      {showSongPlayer
                        ? "Ahora solo dale reproducir en el reproductor."
                        : "Al presionar, aparecerá el reproductor arriba."}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : activeTab === "recuerdos" ? (
              <motion.div
                key="recuerdos-panel"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="min-w-0 w-full max-w-full overflow-hidden"
              >
                <BirthdayMemoriesPanel />
              </motion.div>
            ) : activeTab === "sorpresa" ? (
              <motion.div
                key="sorpresa-panel"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="min-w-0 w-full max-w-full overflow-hidden"
              >
                <BirthdaySurprisePanel />
              </motion.div>
            ) : activeTab === "deseos" ? (
              <motion.div
                key="deseos-panel"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="min-w-0 w-full max-w-full overflow-hidden"
              >
                <BirthdayWishesPanel />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
}
