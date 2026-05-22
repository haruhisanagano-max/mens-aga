'use client'

import Image from 'next/image'
import { Minus, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（AGA・カード内部発光ラグジュアリーカスタム）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  
  /* 角の丸み：シャープで洗練された印象の角丸（rounded-xl） */
  const cardRounded = "rounded-xl" 
  
  /* 💡 境界線：ただの枠線ではなく、上フチ（border-t）だけに光が当たってキラッと反射したような極細ラインを仕込みます */
  const cardBorder = "border border-slate-900/60 border-t-sky-400/30 border-l-sky-400/10"
  
  /* 💡 影と背景：外側のネオンの影を完全に廃止し、ドッシリとした「黒い影」で高級感を。
     代わりに、カードの「中（背景）」を、深みのある濃紺から墨色へ変化する、内側からライトアップされたようなグラデーションにします */
  const cardShadow = "shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] bg-gradient-to-br from-[#121E31] via-[#0A101D] to-[#070B14]"
  // ---------------------------------------------------------

  return (
    /* 高級感のある重厚なディープチャコール（墨色ベース） */
    <section id="pain" className={`${sectionPadding} relative bg-[#090F19] text-slate-400 overflow-hidden`}>
      
      {/* 最背面：背景テクスチャ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header */}
        <div className={`text-center ${headerBottomMargin}`}>
          <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-4 uppercase">
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
            <div key={i} className={`relative grid lg:grid-cols-12 gap-0 items-center`}>
              
              {/* 背後の特大ID：デジタルな発光をやめ、背景に深く静かに溶け込む「漆黒の透かしデザイン」へ変更 */}
              <span className={`font-sans text-[12rem] sm:text-[22rem] font-black text-slate-800 opacity-[0.15] absolute -top-16 ${i % 2 === 0 ? '-right-4' : '-left-4'} italic pointer-events-none select-none z-0`}>
                {m.id}
              </span>

              {/* 画像フィールド */}
              <div className={`lg:col-span-7 relative z-10 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className={`${cardRounded} border border-slate-900/80 overflow-hidden aspect-[16/10] bg-slate-950 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent" />
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
                    <span className="font-sans text-xl font-bold italic text-amber-300">{m.id}</span>
                    <Minus className="w-8 h-[1px] text-slate-800" />
                    
                    {/* 💡 カードの「中」に、ジュエルのように上品に美しく光る医療バッジを格納 */}
                    <span className="text-[9px] font-bold text-sky-400 bg-sky-500/10 border border-sky-400/20 px-2.5 py-0.5 rounded tracking-[0.2em] uppercase shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                      Medical Approach
                    </span>
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-slate-950/80 rounded border border-slate-900 text-[9px] font-bold text-slate-400 tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-400 leading-loose font-medium pt-2 border-t border-slate-900/60支線">
                    {m.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-950">
          <div className="flex flex-col items-center text-center">
            
            {/* 中央のラインを、より鋭く高級感のある静かな光の針へ */}
            <div className="w-[1px] h-12 bg-gradient-to-b from-sky-400/30 via-sky-500/10 to-transparent mb-8" />

            <div className="space-y-8">
              <h3 className="font-sans text-2xl sm:text-4xl font-bold text-slate-100 leading-tight tracking-tighter">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm sm:text-base font-medium opacity-80">
                    {PAIN_CONTENT.reassurance.body1}
                  </p>
                  <div>
                    <span className="relative z-10 text-slate-200 font-bold text-xl sm:text-3xl tracking-tighter">
                      {PAIN_CONTENT.reassurance.body2}
                    </span>
                  </div>
                </div>

                {/* 派手なグラデーションをやめ、清潔な白からゴールドへ流れるシックな文字色へ */}
                <p className="whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-amber-200 font-bold text-xl sm:text-2xl tracking-tighter leading-snug max-w-2xl mx-auto">
                  {PAIN_CONTENT.reassurance.body3}
                </p>
              </div>

              <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-slate-950/80 rounded-full text-slate-400 text-[10px] sm:text-xs border border-slate-900 font-bold shadow-inner">
                <ShieldCheck className="w-4 h-4 text-sky-400/80" />
                <span>{PAIN_CONTENT.reassurance.note}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
