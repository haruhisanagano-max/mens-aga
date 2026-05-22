'use client'

import { Check, Star, Crown, X, ShieldCheck, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { COMPARISON_CONTENT } from '@/edit/comparison-content'

export default function Comparison() {
  // ---------------------------------------------------------
  // ★ 統一感・精密調整リモコン
  // ---------------------------------------------------------
  const fontTitle = "font-serif"
  const fontBody = "font-sans"

  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-10 sm:mb-16"

  const headerHeight = "h-24 sm:h-32"
  const rowHeight = "h-12 sm:h-16"
  // ---------------------------------------------------------

  return (
    <section id="comparison" className={`${sectionPadding} relative bg-white overflow-hidden`}>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
        >
          
          {/* Header */}
          <div className={`text-center ${headerBottomMargin}`}>
            <motion.span className="text-[10px] font-black tracking-[0.5em] text-[var(--gold-dark)] uppercase block mb-4">
              Comparison Guide
            </motion.span>
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-bold text-[var(--charcoal)] mb-6 uppercase`}>
              {COMPARISON_CONTENT.title}
            </h2>
            <p className="text-[var(--charcoal-light)] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-80">
              {COMPARISON_CONTENT.subtitle}
            </p>
          </div>

          {/* 🔴 メイン比較ボード */}
          <div className="relative pt-6 sm:pt-10">
            <div className="relative z-10 grid grid-cols-12 items-stretch border-y border-gray-100">
              
              {/* 1. 項目ラベル列：文字色を黒系に調整 */}
              <div className="col-span-4 flex flex-col">
                <div className={`${headerHeight} flex items-end pb-4 border-b border-gray-100`}>
                  <span className="text-[9px] sm:text-[11px] font-black text-gray-300 uppercase tracking-widest">Check Points</span>
                </div>
                {COMPARISON_CONTENT.rows.map((row, i) => (
                  <div key={i} className={`flex items-center ${rowHeight} border-b border-gray-50 last:border-0`}>
                    <span className={`${fontBody} text-[10px] sm:text-sm font-bold text-[var(--charcoal)] opacity-70`}>
                      {row.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* 2. 当院列：真ん中だけが浮く（変更なし） */}
              <div className="col-span-4 relative overflow-visible">
                <div 
                  className="absolute inset-x-0 -top-4 -bottom-4 z-20 flex flex-col bg-white border border-gray-100 shadow-2xl rounded-[2rem]"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--gold)]/10 border border-[var(--gold)]/20 px-4 py-1 rounded-full flex items-center gap-2 z-30 whitespace-nowrap">
                    <TrendingUp className="w-3 h-3 text-[var(--gold-dark)]" />
                    <span className="text-[8px] sm:text-[10px] font-black text-[var(--gold-dark)] uppercase">Our Choice</span>
                  </div>

                  <div className={`${headerHeight} flex flex-col items-center justify-center border-b border-gray-100 bg-gray-50/30 rounded-t-[2rem]`}>
                    <span className={`${fontTitle} text-sm sm:text-xl font-bold text-[var(--charcoal)]`}>{COMPARISON_CONTENT.labels.ourClinic}</span>
                    <span className="text-[var(--gold-dark)] text-[9px] sm:text-xs font-black uppercase tracking-[0.2em]">{COMPARISON_CONTENT.labels.ourMethod}</span>
                  </div>

                  {COMPARISON_CONTENT.rows.map((row, i) => (
                    <div key={i} className={`flex items-center justify-center ${rowHeight} border-b border-gray-50 last:border-0`}>
                      <span className={`${fontBody} text-[11px] sm:text-lg font-black text-[var(--charcoal)] tracking-tighter`}>
                        {row.us}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. 他院列：ズレを解消し、文字色を黒に統一 */}
              <div className="col-span-4 flex flex-col">
                {/* 🛠️ 修正：items-end pb-4 に変更して、左の「Check Points」と高さを完全に揃える */}
                <div className={`${headerHeight} flex flex-col items-center justify-end pb-4 border-b border-gray-100`}>
                  <span className={`${fontBody} text-[10px] sm:text-sm font-bold text-[var(--charcoal)] opacity-40 mb-1`}>{COMPARISON_CONTENT.labels.otherClinic}</span>
                  <span className="text-gray-300 text-[8px] sm:text-[10px] font-medium uppercase tracking-[0.1em]">{COMPARISON_CONTENT.labels.otherMethod}</span>
                </div>
                {COMPARISON_CONTENT.rows.map((row, i) => (
                  <div key={i} className={`flex items-center justify-center ${rowHeight} border-b border-gray-100 last:border-0`}>
                    {/* 🛠️ 修正：text-[var(--charcoal)] に変更し、黒文字化（不透明度で他院感を出す） */}
                    <span className={`${fontBody} text-[9px] sm:text-xs font-medium text-[var(--charcoal)] opacity-40 text-center`}>
                      {row.others}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <motion.div 
            className="mt-16 sm:mt-24 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="inline-flex flex-col md:flex-row items-center gap-4 px-8 py-6 bg-gray-50 rounded-[2rem] border border-gray-100 max-w-4xl mx-auto">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[var(--gold)] shrink-0" />
                <span className={`${fontTitle} text-lg sm:text-xl font-bold text-[var(--charcoal)] whitespace-nowrap`}>
                  Conclusion
                </span>
              </div>
              <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-4" />
              <p className={`${fontBody} text-[var(--charcoal-light)] leading-relaxed text-xs sm:text-sm font-medium text-left`}>
                {COMPARISON_CONTENT.point.text}
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
