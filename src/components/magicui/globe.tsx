/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import createGlobe, { type COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 1000,
  height: 1000,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.7,
  mapSamples: 16000,
  mapBrightness: 0.8,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [255 / 255, 107 / 255, 107 / 255], // Changed to #ff6b6b
  glowColor: [0.2, 0.2, 0.2],
  markers: [
    // Original markers
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
    // Additional markers for more coverage
    { location: [51.5074, -0.1278], size: 0.08 }, // London
    { location: [48.8566, 2.3522], size: 0.07 }, // Paris
    { location: [-33.8688, 151.2093], size: 0.09 }, // Sydney
    { location: [55.7558, 37.6173], size: 0.08 }, // Moscow
    { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
    { location: [-1.2921, 36.8219], size: 0.05 }, // Nairobi
    { location: [25.2048, 55.2708], size: 0.09 }, // Dubai
    { location: [-34.6037, -58.3816], size: 0.07 }, // Buenos Aires
    { location: [37.7749, -122.4194], size: 0.1 }, // San Francisco
    { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
    { location: [22.3193, 114.1694], size: 0.07 }, // Hong Kong
    { location: [52.52, 13.405], size: 0.06 }, // Berlin
    { location: [45.4215, -75.6972], size: 0.05 }, // Ottawa
    { location: [-22.9068, -43.1729], size: 0.08 }, // Rio de Janeiro
    { location: [31.2304, 121.4737], size: 0.09 }, // Shanghai
    { location: [59.9139, 10.7522], size: 0.04 }, // Oslo
    { location: [13.7563, 100.5018], size: 0.06 }, // Bangkok
    { location: [6.5244, 3.3792], size: 0.07 }, // Lagos
    { location: [4.71, -74.0721], size: 0.05 }, // Bogota
    { location: [35.6892, 51.389], size: 0.06 }, // Tehran
  ],
};

// Rest of the component remains the same
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
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      setR(delta / 200);
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r;
      state.width = width * 2;
      state.height = width * 2;
    },
    [r],
  );

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });
    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[800px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
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
