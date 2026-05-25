'use client'

import { Zap, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MACHINE_CONTENT } from '@/edit/machine-content'

export default function MachineDeepDive() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（AGA・視認性爆上げ・光の緩急カスタム決定版）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"
  const sectionPadding = "pt-16 sm:pt-28 pb-13" 
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardTextPadding = "p-6 sm:p-10" 
  const cardRounded = "rounded-xl"

  /* 💡 1. 大型スペックカード用の設定（左上からの強い光を迎え撃つエッジ） */
  const mainCardBorder = "border border-slate-800/80 border-t-white/20 border-l-white/10"
  const mainCardShadow = "shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7)] bg-[#151F32]/90 backdrop-blur-xl"

  /* 💡 3. 縦並びロングカード用の設定（左フチをスカイブルーに光らせて角度の違いを演出） */
  const longCardBorder = "border border-slate-900 border-l-2 border-l-sky-400/80 transition-all duration-500 hover:border-l-sky-300"
  const longCardShadow = "shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#0B0F17]/90"

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    /* 全体の背景：硬質で洗練された高級テック感のあるチャコールグレー背景 */
    <section id="machine" className={`${sectionPadding} relative bg-[#0F172A] text-slate-400 overflow-hidden`}>
      
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
            {/* 💡 【視認性爆上げ・左上斜め光】不透明度をガツンと上げ、中央に白をブレンド。これで確実に光が見えます！ */}
            <div className="absolute top-0 left-0 w-[70%] h-[70%] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),rgba(56,189,248,0.45),transparent_65%)] pointer-events-none z-0 opacity-90" />

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full overflow-hidden relative z-10">
              
              {/* 左側：画像エリア */}
              <div className="relative aspect-[12/9] bg-slate-950/60 w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-900/60">
                {MACHINE_CONTENT.diagram.image && (
                  <Image 
                    src={MACHINE_CONTENT.diagram.image} 
                    alt="Meso Treatment Visual" 
                    fill 
                    className="object-cover opacity-90 transition-transform duration-700 hover:scale-102" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151F32]/50 to-transparent" />
                
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 bg-slate-900/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800 shadow-xl">
                    <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300 drop-shadow-[0_0_5px_rgba(245,158,11,0.6)]" />
                    <span className="text-[9px] font-black tracking-widest text-slate-200 uppercase">
                      {MACHINE_CONTENT.diagram.limitedBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* 右側：内服薬・注入治療の解説エリア */}
              <div className="p-8 sm:p-12 flex flex-col justify-center w-full min-w-0 relative">
                <div className="space-y-10 w-full">
                  {MACHINE_CONTENT.lasers.map((laser, idx) => (
                    <div key={idx} className="relative w-full max-w-full overflow-hidden">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3 w-full">
                        <h4 className="font-sans text-lg sm:text-xl font-bold text-slate-100 break-all tracking-tight">
                          {laser.name}
                        </h4>
                        <span className="text-amber-300 font-bold text-[10px] tracking-widest uppercase italic shrink-0">
                          {laser.wavelength}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4 font-medium opacity-90 w-full">
                        {laser.feature}
                      </p>
                      <div className="flex flex-wrap gap-2 w-full">
                        {laser.points.map((p, pi) => (
                          <span key={pi} className="px-3 py-1 bg-slate-900/80 rounded-full text-[9px] font-bold text-sky-400 border border-slate-800 whitespace-normal text-center shadow-inner">
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
                className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl border border-slate-800/80 bg-slate-950" 
                whileHover={{ y: -4, borderColor: 'rgba(56,189,248,0.5)' }}
                transition={{ duration: 0.2 }}
              >
                <Image src={f.img} alt="" fill className="object-cover opacity-85 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* 🔴 3. ロングカード（3連詳細・縦並び） */}
          <motion.div className={`overflow-hidden ${cardRounded} ${longCardBorder} ${longCardShadow}`}>
            {MACHINE_CONTENT.reasons.map((reason, i) => (
              <div key={i} className="w-full relative">
                
                {/* 💡 【視認性爆上げ・閃光レーザーライン】
                   消えていた区切り線を、中心が白く強く発光する、厚みのあるサイバーレーザー線（h-[2px]）へ劇的強化！ */}
                {i !== 0 && (
                  <div className="w-full px-8 relative z-30">
                    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-sky-300 to-transparent opacity-100 blur-[0.5px] drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                  </div>
                )}

                {/* 💡 【新しい角度の光：インナーグロウ】各カードの左側（縦フチ）から右に向かってポワッと滲み出る微細な光の壁を隠し味に */}
                <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-sky-500/[0.04] to-transparent pointer-events-none z-0" />

                <div className="grid md:grid-cols-2 items-center relative z-10">
                  {/* 画像側 */}
                  <div className={`relative aspect-video bg-slate-950/40 overflow-hidden ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                    <Image src={reason.img} alt="" fill className="object-cover opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/60 to-transparent" />
                  </div>
                  
                  {/* テキスト側 */}
                  <div className={`${cardTextPadding} relative overflow-hidden`}>
                    <span className="font-sans italic text-[8rem] sm:text-[12rem] absolute -top-4 -right-4 opacity-[0.04] select-none font-black text-slate-700">
                      {i + 1}
                    </span>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-sans text-base font-black italic text-amber-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]">0{i + 1}</span>
                        <span className="text-[8px] font-bold text-sky-400/80 tracking-widest uppercase">Meso Detail</span>
                      </div>
                      
                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-100 mb-3 sm:mb-5 tracking-tight">
                        {reason.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-loose font-medium opacity-90">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>

          {/* 🔴 下部注釈パーツ */}
          <div className="mt-10 sm:mt-16 text-center">
            <div className="inline-flex items-start gap-3 px-8 py-4 bg-slate-950/80 rounded-xl text-slate-400 text-[10px] sm:text-xs border border-slate-900 font-bold tracking-tight shadow-inner">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 opacity-80" />
              <span className="whitespace-pre-line text-left opacity-80">
                {`※当院のAGA注入治療および処方薬は、医師の診断に基づき、適切なリスク管理のもとで行われます。
                ※成長因子（グロスファクター）および各種有効成分の配合比率は、患者様の進行度に合わせて調整いたします。
                ※無料カウンセリングにて、施術内容の詳細や副作用（初期脱毛・赤み等）について丁寧にご説明いたします。`}
              </span>
            </div>
          </div>

        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-slate-950" /> 
    </section>
  )
}
