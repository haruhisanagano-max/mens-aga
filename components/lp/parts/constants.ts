// ============================================
// LP Design Constants
// Virgin Clinic Style Design System
// ============================================

// Brand Colors
export const COLORS = {
  // Primary Theme Colors
  emerald: '#004B40',
  emeraldLight: '#006B5A',
  mint: '#E0F0EA',
  mintLight: '#EDF7F3',
  mintDark: '#C5E5D8',
  
  // Neutrals
  offwhite: '#FAFCFB',
  charcoal: '#1A2F2A',
  charcoalLight: '#3D5A52',
  
  // Accents
  gold: '#C9A962',
  goldLight: '#E8D9A8',
  
  // Campaign Section
  campaignBlack: '#0A0A0A',
  campaignCard: '#141414',
  campaignCardHover: '#1A1A1A',
  
  // LINE Brand Color
  lineGreen: '#06C755',
  lineGreenHover: '#05b34d',
  
  // Wavelength Colors (for machine section)
  alexandrite: '#a855f7', // purple-400
  ndYag: '#f87171', // red-400
} as const

// Border Radius (4px base)
export const RADIUS = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  '3xl': '32px',
  full: '9999px',
} as const

// Spacing Scale
export const SPACING = {
  section: {
    py: 'py-12 sm:py-16 md:py-24',
  },
  container: {
    default: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
    narrower: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
    form: 'max-w-2xl mx-auto px-4 sm:px-6 lg:px-8',
    chat: 'max-w-3xl mx-auto px-4 sm:px-6 lg:px-8',
  },
} as const

// Typography Classes
export const TYPOGRAPHY = {
  sectionTitle: 'font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--charcoal)]',
  sectionSubtitle: 'text-[var(--charcoal-light)] text-sm sm:text-base lg:text-lg',
  cardTitle: 'font-serif text-base sm:text-lg md:text-xl font-semibold text-[var(--charcoal)]',
  bodyText: 'text-xs sm:text-sm md:text-base text-[var(--charcoal-light)]',
  smallText: 'text-[10px] sm:text-xs md:text-sm text-[var(--charcoal-light)]',
  price: 'font-serif font-bold text-[var(--charcoal)]',
  priceGold: 'font-serif font-bold text-[var(--gold)]',
} as const

// Animation Variants (Framer Motion)
export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  },
  fadeInUpDelayed: (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  }),
  scaleOnHover: {
    whileHover: { scale: 1.02 },
    transition: { duration: 0.2 },
  },
  slideInLeft: (delay: number) => ({
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  }),
  slideInRight: (delay: number) => ({
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  }),
} as const

// Common Card Styles
export const CARD_STYLES = {
  white: 'bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[var(--mint-dark)]',
  whiteLarge: 'bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-[var(--mint-dark)]',
  mint: 'bg-[var(--mint-light)] rounded-xl sm:rounded-2xl border border-[var(--mint-dark)]',
  campaign: 'bg-[#141414] rounded-xl sm:rounded-2xl border border-[#C9A962]/30',
} as const

// Button Styles
export const BUTTON_STYLES = {
  primary: 'bg-[var(--emerald)] hover:bg-[var(--emerald-light)] text-white font-semibold',
  gold: 'bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white font-semibold',
  line: 'border-[#06C755] text-[#06C755] hover:bg-[#06C755]/10',
  campaignGold: 'bg-[#C9A962] hover:bg-[#B8994F] text-black font-bold',
} as const
