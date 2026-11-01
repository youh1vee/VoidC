export const serverData = {
  name: 'Void Core',
  tagline: 'El servidor que todo lo consume',
  version: '1.3.0 SB',
  owner: 'Overlord',
  id: '1505328289529462925',
  stats: {
    allMembers: 73,
    members: 49,
    roles: 74,
    channels: 46,
    bots: 24,
  },
  widgetUrl: 'https://discord.com/widget?id=1505328289529462925&theme=dark',
  apiUrl: 'https://discord.com/api/guilds/1505328289529462925/widget.json',
};

export type NavItem = {
  id: string;
  label: string;
  icon: string;
};

export const navItems: NavItem[] = [
  { id: 'inicio', label: 'Inicio', icon: 'Home' },
  { id: 'archivo', label: 'Archivo', icon: 'Archive' },
  { id: 'anuncios', label: 'Anuncios', icon: 'Megaphone' },
  { id: 'actualizaciones', label: 'Actualizaciones', icon: 'RefreshCw' },
  { id: 'roles', label: 'Roles', icon: 'Crown' },
  { id: 'canales', label: 'Canales', icon: 'Hash' },
  { id: 'bots', label: 'Bots', icon: 'Bot' },
];

export type ArchiveEntry = {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  tag: 'Evento' | 'Historial' | 'Documento' | 'Reporte';
};

export const archiveEntries: ArchiveEntry[] = [
  {
    id: 'arc-1',
    title: 'Fundación de Void Core',
    category: 'Historial',
    date: '2024-12-15',
    description: 'El servidor Void Core fue creado bajo el mandato del primer Overlord. Establecimiento de la jerarquía inicial y los pilares del servidor.',
    tag: 'Historial',
  },
  {
    id: 'arc-2',
    title: 'Noche de los 1000 Susurros',
    category: 'Eventos',
    date: '2025-02-10',
    description: 'Evento comunitario donde los miembros compartieron historias de terror. Participaron 34 miembros activos en voz.',
    tag: 'Evento',
  },
  {
    id: 'arc-3',
    title: 'Reestructuración de Roles V.1.0',
    category: 'Documentos',
    date: '2025-01-20',
    description: 'Reorganización completa del sistema de roles. Pasamos de 30 a 74 roles para mejor granularidad de permisos.',
    tag: 'Documento',
  },
  {
    id: 'arc-4',
    title: 'Incorporación de Bot Centinela',
    category: 'Historial',
    date: '2025-03-05',
    description: 'Se integró el primer bot de moderación automatizada. Redujo un 60% los incidentes de spam.',
    tag: 'Reporte',
  },
  {
    id: 'arc-5',
    title: 'Torneo Halloween 2025',
    category: 'Eventos',
    date: '2025-10-15',
    description: 'Torneo de juegos con temática de Halloween. Premios exclusivos para los ganadores. 3 días de duración.',
    tag: 'Evento',
  },
  {
    id: 'arc-6',
    title: 'Sistema de Niveles Tóxicos',
    category: 'Documentos',
    date: '2025-04-18',
    description: 'Implementación del sistema de niveles con recompensas cosméticas basadas en actividad y participación.',
    tag: 'Documento',
  },
];

export type Announcement = {
  id: string;
  title: string;
  date: string;
  author: string;
  priority: 'alta' | 'media' | 'baja';
  content: string;
};

export const announcements: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Eventos de Halloween Activados',
    date: '2025-10-20',
    author: 'Overlord',
    priority: 'alta',
    content: 'El servidor está en modo Halloween. Nuevos canales temporales, eventos especiales cada noche y roles exclusivos por tiempo limitado. ¡Prepárense para una semana de terror!',
  },
  {
    id: 'ann-2',
    title: 'Nueva Política de Moderación',
    date: '2025-10-18',
    author: 'Overlord',
    priority: 'media',
    content: 'Se ha actualizado la política de moderación. Los warnings ahora expiren después de 30 días en lugar de 60. Revisen el canal de reglas para más detalles.',
  },
  {
    id: 'ann-3',
    title: 'Limpieza de Inactivos Programada',
    date: '2025-10-22',
    author: 'Overlord',
    priority: 'baja',
    content: 'El próximo fin de semana se realizará una limpieza de miembros inactivos (más de 60 días sin actividad). Si quieren mantenerse, simplemente envíen un mensaje.',
  },
  {
    id: 'ann-4',
    title: 'Sistema de Roles Exclusivos Halloween',
    date: '2025-10-19',
    author: 'Overlord',
    priority: 'alta',
    content: 'Se han añadido 5 roles temporales de Halloween: Fantasma, Bruja, Calabaza, Vampiro y Demonio. Obténlos participando en los eventos nocturnos.',
  },
];

export type Update = {
  id: string;
  version: string;
  date: string;
  type: 'Funcionalidad' | 'Mejora' | 'Corrección' | 'Seguridad';
  changes: string[];
};

