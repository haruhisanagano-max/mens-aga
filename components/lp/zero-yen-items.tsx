'use client'

import * as LucideIcons from 'lucide-react'
import { ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ZERO_YEN_CONTENT } from '@/edit/zero-yen-items'

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (LucideIcons as any)[name] || LucideIcons.HelpCircle
  return <Icon className={className} />
}

export default function ZeroYenItems() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"
  
  // 💡 【同期】ペインパートと完全同一のデザイン設定
  const sectionPadding = "py-10 sm:py-16" 
  const headerBottomMargin = "mb-8 sm:mb-12" 
  const cardRounded = "rounded-xl" 
  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' }
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"

  return (
    <section id="zero-yen" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【背景演出：360度アンビエント発光の静止流れ星（6本）】
           レーザー光線を完全撤廃！
           「360度広がる正円のグロウ（光源の広がり）」と「1pxの極細の線」を分離して重ねることで、
           暗い紺色の背景を照らす、本物の奥行きと明暗を生み出します。
           
           💡【修正点】光源（芯）の色を青に戻し、タイトル付近を避けて配置。長さも長く復元。 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* =========================================
            1本目：左上 (Sky系) - 配置を下げ、長く、青光源
        ========================================= */}
        <div className="absolute top-[25%] left-[5%]"> {/* タイトルを避けて少し下げました */}
          {/* 360度広がる光源（非光のお広がり。正円。Sky-500） */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-sky-500/25 blur-[120px] rounded-full" />
          {/* 1pxの極細の芯（芯の色を白から青へ。長く。box-shadowを青一色へ） */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[1px] bg-gradient-to-r from-transparent via-sky-100 to-transparent rotate-[-15deg]" 
            style={{ boxShadow: '0 0 10px #38bdf8, 0 0 20px #38bdf8' }} 
          />
        </div>
        
        {/* =========================================
            2本目：右上 (Cyan系) - 配置を下げ、長く、青光源
        ========================================= */}
        <div className="absolute top-[35%] right-[5%]"> {/* タイトルを避けて少し下げました */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/25 blur-[100px] rounded-full" />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-[1px] bg-gradient-to-r from-transparent via-cyan-100 to-transparent rotate-[-15deg]" 
            style={{ boxShadow: '0 0 10px #22d3ee, 0 0 20px #0ea5e9' }} 
          />
        </div>
        
        {/* =========================================
            3本目：左中央 (Sky系) - 長く、青光源
        ========================================= */}
        <div className="absolute top-[50%] left-[10%]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-400/20 blur-[140px] rounded-full" />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[550px] h-[1px] bg-gradient-to-r from-transparent via-sky-100 to-transparent rotate-[-15deg]" 
            style={{ boxShadow: '0 0 15px #38bdf8, 0 0 25px #38bdf8' }} 
          />
        </div>

        {/* =========================================
            4本目：右中央 (Cyan系) - 長く、青光源
        ========================================= */}
        <div className="absolute top-[60%] right-[15%]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[130px] rounded-full" />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[1px] bg-gradient-to-r from-transparent via-cyan-100 to-transparent rotate-[-15deg]" 
            style={{ boxShadow: '0 0 10px #22d3ee, 0 0 20px #0ea5e9' }} 
          />
        </div>

        {/* =========================================
            5本目：左下 (Blue系) - 長く、青光源
        ========================================= */}
        <div className="absolute top-[75%] left-[15%]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 blur-[110px] rounded-full" />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-[1px] bg-gradient-to-r from-transparent via-blue-100 to-transparent rotate-[-15deg]" 
            style={{ boxShadow: '0 0 15px #60a5fa, 0 0 20px #3b82f6' }} 
          />
        </div>

        {/* =========================================
            6本目：右下 (Sky系) - 長く、青光源
        ========================================= */}
        <div className="absolute top-[85%] right-[5%]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-sky-400/25 blur-[120px] rounded-full" />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[1px] bg-gradient-to-r from-transparent via-sky-100 to-transparent rotate-[-15deg]" 
            style={{ boxShadow: '0 0 15px #38bdf8, 0 0 25px #7dd3fc' }} 
          />
        </div>

      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {ZERO_YEN_CONTENT.sectionBgImage && (
          <Image src={ZERO_YEN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          
          {/* Header */}
          <div className={`text-center ${headerBottomMargin}`}>
            <motion.span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-6 uppercase drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
              {ZERO_YEN_CONTENT.badge}
            </motion.span>
            
            {/* 💡 【スマホでのクリップバグ完全解消】 */}
            <div className="relative inline-block py-4">
              <div className="absolute inset-x-4 inset-y-2 bg-sky-500/20 blur-2xl rounded-full pointer-events-none" />
              <h2 className={`${fontTitle} text-2xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent relative z-10 whitespace-pre-wrap break-keep antialiased`}>
                {ZERO_YEN_CONTENT.title}
              </h2>
            </div>

            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium opacity-60 whitespace-pre-line">
              {ZERO_YEN_CONTENT.description}
            </p>
          </div>

          {/* 🔴 Item Grid Board */}
          <motion.div 
            className={`relative overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] py-8 sm:py-10 px-6 sm:px-12 bg-transparent flex flex-col`}
            style={gpuStyle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* カード背景：PainManagement同期のエレガントな磨りガラス */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl z-0" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl z-20 pointer-events-none" />

            {/* 光源（下部） */}
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_30px_rgba(56,189,248,0.8)] pointer-events-none z-20" />
            <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-sky-500/10 via-sky-500/5 to-transparent pointer-events-none z-0" />
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-sky-500/15 via-sky-500/5 to-transparent pointer-events-none z-0" />

            {/* アイテムグリッド構造 */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-8 relative z-10">
              {ZERO_YEN_CONTENT.items.map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-5 relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-slate-800 border border-slate-700/60 group-hover:border-sky-400/50 transition-all duration-500 shadow-inner" />
                    <IconComponent 
                      name={item.icon} 
                      className="w-5 h-5 sm:w-8 sm:h-8 relative z-10 text-slate-100 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
                    />
                  </div>

                  <div className="space-y-1 text-center">
                    <span className="font-sans text-[11px] sm:text-[12px] font-extrabold text-slate-100 uppercase tracking-wide block">
                      {item.label}
                    </span>
                    <div className="flex items-center justify-center gap-0.5">
                      <span className="font-sans text-2xl sm:text-3xl font-black italic text-amber-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">0</span>
                      <span className="text-[10px] sm:text-xs font-black text-amber-400 pt-0.5">円</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 🔴 Footer：最下部カード化 */}
          <motion.div 
            className="mt-4 sm:mt-6 flex justify-center relative z-10 w-full" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className={`relative overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] py-5 px-8 bg-transparent w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-3 text-center md:text-left`} style={gpuStyle}>
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl z-0" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl z-20 pointer-events-none" />
              
              <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent shadow-[0_0_20px_rgba(56,189,248,0.6)] pointer-events-none z-20" />
              <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-sky-500/10 via-transparent to-transparent pointer-events-none z-0" />

              <div className="flex items-center justify-center gap-2 shrink-0 w-full md:w-auto relative z-10">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                <span className="font-sans text-base sm:text-lg font-extrabold text-slate-100 whitespace-nowrap uppercase tracking-wide">
                  Conclusion
                </span>
              </div>

              <div className="hidden md:block w-[1px] h-5 bg-slate-800/60 mx-4 shrink-0 relative z-10" />

              <div className="flex-1 space-y-1 relative z-10">
                <p className="font-sans text-slate-300 text-xs sm:text-sm font-bold leading-relaxed whitespace-pre-line opacity-90">
                  {ZERO_YEN_CONTENT.footer.text1}
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-1 gap-y-0.5">
                  <p className="font-sans text-slate-300 text-xs sm:text-sm font-bold">
                    {ZERO_YEN_CONTENT.footer.text2_pre}
                  </p>
                  <span className="text-sky-400 font-black text-xs sm:text-sm border-b-2 border-sky-400/30 pb-0.5 drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">
                    {ZERO_YEN_CONTENT.footer.text2_highlight}
                  </span>
                  <p className="font-sans text-slate-300 text-xs sm:text-sm font-bold">
                    {ZERO_YEN_CONTENT.footer.text2_post}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
