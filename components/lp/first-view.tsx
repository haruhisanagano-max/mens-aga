'use client'

import { Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { FIRST_VIEW_CONTENT } from '@/edit/first-view-content'

export default function FirstView() {
  const mainHeadline = FIRST_VIEW_CONTENT?.mainHeadline || {}
  const trustBadges = FIRST_VIEW_CONTENT?.trustBadges || []
  const mistColor = FIRST_VIEW_CONTENT?.mistColor || "#FDFBF7"

  return (
    <section 
      className="relative w-full bg-[#FDFBF7] p-0! m-0!" /* 左右paddingを一瞬解除（画像全幅のため） */
    >
      {/* 🖼️ 背景画像エリア：aspect-square を指定することで 820px幅の時は高さ820pxを物理的に確保する */}
      <div className="relative w-full aspect-square overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${FIRST_VIEW_CONTENT?.spImage})` }}
        />
        
        {/* 🌫️ 霧の演出 */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: `linear-gradient(to top, 
              ${mistColor}E6 0%, 
              ${mistColor}00 20%)` 
          }}
        />
      </div>

      {/* 📝 テキストエリア：画像の下に配置。ネガティブマージンで少しだけ画像に被せて「霧」との一体感を出す */}
      <div className="relative w-full px-6 pb-20 mt-[-120px] sm:mt-[-160px] z-10">
        <div className="flex flex-col items-center">
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-sans text-5xl sm:text-7xl font-black text-[#111] leading-[1.05] drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
              <span className="block tracking-tighter">{mainHeadline.line1}</span>
              <span className="block text-[var(--gold-dark)]">{mainHeadline.highlight}</span>
            </h1>
            <p className="mt-4 text-[12px] sm:text-sm text-[#333] font-bold tracking-widest">
              {FIRST_VIEW_CONTENT?.subHeadline}
            </p>
          </motion.div>

          <div className="mt-10 w-full flex flex-col items-center gap-8">
            <div className="flex items-center justify-center gap-x-6 gap-y-2 flex-wrap opacity-60">
              {trustBadges.map((badge: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-[9px] text-[#111] font-black tracking-widest uppercase">
                  <Minus className="w-3 h-[1px] bg-[var(--gold)]" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
