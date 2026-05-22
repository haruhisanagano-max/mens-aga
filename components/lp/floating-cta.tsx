'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Calendar } from 'lucide-react'
import { CTA_MODAL_CONTENT } from '@/edit/cta-modal'

interface FloatingCtaProps {
  onLineClick: () => void
}

export default function FloatingCta({ onLineClick }: FloatingCtaProps) {
  const { floatingCta } = CTA_MODAL_CONTENT

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none">
      <motion.div 
        className="max-w-xl mx-auto flex flex-col items-center pointer-events-auto"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {/* バッジ部分 */}
        <div className="bg-[var(--gold)] text-white text-[10px] sm:text-xs font-bold px-4 py-1 rounded-t-lg shadow-lg mb-[-2px] animate-bounce">
          {floatingCta.badge} {floatingCta.priceText}
        </div>

        {/* ボタン本体 */}
        <div className="flex w-full gap-2 sm:gap-4 h-14 sm:h-16 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] rounded-full overflow-hidden border-2 border-white bg-white/80 backdrop-blur-md p-1.5">
          {/* LINE相談 */}
          <button 
            onClick={onLineClick}
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-full transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-bold leading-tight">{floatingCta.lineButton}</span>
          </button>

          {/* 予約ボタン */}
          <a 
            href="#reservation"
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-[var(--emerald)] hover:bg-[var(--emerald-light)] text-white rounded-full transition-all active:scale-95 shadow-md shadow-[var(--emerald)]/20"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-bold leading-tight">{floatingCta.reserveButton}</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}
