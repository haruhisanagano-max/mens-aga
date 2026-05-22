'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface CampaignPriceCardProps {
  planName: string
  originalPrice: number
  campaignPrice: number
  discountPercent: number
}

export default function CampaignPriceCard({
  planName,
  originalPrice,
  campaignPrice,
  discountPercent,
}: CampaignPriceCardProps) {
  return (
    <motion.div 
      className="bg-[#1A1A1A] rounded-lg sm:rounded-xl p-4 sm:p-6 border border-[#C9A962]/20 hover:border-[#C9A962]/50 transition-colors"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-xs sm:text-sm text-[#C9A962] mb-1 sm:mb-2 font-medium tracking-wide">
        {planName}
      </div>
      <div className="flex items-baseline gap-2 mb-1 sm:mb-2">
        <span className="text-xs sm:text-sm text-white/40 line-through">
          ¥{originalPrice.toLocaleString()}
        </span>
        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#C9A962]" />
      </div>
      <div className="flex items-baseline gap-1 flex-wrap">
        <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          ¥{campaignPrice.toLocaleString()}
        </span>
        <span className="text-xs sm:text-sm text-white/50">（税込）</span>
      </div>
      <div className="mt-3 sm:mt-4 inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#C9A962] text-black text-[10px] sm:text-xs font-bold rounded-full tracking-wider">
        {discountPercent}%OFF
      </div>
    </motion.div>
  )
}
