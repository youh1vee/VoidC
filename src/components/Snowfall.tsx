import { useMemo } from 'react';

const FLAKE_COUNT = 70;

export default function Snowfall() {
  const flakes = useMemo(
    () =>
      Array.from({ length: FLAKE_COUNT }, (_, id) => {
        const size = 2 + Math.random() * 4;
        return {
          id,
          left: Math.random() * 100,
          size,
          duration: 9 + Math.random() * 12,
          delay: -Math.random() * 20,
          drift: `${(Math.random() - 0.5) * 140}px`,
          opacity: 0.45 + Math.random() * 0.5,
        };
      }),
    [],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="absolute top-0 rounded-full bg-white animate-snowfall"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            boxShadow: `0 0 ${flake.size * 2}px rgba(224, 242, 254, 0.8)`,
            ['--drift' as string]: flake.drift,
          }}
        />
      ))}
    </div>
  );
}
