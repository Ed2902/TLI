/**
 * Quick Style Reference
 * Copia y pega estas clases en tus componentes
 */

// Títulos con gradiente
export const titleGradient = 'bg-gradient-to-r from-primary-green to-primary-blue -webkit-background-clip: text -webkit-text-fill-color: transparent';

// Botones primarios
export const btnPrimary = 'bg-gradient-to-r from-primary-green to-primary-blue text-white hover:shadow-lg hover:scale-105 transition-all';

// Botones secundarios  
export const btnSecondary = 'bg-gradient-to-r from-primary-dark-blue to-primary-blue text-white hover:shadow-lg';

// Botones outline
export const btnOutline = 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white';

// Secciones con espaciado
export const section = 'py-12 md:py-20 px-4 sm:px-6 lg:px-8';

// Contenedores
export const container = 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8';

// Tarjetas base
export const card = 'rounded-lg p-6 shadow-md hover:shadow-lg transition-all';
export const cardHighlighted = 'bg-gradient-to-br from-primary-blue/10 to-primary-green/10 border-2 border-primary-blue';

// Texto
export const heading1 = 'text-4xl md:text-6xl font-bold text-primary-dark-blue';
export const heading2 = 'text-3xl md:text-4xl font-bold text-primary-dark-blue';
export const heading3 = 'text-xl md:text-2xl font-semibold text-primary-dark-blue';

// Enlaces
export const link = 'text-primary-blue hover:text-primary-green underline transition-colors';

// Espaciado consistente
export const spacingXS = 'space-y-1';
export const spacingSm = 'space-y-2';
export const spacingMd = 'space-y-4';
export const spacingLg = 'space-y-6';

// Grid layouts
export const gridCols2 = 'grid grid-cols-1 md:grid-cols-2 gap-8';
export const gridCols3 = 'grid grid-cols-1 md:grid-cols-3 gap-8';
export const gridCols4 = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6';

// Fondos
export const bgLight = 'bg-white dark:bg-neutral-900';
export const bgAccent = 'bg-gradient-primary';
export const bgAccentSecondary = 'bg-gradient-secondary';

// Sombras
export const shadowSm = 'shadow-sm';
export const shadowMd = 'shadow-md hover:shadow-lg';
export const shadowLg = 'shadow-lg';

// Bordes
export const borderRadius = 'rounded-lg';
export const borderRadiusMd = 'rounded-md';

// Efectos hover
export const hoverScale = 'hover:scale-105 transition-transform';
export const hoverBrightness = 'hover:brightness-110 transition-all';
export const hoverShadow = 'hover:shadow-xl transition-shadow';

// Flexbox utilities
export const flexCenter = 'flex items-center justify-center';
export const flexBetween = 'flex items-center justify-between';
export const flexCol = 'flex flex-col';

// Accesibilidad
export const focusRing = 'focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 focus:outline-none';

// Animaciones suaves
export const transition = 'transition-all duration-200';
export const transitionSlow = 'transition-all duration-500';

// Responsive helpers
export const hideMobile = 'hidden sm:block';
export const showMobile = 'sm:hidden';

// Text utilities
export const textMuted = 'text-neutral-600 dark:text-neutral-400';
export const textPrimary = 'text-primary-dark-blue';
export const textWhite = 'text-white';

/**
 * Ejemplos de uso en componentes:
 * 
 * // Usarlos como strings en className
 * <div className={`${section} ${bgLight}`}>
 *   <h2 className={heading2}>Mi Título</h2>
 *   <button className={btnPrimary}>Click aquí</button>
 * </div>
 * 
 * // O importar directamente
 * import { titleGradient, btnPrimary } from '@/lib/styles-reference'
 */
