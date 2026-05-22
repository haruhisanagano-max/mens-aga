'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CTA_CONTENT } from '@/edit/cta-content'
import OnlineGuideModal from '@/components/lp/online-guide-modal'
import LineModal from '@/components/lp/line-modal'

export default function CtaSection() {
  const fontTitle = "font-serif"
  const fontBody = "font-sans"

  const [isGuideOpen, setIsGuideOpen] = useState(false)
  const [isLineOpen, setIsLineOpen] = useState(false)

  const openGuide = () => setIsGuideOpen(true)
  const closeGuide = () => setIsGuideOpen(false)

  const handleOpenLineFromGuide = useCallback(() => {
    setIsGuideOpen(false)
    setTimeout(() => {
      setIsLineOpen(true)
    }, 150)
  }, [])

  // デザイン設定
  const sectionBgGradient = "bg-gradient-to-b from-white via-[#FDFBF7] to-white"
  const cardRounded = "rounded-[2.5rem]" 
  const cardShadow = "shadow-[0_20px_60px_rgba(201,169,98,0.15)]"
  const goldTextGlow = "drop-shadow-[0_2px_12px_rgba(201,169,98,0.3)]"

  return (
    <section className={`py-6 flex justify-center px-4 ${sectionBgGradient}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // 🔴 !p-0 を追加して、globals.css の 1.5rem パディングを強制解除。これで画像が端まで届きます。
        className={`w-full max-w-[820px] bg-white ${cardRounded} border-[1px] border-[var(--gold)]/20 ${cardShadow} flex flex-row items-stretch relative overflow-hidden z-10 !p-0`}
      >
        {/* 🔴 左側：画像エリア（幅を35%〜40%で固定。隙間ゼロ） */}
        <div className="w-[35%] sm:w-[40%] relative shrink-0">
          {CTA_CONTENT.image ? (
            <Image 
              src={CTA_CONTENT.image} 
              alt="" 
              fill 
              className="object-cover" 
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-[#F9F6F0]" />
          )}
        </div>

        {/* 🔴 右側：テキストエリア（内側にだけ適切な余白をつける） */}
        <div className="flex-1 p-5 sm:p-10 flex flex-col justify-center relative bg-white">
          {/* 背景のキラキラ（スマホでは少し小さく） */}
          <div className="absolute top-2 right-4 font-serif italic text-[40px] sm:text-[80px] text-[var(--gold)]/10 font-black pointer-events-none select-none">
            ✧
          </div>

          <div className="space-y-3 sm:space-y-6 relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black tracking-[0.3em] text-[var(--gold-dark)] uppercase">Invitation</span>
              <div className="flex-1 h-[1px] bg-[var(--gold)]/20" />
            </div>
            
            <h2 className={`${fontTitle} text-[16px] sm:text-3xl font-bold text-[var(--charcoal)] tracking-tighter leading-[1.3] ${goldTextGlow} whitespace-pre-wrap text-left`}>
              {CTA_CONTENT.title}
            </h2>

            {/* ボタンエリア：スマホでギチギチにならないよう調整 */}
            <div className="flex flex-row gap-2 pt-1">
              <Button 
                asChild
                className="flex-1 bg-[var(--charcoal)] text-white hover:bg-black font-black py-5 sm:py-8 rounded-full shadow-lg transition-all active:scale-95"
              >
                <a href="#reservation" className="flex items-center justify-center">
                  <span className="text-[10px] sm:text-base tracking-tighter whitespace-nowrap">
                    {CTA_CONTENT.reserveButtonText}
                  </span>
                </a>
              </Button>

              <Button 
                onClick={openGuide} 
                className="flex-1 bg-white text-[var(--gold-dark)] hover:bg-gray-50 font-black py-5 sm:py-8 rounded-full border border-[var(--gold)]/30 shadow-md transition-all active:scale-95"
              >
                <span className="text-[10px] sm:text-base tracking-tighter whitespace-nowrap">
                  {CTA_CONTENT.onlineButtonText}
                </span>
              </Button>
            </div>

            {/* 補足テキスト */}
            <div className="pt-3 border-t border-gray-100">
              <p className="text-[8px] sm:text-[10px] font-black text-gray-400 uppercase tracking-[0.1em]">
                {CTA_CONTENT.note}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <OnlineGuideModal isOpen={isGuideOpen} onClose={closeGuide} onOpenLineModal={handleOpenLineFromGuide} />
      <LineModal isOpen={isLineOpen} onClose={() => setIsLineOpen(false)} />
    </section>
  )
}
