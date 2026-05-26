'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardTextPadding = "p-8 sm:p-14"
  const cardRounded = "rounded-xl" 
  
  // 💡 マシーンパートと全く同じ、枠線の極細透過ハイライト反射
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    /* 💡 背景色はマシーンと合わせたディープネイビー（#050A15） */
    <section id="pain" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【背景：まだらな光】マシーンパートの手法を踏襲しつつ、ペイン独自の配置と色味に調整 */}
      <div className="absolute top-[10%] right-[10%] w-[450px] h-[450px] bg-sky-600/20 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[45%] left-[-5%] w-[550px] h-[550px] bg-cyan-500/15 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-blue-500/20 blur-[130px] rounded-full pointer-events-none z-0" />

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
            /* 💡 【最大の修正点】画像とテキストを別々の箱にせず、「1つの大きなガラスカード」の中に格納。マシーンパートと全く同じ構造です。 */
            <div 
              key={i} 
              className={`relative overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_30px_60px_rgba(0,0,0,0.7)] bg-transparent w-full flex flex-col`} 
              style={gpuStyle}
            >
              
              {/* 1️⃣ 上半分：画像エリア（画像自体は100%明るいまま） */}
              <div className="relative aspect-[16/9] w-full bg-[#050A15] z-20 border-b border-slate-700/50">
                <Image 
                  src={m.image} 
                  alt="" 
                  fill 
                  className="object-cover opacity-95 hover:opacity-100 transition-opacity duration-700" 
                  priority={i === 0}
                />
                {/* 💡 【画像のシームレスグラデーション】
                    画像が暗くならないよう、下部40%だけに下から上へのグラデーションをかけ、下のガラスカードへ超自然に溶け込ませます。 */}
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#050A15] via-[#050A15]/40 to-transparent pointer-events-none z-10" />
              </div>

              {/* 2️⃣ 下半分：透過ガラステキストエリア */}
              <div className={`
                relative w-full ${cardTextPadding} flex flex-col justify-center
                bg-slate-900/40 backdrop-blur-2xl z-10
              `}>
                
                {/* 背景の特大ID（マシーンと同じくカード内部に配置） */}
                <span className="font-sans italic text-[8rem] sm:text-[12rem] absolute -top-8 -right-4 opacity-[0.04] select-none font-black text-slate-100 z-0">
                  {m.id}
                </span>

                {/* 💡 マシーンパートと同じ「ガラス表面反射」 */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.08] via-transparent to-transparent pointer-events-none z-0" />

                {/* 💡 【各カード下部のマシーン風光源】
                    ご要望通り、カードの「一番下（底辺）」に、マシーンと同じ光の芯＋滲みグラデーションを配置しました。 */}
                {/* ① 底辺を走る鋭い光の芯 */}
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_20px_rgba(56,189,248,1)] pointer-events-none z-20" />
                {/* ② 底辺から上に向かって柔らかく広がるシアンの光 */}
                <div className="absolute bottom-0 inset-x-0 h-[80%] bg-gradient-to-t from-sky-500/15 via-sky-500/5 to-transparent pointer-events-none z-0" />
                {/* ③ 全体を包む極薄いアンビエント光 */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.04),transparent_100%)] pointer-events-none z-0" />

                {/* テキストコンテンツ */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">{m.id}</span>
                    <Minus className="w-5 h-[1px] text-slate-500" />
                    <span className="text-[9px] font-extrabold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-wide uppercase">
                      Medical Approach
                    </span>
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 mb-4 tracking-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-slate-950/60 rounded border border-slate-800/60 text-[9px] font-bold text-slate-400 tracking-[0.1em] mb-5">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-300 leading-loose font-medium pt-4 border-t border-slate-700/40">
                    {m.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-slate-900/60">
          <div className="flex flex-col items-center text-center">
            <div className="w-[1px] h-12 bg-gradient-to-b from-sky-400/20 via-sky-500/5 to-transparent mb-8" />
            <div className="space-y-8">
              <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight tracking-tighter">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-slate-950/80 rounded-full text-slate-400 text-[10px] sm:text-xs border border-slate-800/60 font-bold shadow-wide">
                <ShieldCheck className="w-4 h-4 text-sky-400/60" />
                <span>{PAIN_CONTENT.reassurance.note}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
