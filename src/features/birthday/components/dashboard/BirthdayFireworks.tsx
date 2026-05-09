"use client";

import { useEffect, useRef, type ComponentProps } from "react";
import { Fireworks, type FireworksHandlers } from "@fireworks-js/react";

type BirthdayFireworksProps = {
  active?: boolean;
};

const fireworksOptions = {
  autoresize: true,
  opacity: 0.6,

  rocketsPoint: {
    min: 15,
    max: 85,
  },

  hue: {
    min: 320,
    max: 360,
  },

  delay: {
    min: 20,
    max: 40,
  },

  acceleration: 1.04,
  friction: 0.97,
  gravity: 1.1,

  particles: 90,

  traceLength: 3,
  traceSpeed: 6,

  explosion: 6,
  intensity: 32,
  flickering: 45,

  lineWidth: {
    explosion: {
      min: 1.2,
      max: 3,
    },
    trace: {
      min: 1,
      max: 2,
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
} as unknown as ComponentProps<typeof Fireworks>["options"];

export default function BirthdayFireworks({
  active = true,
}: BirthdayFireworksProps) {
  const fireworksRef = useRef<FireworksHandlers>(null);

  useEffect(() => {
    if (!active) {
      fireworksRef.current?.stop();
      return;
    }

    fireworksRef.current?.start();

    return () => {
      fireworksRef.current?.stop();
    };
  }, [active]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <Fireworks
        ref={fireworksRef}
        options={fireworksOptions}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}