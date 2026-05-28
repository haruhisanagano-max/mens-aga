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
  
  // 💡 【デザイン統一用リモコン：PainManagementと完全同期】
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"
  
  // 💡 【間延び解消】タイトな余白設定を維持
  const sectionPadding = "py-8 sm:py-12" 
  const headerBottomMargin = "mb-6 sm:mb-8" 
  const cardRounded = "rounded-2xl" // CTAカードに合わせて少し丸みを強く
  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' }

  // 💡 【透過グラス枠】マシーン・Pain・Comparison・CTAと完全同期
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"

  return (
    <section id="zero-yen" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【修正点1：背景演出を「アンビエント光源」に完全同期】
          浮いて見えていた原因の「鋭い斜めレーザー」を完全に削除し、
          マシンセクションやCTAと同じ「暗闇にぼんやりと浮かぶ青い巨大なオーラ（blur-[100px]）」に変更しました。
          これでLP全体の繋がりがシームレスになります！ */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full" />
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
            <motion.span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-3 uppercase drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">
              {ZERO_YEN_CONTENT.badge}
            </motion.span>
            
            <div className="relative inline-block">
              <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]`}>
                {ZERO_YEN_CONTENT.title}
              </h2>
            </div>

            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium opacity-70 whitespace-pre-line">
              {ZERO_YEN_CONTENT.description}
            </p>
          </div>

          {/* 🔴 Item Grid Board */}
          <motion.div 
            className={`relative overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_25px_50px_rgba(0,0,0,0.6),_0_0_30px_rgba(56,189,248,0.1)] py-6 sm:py-8 px-4 sm:px-8 mb-6 sm:mb-8 bg-transparent flex flex-col`}
            style={gpuStyle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* 💡 【修正点2：カードの背景色をディープネイビーに同期】
                白浮きしていた `slate-900/50` をやめ、CTAと同じマシンの闇色 `bg-[#050A15]/60 backdrop-blur-xl` に統一しました。 */}
            <div className="absolute inset-0 bg-[#050A15]/60 backdrop-blur-xl z-0" />
            
            {/* 内側を流れる極薄の光（シマー効果） */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-0"
              animate={{ backgroundPosition: ['100% 100%', '-100% -100%'] }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              style={{
                backgroundImage: 'linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%)',
                backgroundSize: '200% 100%',
              }}
            />

            {/* 💡 下部光源をCTAと完全に同じ極細のシャープな光へ調整 */}
            <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_15px_rgba(56,189,248,1)] pointer-events-none z-20" />
            <div className="absolute bottom-0 inset-x-0 h-[50%] bg-gradient-to-t from-sky-500/10 via-transparent to-transparent pointer-events-none z-0" />

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-y-5 sm:gap-y-6 gap-x-4 sm:gap-x-6 relative z-10">
              {ZERO_YEN_CONTENT.items.map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  
                  {/* アイコンの背景もマシンの闇色（#020617）へ微調整 */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3 relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-[#020617] border border-slate-700/60 group-hover:border-sky-400/50 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-500 shadow-inner" />
                    <IconComponent 
                      name={item.icon} 
                      className="w-5 h-5 sm:w-8 sm:h-8 relative z-10 text-slate-200 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                    />
                  </div>

                  <div className="space-y-0.5 text-center">
                    <span className="font-sans text-[11px] sm:text-[12px] font-black text-slate-200 uppercase tracking-tight block">
                      {item.label}
                    </span>
                    <div className="flex items-center justify-center gap-0.5">
                      <span className="font-sans text-xl sm:text-2xl font-black italic text-amber-300 leading-none drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">0</span>
                      <span className="text-[10px] sm:text-xs font-black text-amber-400 pt-0.5">円</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 🔴 Footer */}
          <motion.div 
            className="mt-6 sm:mt-8 flex justify-center" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div 
              className={`relative overflow-hidden flex flex-col md:flex-row items-center gap-4 px-6 py-4 sm:py-5 rounded-2xl ${glassBorder} shadow-[0_25px_50px_rgba(0,0,0,0.6)] bg-transparent w-full max-w-4xl mx-auto`}
              style={gpuStyle}
            >
              {/* フッターカードもディープネイビーに同期 */}
              <div className="absolute inset-0 bg-[#050A15]/80 backdrop-blur-xl z-0" />
              
              <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent shadow-[0_0_15px_rgba(56,189,248,0.5)] pointer-events-none z-20" />
              <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-sky-500/5 via-transparent to-transparent pointer-events-none z-0" />
              
              <div className="flex items-center justify-center gap-3 shrink-0 relative z-10 w-full md:w-auto">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                <span className="font-sans text-base sm:text-lg font-extrabold text-slate-100 whitespace-nowrap uppercase tracking-wide">
                  Conclusion
                </span>
              </div>

              <div className="hidden md:block w-[1px] h-5 bg-slate-700/60 mx-2 shrink-0 relative z-10" />

              <div className="flex-1 space-y-1 relative z-10 text-center md:text-left">
                <p className="font-sans text-slate-300 text-xs sm:text-sm font-bold leading-relaxed whitespace-pre-line opacity-90">
                  {ZERO_YEN_CONTENT.footer.text1}
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-1 gap-y-0.5">
                  <p className="font-sans text-slate-300 text-xs sm:text-sm font-bold">
                    {ZERO_YEN_CONTENT.footer.text2_pre}
                  </p>
                  <span className="text-sky-400 font-black text-xs sm:text-sm border-b border-sky-400/30 pb-0.5 drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">
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
