'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（青ベース・ジグザグ背景＆上下セパレート透過版）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardRounded = "rounded-xl" 
  
  // ガラスのフチを綺麗に立たせるための極細の透過ハイライト線（青系）
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"
  // ---------------------------------------------------------

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    /* 背景色は共通のディープネイビー（#0B111E） */
    <section id="pain" className={`${sectionPadding} relative bg-[#0B111E] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【新設】背景の長いジグザグ光のライン
          セクション全体を大きく斜めに走る1本の長い光の帯をSVGで完全に制御。
          途切れることなく、背後でサイバー医療系の美しいジグザグ発光を作ります。 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 1200" preserveAspectRatio="none">
          <path 
            d="M-100,150 L500,550 L900,250 L1600,750" 
            fill="none" 
            stroke="#38bdf8" 
            strokeWidth="3" 
            className="blur-[1px]"
          />
          <path 
            d="M-100,150 L500,550 L900,250 L1600,750" 
            fill="none" 
            stroke="#0ea5e9" 
            strokeWidth="30" 
            className="blur-[35px] opacity-50"
          />
        </svg>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
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
        <div className="space-y-12 sm:space-y-24 mb-20">
          {PAIN_CONTENT.measures.map((m, i) => (
            <div key={i} className={`relative grid lg:grid-cols-12 gap-0 items-center`} style={gpuStyle}>
              
              {/* 背景の巨大ID番号 */}
              <span className={`font-sans text-[12rem] sm:text-[22rem] font-black text-slate-900 opacity-[0.25] absolute -top-16 ${i % 2 === 0 ? '-right-4' : '-left-4'} italic pointer-events-none select-none z-0`}>
                {m.id}
              </span>

              {/* 画像フィールド：フィルターや黒幕のない100%クリーン表示 */}
              <div className={`lg:col-span-7 relative z-10 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className={`${cardRounded} border border-slate-950 overflow-hidden aspect-[16/10] bg-slate-950 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>

              {/* テキストパネル */}
              <div className={`
                lg:col-span-6 
                relative z-20 
                mt-[-40px] lg:mt-0 
                ${i % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} 
                ${cardRounded} ${glassBorder}
                shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]
                overflow-hidden
                flex flex-col
              `}>
                
                {/* 🔴 ① タイトルより上のエリア：【透過なし】ソリッド背景
                    画像と重なる最上部を不透明な塊（bg-[#151F32]）にすることで、文字のハッキリとした可読性を完全確保します。 */}
                <div className="p-8 sm:p-14 pb-5 bg-[#151F32] relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">{m.id}</span>
                    <Minus className="w-4 h-[1px] text-slate-500" />
                    <span className="text-[9px] font-extrabold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-wide uppercase">
                      Medical Approach
                    </span>
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {m.title}
                  </h4>
                </div>

                {/* 🔴 ② タイトルより下のエリア：【透過ガラス】
                    サブタイトルと説明文が乗る下半分のみを、美しい磨りガラス透過（backdrop-blur-md bg-slate-950/40）に。
                    背景に仕込んだ「長いジグザグの光」がカードの裏側から上品に透けて見え、マシーンパートとは全く違うギミック感を楽しめます。 */}
                <div className="p-8 sm:p-14 pt-0 flex-1 bg-slate-950/40 backdrop-blur-md border-t border-slate-800/40 relative z-10">
                  <div className="pt-6 space-y-5">
                    <div className="inline-block px-3 py-1 bg-slate-900/80 rounded border border-slate-800/60 text-[9px] font-bold text-slate-300 tracking-[0.1em]">
                      {m.subTitle}
                    </div>
                    
                    <p className="text-sm text-slate-300 leading-loose font-medium">
                      {m.description}
                    </p>
                  </div>
                </div>
                
              </div>

              {/* カードの下部外部の薄い接地用シャドウ */}
              <div className="absolute inset-0 z-0 bottom-[-30px] left-1/2 -translate-x-1/2 w-[70%] h-[30px] bg-sky-400/5 blur-[20px] pointer-events-none rounded-full" />
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
