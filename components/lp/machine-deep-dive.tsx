'use client'

import { Zap, ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MACHINE_CONTENT } from '@/edit/machine-content'

export default function MachineDeepDive() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（ペインパート基準・クリーン＆洗練決定版）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"
  const sectionPadding = "pt-16 sm:pt-28 pb-13" 
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardTextPadding = "p-8 sm:p-12"
  
  // Painパートと完全に同じ、洗練された丸み
  const cardRounded = "rounded-xl"
  const cardBorder = "border border-slate-700/30 transition-all duration-500 hover:border-sky-400/20"

  /* 💡 【上段スペックカード】光源は入れず、最後のスクショのように「外側に青い影（アウターグロウ）」を落とす */
  const mainCardShadow = "shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5),0_0_40px_rgba(56,189,248,0.15)] bg-[#1E293B]"

  /* 💡 【下段カード】Painパート基準の透过グレー×上品な医療ブルーのインナーグロウ */
  const longCardShadow = "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_30px_60px_-15px_rgba(56,189,248,0.1)] bg-[#0B0F17]/70 backdrop-blur-sm"
  // ---------------------------------------------------------

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    /* 背景はペインパートと完全に統一したディープネイビー */
    <section id="machine" className={`${sectionPadding} relative bg-[#0B111E] text-slate-400 overflow-hidden`}>
      
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
            <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-70 leading-relaxed font-medium opacity-70">
              {MACHINE_CONTENT.subtitle}
            </p>
          </div>

          {/* 🔴 1. 上段スペック解説カード（アウターグロウのみ） */}
          <motion.div 
            className={`relative overflow-hidden ${cardRounded} ${cardBorder} ${mainCardShadow} mb-12`}
            style={gpuStyle}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full relative z-10">
              
              {/* 左側：画像エリア（💡 完全に幕なし！クリアな画像） */}
              <div className="relative aspect-[12/9] lg:aspect-auto bg-[#1E293B] w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-700/30">
                {MACHINE_CONTENT.diagram.image && (
                  <Image 
                    src={MACHINE_CONTENT.diagram.image} 
                    alt="Meso Treatment Visual" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                )}
                {/* 帯バッジ */}
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700/80 shadow-lg">
                    <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" />
                    <span className="text-[9px] font-black tracking-widest text-slate-200 uppercase">
                      {MACHINE_CONTENT.diagram.limitedBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* 右側：解説エリア（💡 テキストが100%読めるように背景は無地） */}
              <div className="p-8 sm:p-12 flex flex-col justify-center w-full relative z-10">
                <div className="space-y-10 w-full relative">
                  
                  {MACHINE_CONTENT.lasers.map((laser, idx) => (
                    <div className="relative w-full overflow-hidden" key={idx}>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3 w-full relative z-10">
                        <h4 className="font-sans text-lg sm:text-xl font-bold text-slate-100 break-all tracking-tight">
                          {laser.name}
                        </h4>
                        <span className="text-amber-300 font-bold text-[10px] tracking-widest uppercase italic shrink-0">
                          {laser.wavelength}
                        </span>
                      </div>
                      <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30">
                        {laser.feature}
                      </p>
                      <div className="flex flex-wrap gap-2 w-full mt-3">
                        {laser.points.map((p, pi) => (
                          <span key={pi} className="px-3 py-1 bg-slate-900/60 rounded border border-slate-700/60 text-[9px] font-bold text-sky-400 whitespace-normal text-center shadow-inner">
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
                className={`aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl border border-slate-700/30 bg-[#1E293B]`} 
                whileHover={{ y: -4, borderColor: 'rgba(56,189,248,0.3)' }}
                transition={{ duration: 0.3 }}
              >
                {/* 💡 幕なし、クリア支線 leading-loose font-medium pt-2 border-t border-slate-700/60 */}
                <Image src={f.img} alt="" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* 🔴 3. 下部ロングカード（1つの大きなカード内で構成ごとに光る） */}
          <motion.div className={`overflow-hidden ${cardRounded} ${cardBorder} ${longCardShadow}`}>
            {MACHINE_CONTENT.reasons.map((reason, i) => (
              <div key={i} className={`relative grid md:grid-cols-2 items-center ${i !== 0 ? 'border-t border-slate-700/30' : ''}`}>
                
                {/* 画像側（💡 幕なし、クリア支線 leading-loose font-medium pt-2 border-t border-slate-700/60 */}
                <div className={`relative aspect-video bg-[#0B111E] overflow-hidden ${i % 2 !== 0 ? 'md:order-last' : ''} border-r border-slate-700/30`}>
                  <Image src={reason.img} alt="" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* テキスト側 */}
                <div className={`${cardTextPadding} relative h-full flex flex-col justify-center overflow-hidden`}>
                  
                  {/* 背景の特大ID（背景に沈める支線 leading-loose font-medium pt-2 border-t border-slate-700/60 */}
                  <span className="font-sans italic text-[8rem] sm:text-[12rem] absolute -top-4 -right-4 opacity-[0.03] select-none font-black text-slate-100 z-0">
                    {i + 1}
                  </span>
                  
                  {/* 💡 【各要素への独立光源】白は一切不使用。テキストを邪魔しない端に配置。 */}
                  {i === 0 && (
                    <>
                      {/* 左端の芯 */}
                      <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-[6px] h-[40%] bg-[radial-gradient(ellipse_at_left,rgba(56,189,248,0.9),transparent支線 leading-loose font-medium pt-2 border-t border-slate-700/30">
                      {/* 左端のモヤ */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[70%] h-[120%] bg-[radial-gradient(ellipse_at_left,rgba(56,189,248,0.12),transparent_70%)] pointer-events-none z-0" />
                    </>
                  )}
                  {i === 1 && (
                    <>
                      {/* 右端の芯 */}
                      <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-[6px] h-[40%] bg-[radial-gradient(ellipse_at_right,rgba(56,189,248,0.9),transparent_70%)] blur-[2px] pointer-events-none z-0" />
                      {/* 右端のモヤ */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] h-[120%] bg-[radial-gradient(ellipse_at_right,rgba(56,189,248,0.12),transparent支線 leading-loose font-medium pt-2 border-t border-slate-700/60">
                    </>
                  )}
                  {i === 2 && (
                    <>
                      {/* 底面の芯（ペインパートのブルー） */}
                      <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-[40%] h-[6px] bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.9),transparent支線 leading-loose font-medium pt-2 border-t border-slate-700/30 blur-[2px] pointer-events-none z-0" />
                      {/* 底面のモヤ */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[70%] bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.12),transparent支線 leading-loose font-medium pt-2 border-t border-slate-700支線 leading-loose font-medium pt-2 border-t border-slate-700/40' : ''}`}>
                    </>
                  )}

                  {/* テキスト要素（z-10 で光より手前に置くため、絶対に見えなくならない） */}
                  <div className="relative z-10 pl-4">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">0{i + 1}</span>
                      <Minus className="w-6 h-[1px] text-slate-700/60" />
                      <span className="text-[9px] font-bold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-wide uppercase">
                        Meso Detail
                      </span>
                    </div>
                    
                    {/* 💡 ここが壊れていたJSX構文の修正箇所です */}
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-100 mb-3 sm:mb-5 tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-loose font-medium opacity-90 pt-2 border-t border-slate-700/30">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* 🔴 下部注釈パーツ */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-start gap-3 px-8 py-4 bg-slate-900/40 rounded-xl text-slate-400 text-[10px] sm:text-xs border border-slate-700 font-bold tracking-tight shadow-inner">
              <ShieldCheck className="w-5 h-5 text-sky-400/70 shrink-0 mt-0.5" />
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
