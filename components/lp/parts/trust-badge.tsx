'use client'

import { Shield } from 'lucide-react'
import { motion } from 'framer-motion'

interface TrustBadgeProps {
  text: string
}

export default function TrustBadge({ text }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--charcoal-light)]">
      <Shield className="w-4 h-4 text-[var(--gold)]" />
      <span>{text}</span>
    </div>
  )
}

interface TrustBadgesProps {
  badges: string[]
}

export function TrustBadges({ badges }: TrustBadgesProps) {
  return (
    <motion.div 
      className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 flex-wrap"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {badges.map((badge, index) => (
        <TrustBadge key={index} text={badge} />
      ))}
    </motion.div>
  )
}
