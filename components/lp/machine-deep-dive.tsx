'use client'

import { Zap, ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MACHINE_CONTENT } from '@/edit/machine-content'

export default function MachineDeepDive() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"
  const sectionPadding = "pt-16 sm:pt-28 pb-13" 
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardTextPadding = "p-6 sm:p-10" 
  const cardRounded = "rounded-xl"

  const mainCardBorder = "border border-slate-700/50 hover:border-sky-400/20"
  const mainCardShadow = "shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] bg-[#151F32]"

  const longCardBorder = "border border-slate-700/60 transition-all duration-500 hover:border-sky-500/20"
  const longCardShadow = "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_30px_60px_-15px_rgba(56,189,248,0.1)] bg-[#0B0F17]/70 backdrop-blur-sm"

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    <section id="machine" className={`${sectionPadding} relative bg-[#0B111E] text-slate-400 overflow-hidden`}>
      
      {/* 背景の斜めジグザグ光 */}
      <div className="absolute inset-x-[-100px] inset-y-[-100px] z-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none transform -rotate-[15deg]" />
      <div className="absolute inset-x-[-100px] inset-y-[-100px] z-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none transform rotate-[25deg] delay-300" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        {MACHINE_CONTENT.sectionBgImage && (
          <Image src={MACHINE_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.01] mix-blend-overlay" priority />
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
            <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-70">
              {MACHINE_CONTENT.subtitle}
            </p>
          </div>

          {/* 🔴 1. スペック解説カード（2大アプローチ） */}
          <motion.div 
            className={`relative overflow-hidden ${cardRounded} ${mainCardBorder} ${mainCardShadow} mb-12`}
            style={gpuStyle}
          >
            {/* トップダウンスキャナー光 */}
            <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-[40%] h-[6px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,1),rgba(56,189,248,0.7),transparent_70%)] blur-[2px] opacity-100 pointer-events-none z-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[50%] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full overflow-hidden relative z-10">
              
              <div className="relative aspect-[12/9] bg-slate-950 w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800/60">
                {MACHINE_CONTENT.diagram.image && (
                  <Image 
                    src={MACHINE_CONTENT.diagram.image} 
                    alt="Meso Treatment Visual" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700 shadow-xl">
                    <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" />
                    <span className="text-[9px] font-black tracking-widest text-slate-200 uppercase">
                      {MACHINE_CONTENT.diagram.limitedBadge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12 flex flex-col justify-center w-full relative z-10">
                <div className="space-y-10 w-full relative">
                  
                  <div className="absolute top-[-50px] left-[-20%] w-[140%] h-[120%] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.06),transparent_60%)] pointer-events-none z-0" />

                  {MACHINE_CONTENT.lasers.map((laser, idx) => (
                    <div key={idx} className="relative w-full overflow-hidden">
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
                      <div className="flex flex-wrap gap-2 w-full">
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
                className={`aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950`} 
                whileHover={{ y: -4, borderColor: 'rgba(56,189,248,0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <Image src={f.img} alt="" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* 🔴 3. ロングカード（3連詳細・縦並び） */}
          <motion.div 
            className={`overflow-hidden ${cardRounded} ${longCardBorder} ${longCardShadow}`}
          >
            {MACHINE_CONTENT.reasons.map((reason, i) => (
              <div key={i} className={`relative grid md:grid-cols-2 items-center ${i !== 0 ? 'border-t border-slate-700/30' : ''}`}>
                
                <div className={`relative aspect-video bg-slate-950/20 overflow-hidden ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <Image src={reason.img} alt="" fill className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                
                <div className={`${cardTextPadding} relative h-full flex flex-col justify-center overflow-hidden`}>
                  
                  <span className="font-sans italic text-[8rem] sm:text-[12rem] absolute -top-4 -right-4 opacity-[0.03] select-none font-black text-slate-700">
                    {i + 1}
                  </span>
                  
                  {/* 底面発光 */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[50%] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,1),rgba(56,189,248,0.12),transparent_75%)] pointer-events-none z-0" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">0{i + 1}</span>
                      <Minus className="w-6 h-[1px] text-slate-700/60" />
                      <span className="text-[9px] font-bold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-widest uppercase shadow-[0_0_10px_rgba(56,189,248,0.15)]">Meso Detail</span>
                    </div>
                    
                    {/* 💡 ここが壊れていたJSX構文の修正箇所です */}
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-100 mb-3 sm:mb-5 tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30">
                      {reason.desc}
                    </p>
                  </div>

                  {/* テキスト上部からの光 */}
                  <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-[30%] h-[4px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.9),rgba(56,189,248,0.5),transparent_70%)] blur-[2px] opacity-100 pointer-events-none z-20" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[70%] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.1),transparent_70%)] pointer-events-none z-0" />
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
