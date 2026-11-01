import { bots, Bot } from '@/data/serverData';
import { Bot as BotIcon, Terminal } from 'lucide-react';

const statusConfig: Record<Bot['status'], { color: string; label: string; dot: string }> = {
  activo: { color: 'holly', label: 'Activo', dot: 'bg-holly-400' },
  inactivo: { color: 'crimson', label: 'Inactivo', dot: 'bg-crimson-500' },
  mantenimiento: { color: 'frost', label: 'Mantenimiento', dot: 'bg-frost-500' },
};

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  holly: { text: 'text-holly-400', bg: 'bg-holly-500/10', border: 'border-holly-500/20' },
  crimson: { text: 'text-crimson-400', bg: 'bg-crimson-500/10', border: 'border-crimson-500/20' },
  frost: { text: 'text-frost-400', bg: 'bg-frost-500/10', border: 'border-frost-500/20' },
};

export default function BotsView() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-1">
          <BotIcon className="h-5 w-5 text-frost-400" />
          <h3 className="font-display text-lg font-bold text-gray-100">Bots del Servidor</h3>
        </div>
        <p className="text-sm text-gray-500">
          24 bots gestionando moderación, música, niveles, entretenimiento y seguridad.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bots.map((bot, i) => {
          const cfg = statusConfig[bot.status];
          const c = colorMap[cfg.color];
          return (
            <div
              key={bot.name}
              className="glass-card group rounded-2xl p-5 transition-all hover:scale-[1.02] hover:border-frost-500/20 animate-slide-in"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="relative">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${c.bg} ${c.border}`}>
                    <BotIcon className={`h-5 w-5 ${c.text}`} />
                  </div>
                  <span className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-night-800 ${cfg.dot} ${bot.status === 'activo' ? 'animate-pulse' : ''}`} />
                </div>
                <span className={`rounded-md border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${c.bg} ${c.border} ${c.text}`}>
                  {cfg.label}
                </span>
              </div>
              <h4 className="font-semibold text-gray-100 group-hover:text-frost-300 transition-colors">{bot.name}</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">{bot.purpose}</p>
              <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/5">
                <Terminal className="h-3 w-3 text-gray-500" />
                <span className="text-xs font-mono text-gray-500">Prefix: <span className="text-frost-300">{bot.prefix}</span></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
