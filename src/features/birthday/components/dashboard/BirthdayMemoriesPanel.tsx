"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

type MemoryPhoto = {
  src: string;
  alt: string;
};

const photos: MemoryPhoto[] = Array.from({ length: 14 }, (_, index) => ({
  src: `/fanny/img${index + 1}.jpeg`,
  alt: `Foto especial de Fanny ${index + 1}`,
}));

const carouselVariants: Variants = {
  enter: {
    opacity: 0,
    x: 35,
    scale: 0.98,
    filter: "blur(4px)",
  },
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -35,
    scale: 0.98,
    filter: "blur(4px)",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export default function BirthdayMemoriesPanel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalPhotos = photos.length;
  const activePhoto = photos[activeIndex];

  const nextPhoto = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === totalPhotos - 1 ? 0 : currentIndex + 1,
    );
  };

  const previousPhoto = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? totalPhotos - 1 : currentIndex - 1,
    );
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === totalPhotos - 1 ? 0 : currentIndex + 1,
      );
    }, 4500);

    return () => window.clearInterval(interval);
  }, [totalPhotos]);

  return (
    <div className="relative min-w-0 w-full max-w-full overflow-hidden rounded-xl border border-pink-100/70 bg-white/90 p-2.5 shadow-md shadow-pink-100/20">
      <div className="grid min-w-0 w-full max-w-full gap-2.5 overflow-hidden lg:grid-cols-[minmax(0,1fr)_180px]">
        <div className="relative min-w-0 w-full max-w-full overflow-hidden rounded-xl border border-pink-100/60 bg-pink-50/50 p-1">
          <div className="relative h-[340px] w-full max-w-full overflow-hidden rounded-lg bg-pink-100/40 sm:h-[420px] lg:h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhoto.src}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 overflow-hidden"
              >
                <img
                  src={activePhoto.src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-35 blur-xl"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-white/20" />

                <img
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  className="relative z-10 h-full w-full object-contain object-center"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            <div className="absolute bottom-2 left-2 right-2 z-20 flex items-end justify-between gap-2">
              <div className="rounded-lg border border-white/30 bg-white/85 px-2 py-1 backdrop-blur-md">
                <p className="text-[8px] font-black uppercase tracking-widest text-rose-500">
                  {activeIndex + 1} / {totalPhotos}
                </p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={previousPhoto}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/90 text-base font-black text-rose-500 shadow-sm backdrop-blur-md transition hover:bg-white active:scale-95"
                  aria-label="Foto anterior"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={nextPhoto}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/90 text-base font-black text-rose-500 shadow-sm backdrop-blur-md transition hover:bg-white active:scale-95"
                  aria-label="Foto siguiente"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0 w-full max-w-full overflow-hidden rounded-xl border border-pink-100/60 bg-white/70 p-2">
          <p className="mb-1.5 text-[8px] font-black uppercase tracking-widest text-rose-400">
            Galería · {totalPhotos} fotos
          </p>

          <div className="flex max-w-full gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] lg:grid lg:max-h-[360px] lg:grid-cols-2 lg:gap-1.5 lg:overflow-y-auto lg:overflow-x-hidden [&::-webkit-scrollbar]:hidden">
            {photos.map((photo, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "relative h-16 w-14 shrink-0 overflow-hidden rounded-lg border bg-pink-50 transition-all duration-200 sm:h-20 sm:w-16 lg:h-[76px] lg:w-auto",
                    isActive
                      ? "border-rose-300 opacity-100 shadow-sm shadow-pink-100"
                      : "border-pink-100 opacity-70 hover:opacity-100",
                  ].join(" ")}
                  aria-label={`Ver foto ${index + 1}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover object-center transition duration-200 hover:scale-105"
                    draggable={false}
                    loading="lazy"
                  />

                  {isActive && (
                    <span className="absolute inset-0 rounded-lg ring-2 ring-inset ring-rose-300" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-1">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  "h-1 rounded-full transition-all duration-200",
                  activeIndex === index
                    ? "w-4 bg-rose-400"
                    : "w-1 bg-pink-200 hover:bg-pink-300",
                ].join(" ")}
                aria-label={`Ir a foto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
