"use client";

import { useEffect, useRef } from "react";
import createGlobe, { COBEOptions, Marker } from "cobe";
import { useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";
import { GLOBE } from "@/lib/constants";
import { useTheme } from "next-themes";

const GLOBE_CONFIG: COBEOptions = {
  width: GLOBE.CONFIG.WIDTH,
  height: GLOBE.CONFIG.HEIGHT,
  onRender: () => {},
  devicePixelRatio: GLOBE.CONFIG.DEVICE_PIXEL_RATIO,
  phi: GLOBE.CONFIG.PHI,
  theta: GLOBE.CONFIG.THETA,
  dark: GLOBE.CONFIG.DARK,
  diffuse: GLOBE.CONFIG.DIFFUSE,
  mapSamples: GLOBE.CONFIG.MAP_SAMPLES,
  mapBrightness: GLOBE.CONFIG.MAP_BRIGHTNESS,
  baseColor: GLOBE.CONFIG.BASE_COLOR,
  markerColor: GLOBE.CONFIG.MARKER_COLOR,
  glowColor: GLOBE.CONFIG.GLOW_COLOR,
  markers: GLOBE.CONFIG.MARKERS,
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const { theme } = useTheme();
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const originalSizesRef = useRef<number[]>([]);
  const pulseRef = useRef(0); // Use ref to persist pulse value across renders

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: GLOBE.SPRING.MASS,
    damping: GLOBE.SPRING.DAMPING,
    stiffness: GLOBE.SPRING.STIFFNESS,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / GLOBE.MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    // Store original sizes for animation
    const markers = config.markers || [];
    originalSizesRef.current = markers.map(
      (m) => m.size || GLOBE.ANIMATION.DEFAULT_SIZE
    );

    // Create markers with individual colors - each marker gets a different color
    const markersWithColors = markers.map((marker, index) => ({
      ...marker,
      color: GLOBE.MARKER_COLORS[index % GLOBE.MARKER_COLORS.length] as [
        number,
        number,
        number
      ],
    }));

    // Theme-based colors
    const isDark = theme === "dark";
    const glowColor: [number, number, number] = isDark
      ? [0, 0, 0] // Black glow for light theme
      : [1, 1, 1]; // White glow for dark theme

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      dark: isDark ? 1 : 0,
      glowColor,
      markers: markersWithColors, // Use the markers with individual colors
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += GLOBE.ANIMATION.PHI_INCREMENT;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;

        // Ping/pulse animation for markers
        pulseRef.current += GLOBE.ANIMATION.PULSE_SPEED;
        const pulse = pulseRef.current;

        if (state.markers && state.markers.length > 0) {
          state.markers.forEach((marker: Marker, index: number) => {
            // Each marker pulses with a slight phase offset for staggered effect
            const phase =
              (pulse + index * GLOBE.ANIMATION.PHASE_OFFSET) % (2 * Math.PI);
            // Pulse size oscillates between min and max scale of original size
            const pulseScale = (Math.sin(phase) + 1) / 2; // 0 to 1
            const scale =
              GLOBE.ANIMATION.MIN_SCALE +
              (GLOBE.ANIMATION.MAX_SCALE - GLOBE.ANIMATION.MIN_SCALE) *
                pulseScale;
            const originalSize =
              originalSizesRef.current[index] || GLOBE.ANIMATION.DEFAULT_SIZE;
            marker.size = originalSize * scale;
          });
        }
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config, theme]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
