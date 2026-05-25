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
  
  const cardRounded = "rounded-xl" 
  // 枠線を少し明るく細くし、ガラスのフチを表現
  const glassBorder = "border border-slate-700/50 border-t-white/5 border-l-white/5"

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    <section id="machine" className={`${sectionPadding} relative bg-[#0B111E] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【新発明：背景の「まだら（斑）」光】
          大小さまざまな光の球を散りばめ、背後に幻想的で最先端な医療空間を作ります。 */}
      <div className="absolute top-[5%] left-[5%] w-[400px] h-[400px] bg-sky-500/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[35%] right-[0%] w-[500px] h-[500px] bg-cyan-400/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[65%] left-[15%] w-[350px] h-[350px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[10%] w-[450px] h-[450px] bg-sky-400/15 blur-[140px] rounded-full pointer-events-none z-0" />

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
            <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-70">
              {MACHINE_CONTENT.subtitle}
            </p>
          </div>

          {/* 🔴 1. 上段スペック解説カード */}
          <motion.div 
            /* 💡 カード自体の背景色は透明（bg-transparent）にし、中身のdivで透過をコントロールします */
            className={`relative overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_30px_60px_rgba(0,0,0,0.6)] mb-12 bg-transparent`}
            style={gpuStyle}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full relative z-10">
              
              {/* 左側：画像エリア（💡 ここは透かさず、ソリッドな暗闇にして画像を100%クリアに保つ！） */}
              <div className="relative aspect-[12/9] lg:aspect-auto bg-[#090E17] w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-700/50">
                {MACHINE_CONTENT.diagram.image && (
                  <Image 
                    src={MACHINE_CONTENT.diagram.image} 
                    alt="Meso Treatment Visual" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                )}
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700/80 shadow-lg">
                    <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" />
                    <span className="text-[9px] font-black tracking-widest text-slate-200 uppercase">
                      {MACHINE_CONTENT.diagram.limitedBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* 右側：解説エリア（💡 ここが「透過グラス」！背後のまだら光が透けて見えます） */}
              <div className="p-8 sm:p-12 flex flex-col justify-center w-full relative overflow-hidden bg-[#0F172A]/40 backdrop-blur-xl">
                
                {/* 上段独自のデザイン：ガラスの表面を斜めに走るうっすらとした反射光 */}
                <div className="absolute top-[-50%] right-[-50%] w-[100%] h-[200%] bg-gradient-to-b from-white/[0.02] to-transparent transform rotate-45 pointer-events-none" />

                <div className="space-y-10 w-full relative z-10">
                  {MACHINE_CONTENT.lasers.map((laser, idx) => (
                    <div key={idx} className="relative w-full">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3 w-full">
                        <h4 className="font-sans text-lg sm:text-xl font-bold text-slate-100 break-all tracking-tight">
                          {laser.name}
                        </h4>
                        <span className="text-amber-300 font-bold text-[10px] tracking-widest uppercase italic shrink-0">
                          {laser.wavelength}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30">
                        {laser.feature}
                      </p>
                      <div className="flex flex-wrap gap-2 w-full mt-3">
                        {laser.points.map((p, pi) => (
                          <span key={pi} className="px-3 py-1 bg-slate-900/50 rounded border border-slate-700/50 text-[9px] font-bold text-sky-400 whitespace-normal text-center">
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
                /* 💡 画像カードは透かさず、ソリッドな黒背景で画像を際立たせる */
                className={`aspect-[4/3] relative overflow-hidden ${cardRounded} border border-slate-700/50 bg-[#090E17] shadow-xl`} 
                whileHover={{ y: -4, borderColor: 'rgba(56,189,248,0.4)' }}
                transition={{ duration: 0.3 }}
              >
                <Image src={f.img} alt="" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* 🔴 3. 下部ロングカード（3段構成） */}
          <motion.div 
            /* 💡 全体の枠。背景は透明にし、中身のグリッドで透過を管理 */
            className={`overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-transparent`}
          >
            {MACHINE_CONTENT.reasons.map((reason, i) => (
              <div key={i} className={`relative grid md:grid-cols-2 items-center ${i !== 0 ? 'border-t border-slate-700/40' : ''}`}>
                
                {/* 画像側（💡 ソリッドな暗闇。透かさない） */}
                <div className={`relative aspect-video bg-[#090E17] overflow-hidden ${i % 2 !== 0 ? 'md:order-last border-l border-slate-700/40' : 'border-r border-slate-700/40'}`}>
                  <Image src={reason.img} alt="" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* テキスト側（💡 ここが「透過グラス」！） */}
                <div className={`${cardTextPadding} relative h-full flex flex-col justify-center overflow-hidden bg-[#0F172A]/40 backdrop-blur-xl`}>
                  
                  {/* 背景の特大ID */}
                  <span className="font-sans italic text-[8rem] sm:text-[12rem] absolute -top-4 -right-4 opacity-[0.04] select-none font-black text-slate-100 z-0">
                    {i + 1}
                  </span>
                  
                  {/* 💡 【下段独自のデザイン】透過ガラス ＋ 痛みパートの「白の芯の強烈光源」の合体！
                      背景のまだら光が透けつつ、足元からはバシッと白い光源が放たれる超リッチな仕様です。 */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[50%] bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.15),transparent_75%)] pointer-events-none z-0" />
                  <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-[65%] h-[8px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,1),rgba(56,189,248,0.7),transparent_65%)] blur-[3px] opacity-[1] pointer-events-none z-0" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">0{i + 1}</span>
                      <Minus className="w-6 h-[1px] text-slate-700/60" />
                      <span className="text-[9px] font-extrabold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-wide uppercase">
                        Meso Detail
                      </span>
                    </div>
                    
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
