const BULB_COLORS = ['bg-crimson-500', 'bg-gold-400', 'bg-holly-400', 'bg-frost-300'];
const BULB_GLOWS = [
  'shadow-[0_0_10px_rgba(239,68,68,0.9)]',
  'shadow-[0_0_10px_rgba(250,204,21,0.9)]',
  'shadow-[0_0_10px_rgba(74,222,128,0.9)]',
  'shadow-[0_0_10px_rgba(125,211,252,0.9)]',
];
const BULB_COUNT = 40;

export default function LightsGarland() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative h-6 w-full">
      <div className="absolute inset-x-0 top-1 h-px bg-gradient-to-r from-transparent via-frost-200/30 to-transparent" />
      <div className="absolute inset-x-2 top-0 flex h-3 items-start justify-between">
        {Array.from({ length: BULB_COUNT }, (_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full animate-twinkle ${BULB_COLORS[i % BULB_COLORS.length]} ${BULB_GLOWS[i % BULB_GLOWS.length]}`}
            style={{ animationDelay: `${(i * 0.31) % 2.4}s` }}
          />
        ))}
      </div>
    </div>
  );
}
