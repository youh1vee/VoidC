import { navItems, serverData } from '@/data/serverData';
import {
  Snowflake, Home, Archive, Megaphone, RefreshCw, Crown, Hash, Bot,
} from 'lucide-react';

type SidebarProps = {
  active: string;
  onNavigate: (id: string) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Archive, Megaphone, RefreshCw, Crown, Hash, Bot,
};

export default function Sidebar({ active, onNavigate, mobileOpen, onCloseMobile }: SidebarProps) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50
          h-screen w-72 shrink-0
          flex flex-col
          transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="glass-card m-3 mr-0 flex h-[calc(100%-1.5rem)] flex-col overflow-hidden rounded-2xl">
          {/* Logo */}
          <div className="relative flex items-center gap-3 px-5 py-6 overflow-hidden">
            <div className="absolute inset-0 snow-pattern opacity-50" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-frost-500 to-frost-700 shadow-glow">
              <Snowflake className="h-7 w-7 text-night-900" />
            </div>
            <div className="relative">
              <h1 className="font-display text-xl font-extrabold leading-tight text-gradient-frost">
                VOID CORE
              </h1>
              <p className="text-[11px] font-medium text-gray-500 tracking-wide uppercase">
                {serverData.version}
              </p>
            </div>
          </div>

          {/* Owner Badge */}
          <div className="mx-4 mb-4 rounded-xl neu-inset px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-frost-400 to-crimson-600 flex items-center justify-center">
                  <span className="text-sm font-bold text-night-900">O</span>
                </div>
                <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-night-800 bg-holly-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-frost-300">Overlord</p>
                <p className="text-[10px] text-gray-500">Owner · Rol #74</p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 overflow-y-auto no-scrollbar px-3 pb-4">
            <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">
              Módulos
            </p>
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = active === item.id;
                const Icon = iconMap[item.icon] ?? Home;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className={`
                        group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5
                        text-sm font-medium transition-all duration-200
                        ${isActive
                          ? 'bg-gradient-to-r from-frost-500/20 to-transparent text-frost-300'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                        }
                      `}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-frost-500 shadow-glow" />
                      )}
                      <Icon className={`h-4 w-4 ${isActive ? 'text-frost-400' : 'text-gray-500 group-hover:text-gray-300'}`} />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-t border-white/5 px-5 py-3">
            <p className="text-[10px] text-gray-600 text-center">
              Void Core · ID: {serverData.id}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