export const updates: Update[] = [
  {
    id: 'upd-1',
    version: 'V.1.2.0 (VH)',
    date: '2025-10-20',
    type: 'Funcionalidad',
    changes: [
      'Añadido modo Halloween completo con tema visual oscuro-naranja',
      '5 nuevos roles temporales exclusivos de Halloween',
      '3 canales de evento temporales activados',
      'Sistema de puntos de terror para ranking semanal',
      'Widget del servidor actualizado con temática especial',
    ],
  },
  {
    id: 'upd-2',
    version: 'V.1.1.5',
    date: '2025-10-10',
    type: 'Mejora',
    changes: [
      'Optimización del sistema de niveles (XP) — ahora 15% más rápido',
      'Mejoras visuales en canales de voz',
      'Reducción de latencia en bots de música',
      'Nuevo sistema de auto-roles por nivel',
    ],
  },
  {
    id: 'upd-3',
    version: 'V.1.1.0',
    date: '2025-09-15',
    type: 'Seguridad',
    changes: [
      'Verificación obligatoria para nuevos miembros (3 días)',
      'Sistema anti-raid mejorado con detección de patrones',
      'Límite de mensajes por minuto para usuarios nuevos',
      'Backup automático diario de configuración del servidor',
    ],
  },
  {
    id: 'upd-4',
    version: 'V.1.0.0',
    date: '2025-08-01',
    type: 'Funcionalidad',
    changes: [
      'Lanzamiento oficial de Void Core V.1.0.0',
      'Sistema base de 30 roles implementado',
      'Estructura inicial de 20 canales',
      'Integración de 10 bots de moderación y entretenimiento',
    ],
  },
];

export type Role = {
  name: string;
  level: number;
  color: string;
  members: number;
  permissions: string;
};

export const roles: Role[] = [
  { name: 'Overlord', level: 74, color: '#f97316', members: 1, permissions: 'Control total' },
  { name: 'Admin Supremo', level: 70, color: '#ef4444', members: 2, permissions: 'Gestión completa' },
  { name: 'Moderador', level: 55, color: '#f59e0b', members: 4, permissions: 'Moderación + Roles' },
  { name: 'Veterano', level: 40, color: '#4ade80', members: 8, permissions: 'Acceso completo' },
  { name: 'Miembro Activo', level: 25, color: '#22c55e', members: 15, permissions: 'Acceso estándar' },
  { name: 'Miembro', level: 10, color: '#6b7280', members: 19, permissions: 'Acceso básico' },
];

export type Channel = {
  name: string;
  type: 'texto' | 'voz' | 'categoria';
  category: string;
  members?: number;
};

export const channels: Channel[] = [
  { name: 'bienvenida', type: 'texto', category: 'General' },
  { name: 'reglas', type: 'texto', category: 'General' },
  { name: 'anuncios', type: 'texto', category: 'General' },
  { name: 'general', type: 'texto', category: 'General' },
  { name: 'off-topic', type: 'texto', category: 'General' },
  { name: 'memes', type: 'texto', category: 'General' },
  { name: 'soporte', type: 'texto', category: 'Soporte' },
  { name: 'reportes', type: 'texto', category: 'Soporte' },
  { name: 'lobby', type: 'voz', category: 'Voces', members: 5 },
  { name: 'gaming', type: 'voz', category: 'Voces', members: 3 },
  { name: 'música', type: 'voz', category: 'Voces', members: 2 },
  { name: 'villancicos', type: 'voz', category: 'Voces', members: 0 },
  { name: 'archivo-general', type: 'texto', category: 'Archivo' },
  { name: 'archivo-eventos', type: 'texto', category: 'Archivo' },
  { name: 'comandos', type: 'texto', category: 'Bots' },
  { name: 'logs-bot', type: 'texto', category: 'Bots' },
];

export type Bot = {
  name: string;
  purpose: string;
  status: 'activo' | 'inactivo' | 'mantenimiento';
  prefix: string;
};

export const bots: Bot[] = [
  { name: 'Centinela', purpose: 'Moderación anti-raid y anti-spam', status: 'activo', prefix: '!' },
  { name: 'Oráculo', purpose: 'Sistema de niveles y XP', status: 'activo', prefix: '/' },
  { name: 'Espectro', purpose: 'Música y audio en canales de voz', status: 'activo', prefix: '~' },
  { name: 'Nigromante', purpose: 'Roles automáticos y welcome', status: 'activo', prefix: '?' },
  { name: 'Fantasma', purpose: 'Logs y auditoría de mensajes', status: 'activo', prefix: '.' },
  { name: 'Calabaza', purpose: 'Juegos y entretenimiento', status: 'mantenimiento', prefix: '!' },
  { name: 'Hechicero', purpose: 'Sorteos y encuestas', status: 'activo', prefix: '/' },
  { name: 'Demonio', purpose: 'Protección de links maliciosos', status: 'activo', prefix: '#' },
];
