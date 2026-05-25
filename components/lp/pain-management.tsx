'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（痛みパート限定：深緑×グラデーション透過版）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardRounded = "rounded-xl" 
  
  // 💡 高級時計のような、品格あるエメラルドグリーンの極細枠線
  const glassBorder = "border border-emerald-500/30 border-t-white/10 border-l-white/10"
  // ---------------------------------------------------------

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    /* 💡 背景は黒に近い極めて深いフォレストブラック（#04080F） */
    <section id="pain" className={`${sectionPadding} relative bg-[#04080F] text-slate-400 overflow-hidden`}>
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.015] mix-blend-overlay" priority />
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
              <span className={`font-sans text-[12rem] sm:text-[22rem] font-black text-slate-900 opacity-[0.15] absolute -top-16 ${i % 2 === 0 ? '-right-4' : '-left-4'} italic pointer-events-none select-none z-0`}>
                {m.id}
              </span>

              {/* 画像フィールド（100%クリーン表示。ソリッドな影） */}
              <div className={`lg:col-span-7 relative z-10 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className={`${cardRounded} border border-slate-950 overflow-hidden aspect-[16/10] bg-slate-950 relative shadow-[0_20px_50px_rgba(0,0,0,0.7)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>

              {/* テキストパネル（💡 超軽量な「グリーン透過グラデーション」） */}
              <div className={`
                lg:col-span-6 
                relative z-20 
                mt-[-40px] lg:mt-0 
                ${i % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} 
                p-8 sm:p-14 ${cardRounded} ${glassBorder}
                
                /* 💡 核心：画像とガッツリ重なる側を「100%不透明な深いフォレスト（from-[#0B1519]）」にし、
                   後ろの施術写真が透けて文字の邪魔をするのを完全にシャットアウト！
                   空中（外側）に向かって、美しく深みを変える（透過率85%）贅沢なグラデーション仕様です。 */
                bg-gradient-to-br 
                ${i % 2 === 0 
                  ? 'from-[#0B1519] via-[#0B1519]/95 to-[#080F12]/85' 
                  : 'from-[#080F12]/85 via-[#0B1519]/95 to-[#0B1519]'
                }
                
                shadow-[0_30px_60px_rgba(0,0,0,0.7)]
                overflow-hidden
              `}>
                
                {/* 💡 【痛み独自の斜めエッジ滲み光（グリーン版）】
                    マシーンの「直線的な青い縦線」と違いを作るため、こちらは角からフワッと優しく広がるエメラルドグリーンの光。
                    枠線で光が千切れて見えないシームレス構造です。 */}
                <div className={`absolute top-0 ${i % 2 === 0 ? 'right-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_65%)]' : 'left-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_65%)]'} w-full h-full pointer-events-none z-0`} />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">{m.id}</span>
                    <Minus className="w-4 h-[1px] text-slate-600" />
                    <span className="text-[9px] font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded tracking-wide uppercase">
                      Medical Approach
                    </span>
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-slate-950/85 rounded border border-emerald-900/30 text-[9px] font-bold text-slate-300 tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-emerald-900/30">
                    {m.description}
                  </p>
                </div>
                
              </div>

              {/* カードの下部外部の薄い接地用グリーンシャドウ */}
              <div className="absolute inset-0 z-0 bottom-[-30px] left-1/2 -translate-x-1/2 w-[70%] h-[30px] bg-emerald-500/5 blur-[20px] pointer-events-none rounded-full" />
            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-emerald-900/30">
          <div className="flex flex-col items-center text-center">
            <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500/20 via-emerald-500/5 to-transparent mb-8" />
            <div className="space-y-8">
              <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight tracking-tighter">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-slate-950/80 rounded-full text-slate-400 text-[10px] sm:text-xs border border-emerald-900/30 font-bold shadow-inner">
                <ShieldCheck className="w-4 h-4 text-emerald-400/60" />
                <span>{PAIN_CONTENT.reassurance.note}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
