'use client'

import { Zap, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MACHINE_CONTENT } from '@/edit/machine-content'

export default function MachineDeepDive() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "pt-16 sm:pt-28 pb-13" 
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardTextPadding = "p-8 sm:p-12"
  const cardRounded = "rounded-xl" 
  
  // 💡 【透過グラス枠】
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    <section id="machine" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【まだら（斑）の光】背景のドット散りばめ（維持） */}
      <div className="absolute top-[5%] left-[5%] w-[450px] h-[450px] bg-sky-500/40 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-5%] w-[550px] h-[550px] bg-indigo-500/30 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-400/30 blur-[130px] rounded-full pointer-events-none z-0" />

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
            {/* 💡 【メインタイトル発光】痛みのセクションのH2と完全に同じ、最上級の発光グラデーション */}
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]`}>
              {MACHINE_CONTENT.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-70">
              {MACHINE_CONTENT.subtitle}
            </p>
          </div>

          {/* 🔴 1. 上段スペック解説カード */}
          <motion.div 
            className={`relative overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_30px_60px_rgba(0,0,0,0.7)] mb-12 bg-transparent`}
            style={gpuStyle}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full relative z-10">
              
              {/* 左側：画像エリア */}
              <div className="relative aspect-[12/9] lg:aspect-auto bg-[#050A15] w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-700/60 z-20">
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

              {/* 右側：解説エリア */}
              <div className="p-8 sm:p-12 flex flex-col justify-center w-full relative overflow-hidden bg-slate-900/40 backdrop-blur-2xl z-10">
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.08] via-transparent to-transparent pointer-events-none z-0" />

                <div className="space-y-10 w-full relative z-10">
                  {MACHINE_CONTENT.lasers.map((laser, idx) => (
                    <div key={idx} className="relative w-full">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3 w-full">
                        {/* 💡 【修正：上段パートタイトル発光】text-slate-100をtext-whiteに変更し、痛みのセクションと同じくdrop-shadowを確実に付与して発光させました！ */}
                        <h4 className="font-sans text-lg sm:text-xl font-bold text-white break-all tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                          {laser.name}
                        </h4>
                        <span className="text-amber-300 font-bold text-[10px] tracking-widest uppercase italic shrink-0">
                          {laser.wavelength}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/40">
                        {laser.feature}
                      </p>
                      <div className="flex flex-wrap gap-2 w-full mt-3">
                        {laser.points.map((p, pi) => (
                          <span key={pi} className="px-3 py-1 bg-slate-950/60 rounded border border-slate-700/60 text-[9px] font-bold text-sky-400 whitespace-normal text-center shadow-inner">
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


          {/* 🔴 3. 下部ロングカード（3段構成） */}
          <motion.div 
            className={`overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_30px_60px_rgba(0,0,0,0.7)] bg-transparent`}
          >
            {MACHINE_CONTENT.reasons.map((reason, i) => (
              <div key={i} className={`relative grid md:grid-cols-2 items-stretch ${i !== 0 ? 'border-t border-slate-700/50' : ''}`}>
                
                {/* 画像側（100%クリア） */}
                <div className={`relative aspect-video bg-[#050A15] overflow-hidden ${i % 2 !== 0 ? 'md:order-last border-l border-slate-700/50' : 'border-r border-slate-700/50'} z-20`}>
                  <Image src={reason.img} alt="" fill className="object-cover opacity-95 hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* テキスト側（透過グラス：完全な左寄せ・上詰めに統一） */}
                <div className={`${cardTextPadding} relative h-full flex flex-col justify-start pt-10 sm:pt-14 overflow-hidden bg-slate-900/40 backdrop-blur-2xl z-10`}>
                  
                  {/* 背景の特大ID */}
                  <span className="font-sans italic text-[8rem] sm:text-[12rem] absolute -top-4 -right-4 opacity-[0.04] select-none font-black text-slate-100 z-0">
                    {i + 1}
                  </span>
                  
                  {/* ① 直線的な光の芯 */}
                  <div className={`absolute top-1/2 -translate-y-1/2 ${i % 2 !== 0 ? 'right-[-1px]' : 'left-[-1px]'} w-[2px] h-[60%] bg-gradient-to-b from-transparent via-sky-400/80 to-transparent shadow-[0_0_20px_rgba(56,189,248,1)] pointer-events-none z-20`} />
                  
                  {/* ② 境界線からテキストエリアへ向かって滲み出る柔らかい光の層 */}
                  <div className={`absolute inset-y-0 ${i % 2 !== 0 ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} from-sky-500/15 via-sky-500/5 to-transparent w-[80%] pointer-events-none z-0`} />
                  
                  {/* ③ テキストエリア全体を極薄く包むアンビエント光 */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.03),transparent_100%)] pointer-events-none z-0" />

                  <div className="relative w-full z-10 text-left">
                    {/* 💡 【数字とタグ】Minus線を排除し、ピタッと揃った左寄せに統一 */}
                    <div className="flex items-center gap-3 mb-4 w-full justify-start">
                      <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">0{i + 1}</span>
                      <span className="text-[9px] font-extrabold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-wide uppercase">
                        Meso Detail
                      </span>
                    </div>
                    
                    {/* 💡 【下部カードタイトル発光】こちらもtext-white＋drop-shadowで完璧に統一して発光 */}
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-5 tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                      {reason.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-loose font-medium opacity-90 pt-2 border-t border-slate-700/40 w-full text-left">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* 🔴 下部注釈パーツ */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-start gap-3 px-8 py-4 bg-slate-900/60 rounded-xl text-slate-400 text-[10px] sm:text-xs border border-slate-700/60 font-bold tracking-tight shadow-inner">
              <ShieldCheck className="w-5 h-5 text-sky-400/70 shrink-0 mt-0.5" />
              <span className="whitespace-pre-line text-left opacity-80">
                {`※当院のAGA注入治療および処方薬は、医師の診断に基づき、適切なリスク管理のもとで行われます。
                ※無料カウンセリングにて、施術内容の詳細や副作用（初期脱毛・赤み等）について丁寧にご説明いたします。`}
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
