'use client'

import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

interface BeforeAfterImageProps {
  caption?: string
}

export default function BeforeAfterImage({
  caption = '症例写真：全身脱毛5回コース完了後（※効果には個人差があります）',
}: BeforeAfterImageProps) {
  return (
    <motion.div 
      className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-[var(--mint-dark)] p-3 sm:p-4 md:p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] bg-gradient-to-r from-[var(--mint)] via-[var(--mint-light)] to-white rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner">
        {/* Before side */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 flex items-center justify-center bg-[var(--emerald)]/10">
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold text-[var(--charcoal-light)]/70 mb-1 sm:mb-2">Before</p>
            <p className="text-xs sm:text-sm text-[var(--charcoal-light)]/50">施術前</p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="absolute left-1/2 top-4 bottom-4 w-px bg-[var(--gold)]/50 transform -translate-x-1/2" />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--gold)]" />
        </div>
        
        {/* After side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center bg-white/50">
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold text-[var(--charcoal)] mb-1 sm:mb-2">After</p>
            <p className="text-xs sm:text-sm text-[var(--charcoal-light)]">施術後</p>
          </div>
        </div>
      </div>
      
      <p className="text-center text-xs sm:text-sm text-[var(--charcoal-light)] mt-3 sm:mt-4 px-2">
        {caption}
      </p>
    </motion.div>
  )
}
