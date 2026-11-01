import { announcements, Announcement } from '@/data/serverData';
import { Megaphone, Crown, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const priorityConfig: Record<Announcement['priority'], { icon: typeof AlertTriangle; color: string; label: string }> = {
  alta: { icon: AlertTriangle, color: 'crimson', label: 'Alta prioridad' },
  media: { icon: Info, color: 'frost', label: 'Media prioridad' },
  baja: { icon: CheckCircle, color: 'holly', label: 'Baja prioridad' },
};

export default function AnunciosView() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-1">
          <Megaphone className="h-5 w-5 text-frost-400" />
          <h3 className="font-display text-lg font-bold text-gray-100">Anuncios Oficiales</h3>
        </div>
        <p className="text-sm text-gray-500">
          Comunicados directos del Overlord y el equipo de administración.
        </p>
      </div>

      <div className="space-y-4">
        {announcements.map((ann, i) => {
          const cfg = priorityConfig[ann.priority];
          const Icon = cfg.icon;
          const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
            crimson: { text: 'text-crimson-400', bg: 'bg-crimson-500/10', border: 'border-crimson-500/20' },
            frost: { text: 'text-frost-400', bg: 'bg-frost-500/10', border: 'border-frost-500/20' },
            holly: { text: 'text-holly-400', bg: 'bg-holly-500/10', border: 'border-holly-500/20' },
          };
          const c = colorClasses[cfg.color];
          return (
            <div
              key={ann.id}
              className="glass-card rounded-2xl p-5 animate-slide-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${c.bg} ${c.border} shrink-0`}>
                  <Icon className={`h-5 w-5 ${c.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-100">{ann.title}</h4>
                    <span className={`rounded-md border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${c.bg} ${c.border} ${c.text}`}>
                      {cfg.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{ann.content}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1.5">
                      <div className="h-5 w-5 rounded-md bg-gradient-to-br from-frost-400 to-crimson-600 flex items-center justify-center">
                        <Crown className="h-3 w-3 text-night-900" />
                      </div>
                      <span className="text-xs font-medium text-frost-300">{ann.author}</span>
                    </div>
                    <span className="text-[10px] text-gray-600">{ann.date}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
