'use client'

import { ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { COMPARISON_CONTENT } from '@/edit/comparison-content'

export default function Comparison() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"
  
  // 💡 【間延び解消】
  const sectionPadding = "py-12 sm:py-16" 
  const headerBottomMargin = "mb-8 sm:mb-12"
  const headerHeight = "h-20 sm:h-24"
  const rowHeight = "h-12 sm:h-14"
  const cardRounded = "rounded-xl"

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' }

  // 💡 【透過グラス枠】マシーン・Painと完全同期
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"

  return (
    <section id="comparison" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【修正：左上から右下への斜めレーザー（ \ ）】
           135deg を 45deg に修正しました。これで間違いなく左上から右下へ走る線になります！ */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80 overflow-hidden">
        {/* 左上から右下へ走る鋭い斜めの光の線 */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(45deg,transparent_49.8%,#38bdf8_50%,transparent_50.2%)] blur-[1px]" />
        {/* 周囲に広がる強力な光のモヤ */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(45deg,transparent_35%,#0ea5e9_50%,transparent_65%)] blur-[120px] opacity-50" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {COMPARISON_CONTENT.sectionBgImage && (
          <Image src={COMPARISON_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          
          {/* 🔴 Header */}
          <div className={`text-center ${headerBottomMargin}`}>
            <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-3 uppercase drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
              Comparison Guide
            </span>
            <div className="relative inline-block">
              <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]`}>
                {COMPARISON_CONTENT.title}
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed font-medium opacity-60">
              {COMPARISON_CONTENT.subtitle}
            </p>
          </div>

          {/* 🔴 メイン比較ボード */}
          <div className="relative pt-2">
            <div className="relative z-10 grid grid-cols-12 items-stretch border-y border-slate-700/40">
              
              {/* 1️⃣ 項目ラベル列（左側） */}
              <div className="col-span-4 flex flex-col pl-4 sm:pl-6 pr-2 border-r border-slate-700/40 relative z-10">
                <div className={`${headerHeight} flex flex-col justify-end pb-4 border-b border-slate-700/40`}>
                  <span className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest">Check Points</span>
                </div>
                {COMPARISON_CONTENT.rows.map((row, i) => (
                  <div key={i} className={`flex items-center ${rowHeight} border-b border-slate-700/40 last:border-0`}>
                    <span className="font-sans text-[10px] sm:text-xs font-bold text-slate-200 tracking-wide">
                      {row.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* 2️⃣ 当院列（中央）：透明ガラスカード */}
              <div className="col-span-4 relative overflow-visible">
                
                {/* 背景用ガラスカード */}
                <div 
                  className={`absolute inset-x-0.5 -top-3 -bottom-3 z-0 ${cardRounded} ${glassBorder} shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-white/[0.02] backdrop-blur-md overflow-hidden`}
                  style={gpuStyle}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none z-0" />
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_20px_rgba(56,189,248,0.8)] pointer-events-none z-20" />
                  <div className="absolute top-0 inset-x-0 h-[60%] bg-gradient-to-b from-sky-500/10 via-transparent to-transparent pointer-events-none z-0" />
                </div>
                
                {/* 中央列のテキストコンテンツ */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`${headerHeight} flex flex-col items-center justify-end pb-4 border-b border-slate-700/40`}>
                    <span className="text-white text-xs sm:text-sm font-extrabold tracking-wide mb-0.5 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                      {COMPARISON_CONTENT.labels.ourClinic}
                    </span>
                    <span className="text-sky-400 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] drop-shadow-[0_0_5px_rgba(56,189,248,0.5)]">
                      {COMPARISON_CONTENT.labels.ourMethod}
                    </span>
                  </div>

                  {COMPARISON_CONTENT.rows.map((row, i) => (
                    <div key={i} className={`flex items-center justify-center ${rowHeight} border-b border-slate-700/40 last:border-0 px-1 sm:px-2 text-center`}>
                      <span className="font-sans text-[11px] sm:text-sm font-black text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                        {row.us}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3️⃣ 他院列（右側） */}
              <div className="col-span-4 flex flex-col pl-2 pr-4 sm:pr-6 relative z-10">
                <div className={`${headerHeight} flex flex-col items-center justify-end pb-4 border-b border-slate-700/40`}>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 mb-0.5">{COMPARISON_CONTENT.labels.otherClinic}</span>
                  <span className="text-slate-500 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.1em]">{COMPARISON_CONTENT.labels.otherMethod}</span>
                </div>
                {COMPARISON_CONTENT.rows.map((row, i) => (
                    <div key={i} className={`flex items-center justify-center ${rowHeight} border-b border-slate-700/40 last:border-0 px-1 sm:px-2 text-center`}>
                      <span className="font-sans text-[10px] sm:text-xs font-medium text-slate-400 opacity-70 tracking-wide">
                        {row.others}
                      </span>
                    </div>
                ))}
              </div>

            </div>
          </div>

          {/* 🔴 Conclusion：下部の安心エリア */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-start gap-3 px-8 py-4 bg-slate-900/60 rounded-xl text-slate-400 text-[10px] sm:text-xs border border-slate-700/60 font-bold tracking-tight shadow-inner max-w-3xl text-left mx-auto relative z-10">
              <ShieldCheck className="w-5 h-5 text-sky-400/70 shrink-0 mt-0.5" />
              <span className="whitespace-pre-line opacity-80">
                {COMPARISON_CONTENT.point.text}
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
