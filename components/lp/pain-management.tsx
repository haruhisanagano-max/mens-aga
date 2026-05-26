'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（青ベース・透過ガラス背景＆強力アウターグロウ版）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardTextPadding = "p-8 sm:p-14"
  const cardRounded = "rounded-xl" 
  
  // ガラスのフチを綺麗に立たせるための極細の透過ハイライト線（青系）
  // マシーンパートと同じリッチなハイライト（border-t-white/10 border-l-white/10）を追加
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"
  
  // 透過グラスパートでは shadow を使っている。
  const cardShadow = "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] bg-transparent"
  // ---------------------------------------------------------

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    /* 背景色は共通のディープネイビー（#0B111E） */
    <section id="pain" className={`${sectionPadding} relative bg-[#0B111E] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【修正：まだら（斑）の光】マシーンパートをベースにしつつ、
          ぼやっとしたまだらなドット散りばめに。扇形発光は廃止しました。
          セクション全体を大きく斜めにぶち抜く、強力なシアンブルーの直線光源ラインです。
          ビルドエラーを防ぐため、標準的なTailwindグラデーションのみでモヤと芯を表現しました。 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        {/* 中心を走る鋭い斜めの光の線 */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_49.8%,#38bdf8_50%,transparent_50.2%)] blur-[1px]" />
        {/* 周囲に広がる強力な光のモヤ */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_35%,#0ea5e9_50%,transparent_65%)] blur-[120px] opacity-60" />
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
            {/* 💡 【修正】画像とカードをくっつけて上下に並べる（md:grid-cols-1に変更し、gapをなくす、負のマージンを削除） */}
            <div key={i} className={`relative flex flex-col gap-0 items-center`} style={gpuStyle}>
              
              {/* 💡 【修正：光源を下部へ】ジグザグ光源を廃止し、パート全体を包む光（モヤ）と、カードの下部トップライトへ。
                  線から周囲へと広がる柔らかな光の拡散層（モヤ）。
                  扇形発光は廃止しました。ガラスカードがかっこよく見えるように。 */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent支線 leading-loose font-medium pt-2 border-t border-slate-700_30' : 'left-0 bg-gradient-to-r'} from-sky-500/15 via-sky-500/5 to-transparent w-[80%] pointer-events-none z-0`} />
              </div>

              {/* 背景の巨大ID番号 */}
              <span className={`font-sans text-[12rem] sm:text-[22rem] font-black text-slate-900 opacity-[0.25] absolute -top-16 ${i % 2 === 0 ? '-right-4' : '-left-4'} italic pointer-events-none select-none z-0`}>
                {m.id}
              </span>

              {/* 画像フィールド：フィルターや黒幕のない100%クリーン表示。ソリッドな影。
                  IDの下、テキストパネルの上に表示されます（重ねない）。z-20を削除。横幅いっぱい。 */}
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

              {/* テキストパネル：💡 【透過グラス復活】マシーンパート基準の透過グラス（bg-slate-900/40 backdrop-blur-2xl）
                  画像の下に並び、負のマージンmt-[-40px]を削除。z-10を維持（背景光より上）。 */}
              <div className={`
                w-full
                relative z-10 
                mt-[-40px] lg:mt-0 
                p-8 sm:p-14 ${cardRounded} ${glassBorder} ${cardShadow}
                bg-slate-900/40 backdrop-blur-2xl
                overflow-hidden
                flex flex-col
              `}>
                
                {/* 💡 【表面反射追加】マシーンパートのリッチなガラスデザインを継承。表面反射用のグラデーションレイヤーを追加。 */}
                {/* 上段独自：表面反射を2箇所（マシーンパートと同じ細さ、反射あり） */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.08] via-transparent to-transparent pointer-events-none z-0" />

                {/* 💡 【修正：下部光源】格子状、ジグザグ光源を全廃し、カードの「下端」から上に向かって光が滲み出るデザイン（下部トップライト）へ。
                    マシーンと同じテイストの、シャープで鮮烈な斜め直線をCSSグラデーションで複数配置。
                    Absolutely枠線で光が千切れて見えないシームレス構造です。扇形発光は廃止しました。 */}
                {/* ① 下部：直線的な光の芯（レーザーのようなシャープな横線） */}
                <div className={`absolute bottom-[-1px] inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_20px_rgba支線 leading-loose font-medium pt-2 border-t border-slate-700_1)] pointer-events-none z-20`} />
                {/* ② 下部：境界線からテキストエリア（上）へ向かって滲み出る柔らかい光の層 */}
                <div className={`absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-sky-500/15 via-sky-500/5 to-transparent pointer-events-none z-0`} />

                {/* 💡 【表面反射追加】マシーンパートのリッチなガラスデザインを継承。表面反射用のグラデーションレイヤーを追加。 */}
                {/* 上段独自：表面反射を2箇所（マシーンパートと同じ細さ、反射あり） */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.08] via-transparent to-transparent pointer-events-none z-0" />

                {/* 内部のソフトなアンビエント発光（维持） */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.0支線 leading-loose font-medium pt-2 border-t border-slate-700_75%)] pointer-events-none z-0" />

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
                  
                  <div className="inline-block px-3 py-1 bg-slate-950/60 rounded border border-slate-800/60 text-[9px] font-bold text-slate-300 tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30 overflow-hidden`}>
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-900/60 flex flex-col items-center text-center overflow-hidden aspect-[16/10] bg-slate-950 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>

              {/* カードの下部外部の薄い接地用シャドウ（維持） */}
              <div className="absolute inset-0 z-0 bottom-[-30px] left-1/2 -translate-x-1/2 w-[70%] h-[30px] bg-sky-400/5 blur-[20px] pointer-events-none rounded-full" />
            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-900/60 flex flex-col items-center text-center overflow-hidden`}>
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
