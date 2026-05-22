'use client'

import { Users } from 'lucide-react'
import { motion } from 'framer-motion'

interface LimitedSpotsAlertProps {
  totalSpots: number
  remainingSpots: number
}

export default function LimitedSpotsAlert({
  totalSpots,
  remainingSpots,
}: LimitedSpotsAlertProps) {
  return (
    <motion.div 
      className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-white py-2 sm:py-3 bg-red-950/30 border border-red-500/30 rounded-lg flex-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
      <span>
        先着<strong className="text-red-400 text-base sm:text-lg mx-1">{totalSpots}名様</strong>限定
      </span>
      <span className="text-red-400 hidden sm:inline">|</span>
      <span>
        残り<strong className="text-red-400 text-base sm:text-lg mx-1 animate-pulse">{remainingSpots}名</strong>
      </span>
    </motion.div>
  )
}
