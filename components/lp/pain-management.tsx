'use client'

import Image from 'next/image'
import { Minus, ShieldCheck, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（AGA・発光サイバーカスタム）
  // ---------------------------------------------------------
  /* 明朝体から、メンズらしい力強く洗練されたゴシック体＋白文字へ一新 */
  const fontTitle = "font-sans font-black tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  
  /* 角の丸みを2remから、テック感のあるスマートな1rem（rounded-2xl）へ微調整 */
  const cardRounded = "rounded-2xl" 
  /* 境界線をダークトーンにし、ホバー時にエメラルドに光る線を仕込みました */
  const cardBorder = "border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-500"
  /* 【最重要】ただの影から、深みのある闇にネオンが溶け出すような極上の発光エフェクト（Glow）へ変更 */
  const cardShadow = "shadow-[0_0_50px_rgba(6,182,212,0.12),0_0_20px_rgba(16,185,129,0.08)] bg-slate-900/90 backdrop-blur-xl"
  // ---------------------------------------------------------

  return (
    /* bg-white から、サイバーで重厚感のあるディープチャコール（墨色ベース）へ変更 */
    <section id="pain" className={`${sectionPadding} relative bg-[#0B1320] text-slate-300 overflow-hidden`}>
      
      {/* 🖼️ 最背面：背景テクスチャ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.03] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header */}
        <div className={`text-center ${headerBottomMargin}`}>
          {/* アクセントゴールドの発光感を演出 */}
          <span className="text-[10px] font-black tracking-[0.5em] text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] uppercase block mb-4">
            {PAIN_CONTENT.badge}
          </span>
          <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-6 leading-tight`}>
            {PAIN_CONTENT.mainTitle.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {PAIN_CONTENT.mainSubtitle}
          </p>
        </div>

        {/* 🔴 Measures (各施策) */}
        <div className="space-y-12 sm:space-y-24 mb-20">
          {PAIN_CONTENT.measures.map((m, i) => (
            <div key={i} className={`relative grid lg:grid-cols-12 gap-0 items-center`}>
              
              {/* 背後の特大ID：ダーク背景に合わせてサイアンブルーに妖しく発光 */}
              <span className={`font-sans text-[12rem] sm:text-[22rem] font-black text-cyan-500 opacity-[0.06] drop-shadow-[0_0_40px_rgba(6,182,212,0.6)] absolute -top-16 ${i % 2 === 0 ? '-right-4' : '-left-4'} italic pointer-events-none select-none z-0`}>
                {m.id}
              </span>

              {/* 画像フィールド */}
              <div className={`lg:col-span-7 relative z-10 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className={`${cardRounded} border border-slate-800 overflow-hidden aspect-[16/10] bg-slate-950 relative shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  {/* 画像の上に薄いサイバー感をプラス */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>
              </div>

              {/* テキストパネル */}
              <div className={`
                lg:col-span-6 
                relative z-20 
                mt-[-40px] lg:mt-0 
                ${i % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} 
                p-8 sm:p-14 ${cardRounded} ${cardBorder} ${cardShadow}
              `}>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-xl font-black italic text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">{m.id}</span>
                    <Minus className="w-8 h-[1px] text-slate-700" />
                    <span className="text-[9px] font-black text-emerald-400 tracking-[0.2em] uppercase drop-shadow-[0_0_5px_rgba(52,211,153,0.4)]">Medical Approach</span>
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-slate-950/60 rounded border border-slate-800 text-[9px] font-black text-slate-300 tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-400 leading-loose font-medium pt-2 border-t border-slate-800/60">
                    {m.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：下部の安心エリアも極上グラデーション化 */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-900">
          <div className="flex flex-col items-center text-center">
            
            {/* 中央のラインをエメラルドの光の線に変更 */}
            <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-400 to-transparent shadow-[0_0_10px_rgba(52,211,153,1)] mb-8" />

            <div className="space-y-8">
              <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight tracking-tighter">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm sm:text-base font-medium">
                    {PAIN_CONTENT.reassurance.body1}
                  </p>
                  <div className="relative inline-block">
                    {/* 文字の後ろからネオンが滲み出るようなエフェクト */}
                    <span className="relative z-10 text-slate-200 font-black text-xl sm:text-3xl tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      {PAIN_CONTENT.reassurance.body2}
                    </span>
                  </div>
                </div>

                {/* 最も強いメッセージをゴールドとグリーンの光で強調 */}
                <p className="whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-400 font-black text-xl sm:text-2xl tracking-tighter leading-snug max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(16,185,129,0.2)]">
                  {PAIN_CONTENT.reassurance.body3}
                </p>
              </div>

              <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-slate-950/80 rounded-full text-slate-400 text-[10px] sm:text-xs border border-slate-800/80 font-bold shadow-inner">
                <ShieldCheck className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]" />
                <span>{PAIN_CONTENT.reassurance.note}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
