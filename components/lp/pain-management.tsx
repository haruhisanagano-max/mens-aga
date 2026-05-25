'use client'

import { Zap, ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MACHINE_CONTENT } from '@/edit/machine-content'

export default function MachineDeepDive() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"
  const sectionPadding = "pt-16 sm:pt-28 pb-13" 
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardTextPadding = "p-8 sm:p-12"
  const cardRounded = "rounded-2xl"

  /* 💡 モヤモヤした影を全廃止。クリーンで洗練された「枠線」と「控えめな外側の光」のみに統一 */
  const cleanCardStyle = "border border-slate-700/60 bg-[#111827] shadow-[0_0_20px_rgba(56,189,248,0.05)]"
  
  /* 💡 下部グループ全体を包み込む、接地感のあるクリーンなブルーシャドウ */
  const bottomGroupStyle = "border border-slate-700/60 bg-[#111827] shadow-[0_20px_60px_rgba(56,189,248,0.1)]"

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    <section id="machine" className={`${sectionPadding} relative bg-[#090E17] text-slate-400 overflow-hidden`}>
      
      {/* 💡 背景の余計なジグザグ光やグラデーションを【完全削除】しました。 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {MACHINE_CONTENT.sectionBgImage && (
          <Image src={MACHINE_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          
          {/* 🔴 Header */}
          <div className={`text-center ${headerBottomMargin}`}>
            <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-4 uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
              {MACHINE_CONTENT.badge}
            </span>
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-6 leading-tight`}>
              {MACHINE_CONTENT.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
              {MACHINE_CONTENT.subtitle}
            </p>
          </div>

          {/* 🔴 1. 上段スペック解説カード */}
          <motion.div 
            className={`relative overflow-hidden ${cardRounded} ${cleanCardStyle} mb-12`}
            style={gpuStyle}
          >
            {/* 💡 カード内部の余計な光（スキャナー光など）を【完全削除】 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full relative z-10">
              
              {/* 左側：画像エリア（💡 幕・フィルターを【完全削除】。100%クリアな画像） */}
              <div className="relative aspect-[12/9] lg:aspect-auto bg-[#090E17] w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-700/60">
                {MACHINE_CONTENT.diagram.image && (
                  <Image 
                    src={MACHINE_CONTENT.diagram.image} 
                    alt="Meso Treatment Visual" 
                    fill 
                    className="object-cover" 
                  />
                )}
                {/* 帯バッジ */}
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700 shadow-xl">
                    <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                    <span className="text-[9px] font-black tracking-widest text-slate-200 uppercase">
                      {MACHINE_CONTENT.diagram.limitedBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* 右側：解説エリア（💡 テキストが100%読めるように背景は無地） */}
              <div className="p-8 sm:p-12 flex flex-col justify-center w-full relative z-10">
                <div className="space-y-10 w-full">
                  {MACHINE_CONTENT.lasers.map((laser, idx) => (
                    <div key={idx} className="relative w-full">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                        <h4 className="font-sans text-lg sm:text-xl font-bold text-slate-100 tracking-tight">
                          {laser.name}
                        </h4>
                        <span className="text-amber-300 font-bold text-[10px] tracking-widest uppercase italic">
                          {laser.wavelength}
                        </span>
                      </div>
                      <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/40">
                        {laser.feature}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4 w-full">
                        {laser.points.map((p, pi) => (
                          <span key={pi} className="px-3 py-1 bg-slate-800/60 rounded border border-slate-700/60 text-[9px] font-bold text-sky-400 whitespace-normal text-center">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* 🔴 2. 特徴ギャラリー（3連ミニBOX） */}
          <div className="mb-12 grid grid-cols-3 gap-3 sm:gap-6">
            {MACHINE_CONTENT.features.map((f, i) => (
              <motion.div 
                key={i} 
                className={`aspect-[4/3] relative overflow-hidden rounded-xl ${cleanCardStyle}`} 
              >
                {/* 💡 幕なし、エフェクトなし、100%クリア */}
                <Image src={f.img} alt="" fill className="object-cover" />
              </motion.div>
            ))}
          </div>

          {/* 🔴 3. 下部ロングカード（3段構成） */}
          <motion.div className={`overflow-hidden ${cardRounded} ${bottomGroupStyle}`}>
            {MACHINE_CONTENT.reasons.map((reason, i) => (
              <div key={i} className={`relative grid md:grid-cols-2 items-center ${i !== 0 ? 'border-t border-slate-700/60' : ''}`}>
                
                {/* 💡 【洗練されたエッジ光】各構成（01,02,03）の「上部フチ」だけが、独立して細く上品に光るライン */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent z-20" />

                {/* 画像側（💡 幕・グラデーション【完全削除】。100%クリア） */}
                <div className={`relative aspect-video bg-[#090E17] overflow-hidden ${i % 2 !== 0 ? 'md:order-last border-l border-slate-700/60' : 'border-r border-slate-700/60'}`}>
                  <Image src={reason.img} alt="" fill className="object-cover" />
                </div>
                
                {/* テキスト側（💡 背景のモヤ光を【完全削除】。テキストを100%読みやすく） */}
                <div className={`${cardTextPadding} relative h-full flex flex-col justify-center`}>
                  
                  {/* 背後の特大ID（透かし装飾のみ残す） */}
                  <span className="font-sans italic text-[8rem] sm:text-[12rem] absolute -top-4 -right-4 opacity-[0.03] select-none font-black text-slate-100 z-0">
                    {i + 1}
                  </span>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-sans text-xl font-bold italic text-amber-300">0{i + 1}</span>
                      <Minus className="w-6 h-[1px] text-sky-500/50" />
                      <span className="text-[9px] font-bold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-widest uppercase">
                        Meso Detail
                      </span>
                    </div>
                    
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-100 mb-3 sm:mb-5 tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-loose font-medium opacity-90">
                      {reason.desc}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>

          {/* 🔴 下部注釈パーツ */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-start gap-3 px-8 py-4 bg-slate-900/40 rounded-xl text-slate-400 text-[10px] sm:text-xs border border-slate-700/50 font-bold tracking-tight">
              <ShieldCheck className="w-5 h-5 text-sky-400/60 shrink-0 mt-0.5" />
              <span className="whitespace-pre-line text-left opacity-80">
                {`※当院のAGA注入治療および処方薬は、医師の診断に基づき、適切なリスク管理のもとで行われます。
                ※成長因子（グロスファクター）および各種有効成分の配合比率は、患者様の進行度に合わせて調整いたします。
                ※無料カウンセリングにて、施術内容の詳細や副作用（初期脱毛・赤み等）について丁寧にご説明いたします。`}
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
