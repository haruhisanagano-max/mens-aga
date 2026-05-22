'use client'

import Image from 'next/image'
import { Minus, ShieldCheck } from 'lucide-react'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン
  // ---------------------------------------------------------
  const fontTitle = "font-serif"
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  
  const cardRounded = "rounded-[2rem]" 
  const cardBorder = "border border-gray-100"
  const cardShadow = "shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
  // ---------------------------------------------------------

  return (
    <section id="pain" className={`${sectionPadding} relative bg-white overflow-hidden`}>
      
      {/* 🖼️ 最背面：背景テクスチャ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02]" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header */}
        <div className={`text-center ${headerBottomMargin}`}>
          <span className="text-[10px] font-black tracking-[0.5em] text-[var(--gold-dark)] uppercase block mb-4">
            Comfort & Science
          </span>
          <h2 className={`${fontTitle} text-3xl sm:text-5xl font-bold text-[var(--charcoal)] mb-6`}>
            {PAIN_CONTENT.mainTitle.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-[var(--charcoal-light)] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-80 font-medium">
            {PAIN_CONTENT.mainSubtitle}
          </p>
        </div>

        {/* 🔴 Measures (各施策) */}
        <div className="space-y-12 sm:space-y-24 mb-20">
          {PAIN_CONTENT.measures.map((m, i) => (
            <div key={i} className={`relative grid lg:grid-cols-12 gap-0 items-center`}>
              
              {/* 背後の特大ID */}
              <span className={`${fontTitle} text-[15rem] sm:text-[25rem] font-black text-[var(--gold)] opacity-[0.03] absolute -top-16 ${i % 2 === 0 ? '-right-4' : '-left-4'} italic pointer-events-none select-none z-0`}>
                {m.id}
              </span>

              {/* 画像フィールド */}
              <div className={`lg:col-span-7 relative z-10 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className={`${cardRounded} ${cardBorder} overflow-hidden aspect-[16/10] bg-gray-50 relative`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-white/5" />
                </div>
              </div>

              {/* テキストパネル */}
              <div className={`
                lg:col-span-6 
                relative z-20 
                mt-[-40px] lg:mt-0 
                ${i % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} 
                bg-white p-8 sm:p-14 ${cardRounded} ${cardBorder} ${cardShadow}
              `}>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className={`${fontTitle} text-xl font-bold italic text-[var(--gold-dark)]`}>{m.id}</span>
                    <Minus className="w-8 h-[1px] text-[var(--gold)]/20" />
                    <span className="text-[9px] font-black text-gray-300 tracking-[0.2em] uppercase">Commitment</span>
                  </div>
                  
                  <h4 className={`${fontTitle} text-2xl sm:text-3xl font-bold text-[var(--charcoal)] tracking-tight`}>
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-gray-50 rounded-sm text-[9px] font-black text-[var(--gold-dark)] tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-[var(--charcoal-light)] leading-loose font-medium opacity-80 pt-2 border-t border-gray-50">
                    {m.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：余白・密度調整済み完成版 */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-gray-100">
          <div className="flex flex-col items-center text-center">
            
            <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--gold)] to-transparent mb-8" />

            <div className="space-y-8">
              <h3 className={`${fontTitle} text-2xl sm:text-4xl font-bold text-[var(--charcoal)] leading-tight tracking-tighter`}>
                {PAIN_CONTENT.reassurance.title}
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-[var(--charcoal-light)] text-sm sm:text-base font-medium opacity-70">
                    {PAIN_CONTENT.reassurance.body1}
                  </p>
                  <div className="relative inline-block">
                    <span className="relative z-10 text-[var(--charcoal)] font-black text-xl sm:text-3xl tracking-tighter border-b-[3px] border-[var(--gold)]/20">
                      {PAIN_CONTENT.reassurance.body2}
                    </span>
                  </div>
                </div>

                <p className="whitespace-pre-line text-[var(--gold-dark)] font-black italic text-lg sm:text-2xl tracking-tighter leading-snug max-w-2xl mx-auto">
                  {PAIN_CONTENT.reassurance.body3}
                </p>
              </div>

              <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full text-[var(--charcoal-light)] text-[10px] sm:text-xs border border-gray-100 font-bold">
                <ShieldCheck className="w-4 h-4 text-[var(--gold)]" />
                <span>{PAIN_CONTENT.reassurance.note}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
