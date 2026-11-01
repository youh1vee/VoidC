import { updates, Update } from '@/data/serverData';
import { RefreshCw, CheckCircle, AlertCircle, Shield, Zap } from 'lucide-react';

const typeConfig: Record<Update['type'], { icon: typeof Zap; color: string }> = {
  Funcionalidad: { icon: Zap, color: 'frost' },
  Mejora: { icon: CheckCircle, color: 'holly' },
  Corrección: { icon: AlertCircle, color: 'crimson' },
  Seguridad: { icon: Shield, color: 'crimson' },
};

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  frost: { text: 'text-frost-400', bg: 'bg-frost-500/10', border: 'border-frost-500/20' },
  holly: { text: 'text-holly-400', bg: 'bg-holly-500/10', border: 'border-holly-500/20' },
  crimson: { text: 'text-crimson-400', bg: 'bg-crimson-500/10', border: 'border-crimson-500/20' },
};

export default function ActualizacionesView() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-1">
          <RefreshCw className="h-5 w-5 text-frost-400 " />
          <h3 className="font-display text-lg font-bold text-gray-100">Historial de Actualizaciones</h3>
        </div>
        <p className="text-sm text-gray-500">
          Changelog completo de Void Core, desde la V.1.0.0 hasta la versión actual.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-frost-500/40 via-frost-500/10 to-transparent" />

        <div className="space-y-6">
          {updates.map((upd, i) => {
            const cfg = typeConfig[upd.type];
            const Icon = cfg.icon;
            const c = colorMap[cfg.color];
            const isLatest = i === 0;
            return (
              <div
                key={upd.id}
                className="relative pl-14 animate-slide-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 flex h-10 w-10 items-center justify-center rounded-xl border ${c.bg} ${c.border} ${isLatest ? 'animate-pulse-glow' : ''}`}>
                  <Icon className={`h-5 w-5 ${c.text}`} />
                </div>

                <div className="glass-card rounded-2xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <h4 className="font-display text-base font-bold text-gray-100">{upd.version}</h4>
                      {isLatest && (
                        <span className="rounded-md bg-holly-400/10 border border-holly-400/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-holly-300 animate-twinkle">
                          Actual
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`rounded-md border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${c.bg} ${c.border} ${c.text}`}>
                        {upd.type}
                      </span>
                      <span className="text-[10px] text-gray-500">{upd.date}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {upd.changes.map((change, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${c.bg.replace('/10', '/60')}`} />
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
