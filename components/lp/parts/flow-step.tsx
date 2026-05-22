'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface FlowStepProps {
  stepNumber: number
  title: string
  description: string
  icon: LucideIcon
  index: number
}

export default function FlowStep({
  stepNumber,
  title,
  description,
  icon: Icon,
  index,
}: FlowStepProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`relative flex items-start gap-3 sm:gap-4 md:gap-8 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    >
      {/* Mobile Line */}
      <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-[var(--mint-dark)] md:hidden" style={{ transform: 'translateX(-50%)' }} />
      
      {/* Step Number */}
      <div className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--emerald)] flex items-center justify-center md:mx-auto shadow-md">
        <span className="font-serif text-sm sm:text-lg font-bold text-white">{stepNumber}</span>
      </div>

      {/* Content */}
      <div className={`flex-1 pb-6 sm:pb-8 md:pb-12 md:w-1/2 ${isEven ? 'md:pr-8 lg:pr-12 md:text-right' : 'md:pl-8 lg:pl-12 md:text-left'}`}>
        <motion.div 
          className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-lg border border-[var(--mint-dark)]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className={`flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)]" />
            <h3 className="font-serif font-semibold text-[var(--charcoal)] text-sm sm:text-base">
              {title}
            </h3>
          </div>
          <p className="text-[10px] sm:text-xs md:text-sm text-[var(--charcoal-light)]">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
