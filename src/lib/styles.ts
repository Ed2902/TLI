/**
 * Utility styles and classes for consistent design system usage
 * These utilities help maintain consistency across the application
 */

export const gradients = {
  primary: 'bg-gradient-primary',
  secondary: 'bg-gradient-secondary',
  accent: 'bg-gradient-accent',
}

export const colors = {
  primary: {
    green: 'text-primary-green',
    blue: 'text-primary-blue',
    darkBlue: 'text-primary-dark-blue',
  },
  bg: {
    primaryGreen: 'bg-primary-green',
    primaryBlue: 'bg-primary-blue',
    darkBlue: 'bg-primary-dark-blue',
  },
}

export const spacing = {
  xs: 'space-y-xs',
  sm: 'space-y-sm',
  md: 'space-y-md',
  lg: 'space-y-lg',
  xl: 'space-y-xl',
}

export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
}

export const radius = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
}

// Common component base styles
export const componentStyles = {
  container: 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8',
  section: 'py-12 md:py-20',
  button: {
    base: 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200',
    primary:
      'bg-gradient-to-r from-primary-green to-primary-blue text-white hover:shadow-lg hover:scale-105',
    secondary:
      'bg-gradient-to-r from-primary-dark-blue to-primary-blue text-white hover:shadow-lg',
    outline:
      'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
  },
}

// SEO-friendly utility for visually hidden content
export const visuallyHidden =
  'sr-only absolute w-1 h-1 p-0 -m-1 overflow-hidden clip-rect border-0'
