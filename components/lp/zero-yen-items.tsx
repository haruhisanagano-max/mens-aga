'use client'

import * as LucideIcons from 'lucide-react'
import { ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ZERO_YEN_CONTENT } from '@/edit/zero-yen-items'

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (LucideIcons as any)[name] || LucideIcons.HelpCircle
  return <Icon className={className} />
}

export default function ZeroYenItems() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（比較表・マシン解説と完全同期）
  // ---------------------------------------------------------
  const fontTitle = "font-serif"
  const fontBody = "font-sans"

  const sectionPadding = "py-16 sm:py-24" 
  const headerBottomMargin = "mb-10 sm:mb-16"
  
  const cardRounded = "rounded-[2.5rem]" 
  const cardShadow = "shadow-[0_30px_80px_rgba(0,0,0,0.06)]"
  const cardBorder = "border border-gray-100"
  // ---------------------------------------------------------

  return (
    <section id="zero-yen" className={`${sectionPadding} relative bg-white overflow-hidden`}>
      
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {ZERO_YEN_CONTENT.sectionBgImage && (
          <Image 
            src={ZERO_YEN_CONTENT.sectionBgImage} 
            alt="" 
            fill 
            className="object-cover opacity-[0.03]" 
            priority 
          />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          
          {/* 🔴 Header */}
          <div className={`text-center ${headerBottomMargin}`}>
            <motion.span className="text-[10px] font-black tracking-[0.5em] text-[var(--gold-dark)] uppercase block mb-4">
              Hospitality & Quality
            </motion.span>
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-bold text-[var(--charcoal)] tracking-tighter mb-6`}>
              {ZERO_YEN_CONTENT.title}
            </h2>
            <p className="text-[var(--charcoal)] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-80 font-medium whitespace-pre-line">
              {ZERO_YEN_CONTENT.description}
            </p>
          </div>

          {/* 🔴 Item Grid Board */}
          <motion.div 
            className={`relative ${cardRounded} ${cardBorder} bg-white ${cardShadow} py-10 sm:py-16 px-8 sm:px-14 mb-12 sm:mb-20`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[var(--gold)]/20 rounded-full" />

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-y-10 sm:gap-y-14 gap-x-4 sm:gap-x-10 relative z-10">
              {ZERO_YEN_CONTENT.items.map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gray-50 border border-gray-100 group-hover:border-[var(--gold)]/30 transition-all duration-500" />
                    <IconComponent 
                      name={item.icon} 
                      className="w-7 h-7 sm:w-10 sm:h-10 relative z-10 text-[var(--charcoal)] transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="space-y-1">
                    <span className={`${fontBody} text-[11px] sm:text-[13px] font-black text-[var(--charcoal)] uppercase tracking-tight block`}>
                      {item.label}
                    </span>
                    <div className="flex items-center justify-center gap-0.5">
                      <span className={`${fontTitle} text-2xl sm:text-4xl font-black text-[var(--charcoal)] leading-none`}>0</span>
                      <span className="text-[11px] sm:text-sm font-black text-[var(--charcoal)] pt-1 sm:pt-2">円</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

       {/* 🔴 Footer: 幅を安定させ、比較表のデザインと100%同期 */}
<motion.div 
  className="mt-16 sm:mt-24 flex justify-center" // 親を flex center にして中央配置を確実に
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
  {/* 修正ポイント: 
    1. inline-flex を flex w-full に変更（幅を安定させる）
    2. max-w-4xl mx-auto を維持（比較表と横幅を揃える）
    3. shadow を削除、border-gray-100 のみ（比較表の細枠を再現）
  */}
  <div className="flex flex-col md:flex-row items-center gap-5 px-8 py-6 bg-gray-50 rounded-[2rem] border border-gray-100 w-full max-w-4xl mx-auto">
    
    {/* 左側：アイコン ＆ タイトル */}
    <div className="flex items-center gap-3 shrink-0">
      <ShieldCheck className="w-6 h-6 text-[var(--gold)] shrink-0" />
      <span className={`${fontTitle} text-lg sm:text-xl font-bold text-[var(--charcoal)] whitespace-nowrap uppercase tracking-tight`}>
        Conclusion
      </span>
    </div>

    {/* 中央：縦線（h-6） */}
    <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-4 shrink-0" />

    {/* 右側：テキストコンテンツ（サイズ・太さを他パートと完全同期） */}
    <div className="flex-1 space-y-3">
      <p className={`${fontBody} text-[var(--charcoal)] text-sm sm:text-base font-bold leading-relaxed text-center md:text-left whitespace-pre-line`}>
        {ZERO_YEN_CONTENT.footer.text1}
      </p>
      
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-1 gap-y-1">
        <p className={`${fontBody} text-[var(--charcoal)] text-sm sm:text-base font-bold`}>
          {ZERO_YEN_CONTENT.footer.text2_pre}
        </p>
        <span className="text-[var(--gold-dark)] font-black text-sm sm:text-base border-b-2 border-[var(--gold)]/30 pb-0.5">
          {ZERO_YEN_CONTENT.footer.text2_highlight}
        </span>
        <p className={`${fontBody} text-[var(--charcoal)] text-sm sm:text-base font-bold`}>
          {ZERO_YEN_CONTENT.footer.text2_post}
        </p>
      </div>
    </div>

  </div>
</motion.div>

        </motion.div>
      </div>
    </section>
  )
}
