"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayLoginData } from "@/features/birthday/data/birthday.data";
import {
  loginCardVariants,
  loginItemVariants,
  ribbonVariants,
  shimmerVariants,
} from "@/features/birthday/animations/birthday.animations";

const confettiPieces = [
  { value: "🌸", x: "8%", y: "12%", size: "1.6rem", delay: 0 },
  { value: "✦", x: "88%", y: "8%", size: "1.4rem", delay: 0.3 },
  { value: "💗", x: "5%", y: "55%", size: "1.3rem", delay: 0.6 },
  { value: "🎀", x: "91%", y: "48%", size: "1.5rem", delay: 0.9 },
  { value: "⋆", x: "20%", y: "82%", size: "1.8rem", delay: 1.1 },
  { value: "🌷", x: "78%", y: "78%", size: "1.4rem", delay: 1.4 },
  { value: "✿", x: "50%", y: "6%", size: "1.3rem", delay: 1.7 },
  { value: "💫", x: "15%", y: "30%", size: "1.2rem", delay: 2.0 },
  { value: "♡", x: "82%", y: "25%", size: "1.6rem", delay: 2.2 },
  { value: "🎂", x: "60%", y: "88%", size: "1.4rem", delay: 2.5 },
  { value: "✨", x: "35%", y: "90%", size: "1.2rem", delay: 2.8 },
  { value: "💕", x: "93%", y: "68%", size: "1.3rem", delay: 3.0 },
];

