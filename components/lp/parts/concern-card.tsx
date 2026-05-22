'use client'

import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

interface ConcernCardProps {
  title: string
  shortText: string
  solution: string
  index: number
}

export default function ConcernCard({
  title,
  shortText,
  solution,
  index,
}: ConcernCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[var(--mint-dark)] overflow-hidden group hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Large Image Area */}
      <div className="aspect-[4/3] bg-gradient-to-br from-[var(--mint)] via-[var(--mint-light)] to-white flex items-center justify-center relative overflow-hidden">
        {/* Placeholder for illustration/photo */}
        <div className="text-center p-4 sm:p-6">
          <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-4 rounded-full bg-white/50 flex items-center justify-center">
            <span className="text-2xl sm:text-4xl text-[var(--charcoal-light)]/50">?</span>
          </div>
          <p className="text-xs sm:text-sm text-[var(--charcoal-light)]/70">イラスト・画像</p>
        </div>
        
        {/* Concern text overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--charcoal)]/80 to-transparent p-3 sm:p-4 pt-8 sm:pt-10">
          <h3 className="font-serif text-sm sm:text-base md:text-lg font-semibold text-white whitespace-pre-line leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Solution Section */}
      <div className="p-3 sm:p-4 md:p-5 bg-[var(--mint-light)]/30">
        <p className="text-[10px] sm:text-xs text-[var(--charcoal-light)] mb-1 sm:mb-2">{shortText}</p>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)] flex-shrink-0" />
          <p className="text-xs sm:text-sm text-[var(--charcoal)] font-semibold">
            {solution}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
