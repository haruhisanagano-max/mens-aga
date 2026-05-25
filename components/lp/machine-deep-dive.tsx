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
  
  // 💡 ペインパート（スクショ3枚目）の品格を見習った、上品なベースカード設定
  const cardRounded = "rounded-2xl"
  const baseCardStyle = "border border-slate-700/40 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_10px_20px_-10px_rgba(56,189,248,0.05)] bg-[#151F32]"

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
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
            <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-4 uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
              {MACHINE_CONTENT.badge}
            </span>
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-6 leading-tight`}>
              {MACHINE_CONTENT.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
              {MACHINE_CONTENT.subtitle}
            </p>
          </div>

          {/* 🔴 1. 上部スペック解説カード */}
          <motion.div 
            className={`relative overflow-hidden ${cardRounded} ${baseCardStyle} mb-12`}
            style={gpuStyle}
          >
            {/* 💡 上部カードの光：右上からふんわりと差し込む医療ブルーの光 */}
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12),transparent_60%)] pointer-events-none z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full relative z-10">
              
              {/* 左側：画像エリア（暗い幕はなし。クリアに） */}
              <div className="relative aspect-[12/9] lg:aspect-auto bg-[#0B111E] w-full border-b lg:border-b-0 lg:border-r border-slate-700/40">
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
                  <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700/80 shadow-lg">
                    <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                    <span className="text-[9px] font-black tracking-widest text-slate-200 uppercase">
                      {MACHINE_CONTENT.diagram.limitedBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* 右側：解説エリア */}
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
                      <p className="text-xs text-slate-300 leading-relaxed mb-4 font-medium opacity-90">
                        {laser.feature}
                      </p>
                      <div className="flex flex-wrap gap-2">
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
                className={`aspect-[4/3] relative overflow-hidden ${cardRounded} ${baseCardStyle}`} 
                whileHover={{ y: -4, borderColor: 'rgba(56,189,248,0.3)' }}
                transition={{ duration: 0.2 }}
              >
                {/* 💡 ここもクリアに。 */}
                <Image src={f.img} alt="" fill className="object-cover" />
              </motion.div>
            ))}
          </div>

          {/* 🔴 3. 下部詳細カード（1つの大きなカード内で、構成ごとに光を変化させる） */}
          <motion.div className={`overflow-hidden ${cardRounded} ${baseCardStyle}`}>
            {MACHINE_CONTENT.reasons.map((reason, i) => (
              <div key={i} className={`relative grid md:grid-cols-2 items-center ${i !== 0 ? 'border-t border-slate-700/40' : ''}`}>
                
                {/* 画像側（💡 幕なし、クリア） */}
                <div className={`relative aspect-video bg-[#0B111E] overflow-hidden ${i % 2 !== 0 ? 'md:order-last' : ''} border-r border-slate-700/40`}>
                  <Image src={reason.img} alt="" fill className="object-cover" />
                </div>
                
                {/* テキスト側 */}
                <div className={`${cardTextPadding} relative h-full flex flex-col justify-center`}>
                  
                  {/* 💡 【これがご要望の「1構成ずつ異なる光」です！】
                     i（01, 02, 03）に応じて、光の当たる角度を変化させ、洗練されたリズムを作ります。 */}
                  {i === 0 && (
                    <div className="absolute top-0 left-0 w-[80%] h-[80%] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_60%)] pointer-events-none z-0" />
                  )}
                  {i === 1 && (
                    <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.15),transparent_60%)] pointer-events-none z-0" />
                  )}
                  {i === 2 && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.12),transparent_60%)] pointer-events-none z-0" />
                  )}

                  {/* 背景の透かし数字 */}
                  <span className="font-sans italic text-[8rem] sm:text-[12rem] absolute -top-4 -right-4 opacity-[0.03] select-none font-black text-slate-100 z-0">
                    {i + 1}
                  </span>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-sans text-xl font-black italic text-amber-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">0{i + 1}</span>
                      <Minus className="w-6 h-[1px] text-slate-600" />
                      <span className="text-[9px] font-bold text-sky-400/90 bg-sky-500/5 border border-sky-400/20 px-2 py-0.5 rounded tracking-widest uppercase">
                        Meso Detail
                      </span>
                    </div>
                    
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-100 mb-3 sm:mb-5 tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-loose font-medium opacity-90">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* 🔴 下部注釈パーツ */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-start gap-3 px-8 py-4 bg-slate-900/40 rounded-xl text-slate-400 text-[10px] sm:text-xs border border-slate-700/50 font-bold tracking-tight shadow-inner">
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