export default function BirthdayLogin() {
  const router = useRouter();
  const birthdayInputRef = useRef<HTMLInputElement>(null);

  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isEntering, setIsEntering] = useState(false);

  const { access, content, errors } = birthdayLoginData;

  const openBirthdayPicker = () => {
    const input = birthdayInputRef.current;

    if (!input) return;

    input.focus();

    const pickerInput = input as HTMLInputElement & {
      showPicker?: () => void;
    };

    pickerInput.showPicker?.();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!birthday) {
      setError(errors.birthdayRequired);
      return;
    }

    if (!password.trim()) {
      setError(errors.passwordRequired);
      return;
    }

    const cleanPassword = password.trim().toLowerCase();
    const correctPassword = access.password.toLowerCase();

    if (cleanPassword !== correctPassword) {
      setError(errors.invalidPassword);
      return;
    }

    setError("");
    setIsEntering(true);

    window.setTimeout(() => {
      router.push(access.successRoute);
    }, 900);
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-x-hidden px-4 py-6 sm:px-5 sm:py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-soft/30 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-gold/35 blur-3xl sm:h-56 sm:w-56" />
        <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-primary/20 blur-3xl sm:h-52 sm:w-52" />
        <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-soft/15 blur-2xl sm:h-40 sm:w-40" />

        {confettiPieces.map((piece) => (
          <motion.span
            key={`${piece.value}-${piece.delay}`}
            initial={{ opacity: 0, scale: 0, y: -20 }}
            animate={{
              opacity: [0, 1, 1, 1, 0],
              scale: [0, 1.2, 1, 1, 0.8],
              y: ["-20px", "0px", "8px", "0px", "12px"],
              rotate: [0, 15, -8, 10, 0],
            }}
            transition={{
              delay: piece.delay,
              duration: 10,
              times: [0, 0.08, 0.15, 0.85, 1],
              ease: "easeInOut",
              repeat: 0,
            }}
            style={{
              position: "absolute",
              left: piece.x,
              top: piece.y,
              fontSize: piece.size,
              filter: "drop-shadow(0 2px 6px rgba(232,69,124,0.25))",
            }}
          >
            {piece.value}
          </motion.span>
        ))}
      </div>

      <motion.div
        variants={loginCardVariants}
        initial="hidden"
        animate={isEntering ? "exit" : "visible"}
        className="relative w-full max-w-[350px] overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/85 p-5 shadow-2xl shadow-primary/25 backdrop-blur-2xl sm:max-w-[420px] sm:rounded-[2rem] sm:p-7 md:max-w-[440px]"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-soft via-primary to-gold" />
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary-soft/50 to-transparent" />

        <motion.div
          variants={ribbonVariants}
          initial="hidden"
          animate={["visible", "pulse"]}
          className="relative mx-auto mb-3 flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-soft/40 to-primary/30 blur-md" />
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary-soft via-primary to-primary-dark text-2xl shadow-xl shadow-primary/35 sm:text-3xl">
            🎀
          </div>
        </motion.div>

        <motion.div variants={loginItemVariants} className="text-center">
          <div className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-primary-soft/60 bg-gradient-to-r from-primary-soft/20 to-primary/10 px-3 py-1.5 sm:px-4">
            <span className="text-[9px]">✦</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-primary-dark sm:text-[11px]">
              {content.badge}
            </span>
            <span className="text-[9px]">✦</span>
          </div>

          <h1 className="mt-3 text-balance text-[1.45rem] font-black tracking-tight text-foreground sm:text-3xl">
            {content.title}
          </h1>

          <p className="mx-auto mt-1.5 max-w-[270px] text-pretty text-[12px] leading-5 text-foreground-muted sm:max-w-[280px] sm:text-[13px] sm:leading-6">
            {content.subtitle}
          </p>
        </motion.div>

        <motion.form
          variants={loginItemVariants}
          onSubmit={handleSubmit}
          className="mt-4 space-y-3 sm:mt-5"
        >
          <div className="space-y-1.5">
            <label
              htmlFor="birthday"
              className="flex items-center gap-1.5 text-[11px] font-bold text-foreground sm:text-xs"
            >
              <span className="text-primary">📅</span>
              {content.birthdayLabel}
            </label>

            <div className="relative">
              <input
                ref={birthdayInputRef}
                id="birthday"
                type="date"
                value={birthday}
                onChange={(event) => setBirthday(event.target.value)}
                className="h-11 w-full appearance-none rounded-2xl border border-border-soft bg-white/90 px-4 pr-12 text-sm font-medium text-foreground outline-none ring-0 transition-all duration-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary-soft/25 sm:h-12"
              />

              <button
                type="button"
                onClick={openBirthdayPicker}
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl bg-primary-soft/20 text-base text-primary-dark transition hover:bg-primary-soft/35 active:scale-95"
                aria-label="Abrir calendario"
              >
                📅
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="flex items-center gap-1.5 text-[11px] font-bold text-foreground sm:text-xs"
            >
              {content.passwordLabel}
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={content.passwordPlaceholder}
                className="h-11 w-full rounded-2xl border border-border-soft bg-white/90 px-4 pr-12 text-sm font-medium text-foreground outline-none ring-0 transition-all duration-300 placeholder:text-foreground-muted/50 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary-soft/25 sm:h-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl bg-primary-soft/20 text-base text-primary-dark transition hover:bg-primary-soft/35 active:scale-95"
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="min-h-[2rem]">
            <AnimatePresence mode="wait">
              {error ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="flex items-center gap-2 rounded-2xl border border-primary-soft/50 bg-gradient-to-r from-primary-soft/20 to-primary/10 px-3 py-2"
                >
                  <span className="text-sm">💗</span>
                  <p className="text-[11px] font-semibold text-primary-dark sm:text-xs">
                    {error}
                  </p>
                </motion.div>
              ) : (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="px-1 text-[10px] leading-5 text-foreground-muted sm:text-[11px]"
                >
                  {content.helperText}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            type="submit"
            disabled={isEntering}
            whileHover={{ scale: isEntering ? 1 : 1.02 }}
            whileTap={{ scale: isEntering ? 1 : 0.97 }}
            className="group relative h-11 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-primary-dark via-primary to-primary-soft px-5 text-sm font-black text-white shadow-lg shadow-primary/35 transition-all duration-300 hover:shadow-xl hover:shadow-primary/45 disabled:cursor-not-allowed disabled:opacity-75 sm:h-12 sm:text-[15px]"
          >
            <motion.span
              variants={shimmerVariants}
              animate="animate"
              className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <span className="relative flex items-center justify-center gap-2">
              {isEntering ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block"
                  >
                    ✨
                  </motion.span>
                  {content.loadingText}
                </>
              ) : (
                content.buttonText
              )}
            </span>
          </motion.button>
        </motion.form>

        <motion.div
          variants={loginItemVariants}
          className="mt-4 flex items-center gap-3 rounded-2xl border border-border-soft bg-gradient-to-r from-card-soft/90 to-primary-soft/10 px-4 py-3"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft/30 text-base">
            💌
          </div>
          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-dark/80 sm:text-[10px]">
              Hecho solo para ti
            </p>
            <p className="mt-0.5 text-[10px] leading-4 text-foreground-muted sm:text-[11px]">
              Una entrada pequeña para una sorpresa grande.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
