'use client'　

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（マシーン共通ガラス×上下ドッキング＆複数斜め直線光源版）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardRoundedTop = "rounded-t-xl"
  const cardRoundedBottom = "rounded-b-xl"
  const glassBorder = "border-x border-b border-slate-700/60 border-b-slate-700/40"
  // ---------------------------------------------------------

  return (
    /* 背景色は共通のディープネイビー（#0B111E） */
    <section id="pain" className={`${sectionPadding} relative bg-[#0B111E] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【背景光源】マシーンの光源と同じテイストの、シャープな複数の斜め直線。
          背景（z-0）を鋭く切り裂き、その周囲にうっすらとした青い光のモヤを広げています。 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        {/* 斜め直線光源（1本目・シャープな芯） */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_49.9%,#38bdf8_50%,transparent_50.1%)] blur-[1px]" />
        {/* 斜め直線光源（2本目・並行するシャープな芯） */}
        <div className="absolute top-[-45%] left-[-55%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_49.9%,#0ea5e9_50%,transparent_50.1%)] blur-[2px] opacity-70" />
        {/* 線から周囲へと広がる柔らかな光の拡散層 */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_42%,#0ea5e9_50%,transparent_58%)] blur-[120px] opacity-30" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      {/* 美しい上下並びをキープするため、横幅をmax-w-4xlに最適化 */}
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
        <div className="space-y-16 sm:space-y-28 mb-20">
          {PAIN_CONTENT.measures.map((m, i) => (
            <div key={i} className="relative flex flex-col items-center w-full gap-0">
              
              {/* 背景の巨大ID番号 */}
              <span className="font-sans text-[10rem] sm:text-[16rem] font-black text-slate-900 opacity-[0.22] absolute -top-20 right-4 italic pointer-events-none select-none z-0">
                {m.id}
              </span>

              {/* 1️⃣ 上側：画像フィールド（隙間なく下のカードへ密着ドッキング） */}
              <div className="w-full relative z-10">
                <div className={`${cardRoundedTop} border-t border-x border-slate-800 overflow-hidden aspect-[16/9] bg-slate-950 relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                    priority={i === 0}
                  />
                </div>
              </div>

              {/* 2️⃣ 下側：テキストパネル（マシーンパートと完全に同じ高級透過ガラス仕様） */}
              <div className={`
                w-full relative z-10 p-8 sm:p-12 
                ${cardRoundedBottom} ${glassBorder}
                bg-slate-900/40 backdrop-blur-2xl
                shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]
                overflow-hidden
              `}>
                
                {/* マシーンパートと全く同じ質感を出す「2箇所のガラス表面反射」 */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.08] via-transparent to-transparent pointer-events-none z-0" />

                {/* ガラス内部を満たすシアンの淡い発光 */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.03),transparent_75%)] pointer-events-none z-0" />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">{m.id}</span>
                    <Minus className="w-4 h-[1px] text-slate-600" />
                    <span className="text-[9px] font-extrabold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-wide uppercase">
                      Medical Approach
                    </span>
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-slate-950/60 rounded border border-slate-800/60 text-[9px] font-bold text-slate-400 tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30">
                    {m.description}
                  </p>
                </div>
                
              </div>

            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-900/60">
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
