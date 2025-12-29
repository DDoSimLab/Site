"use client";

import { useEffect, useRef } from "react";
import createGlobe, { COBEOptions, Marker } from "cobe";
import { useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

// Define different colors for markers (RGB values 0-1)
const MARKER_COLORS = [
  [251 / 255, 100 / 255, 21 / 255], // Orange
  [59 / 255, 130 / 255, 246 / 255], // Blue
  [34 / 255, 197 / 255, 94 / 255], // Green
  [168 / 255, 85 / 255, 247 / 255], // Purple
  [236 / 255, 72 / 255, 153 / 255], // Pink
  [251 / 255, 191 / 255, 36 / 255], // Yellow
  [239 / 255, 68 / 255, 68 / 255], // Red
  [14 / 255, 165 / 255, 233 / 255], // Cyan
  [139 / 255, 92 / 255, 246 / 255], // Indigo
  [20 / 255, 184 / 255, 166 / 255], // Teal
];

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255], // Default fallback color
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const originalSizesRef = useRef<number[]>([]);
  const pulseRef = useRef(0); // Use ref to persist pulse value across renders

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
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
      r.set(r.get() + delta / MOVEMENT_DAMPING);
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
    originalSizesRef.current = markers.map((m) => m.size || 0.05);

    // Create markers with individual colors - each marker gets a different color
    const markersWithColors = markers.map((marker, index) => ({
      ...marker,
      color: MARKER_COLORS[index % MARKER_COLORS.length] as [
        number,
        number,
        number
      ],
    }));

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      markers: markersWithColors, // Use the markers with individual colors
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;

        // Ping/pulse animation for markers
        pulseRef.current += 0.02; // Animation speed
        const pulse = pulseRef.current;

        if (state.markers && state.markers.length > 0) {
          state.markers.forEach((marker: Marker, index: number) => {
            // Each marker pulses with a slight phase offset for staggered effect
            const phase = (pulse + index * 0.5) % (2 * Math.PI);
            // Pulse size oscillates between 80% and 120% of original size
            const pulseScale = (Math.sin(phase) + 1) / 2; // 0 to 1
            const minScale = 0.8;
            const maxScale = 1.2;
            const scale = minScale + (maxScale - minScale) * pulseScale;
            const originalSize = originalSizesRef.current[index] || 0.05;
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
  }, [rs, config]);

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
