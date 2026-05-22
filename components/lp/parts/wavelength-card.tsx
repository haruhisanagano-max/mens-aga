'use client'

import { Target } from 'lucide-react'
import { motion } from 'framer-motion'

interface WavelengthCardProps {
  name: string
  wavelength: string
  color: 'purple' | 'red'
  features: string[]
}

export default function WavelengthCard({
  name,
  wavelength,
  color,
  features,
}: WavelengthCardProps) {
  const colorClasses = {
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      circle: 'bg-purple-100',
      dot: 'bg-purple-400',
      icon: 'text-purple-500',
    },
    red: {
      bg: 'bg-red-50',
      border: 'border-red-100',
      circle: 'bg-red-100',
      dot: 'bg-red-400',
      icon: 'text-red-500',
    },
  }

  const classes = colorClasses[color]

  return (
    <motion.div 
      className={`${classes.bg} rounded-xl sm:rounded-2xl p-4 sm:p-6 border ${classes.border}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${classes.circle} flex items-center justify-center`}>
          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${classes.dot}`} />
        </div>
        <div>
          <h4 className="font-serif font-semibold text-[var(--charcoal)] text-sm sm:text-base">{name}</h4>
          <p className="text-[10px] sm:text-xs text-[var(--charcoal-light)]">{wavelength}</p>
        </div>
      </div>
      <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[var(--charcoal-light)]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Target className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${classes.icon} flex-shrink-0 mt-0.5`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
