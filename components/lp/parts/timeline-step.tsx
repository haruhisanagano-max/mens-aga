'use client'

import { Check, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface TimelineStepProps {
  step: string
  session: string
  title: string
  description: string
  icon: LucideIcon
  index: number
}

export default function TimelineStep({
  step,
  session,
  title,
  description,
  icon: IconComponent,
  index,
}: TimelineStepProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div 
      className={`relative flex items-start gap-4 sm:gap-6 md:gap-12 mb-10 sm:mb-12 md:mb-16 last:mb-0 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
    >
      {/* Large Gold Serif Number */}
      <div className={`hidden md:flex flex-1 ${isEven ? 'justify-end' : 'justify-start'}`}>
        <span 
          className="font-serif text-5xl lg:text-6xl xl:text-7xl font-light text-[var(--gold)]/30 leading-none select-none"
          style={{ fontFamily: "'Playfair Display', 'Noto Serif JP', serif" }}
        >
          {step}
        </span>
      </div>
      
      {/* Timeline Dot */}
      <div className="absolute left-6 sm:left-8 md:left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--gold)] border-2 sm:border-4 border-white shadow-lg z-10" />
      
      {/* Content Card */}
      <div className={`flex-1 ml-12 sm:ml-16 md:ml-0 ${isEven ? 'md:pl-8 lg:pl-12' : 'md:pr-8 lg:pr-12'}`}>
        {/* Mobile Number */}
        <span 
          className="md:hidden font-serif text-2xl sm:text-3xl font-light text-[var(--gold)]/40 leading-none mb-2 block"
          style={{ fontFamily: "'Playfair Display', 'Noto Serif JP', serif" }}
        >
          {step}
        </span>
        
        <motion.div 
          className="bg-[var(--mint-light)] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-[var(--mint-dark)]/50 shadow-sm hover:shadow-md transition-shadow"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Icon */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-3 sm:mb-4">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[var(--gold)]" />
          </div>
          
          {/* Session Badge */}
          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 bg-white rounded-full text-[10px] sm:text-xs font-medium text-[var(--charcoal)] mb-2 sm:mb-3 shadow-sm">
            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[var(--gold)]" />
            {session}
          </div>
          
          {/* Title */}
          <h4 className="font-serif text-base sm:text-lg font-semibold text-[var(--charcoal)] mb-1 sm:mb-2">
            {title}
          </h4>
          
          {/* Description */}
          <p className="text-xs sm:text-sm text-[var(--charcoal-light)] leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
