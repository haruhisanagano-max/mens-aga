'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface CtaButtonProps {
  href: string
  text: string
  variant?: 'primary' | 'gold' | 'campaign'
  size?: 'default' | 'lg' | 'xl'
  animated?: boolean
  fullWidth?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function CtaButton({
  href,
  text,
  variant = 'primary',
  size = 'lg',
  animated = false,
  fullWidth = false,
  onClick,
}: CtaButtonProps) {
  const variantClasses = {
    primary: 'bg-[var(--emerald)] hover:bg-[var(--emerald-light)] text-white',
    gold: 'bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white',
    campaign: 'bg-[#C9A962] hover:bg-[#B8994F] text-black shadow-lg shadow-[#C9A962]/30 hover:shadow-xl hover:shadow-[#C9A962]/40 hover:scale-105',
  }

  const sizeClasses = {
    default: 'text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3',
    lg: 'text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6',
    xl: 'text-sm sm:text-base px-8 sm:px-12 py-5 sm:py-7',
  }

  return (
    <Button
      asChild
      size="lg"
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        font-semibold rounded-full
        ${animated ? 'animate-pulse-gold' : ''}
        ${fullWidth ? 'w-full' : ''}
        transition-all
      `}
    >
      <a href={href} onClick={onClick}>
        {text}
      </a>
    </Button>
  )
}
