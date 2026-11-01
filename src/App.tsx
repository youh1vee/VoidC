import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Snowfall from '@/components/Snowfall';
import LightsGarland from '@/components/LightsGarland';
import TopBar from '@/components/TopBar';
import InicioView from '@/components/views/InicioView';
import ArchivoView from '@/components/views/ArchivoView';
import AnunciosView from '@/components/views/AnunciosView';
import ActualizacionesView from '@/components/views/ActualizacionesView';
import RolesView from '@/components/views/RolesView';
import CanalesView from '@/components/views/CanalesView';
import BotsView from '@/components/views/BotsView';
import WipOverlay from '@/components/WipOverlay';
import { navItems } from '@/data/serverData';

const viewMeta: Record<string, { title: string; subtitle: string }> = {
  inicio: { title: 'Inicio', subtitle: 'Panel principal de Void Core' },
  archivo: { title: 'Archivo', subtitle: 'Historial y documentos del servidor' },
  anuncios: { title: 'Anuncios', subtitle: 'Comunicados oficiales del equipo' },
  actualizaciones: { title: 'Actualizaciones', subtitle: 'Changelog completo de Void Core' },
  roles: { title: 'Roles', subtitle: 'Jerarquía y permisos de los 74 roles' },
  canales: { title: 'Canales', subtitle: 'Los 46 canales organizados por categoría' },
  bots: { title: 'Bots', subtitle: 'Los 24 bots que mantienen el servidor' },
};

function App() {
  const [active, setActive] = useState('inicio');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (id: string) => {
    setActive(id);
    setMobileOpen(false);
  };

  const meta = viewMeta[active] ?? viewMeta.inicio;

  return (
    <div className="relative flex min-h-screen">
      <Snowfall />
      <Sidebar
        active={active}
        onNavigate={handleNavigate}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <main className="flex-1 min-w-0">
        <div className="px-4 pt-3">
          <LightsGarland />
        </div>
        <TopBar
          title={meta.title}
          subtitle={meta.subtitle}
          onMenuClick={() => setMobileOpen(true)}
        />

        <div className="px-4 pb-8">
          {active === 'inicio' && <InicioView />}
          {active !== 'inicio' && (
            <WipOverlay>
              {active === 'archivo' && <ArchivoView />}
              {active === 'anuncios' && <AnunciosView />}
              {active === 'actualizaciones' && <ActualizacionesView />}
              {active === 'roles' && <RolesView />}
              {active === 'canales' && <CanalesView />}
              {active === 'bots' && <BotsView />}
            </WipOverlay>
          )}
        </div>

        {/* Footer */}
        <footer className="px-4 pb-6">
          <div className="glass-card rounded-xl px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[10px] text-gray-600">
              Void Core · {navItems.length} módulos · Dashboard 1.3.0 SB
            </p>
            <p className="text-[10px] text-gray-600">
              Temática Snowbound · {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
