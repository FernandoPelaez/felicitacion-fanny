"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function BirthdaySpotifyPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) { audio.pause(); setIsPlaying(false); return; }
    try { await audio.play(); setIsPlaying(true); } catch { setIsPlaying(false); }
  };

  return (
    <section className="relative overflow-hidden rounded-xl border border-pink-200/60 bg-white/80 px-3 py-2.5 shadow-md shadow-pink-100/20 backdrop-blur-xl">
      <audio ref={audioRef} src="/audio/acuerdate-de-mi.mp3" preload="metadata" loop />

      <div className="flex items-center gap-3">
        <motion.div
          animate={isPlaying ? { rotate: [0, 3, -3, 0], scale: [1, 1.04, 1] } : { rotate: 0, scale: 1 }}
          transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "easeInOut" }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-soft via-primary to-primary-dark text-lg shadow-md shadow-primary/20"
        >
          {isPlaying ? "🎶" : "💗"}
        </motion.div>

        <div className="min-w-0 flex-1">
          <span className="text-[8px] font-black uppercase tracking-widest text-rose-400">
            Canción especial
          </span>
          <p className="truncate text-sm font-black tracking-tight text-gray-800">
            Acuérdate De Mí
          </p>
          <p className="text-[10px] font-semibold text-gray-400">
            Morat · Para este momento bonito
          </p>
        </div>

        <motion.button
          type="button"
          onClick={handleToggleAudio}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="group relative flex h-8 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-primary-dark via-primary to-primary-soft px-4 text-[11px] font-black text-white shadow-md shadow-primary/20"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
          <span className="relative flex items-center gap-1.5">
            {isPlaying ? <><span>⏸</span>Pausar</> : <><span>▶</span>Reproducir</>}
          </span>
        </motion.button>
      </div>

      <div className="mt-2 overflow-hidden rounded-full bg-pink-100/40">
        <motion.div
          animate={isPlaying ? { x: ["-100%", "100%"] } : { x: "-100%" }}
          transition={{ duration: 2.2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
          className="h-0.5 w-1/2 rounded-full bg-gradient-to-r from-primary-dark via-primary to-primary-soft"
        />
      </div>
    </section>
  );
}
