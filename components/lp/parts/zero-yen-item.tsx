'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface ZeroYenItemProps {
  icon: LucideIcon
  label: string
  index?: number
}

export default function ZeroYenItem({
  icon: Icon,
  label,
  index = 0,
}: ZeroYenItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[var(--mint-light)] flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-[var(--mint)] transition-colors">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[var(--gold)]" />
      </div>
      <span className="text-[10px] sm:text-xs md:text-sm text-[var(--charcoal)] font-medium leading-tight">
        {label}
      </span>
      <span className="text-[var(--gold)] font-bold text-xs sm:text-sm mt-0.5 sm:mt-1">0円</span>
    </motion.div>
  )
}
