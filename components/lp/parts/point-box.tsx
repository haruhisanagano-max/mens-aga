'use client'

import { motion } from 'framer-motion'

interface PointBoxProps {
  title?: string
  children: React.ReactNode
  variant?: 'mint' | 'gold-border'
}

export default function PointBox({
  title = 'Point',
  children,
  variant = 'mint',
}: PointBoxProps) {
  if (variant === 'gold-border') {
    return (
      <motion.div 
        className="relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        {/* Gold border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--gold)]/40 via-[var(--gold)] to-[var(--gold)]/40 rounded-xl sm:rounded-2xl" />
        <div className="relative bg-gradient-to-br from-[var(--mint-light)] to-[var(--mint)]/60 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10">
          {children}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[var(--mint-light)] rounded-lg sm:rounded-xl border border-[var(--mint-dark)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <h3 className="font-serif text-base sm:text-lg font-semibold text-[var(--charcoal)] mb-2 sm:mb-3 text-center">
        {title}
      </h3>
      {children}
    </motion.div>
  )
}
