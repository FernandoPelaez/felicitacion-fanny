"use client";

import { useEffect, useMemo, useRef, useState, type ComponentProps } from "react";
import { Fireworks, type FireworksHandlers } from "@fireworks-js/react";

type BirthdayFireworksProps = {
  active?: boolean;
};

type FireworksOptions = ComponentProps<typeof Fireworks>["options"];

function getFireworksOptions(isMobile: boolean): FireworksOptions {
  return {
    autoresize: true,
    opacity: isMobile ? 0.42 : 0.6,

    rocketsPoint: {
      min: isMobile ? 22 : 15,
      max: isMobile ? 78 : 85,
    },

    hue: {
      min: 320,
      max: 360,
    },

    delay: {
      min: isMobile ? 34 : 20,
      max: isMobile ? 64 : 40,
    },

    acceleration: 1.04,
    friction: 0.97,
    gravity: isMobile ? 1.18 : 1.1,

    particles: isMobile ? 42 : 90,

    traceLength: isMobile ? 2 : 3,
    traceSpeed: isMobile ? 4 : 6,

    explosion: isMobile ? 4 : 6,
    intensity: isMobile ? 16 : 32,
    flickering: isMobile ? 32 : 45,

    lineWidth: {
      explosion: {
        min: isMobile ? 0.8 : 1.2,
        max: isMobile ? 2 : 3,
      },
      trace: {
        min: 1,
        max: isMobile ? 1.4 : 2,
      },
    },

    lineStyle: "round",

    brightness: {
      min: 60,
      max: 90,
    },

    decay: {
      min: 0.015,
      max: 0.03,
    },

    mouse: {
      click: false,
      move: false,
      max: 0,
    },
  } as unknown as FireworksOptions;
}

export default function BirthdayFireworks({
  active = true,
}: BirthdayFireworksProps) {
  const fireworksRef = useRef<FireworksHandlers>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const fireworksOptions = useMemo(() => {
    return getFireworksOptions(isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (!active) {
      fireworksRef.current?.stop();
      return;
    }

    fireworksRef.current?.start();

    return () => {
      fireworksRef.current?.stop();
    };
  }, [active, fireworksOptions]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 max-w-full overflow-hidden">
      <Fireworks
        ref={fireworksRef}
        options={fireworksOptions}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
