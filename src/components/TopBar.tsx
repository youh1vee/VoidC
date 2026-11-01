import { Menu, Search, Bell, Moon } from 'lucide-react';
import { serverData } from '@/data/serverData';

type TopBarProps = {
  title: string;
  subtitle: string;
  onMenuClick: () => void;
};

export default function TopBar({ title, subtitle, onMenuClick }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 px-4 pt-4 pb-2">
      <div className="glass-card flex items-center justify-between gap-4 rounded-2xl px-5 py-3">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg neu-inset text-gray-400 hover:text-frost-400 transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div>
            <h2 className="font-display text-lg font-bold text-gray-100 leading-tight">
              {title}
            </h2>
            <p className="text-xs text-gray-500">{subtitle}</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 rounded-lg neu-inset px-3 py-2 w-56">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent text-sm text-gray-300 placeholder-gray-600 outline-none w-full"
            />
            <kbd className="text-[10px] text-gray-600 font-mono border border-white/10 rounded px-1.5 py-0.5">⌘K</kbd>
          </div>

          {/* Notifications */}
          <button className="relative flex h-9 w-9 items-center justify-center rounded-lg neu-inset text-gray-400 hover:text-frost-400 transition-colors">
            <Bell className="h-4.5 w-4.5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-frost-500 animate-pulse" />
          </button>

          {/* Theme */}
          <button className="flex h-9 w-9 items-center justify-center rounded-lg neu-inset text-gray-400 hover:text-frost-400 transition-colors">
            <Moon className="h-4.5 w-4.5" />
          </button>

          {/* Version badge */}
          <div className="hidden sm:flex items-center gap-1.5 rounded-lg bg-frost-500/10 border border-frost-500/20 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-holly-400 animate-twinkle" />
            <span className="text-xs font-mono font-medium text-frost-300">{serverData.version}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
