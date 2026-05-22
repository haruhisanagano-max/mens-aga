'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface PrivacyFeatureProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export default function PrivacyFeature({
  icon: Icon,
  title,
  description,
  index = 0,
}: PrivacyFeatureProps) {
  return (
    <motion.div
      className="flex items-start gap-3 sm:gap-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-[var(--mint-dark)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--mint-light)] flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--gold)]" />
      </div>
      <div>
        <h4 className="font-semibold text-[var(--charcoal)] mb-0.5 sm:mb-1 text-sm sm:text-base">{title}</h4>
        <p className="text-[10px] sm:text-xs md:text-sm text-[var(--charcoal-light)]">{description}</p>
      </div>
    </motion.div>
  )
}
