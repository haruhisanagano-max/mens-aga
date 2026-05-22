'use client'

import { Star, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

interface HeroPriceCardProps {
  planName: string
  originalPrice: number
  campaignPrice: number
  monthlyPrice: number
  discountPercent: number
}

export default function HeroPriceCard({
  planName,
  originalPrice,
  campaignPrice,
  monthlyPrice,
  discountPercent,
}: HeroPriceCardProps) {
  return (
    <motion.div 
      className="relative bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border-2 border-[var(--gold)]/50 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* Gold corner accent */}
      <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-bl from-[var(--gold)] to-transparent opacity-20 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-tr from-[var(--gold)] to-transparent opacity-20 rounded-tr-full" />
      
      <div className="relative">
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-3 sm:mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--gold)] fill-[var(--gold)]" />
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--gold)] fill-[var(--gold)]" />
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--gold)] fill-[var(--gold)]" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-[var(--gold)] tracking-wider">期間限定キャンペーン</span>
        </div>
        
        <div className="text-center lg:text-left mb-2 sm:mb-3">
          <span className="inline-block px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] text-xs sm:text-sm font-medium rounded-full mb-2 sm:mb-3">
            {planName}
          </span>
        </div>
        
        <div className="flex items-end justify-center lg:justify-start gap-2 mb-1 sm:mb-2">
          <span className="text-sm sm:text-lg text-[var(--charcoal-light)] line-through">¥{originalPrice.toLocaleString()}</span>
          <span className="text-xs sm:text-sm text-[var(--charcoal-light)]">→</span>
        </div>
        
        <div className="flex items-baseline justify-center lg:justify-start gap-1 flex-wrap">
          <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--gold)]" style={{ textShadow: '2px 2px 4px rgba(201, 169, 98, 0.2)' }}>
            ¥{campaignPrice.toLocaleString()}
          </span>
          <span className="text-sm sm:text-lg text-[var(--charcoal-light)]">（税込）</span>
        </div>
        
        <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-3 sm:mt-4 flex-wrap">
          <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-red-50 text-red-600 text-xs sm:text-sm font-bold rounded-full border border-red-200">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            {discountPercent}%OFF
          </span>
          <span className="text-xs sm:text-sm text-[var(--charcoal-light)]">月々 <span className="font-bold text-[var(--charcoal)]">¥{monthlyPrice.toLocaleString()}</span>〜</span>
        </div>
      </div>
    </motion.div>
  )
}
