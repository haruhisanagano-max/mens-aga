'use client'

import { Zap, ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MACHINE_CONTENT } from '@/edit/machine-content'

export default function MachineDeepDive() {
  const fontTitle = "font-serif"
  const sectionPadding = "pt-16 sm:pt-28 pb-13" // 🔴 調整ポイント：最下部の余白 (pb-XX) をここで調整
  const headerBottomMargin = "mb-12 sm:mb-20"
  
  // 🔴 調整ポイント：3連カードのテキスト部分の余白
  // 今「p-8 sm:p-14」だったものを、少しタイトにするなら「p-6 sm:p-10」などに変更
  const cardTextPadding = "p-6 sm:p-10" 

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    <section id="machine" className={`${sectionPadding} relative bg-white overflow-hidden`}>
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        {MACHINE_CONTENT.sectionBgImage && (
          <Image src={MACHINE_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-20" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          
          {/* 🔴 Header */}
          <div className={`text-center ${headerBottomMargin}`}>
            <motion.span className="text-[10px] font-black tracking-[0.5em] text-[var(--gold-dark)] uppercase block mb-4">
              Advanced Technology
            </motion.span>
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-bold text-[var(--charcoal)] mb-6`}>
              {MACHINE_CONTENT.title}
            </h2>
            <p className="text-[var(--charcoal-light)] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-80 font-medium">
              {MACHINE_CONTENT.subtitle}
            </p>
          </div>

          {/* 🔴 1. スペック解説カード */}
          <motion.div 
            className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.05)] mb-10"
            style={gpuStyle}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full overflow-hidden">
              <div className="relative aspect-[12/9] bg-white w-full overflow-hidden">
                {MACHINE_CONTENT.diagram.image && (
                  <Image 
                    src={MACHINE_CONTENT.diagram.image} 
                    alt="Machine Visual" 
                    fill 
                    className="object-contain" 
                  />
                )}
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-100 shadow-sm">
                    <Zap className="w-3.5 h-3.5 text-[var(--gold)] fill-[var(--gold)]" />
                    <span className="text-[9px] font-black tracking-widest text-[var(--charcoal)] uppercase">
                      {MACHINE_CONTENT.diagram.limitedBadge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12 flex flex-col justify-center w-full min-w-0">
                <div className="space-y-10 w-full">
                  {MACHINE_CONTENT.lasers.map((laser, idx) => (
                    <div key={idx} className="relative w-full max-w-full overflow-hidden">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3 w-full">
                        <h4 className={`${fontTitle} text-lg sm:text-xl font-bold text-[var(--charcoal)] break-all`}>
                          {laser.name}
                        </h4>
                        <span className="text-[var(--gold-dark)] font-black text-[10px] tracking-widest uppercase italic shrink-0">
                          {laser.wavelength}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[var(--charcoal-light)] leading-relaxed mb-4 font-medium opacity-80 break-all w-full">
                        {laser.feature}
                      </p>
                      <div className="flex flex-wrap gap-2 w-full">
                        {laser.points.map((p, pi) => (
                          <span key={pi} className="px-3 py-1 bg-gray-50 rounded-full text-[9px] font-black text-gray-400 border border-gray-100 whitespace-normal text-center">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 🔴 2. 特徴ギャラリー */}
          <div className="mb-10 grid grid-cols-3 gap-3 sm:gap-6">
            {MACHINE_CONTENT.features.map((f, i) => (
              <motion.div key={i} className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg border border-white" whileHover={{ y: -5 }}>
                <Image src={f.img} alt="" fill className="object-cover" />
              </motion.div>
            ))}
          </div>

          {/* 🔴 3. ロングカード（ここを調整） */}
          <motion.div className="overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white shadow-2xl">
            {MACHINE_CONTENT.reasons.map((reason, i) => (
              <div key={i} className={`grid md:grid-cols-2 items-center ${i !== 0 ? 'border-t border-gray-50' : ''}`}>
                <div className={`relative aspect-video bg-white overflow-hidden ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <Image src={reason.img} alt="" fill className="object-contain" />
                </div>
                {/* 🔴 cardTextPadding を適用 */}
                <div className={`${cardTextPadding} relative overflow-hidden`}>
                  <span className={`${fontTitle} italic text-[8rem] sm:text-[12rem] absolute -top-4 -right-4 opacity-[0.03] select-none font-black text-[var(--gold)]`}>
                    {i + 1}
                  </span>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <span className={`${fontTitle} text-xl font-bold italic text-[var(--gold-dark)]`}>0{i + 1}</span>
                      <Minus className="w-6 h-[1px] text-[var(--gold)]/30" />
                    </div>
                    <h3 className={`${fontTitle} text-xl sm:text-2xl font-bold text-[var(--charcoal)] mb-3 sm:mb-5`}>
                      {reason.title}
                    </h3>
                    <p className="text-[var(--charcoal-light)] text-xs sm:text-sm leading-loose font-medium opacity-80">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

         {/* 🔴 下部注釈パーツ */}
<div className="mt-10 sm:mt-16 text-center">
  <div className="inline-flex items-start gap-3 px-8 py-4 bg-gray-50 rounded-2xl text-[var(--charcoal-light)] text-[10px] sm:text-xs border border-gray-100 font-bold tracking-tight">
    {/* アイコンが文章の1行目に揃うように mt-0.5 を追加 */}
    <ShieldCheck className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
    
    {/* 修正ポイント: whitespace-pre-line を追加し、左寄せ(text-left)にする */}
    <span className="whitespace-pre-line text-left">
      {"※厚生労働省に承認された正規品のみを使用しております。\n※日本国内の医療レーザー脱毛機における、累積導入台数および医師へのブランド認知度調査（メーカー提供データに基づく）\n※シネロン・キャンデラ社調べ（2024年時点。世界86カ国以上の医療機関で導入）"}
    </span>
  </div>
</div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-white" /> 
    </section>
  )
}
