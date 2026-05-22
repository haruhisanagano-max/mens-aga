'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  badge?: {
    icon?: LucideIcon
    text: string
    variant?: 'gold' | 'mint' | 'white'
  }
  align?: 'center' | 'left'
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  
  const badgeVariants = {
    gold: 'bg-[var(--gold)]/10 text-[var(--gold)]',
    mint: 'bg-white rounded-full',
    white: 'bg-white/80 backdrop-blur-sm rounded-full border border-[var(--mint-dark)]',
  }

  return (
    <div className={`${alignClass} mb-8 sm:mb-12 ${className}`}>
      {badge && (
        <motion.div 
          className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4 ${badgeVariants[badge.variant || 'gold']}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {badge.icon && <badge.icon className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--gold)]" />}
          <span className="text-xs sm:text-sm font-medium">{badge.text}</span>
        </motion.div>
      )}
      
      <motion.h2 
        className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--charcoal)] mb-3 sm:mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: badge ? 0.2 : 0.1 }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      
      {subtitle && (
        <motion.p 
          className="text-[var(--charcoal-light)] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: badge ? 0.3 : 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
