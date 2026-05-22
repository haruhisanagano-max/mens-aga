'use client'

import { MessageCircle, User, ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HONEST_QA_CONTENT } from '@/edit/honest-qa-content'

export default function HonestQA() {
  // ---------------------------------------------------------
  // ★ デザイン凝縮リモコン
  // ---------------------------------------------------------
  const fontTitle = "font-serif"
  const fontBody = "font-sans"

  const sectionPadding = "py-16 sm:py-24" 
  const headerBottomMargin = "mb-10 sm:mb-14" 
  
  const cardRounded = "rounded-[2rem]" 
  const cardShadow = "shadow-[0_15px_45px_rgba(0,0,0,0.04)]"
  const cardBorder = "border border-gray-100"

  const userBubbleBg = "bg-gray-50"
  const staffBubbleBg = "bg-white"
  // ---------------------------------------------------------

  return (
    <section id="honest-qa" className={`${sectionPadding} relative bg-white overflow-hidden`}>
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        {HONEST_QA_CONTENT.sectionBgImage && (
          <Image 
            src={HONEST_QA_CONTENT.sectionBgImage} 
            alt="" 
            fill 
            className="object-cover opacity-[0.02]" 
            priority 
          />
        )}
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header: 変更なし */}
        <div className={`text-center ${headerBottomMargin}`}>
          <motion.span className="text-[10px] font-black tracking-[0.5em] text-[var(--gold-dark)] uppercase block mb-3">
            Real & Sincere
          </motion.span>
          <h2 className={`${fontTitle} text-3xl sm:text-5xl font-bold text-[var(--charcoal)] tracking-tighter mb-4`}>
            {HONEST_QA_CONTENT.mainTitle}
          </h2>
          <p className="text-[var(--charcoal-light)] text-sm sm:text-base max-w-xl mx-auto leading-relaxed opacity-80 font-medium">
            {HONEST_QA_CONTENT.subtitle}
          </p>
        </div>

        {/* 🔴 Chat Area: 変更なし */}
        <div className="space-y-8 sm:space-y-10 mb-16 sm:mb-20">
          {HONEST_QA_CONTENT.items.map((item, index) => (
            <div key={index} className="space-y-4">
              <motion.div 
                className="flex justify-end items-start gap-3 pl-8 sm:pl-16"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-end gap-1.5">
                  <div className={`px-5 py-3.5 ${userBubbleBg} ${cardRounded} rounded-tr-sm shadow-sm`}>
                    <p className="text-[var(--charcoal)] font-bold text-sm sm:text-base leading-relaxed">
                      {item.question}
                    </p>
                  </div>
                  <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mr-2">Patient</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0 shadow-inner">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>

              <motion.div 
                className="flex justify-start items-start gap-3 pr-8 sm:pr-16"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-9 h-9 rounded-full bg-white border border-[var(--gold)]/20 flex items-center justify-center shrink-0 shadow-sm relative">
                  <span className="text-[8px] font-black text-[var(--gold-dark)]">Staff</span>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <div className={`px-5 py-4 ${staffBubbleBg} ${cardRounded} rounded-tl-sm ${cardShadow} ${cardBorder} relative overflow-hidden`}>
                    <div className="absolute top-0 left-0 w-1 h-full bg-[var(--gold)]/20" />
                    <p className="text-[var(--charcoal-light)] text-xs sm:text-sm leading-loose font-medium">
                      {item.answer}
                    </p>
                  </div>
                  <span className="text-[9px] font-black text-[var(--gold-dark)] uppercase tracking-widest ml-2">Official Answer</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* 🔴 Footer: 「Conclusionバー」を共通デザインに完全同期 */}
        <motion.div 
          className="max-w-4xl mx-auto flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {/* shadowを削除し、py-6、border-gray-100、w-full max-w-4xl で同期 */}
          <div className="flex flex-col md:flex-row items-center gap-5 px-8 py-6 bg-gray-50 rounded-[2rem] border border-gray-100 w-full max-w-4xl mx-auto">
            
            {/* 左側：共通アイコン ＆ タイトル */}
            <div className="flex items-center gap-3 shrink-0">
              <ShieldCheck className="w-6 h-6 text-[var(--gold)] shrink-0" />
              <span className={`${fontTitle} text-lg sm:text-xl font-bold text-[var(--charcoal)] whitespace-nowrap uppercase tracking-tight`}>
                Conclusion
              </span>
            </div>

            {/* 中央：繊細な縦線（h-6） */}
            <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-4 shrink-0" />

            {/* 右側：コンテンツ（テキスト・Minusアイコン等は維持） */}
            <div className="flex-1">
              <p className={`${fontBody} text-[var(--charcoal)] text-sm sm:text-base font-bold leading-relaxed text-center md:text-left`}>
                {HONEST_QA_CONTENT.footerMessage}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                <Minus className="w-4 h-[1px] text-[var(--gold)]/30" />
                <span className="text-[10px] font-black text-[var(--gold-dark)] uppercase tracking-widest">
                  Personal Counseling Available
                </span>
              </div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  )
}
