'use client'

import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（ディープネイビー・透過ガラス背景＆強力アウターグロウ版）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardTextPadding = "p-8 sm:p-14"
  const cardRounded = "rounded-xl" 
  
  // ガラスのフチを綺麗に立たせるための極細の透過ハイライト線（青系）
  // マシーンパートと同じリッチなハイライト（border-t-white/10 border-l-white/10）を追加
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"
  
  // 💡 影を光に。透過グラスを際立たせるためアウターグロウ（rgba(56,189,248,0.25)）を以前より少し弱めて、ガラスの透過感を強調。透過背景色（slate-900/40）に固定。
  const cardShadow = "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] bg-transparent"
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
          {PAIN_CONTENT.measures.map((m, i) => (
            {/* 💡 画像とカードをくっつけて上下に並べる（flex-col、gap-0）。IDの下、テキストパネルの上に表示されます（重ねない）。z-10は巨大IDより上。 */}
            <div key={i} className={`relative flex flex-col gap-0 items-center`} style={gpuStyle}>
              
              {/* 背景の巨大ID番号。左右交互。 */}
              <span className={`font-sans text-[12rem] sm:text-[22rem] font-black text-slate-900 opacity-[0.15] absolute -top-16 ${i % 2 === 0 ? '-right-4' : '-left-4'} italic pointer-events-none select-none z-0`}>
                {m.id}
              </span>

              {/* 1️⃣ 画像エリア：フィルターや黒幕のない100%クリーン表示。ソリッドな影。z-20。横幅いっぱい。 */}
              <div className="w-full relative z-10">
                <div className={`${cardRounded} border border-slate-950 overflow-hidden aspect-[16/10] bg-slate-950 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                    priority={i === 0}
                  />
                </div>
              </div>

              {/* 2️⃣ テキストパネル：💡 マシーンパート基準の透過グラス（bg-slate-900/40 backdrop-blur-2xl）。画像の下に並び、負のマージンなし。z-10。 */}
              <div className={`
                w-full
                relative z-10 
                p-8 sm:p-14 ${cardRounded} ${glassBorder} ${cardShadow}
                bg-slate-900/40 backdrop-blur-2xl
                overflow-hidden
                flex flex-col
              `}>
                
                {/* 💡 【表面反射追加】マシーンパートのリッチなガラスデザインを継承。表面反射用のグラデーションレイヤーを追加。 */}
                {/* 上段独自：表面反射を2箇所（マシーンパートと同じ細さ、反射あり） */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.08] via-transparent to-transparent pointer-events-none z-0" />

                {/* 内部のソフトなアンビエント発光（維持） */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_75%)] pointer-events-none z-0" />

                <div className="space-y-5 relative z-10">
                  {/* IDとタグを左寄せ。Minusアイコンを削除。IDの drop-shadow も維持。 */}
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">0{m.id}</span>
                    <span className="text-[9px] font-extrabold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-wide uppercase">
                      Medical Approach
                    </span>
                  </div>
                  
                  {/* タイトル */}
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {m.title}
                  </h4>
                  
                  {/* サブタイトル */}
                  <div className="inline-block px-3 py-1 bg-slate-950/60 rounded border border-slate-800/60 text-[9px] font-bold text-slate-300 tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  {/* 詳細文。💡 【修正点】サブタイトルとの間のMinusアイコンを削除し、pt-0に変更。border-tも削除。mt-4でsubTitleと description の間隔を調整。 */}
                  <p className="text-sm text-slate-300 leading-loose font-medium pt-0 mt-4">
                    {m.description}
                  </p>
                </div>
              
              </div>

              {/* 💡 【修正点】カードの下部外部の薄い接地用シャドウ（横線に見えている可能性あり）を削除。 */}
              {/* シャドウ削除により、横線やID間の縦線のようなもの、余白のノイズも消えているはず。 */}

            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-900/60 flex flex-col items-center text-center">
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
