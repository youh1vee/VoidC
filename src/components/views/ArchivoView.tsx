import { archiveEntries, ArchiveEntry } from '@/data/serverData';
import { Archive, Calendar, Tag, ChevronRight } from 'lucide-react';

const tagColors: Record<ArchiveEntry['tag'], string> = {
  Evento: 'bg-frost-500/10 text-frost-300 border-frost-500/20',
  Historial: 'bg-holly-500/10 text-holly-300 border-holly-500/20',
  Documento: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  Reporte: 'bg-crimson-500/10 text-crimson-400 border-crimson-500/20',
};

export default function ArchivoView() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-1">
          <Archive className="h-5 w-5 text-frost-400" />
          <h3 className="font-display text-lg font-bold text-gray-100">Archivo del Servidor</h3>
        </div>
        <p className="text-sm text-gray-500">
          Registro histórico de eventos, documentos y cambios importantes en Void Core.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {archiveEntries.map((entry, i) => (
          <div
            key={entry.id}
            className="glass-card group rounded-2xl p-5 transition-all duration-300 hover:scale-[1.01] hover:border-frost-500/20 animate-slide-in cursor-pointer"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <span className={`rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tagColors[entry.tag]}`}>
                {entry.tag}
              </span>
              <div className="flex items-center gap-1 text-[10px] text-gray-500">
                <Calendar className="h-3 w-3" />
                {entry.date}
              </div>
            </div>
            <h4 className="font-semibold text-gray-100 group-hover:text-frost-300 transition-colors">
              {entry.title}
            </h4>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">{entry.description}</p>
            <div className="flex items-center gap-1 mt-3 text-[10px] text-gray-600">
              <Tag className="h-3 w-3" />
              {entry.category}
            </div>
            <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-frost-400 transition-colors mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
