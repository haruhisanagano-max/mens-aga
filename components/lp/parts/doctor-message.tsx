'use client'

import { User } from 'lucide-react'
import { motion } from 'framer-motion'

interface DoctorMessageProps {
  name: string
  title: string
  message: string
  imageUrl?: string
}

export default function DoctorMessage({
  name,
  title,
  message,
  imageUrl,
}: DoctorMessageProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[var(--mint-dark)] p-4 sm:p-6 md:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[var(--mint-light)] flex items-center justify-center flex-shrink-0 overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <User className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[var(--gold)]" />
          )}
        </div>
        <div className="text-center sm:text-left">
          <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-[var(--charcoal)] mb-1">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--charcoal-light)] mb-3 sm:mb-4">
            {title}
          </p>
          <p className="text-xs sm:text-sm text-[var(--charcoal-light)] leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
