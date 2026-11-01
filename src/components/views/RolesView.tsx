import { roles } from '@/data/serverData';
import { Crown, Users } from 'lucide-react';

export default function RolesView() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-1">
          <Crown className="h-5 w-5 text-frost-400" />
          <h3 className="font-display text-lg font-bold text-gray-100">Jerarquía de Roles</h3>
        </div>
        <p className="text-sm text-gray-500">
          74 roles ordenados por nivel de jerarquía. El Overlord ocupa el nivel más alto.
        </p>
      </div>

      <div className="space-y-3">
        {roles.map((role, i) => (
          <div
            key={role.name}
            className="glass-card group rounded-2xl p-4 transition-all duration-300 hover:scale-[1.005] animate-slide-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center gap-4">
              {/* Level indicator */}
              <div className="relative flex flex-col items-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border-2 font-mono font-bold text-sm transition-transform group-hover:scale-110"
                  style={{
                    borderColor: role.color,
                    color: role.color,
                    backgroundColor: `${role.color}10`,
                  }}
                >
                  {role.level}
                </div>
                {i < roles.length - 1 && (
                  <div className="absolute top-full h-3 w-px bg-white/5" />
                )}
              </div>

              {/* Role info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {i === 0 && <Crown className="h-3.5 w-3.5 text-frost-400" />}
                  <h4 className="font-semibold" style={{ color: role.color }}>{role.name}</h4>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{role.permissions}</p>
              </div>

              {/* Members count */}
              <div className="flex items-center gap-2 neu-inset rounded-xl px-3 py-2">
                <Users className="h-3.5 w-3.5 text-gray-500" />
                <span className="text-sm font-semibold text-gray-300 tabular-nums">{role.members}</span>
                <span className="text-[10px] text-gray-600">miembros</span>
              </div>

              {/* Color bar */}
              <div
                className="hidden md:block h-8 w-1.5 rounded-full"
                style={{
                  backgroundColor: role.color,
                  boxShadow: `0 0 8px ${role.color}40`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
