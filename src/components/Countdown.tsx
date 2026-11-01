import { useEffect, useState } from 'react';

const MINUTE_MS = 60_000;
const DAY_MS = 24 * 60 * MINUTE_MS;
const HOUR_MS = 60 * MINUTE_MS;

function getTimeToChristmas(now: Date) {
  const year = now.getFullYear();
  let target = new Date(year, 11, 25);
  if (target.getTime() <= now.getTime()) {
    target = new Date(year + 1, 11, 25);
  }
  const diff = target.getTime() - now.getTime();
  return {
    days: Math.floor(diff / DAY_MS),
    hours: Math.floor((diff % DAY_MS) / HOUR_MS),
    minutes: Math.floor((diff % HOUR_MS) / MINUTE_MS),
  };
}

export default function ChristmasCountdown() {
  const [time, setTime] = useState(() => getTimeToChristmas(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setTime(getTimeToChristmas(new Date())), MINUTE_MS);
    return () => window.clearInterval(id);
  }, []);

  const units = [
    { label: 'Días', value: time.days },
    { label: 'Horas', value: time.hours },
    { label: 'Minutos', value: time.minutes },
  ];

  return (
    <div className="glass-card relative overflow-hidden rounded-2xl p-5">
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-crimson-500/10 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-holly-500/10 blur-2xl" />
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gold-400">Cuenta regresiva</p>
          <h3 className="font-display text-xl font-bold text-gray-100 mt-1">Hasta la Navidad</h3>
        </div>
        <div className="flex items-center gap-3">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="neu-inset flex min-w-[72px] flex-col items-center rounded-xl px-3 py-2.5"
            >
              <span className="font-mono text-2xl font-semibold tabular-nums text-frost-200">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gray-500">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
