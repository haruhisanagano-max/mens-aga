'use client'

import { motion } from 'framer-motion'

interface CaseStudyCardProps {
  area: string
  sessions?: number
  index: number
}

export default function CaseStudyCard({
  area,
  sessions = 5,
  index,
}: CaseStudyCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[var(--mint-dark)] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-[var(--mint)] to-[var(--emerald)]/30 flex items-center justify-center relative">
        <div className="text-center p-2 sm:p-4">
          <p className="text-white/90 font-medium text-xs sm:text-sm md:text-base">{area}脱毛</p>
          <p className="text-[10px] sm:text-xs text-white/70 mt-0.5 sm:mt-1">Before → After</p>
        </div>
      </div>
      <div className="p-2 sm:p-3 md:p-4 text-center">
        <p className="text-[10px] sm:text-xs md:text-sm text-[var(--charcoal)]">{area}脱毛 / {sessions}回</p>
      </div>
    </motion.div>
  )
}
