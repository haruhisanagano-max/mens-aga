'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（上下セパレート透過×背景斜め直線光源版）
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
      
      {/* 💡 【修正】線の光をカードの上ではなく「背景（z-0）」に配置。
          セクション全体を斜めに大きく貫く強力なシアンブルーの直線光源ラインです。 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 1200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="paint-diagonal-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="30%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* 周囲に広く拡散する、強力な光のモヤ */}
          <line x1="-100" y1="100" x2="1600" y2="1100" stroke="#0ea5e9" strokeWidth="160" className="blur-[110px] opacity-50" />
          {/* 中心を鋭く走る斜めの光の線 */}
          <line x1="-100" y1="100" x2="1600" y2="1100" stroke="url(#paint-diagonal-glow)" strokeWidth="6" className="blur-[2px]" />
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
            <div key={i} className="relative grid lg:grid-cols-12 gap-0 items-center" style={gpuStyle}>
              
              {/* 背景の巨大ID番号 */}
              <span className={`font-sans text-[12rem] sm:text-[22rem] font-black text-slate-900 opacity-[0.25] absolute -top-16 ${i % 2 === 0 ? '-right-4' : '-left-4'} italic pointer-events-none select-none z-0`}>
                {m.id}
              </span>

              {/* 💡 【修正】画像フィールド：カードより前面に被せるため「z-20」へ引き上げ */}
              <div className={`lg:col-span-7 relative z-20 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className={`${cardRounded} border border-slate-950 overflow-hidden aspect-[16/10] bg-slate-950 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>

              {/* 💡 【修正】テキストパネル：画像の下に美しく潜り込ませるため「z-10」を指定 */}
              <div className={`
                lg:col-span-6 
                relative z-10 
                mt-[-40px] lg:mt-0 
                ${i % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} 
                ${cardRounded} ${glassBorder}
                shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]
                overflow-hidden
                flex flex-col
              `}>
                
                {/* 🔴 ① タイトルより上のエリア：【透過なし】ソリッド背景
                    画像とガッツリ被る最上部を完全な不透明（bg-[#0f172a]）にすることで、文字の可読性を100%完全に守り抜きます。 */}
                <div className="p-8 sm:p-14 pb-6 bg-[#0f172a] relative z-10 space-y-4">
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
                </div>

                {/* 🔴 ② タイトルより下のエリア：マシーンと同じ【透過ガラス仕様】
                    説明文が乗る下半分を、贅沢な磨りガラス（backdrop-blur-2xl bg-slate-900/40）に加工。
                    背景に仕込んだ「斜めの強力な光の線」が、カードの裏側から滑らかに透けて見える面白いデザインです。 */}
                <div className="p-8 sm:p-14 pt-0 flex-1 bg-slate-900/40 backdrop-blur-2xl border-t border-slate-800/40 relative z-10">
                  <div className="pt-6 space-y-5">
                    <div className="inline-block px-3 py-1 bg-slate-950/60 rounded border border-slate-800/60 text-[9px] font-bold text-slate-300 tracking-[0.1em]">
                      {m.subTitle}
                    </div>
                    
                    <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30">
                      {m.description}
                    </p>
                  </div>
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
