import { channels, Channel } from '@/data/serverData';
import { Hash, Volume2, FolderOpen, Users } from 'lucide-react';

const typeIcon: Record<Channel['type'], typeof Hash> = {
  texto: Hash,
  voz: Volume2,
  categoria: FolderOpen,
};

export default function CanalesView() {
  const categories = channels.reduce((acc, ch) => {
    if (ch.type === 'categoria') return acc;
    (acc[ch.category] = acc[ch.category] || []).push(ch);
    return acc;
  }, {} as Record<string, Channel[]>);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-1">
          <Hash className="h-5 w-5 text-frost-400" />
          <h3 className="font-display text-lg font-bold text-gray-100">Canales del Servidor</h3>
        </div>
        <p className="text-sm text-gray-500">
          46 canales organizados por categorías. Incluye canales de texto, voz y archivo.
        </p>
      </div>

      <div className="space-y-5">
        {Object.entries(categories).map(([category, chs], i) => (
          <div key={category} className="animate-slide-in" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="flex items-center gap-2 mb-3 px-1">
              <FolderOpen className="h-4 w-4 text-gray-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{category}</span>
              <div className="flex-1 h-px bg-white/5" />
              <span className="text-[10px] text-gray-600">{chs.length} canales</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {chs.map((ch) => {
                const Icon = typeIcon[ch.type];
                return (
                  <div
                    key={ch.name}
                    className="glass-card group rounded-xl px-4 py-3 flex items-center gap-3 transition-all hover:scale-[1.01] hover:border-frost-500/20"
                  >
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${ch.type === 'voz' ? 'bg-holly-500/10 text-holly-400' : 'bg-frost-500/10 text-frost-400'} border ${ch.type === 'voz' ? 'border-holly-500/20' : 'border-frost-500/20'}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-300 truncate">{ch.name}</p>
                      <p className="text-[10px] text-gray-600 capitalize">{ch.type}</p>
                    </div>
                    {ch.type === 'voz' && ch.members !== undefined && (
                      <div className="flex items-center gap-1 text-[10px] text-gray-500">
                        <Users className="h-3 w-3" />
                        {ch.members}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
