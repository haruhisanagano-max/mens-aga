'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface FeatureIconProps {
  icon: LucideIcon
  title: string
  description?: string
  index?: number
}

export default function FeatureIcon({
  icon: Icon,
  title,
  description,
  index = 0,
}: FeatureIconProps) {
  return (
    <motion.div 
      className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 text-center border border-[var(--mint-dark)] shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--gold)] mx-auto mb-2 sm:mb-3" />
      <h4 className="font-semibold text-[var(--charcoal)] text-[10px] sm:text-xs md:text-sm mb-0.5 sm:mb-1">{title}</h4>
      {description && (
        <p className="text-[8px] sm:text-[10px] md:text-xs text-[var(--charcoal-light)] hidden sm:block">{description}</p>
      )}
    </motion.div>
  )
}
