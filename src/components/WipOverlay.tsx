import type { ReactNode } from 'react';
import { Construction } from 'lucide-react';

type WipOverlayProps = {
  children: ReactNode;
};

export default function WipOverlay({ children }: WipOverlayProps) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="pointer-events-none select-none blur-md opacity-60">
        {children}
      </div>
      <div className="absolute inset-0 flex items-start justify-center px-4 pt-24">
        <div className="glass-card w-full max-w-sm rounded-2xl p-6 text-center shadow-glow animate-fade-in">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/10">
            <Construction className="h-6 w-6 text-gold-400" />
          </div>
          <span className="inline-block rounded-md border border-gold-400/30 bg-gold-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-gold-300">
            Restringido · WIP
          </span>
          <h3 className="font-display text-xl font-bold text-gray-100 mt-3">Contenido en WIP</h3>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Esta sección está en desarrollo y fuera de servicio por ahora. Vuelve pronto.
          </p>
        </div>
      </div>
    </div>
  );
}
