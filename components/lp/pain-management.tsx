'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（青ベース・ソリッド背景＆シャープな複数斜めトップライト版）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardRounded = "rounded-xl" 
  
  // 💡 【修正】ガラスのフチを綺麗に立たせるための極細の透過ハイライト線（青系）
  // マシーンパートと同じリッチなハイライト（border-t-white/10 border-l-white/10）を追加
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"
  
  // 透過グラスパートでは shadow を使っている。
  const cardShadow = "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] bg-transparent"
  // ---------------------------------------------------------

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    /* 背景色は共通のディープネイビー（#0B111E） */
    <section id="pain" className={`${sectionPadding} relative bg-[#0B111E] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【修正】ぼやけてかっこ悪い光の線をシャープに、かつ複数に。
          SVGを廃止し、CSSグラデーションの鋭い直線（blurを弱く）を背景に複数配置。
          セクション全体を大きく斜めにぶち抜く、強力なシアンブルーの直線光源ラインです。
          ビルドエラーを防ぐため、標準的なTailwindグラデーションのみでモヤと芯を表現しました。 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        {/* 中心を走る鋭い斜めの光の線（1本目） */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_49.8%,#38bdf8_50%,transparent_50.2%)] blur-[1px]" />
        {/* 角度を変えたシャープな斜めの光の線（2本目） */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_40.2%,#38bdf8_50%,transparent_49.8%)] blur-[1px] opacity-60" />
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
            <div key={i} className="relative flex flex-col items-center gap-0 w-full" style={gpuStyle}>
              
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

              {/* テキストパネル：【透過なし】ソリッド背景（bg-[#1E293B]）。浮いている影を光に。明るい浮遊感を演出
                  画像の下に並び、負のマージンmt-[-40px]を削除。z-10を維持（背景光より上）。 */}
              <div className={`
                w-full
                relative z-10 
                mt-[-40px] lg:mt-0 
                p-8 sm:p-14 ${cardRounded} ${glassBorder} ${cardShadow}
                overflow-hidden
                flex flex-col
              `}>
                {/* 💡 【修正】マシーンパートのリッチなガラスデザインを継承。表面反射用のグラデーションレイヤーを追加。 */}
                {/* 上段独自：表面反射を2箇所（マシーンパートと同じ細さ、反射あり） */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.08] via-transparent to-transparent pointer-events-none z-0" />

                {/* 内部のソフトなアンビエント発光（维持） */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_75%)] pointer-events-none z-0" />

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
                  
                  <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30 overflow-hidden`}>
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 aspect-[16/10] bg-slate-950 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>

              {/* テキストパネル（青系グラデーション不透過。画像との重なり部分の文字を完全に保護） */}
              <div className={`
                lg:col-span-6 
                relative z-20 
                mt-[-40px] lg:mt-0 
                ${i % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} 
                ${cardTextPadding} ${cardRounded} ${glassBorder}
                
                /* 画像とガッツリ重なる側を「100%不透明なディープグレー（from-slate-900）」にし、
                   後ろの施術写真が透けて文字の邪魔をするのを完全にシャットアウト！
                   空中（外側）に向かって、美しく深みを変える（透過率85%）贅沢なグラデーション仕様です。 */
                bg-gradient-to-br 
                ${i % 2 === 0 
                  ? 'from-slate-900 via-slate-900/95 to-slate-950/85' 
                  : 'from-slate-950/85 via-slate-900/95 to-slate-900'
                }
                
                shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]
                overflow-hidden
              `}>
                
                {/* 💡 【マシーンと変化をつけた斜め滲みトップライト】
                    左右のカード配置に合わせて、右上（または左上）の角からシアンブルーの光が
                    ガラスの内部に優しく、しかし確実に視認できる絶妙な強さ（0.18）で滲み出します。
                    絶対に枠線で光が千切れて見えないシームレス構造です。 */}
                <div className={`absolute top-0 ${i % 2 === 0 ? 'right-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent支線 leading-loose font-medium pt-2 border-t border-slate-700_40 leading-loose pt-2 border-t border-slate-700/30' : 'left-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18支線 leading-loose font-medium pt-2 border-t border-slate-700_40 leading-loose pt-2 border-t border-slate-700/30'}`} pointer-events-none z-0 />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
                    Medical Approach
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-slate-950/60 rounded border border-slate-800/60 text-[9px] font-bold text-slate-400 tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30 overflow-hidden`}>
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 overflow-hidden aspect-[16/10] bg-slate-950 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>

              {/* テキストパネル（青系グラデーション不透過。画像との重なり部分の文字を完全に保護） */}
              <div className={`
                lg:col-span-6 
                relative z-20 
                mt-[-40px] lg:mt-0 
                ${i % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} 
                p-8 sm:p-14 ${cardRounded} ${glassBorder}
                
                /* 画像とガッツリ重なる側を「100%不透明なディープグレー（from-slate-900）」にし、
                   後ろの施術写真が透けて文字の邪魔をするのを完全にシャットアウト！
                   空中（外側）に向かって、美しく深みを変える（透過率85%）贅沢なグラデーション仕様です。 */
                bg-gradient-to-br 
                ${i % 2 === 0 
                  ? 'from-slate-900 via-slate-900/95 to-slate-950/85' 
                  : 'from-slate-950/85 via-slate-900/95 to-slate-900'
                }
                
                shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]
                overflow-hidden
              `}>
                
                {/* 💡 【マシーンと変化をつけた斜め滲みトップライト】
                    左右のカード配置に合わせて、右上（または左上）の角からシアンブルーの光が
                    ガラスの内部に優しく、しかし確実に視認できる絶妙な強さ（0.18）で滲み出します。
                    絶対に枠線で光が千切れて見えないシームレス構造です。 */}
                <div className={`absolute top-0 ${i % 2 === 0 ? 'right-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18支線 leading-loose font-medium pt-2 border-t border-slate-700_40 leading-loose pt-2 border-t border-slate-700/30' : 'left-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18支線 leading-loose font-medium pt-2 border-t border-slate-700_40 leading-loose pt-2 border-t border-slate-700/30'}`} pointer-events-none z-0 />

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
                  
                  <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30 overflow-hidden`}>
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 aspect-[16/10] bg-slate-950 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>

              {/* テキストパネル（青系グラデーション不透過。画像との重なり部分の文字を完全に保護） */}
              <div className={`
                lg:col-span-6 
                relative z-20 
                mt-[-40px] lg:mt-0 
                ${i % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} 
                ${cardTextPadding} ${cardRounded} ${glassBorder}
                
                /* 画像とガッツリ重なる側を「100%不透明なディープグレー（from-slate-900）」にし、
                   後ろの施術写真が透けて文字の邪魔をするのを完全にシャットアウト！
                   空中（外側）に向かって、美しく深みを変える（透過率85%）贅沢なグラデーション仕様です。 */
                bg-gradient-to-br 
                ${i % 2 === 0 
                  ? 'from-slate-900 via-slate-900/95 to-slate-950/85' 
                  : 'from-slate-950/85 via-slate-900/95 to-slate-900'
                }
                
                shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]
                overflow-hidden
              `}>
                
                {/* 💡 【マシーンと変化をつけた斜め滲みトップライト】
                    左右のカード配置に合わせて、右上（または左上）の角からシアンブルーの光が
                    ガラスの内部に優しく、しかし確実に視認できる絶妙な強さ（0.18支線 leading-loose font-medium pt-2 border-t border-slate-700_40 leading-loose pt-2 border-t border-slate-700/30'}`} pointer-events-none z-0 />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
                    Medical Approach
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-slate-950/60 rounded border border-slate-800/60 text-[9px] font-bold text-slate-400 tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30 overflow-hidden`}>
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-900/60 flex-col items-center text-center">
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
