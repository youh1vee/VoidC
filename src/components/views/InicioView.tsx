import ChristmasCountdown from '@/components/Countdown';
import { serverData } from '@/data/serverData';
import { Users, UserCheck, Hash, Bot, Crown, Snowflake, TreePine, Sparkles, TrendingUp, Activity, CheckCircle } from 'lucide-react';

export default function InicioView() {
  const stats = [
    { label: 'All Members', value: serverData.stats.allMembers, icon: Users, color: 'frost', desc: 'Miembros totales' },
    { label: 'Members', value: serverData.stats.members, icon: UserCheck, color: 'holly', desc: 'En línea / activos' },
    { label: 'Roles', value: serverData.stats.roles, icon: Crown, color: 'crimson', desc: 'Roles creados' },
    { label: 'Canales', value: serverData.stats.channels, icon: Hash, color: 'frost', desc: 'Canales totales' },
    { label: 'Bots', value: serverData.stats.bots, icon: Bot, color: 'holly', desc: 'Bots activos' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl glass-card snow-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-frost-500/10 via-transparent to-crimson-700/10" />
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-7">
          <div className="flex items-center gap-5">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-frost-500 to-frost-700 shadow-glow animate-float">
              <TreePine className="h-11 w-11 text-night-900" />
              <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-night-900 border border-frost-500/40">
                <Sparkles className="h-3 w-3 text-frost-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="rounded-md bg-holly-400/10 border border-holly-400/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-holly-300">
                  Snowbound Edition
                </span>
                <span className="rounded-md bg-frost-500/10 border border-frost-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-frost-300">
                  {serverData.version}
                </span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-gradient-frost text-shadow-glow leading-tight">
                {serverData.name}
              </h2>
              <p className="text-sm text-gray-400 mt-1">{serverData.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Owner</p>
              <div className="flex items-center gap-2 justify-end">
                <Crown className="h-4 w-4 text-frost-400" />
                <span className="font-semibold text-frost-300">{serverData.owner}</span>
              </div>
            </div>
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-frost-400 to-crimson-600 flex items-center justify-center shadow-glow">
              <span className="text-lg font-bold text-night-900">O</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {stats.map((stat, i) => {
          const colorMap: Record<string, string> = {
            frost: 'text-frost-400 bg-frost-500/10 border-frost-500/20',
            holly: 'text-holly-400 bg-holly-500/10 border-holly-500/20',
            crimson: 'text-crimson-400 bg-crimson-500/10 border-crimson-500/20',
          };
          return (
            <div
              key={stat.label}
              className="glass-card group rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] hover:border-white/10 animate-slide-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${colorMap[stat.color]} transition-transform group-hover:scale-110`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <TrendingUp className="h-3.5 w-3.5 text-gray-600" />
              </div>
              <p className="font-display text-2xl font-bold text-gray-100 tabular-nums">{stat.value}</p>
              <p className="text-xs font-medium text-gray-400 mt-0.5">{stat.label}</p>
              <p className="text-[10px] text-gray-600 mt-1">{stat.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Discord Widget */}
        <div className="xl:col-span-1">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-frost-400" />
                <h3 className="font-semibold text-sm text-gray-200">Servidor en Vivo</h3>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] text-holly-300 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-holly-400 animate-pulse" />
                ONLINE
              </span>
            </div>
            <div className="p-2">
              <iframe
                src={serverData.widgetUrl}
                width="100%"
                height="500"
                allowTransparency
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                className="rounded-xl w-full"
                title="Discord Widget - Void Core"
              />
            </div>
          </div>
        </div>

        {/* Activity / Recent */}
        <div className="xl:col-span-2 space-y-6">
          <ChristmasCountdown />
          {/* Quick info */}
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Snowflake className="h-4 w-4 text-holly-400" />
              <h3 className="font-semibold text-sm text-gray-200">Estado del Servidor</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <InfoBox label="Estado" value="Activo" color="holly" />
              <InfoBox label="Región" value="Global" color="frost" />
              <InfoBox label="Verificación" value="Media" color="crimson" />
              <InfoBox label="Nitro Boost" value="Nivel 0" color="frost" />
            </div>
          </div>

          {/* Recent activity timeline */}
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-4 w-4 text-frost-400" />
              <h3 className="font-semibold text-sm text-gray-200">Actividad Reciente</h3>
            </div>
            <div className="space-y-3">
              <TimelineItem
                icon={TreePine}
                color="holly"
                text="Evento navideño iniciando"
                status="En curso"
              />
              <TimelineItem
                icon={CheckCircle}
                color="frost"
                text="Evento VH terminado"
                status="Terminado"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBox({ label, value, color }: { label: string; value: string; color: string }) {
  const colorMap: Record<string, string> = {
    frost: 'text-frost-300',
    holly: 'text-holly-300',
    crimson: 'text-crimson-400',
  };
  return (
    <div className="neu-inset rounded-xl px-3 py-2.5">
      <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">{label}</p>
      <p className={`text-sm font-semibold ${colorMap[color]}`}>{value}</p>
    </div>
  );
}

function TimelineItem({ icon: Icon, color, text, status }: { icon: React.ComponentType<{ className?: string }>; color: string; text: string; status: string }) {
  const colorMap: Record<string, string> = {
    frost: 'text-frost-400 bg-frost-500/10',
    holly: 'text-holly-400 bg-holly-500/10',
    crimson: 'text-crimson-400 bg-crimson-500/10',
  };
  return (
    <div className="flex items-center gap-3 group hover:bg-white/[0.02] rounded-lg px-2 py-1.5 transition-colors">
      <div className={`flex h-8 w-8 items-center justify-center rounded-lg shrink-0 ${colorMap[color]}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-300">{text}</p>
        <p className="text-[10px] text-gray-600">{status}</p>
      </div>
    </div>
  );
}
