'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（青ベース・Seamless透過ガラス×ジグザグ光源決定版）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardTextPadding = "p-8 sm:p-14"
  const cardRounded = "rounded-xl" 
  
  // マシーンパートと同じ、洗練された極細の透過ハイライト線。ガラスのフチを綺麗に立たせます。
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"
  // ---------------------------------------------------------

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    /* 背景色は共通のディープネイビー（#0B111E） */
    <section id="pain" className={`${sectionPadding} relative bg-[#0B111E] text-slate-400 overflow-hidden`}>
      
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
          {PAIN_CONTENT.measures.map((m, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="relative grid lg:grid-cols-12 gap-0 items-center" style={gpuStyle}>
                
                {/* 背景の巨大ID番号 */}
                <span className={`font-sans text-[12rem] sm:text-[22rem] font-black text-slate-900 opacity-[0.25] absolute -top-16 ${isEven ? '-right-4' : '-left-4'} italic pointer-events-none select-none z-0`}>
                  {m.id}
                </span>

                {/* 画像フィールド： z-20 を維持。負のマージン mt-[-40px] を維持。 */}
                <div className={`lg:col-span-7 relative z-20 ${!isEven ? 'lg:order-last' : ''}`}>
                  <div className={`${cardRounded} border border-slate-950 overflow-hidden aspect-[16/10] bg-slate-950 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
                    <Image 
                      src={m.image} 
                      alt="" 
                      fill 
                      className="object-cover transition-transform duration-700 hover:scale-105" 
                    />
                  </div>
                </div>

                {/* テキストパネル：💡 【透過グラス復活】マシーンパート基準の透過グラス（bg-slate-900/40 backdrop-blur-2xl）
                    画像の下に並び、負のマージン mt-[-40px] を維持。 */}
                <div className={`
                  lg:col-span-6 
                  relative z-10 
                  mt-[-40px] lg:mt-0 
                  ${isEven ? 'lg:-ml-20' : 'lg:-mr-20'} 
                  ${cardTextPadding} ${cardRounded} ${glassBorder}
                  
                  /* 💡 【解決：境界Seamlessグラデーション】画像と重なる側を「100%不透明なディープグレー（from-slate-900）」にし、
                     後ろの施術写真が透けて文字の邪魔をするのを完全にシャットアウト！
                     空中（外側）に向かって、美しく深みを変える（透過率85%）贅沢なグラデーション仕様です。
                     画像自体は不透明なので暗くなりません。 */
                  bg-gradient-to-br 
                  ${isEven 
                    ? 'from-slate-900 via-slate-900/95 to-slate-950/85' 
                    : 'from-slate-950/85 via-slate-900/95 to-slate-900'
                  }
                  
                  shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]
                  overflow-hidden
                `}>
                  
                  {/* 💡 【新設：交互ジグザグ光源】格子状（クロス）を廃止し、パートごとに光の向きを交互に変える（ジグザグ）。
                      右上から左下 (斜め) の線と、左上から右下 (斜め) の線を交互に配置。
                      マシーンと同じシャープで鮮烈な斜め直線をCSSグラデーションで複数配置。
                      偶数/奇数パートでグラデーションの角度を変えることで、光の向きを交互にスイッチ。
                      扇形発光は廃止しました。ガラスカードがかっこよく見えるように。 */}
                  <div className={`absolute top-0 ${isEven ? 'right-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22支線 leading-loose font-medium pt-2 border-t border-slate-700_40 leading-loose pt-2 border-t border-slate-700/30' : 'left-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22支線 leading-loose font-medium pt-2 border-t border-slate-700_40 leading-loose pt-2 border-t border-slate-700/30'}`} pointer-events-none z-0 />
                  
                  {/* 💡 【表面反射追加】マシーンパートのリッチなガラスデザインを継承。表面反射用のグラデーションレイヤーを追加。 */}
                  {/* 上段独自：表面反射を2箇所（マシーンパートと同じ細さ、反射あり） */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none z-0" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.08] via-transparent to-transparent pointer-events-none z-0" />

                  {/* 内部のソフトなアンビエント発光（维持） */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_75%)] pointer-events-none z-0" />

                  <div className="space-y-5 relative z-10 pl-4 border-l border-slate-800">
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

                {/* カードの下部外部の薄い接地用シャドウ（維持） */}
                <div className="absolute inset-0 z-0 bottom-[-30px] left-1/2 -translate-x-1/2 w-[70%] h-[30px] bg-sky-400/5 blur-[20px] pointer-events-none rounded-full" />
              </div>
            );
          })}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-900/60">
          <div className="flex flex-col items-center text-center">
            <div className="w-[1px] h-12 bg-gradient-to-b from-sky-400/20 via-sky-500/5 to-transparent mb-8" />
            <div className="space-y-8">
              <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight tracking-tighter">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-slate-950/80 rounded-full text-slate-400 text-[10px] sm:text-xs border border-slate-800/60 font-bold shadow-wide overflow-hidden`}>
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
