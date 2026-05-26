'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardTextPadding = "p-8 sm:p-12"
  const cardRounded = "rounded-xl" 
  
  // 💡 【透過グラス枠】マシーンパートの完全コピー
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    /* 💡 背景色マシーン基準（#050A15） */
    <section id="pain" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【まだら（斑）の光】マシーンパートのドット散りばめをそのまま踏襲 */}
      <div className="absolute top-[5%] left-[5%] w-[450px] h-[450px] bg-sky-500/40 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-5%] w-[550px] h-[550px] bg-indigo-500/30 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-400/30 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header */}
        <div className={`text-center ${headerBottomMargin}`}>
          <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-4 uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
            {PAIN_CONTENT.badge}
          </span>
          <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-6 leading-tight`}>
            {PAIN_CONTENT.mainTitle.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-70">
            {PAIN_CONTENT.mainSubtitle}
          </p>
        </div>

        {/* 🔴 Measures (各施策) */}
        <div className="space-y-16 sm:space-y-24 mb-20">
          {PAIN_CONTENT.measures.map((m, i) => (
            /* 💡 Machineのカード構造を完全踏襲: 画像とテキストを1つの透過枠（border/shadow）で包む */
            <div 
              key={i} 
              className={`relative overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_30px_60px_rgba(0,0,0,0.7)] bg-transparent flex flex-col`}
              style={gpuStyle}
            >
              
              {/* 1️⃣ 上側：画像エリア（ソリッド背景で透過させない） */}
              <div className="relative aspect-[16/9] bg-[#050A15] w-full overflow-hidden border-b border-slate-700/50 z-20">
                <Image 
                  src={m.image} 
                  alt="" 
                  fill 
                  className="object-cover opacity-95 hover:opacity-100 transition-opacity duration-300" 
                  priority={i === 0}
                />
              </div>

              {/* 2️⃣ 下側：解説テキストエリア（マシーン基準の透過グラス bg-slate-900/40 backdrop-blur-2xl） */}
              <div className={`${cardTextPadding} relative w-full flex flex-col justify-center overflow-hidden bg-slate-900/40 backdrop-blur-2xl z-10`}>
                
                {/* 背景の特大ID (Machineスタイル) */}
                <span className="font-sans italic text-[8rem] sm:text-[12rem] absolute -top-4 -right-4 opacity-[0.04] select-none font-black text-slate-100 z-0">
                  {m.id}
                </span>

                {/* 💡 表面反射 (Machineと同一) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.08] via-transparent to-transparent pointer-events-none z-0" />

                {/* 💡 【光源は下部】Machineのシームレス光源をカードの「底辺」に配置 */}
                {/* ① 底辺を走る直線的な光の芯 */}
                <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_20px_rgba(56,189,248,1)] pointer-events-none z-20" />
                
                {/* ② 底辺から上へ向かって滲み出る柔らかい光の層 */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-500/15 via-sky-500/5 to-transparent h-[80%] pointer-events-none z-0" />
                
                {/* ③ テキストエリア全体を極薄く包むアンビエント光 */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(56,189,248,0.03),transparent_100%)] pointer-events-none z-0" />

                {/* テキストコンテンツ */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">{m.id}</span>
                    <Minus className="w-6 h-[1px] text-slate-500" />
                    <span className="text-[9px] font-extrabold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-wide uppercase">
                      Medical Approach
                    </span>
                  </div>
                  
                  <h3 className="font-sans text-xl sm:text-3xl font-bold text-slate-100 mb-3 sm:mb-5 tracking-tight">
                    {m.title}
                  </h3>
                  
                  <div className="inline-block px-3 py-1 bg-slate-950/60 rounded border border-slate-700/60 text-[9px] font-bold text-sky-400 tracking-[0.1em] mb-5 shadow-inner">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-300 leading-loose font-medium opacity-90 pt-2 border-t border-slate-700/40">
                    {m.description}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-700/50">
          <div className="flex flex-col items-center text-center">
            <div className="w-[1px] h-12 bg-gradient-to-b from-sky-400/20 via-sky-500/5 to-transparent mb-8" />
            <div className="space-y-8">
              <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight tracking-tighter">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-slate-900/60 rounded-full text-slate-300 text-[10px] sm:text-xs border border-slate-700/60 font-bold shadow-inner">
                <ShieldCheck className="w-4 h-4 text-sky-400/70" />
                <span>{PAIN_CONTENT.reassurance.note}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
