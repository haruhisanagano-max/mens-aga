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
  const sectionPadding = "py-16 sm:py-28" 
  const headerBottomMargin = "mb-16 sm:mb-24" 
  const cardRounded = "rounded-xl" 
  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' }

  // 💡 【透過グラス枠】ペインパートと完全同期（上・左エッジの白いハイライト）
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"

  return (
    <section id="zero-yen" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【背景演出：静止流れ星ライン（厳選4本） ＆ タイトルを避けた2大アンビエント光】 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 💡 【確実な視認性】タイトル（中央上）を完全に避けて配置した、肉眼でハッキリ美しく見える2箇所の淡い光（丸グロウ） */}
        {/* ① 左中〜左下にかけて大きく広がる、センスの良い淡いブルーの光 */}
        <div className="absolute bottom-[8%] left-[-15%] w-[650px] h-[650px] bg-sky-500/15 blur-[100px] rounded-full opacity-80" />
        {/* ② 右中〜右下にかけて大きく広がる、センスの良い淡いシアンの光 */}
        <div className="absolute bottom-[4%] right-[-15%] w-[700px] h-[700px] bg-cyan-400/12 blur-[120px] rounded-full opacity-80" />

        
        {/* 1. 左上から中央へ：【芯層 z-10】先頭が純白爆光。鋭く引き裂くロング閃光 */}
        <div 
          className="absolute top-[14%] left-[2%] w-[65%] h-[1px] bg-gradient-to-r from-white via-sky-400 to-transparent rotate-[-15deg] opacity-100 blur-[0.3px] z-10" 
          style={{ filter: 'drop-shadow(0 0 10px #38bdf8) drop-shadow(0 0 20px #38bdf8)' }}
        />
        {/* 1. 【淡いグロウ層 z-0】💡消滅バグを修正。芯の周りに肉眼でハッキリ美しく滲み出るグラデーションオーラ（blur-2xlに調整） */}
        <div 
          className="absolute top-[14%] left-[2%] w-[65%] h-6 bg-gradient-to-r from-sky-500/30 via-sky-400/10 to-transparent rotate-[-15deg] opacity-80 blur-2xl z-0" 
        />
        
        {/* 2. 中央から右下へ：【芯層 z-10】真ん中が純白爆光。最も長い射程。周囲に広く光が染み出す */}
        <div 
          className="absolute top-[40%] left-[20%] w-[70%] h-[1px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent rotate-[-15deg] opacity-100 blur-[0.5px] z-10" 
          style={{ filter: 'drop-shadow(0 0 25px #0ea5e9) drop-shadow(0 0 12px #22d3ee)' }}
        />
        {/* 2. 【淡いグロウ層 z-0】💡消滅バグを修正。ラインの背後からワイドに湧き上がるシアンの淡い光（blur-3xlに調整） */}
        <div 
          className="absolute top-[40%] left-[20%] w-[70%] h-8 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent rotate-[-15deg] opacity-75 blur-3xl z-0" 
        />
        
        {/* 3. 右上から中央奥へ：【芯層 z-10】後ろが純白爆光。右端に向けて一気に強く輝き、消える */}
        <div 
          className="absolute top-[22%] right-[4%] w-[60%] h-[1px] bg-gradient-to-r from-transparent via-sky-400/30 to-white rotate-[-15deg] opacity-100 blur-[0.3px] z-10"
          style={{ filter: 'drop-shadow(0 0 12px #2563eb) drop-shadow(0 0 24px #7dd3fc)' }}
        />
        {/* 3. 【淡いグロウ層 z-0】💡消滅バグを修正。漆黒との明暗をドラマチックに演出する、肉眼で捉えられるネイビーグロウ */}
        <div 
          className="absolute top-[22%] right-[4%] w-[60%] h-6 bg-gradient-to-r from-transparent via-sky-500/25 to-transparent rotate-[-15deg] opacity-70 blur-2xl z-0" 
        />

        {/* 4. 下部をダイナミックに横切る：【芯層 z-10】先頭が純白爆光。足元を圧倒的な光量で広く照らし出す超ロングビーム */}
        <div 
          className="absolute bottom-[20%] left-[8%] w-[68%] h-[1px] bg-gradient-to-r from-white via-cyan-400 to-transparent rotate-[-15deg] opacity-100 blur-[0.3px] z-10"
          style={{ filter: 'drop-shadow(0 0 14px #22d3ee) drop-shadow(0 0 28px #0ea5e9)' }}
        />
        {/* 4. 【淡いグロウ層 z-0】💡消滅バグを修正。最下部のカードに美しく重なり、幻想的な明暗を作るワイドな光の帯 */}
        <div 
          className="absolute bottom-[20%] left-[8%] w-[68%] h-8 bg-gradient-to-r from-cyan-500/30 via-cyan-400/10 to-transparent rotate-[-15deg] opacity-80 blur-3xl z-0" 
        />
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
            
            {/* 💡 【スマホでのクリップバグ完全解消】
                 親divに drop-shadow と py-4 を持たせることで、文字の下で光の広がりが直線的に切れる現象を完璧に解決。 */}
            <div className="relative inline-block drop-shadow-[0_0_35px_rgba(56,189,248,0.65)] py-4">
              <h2 className={`${fontTitle} text-2xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent relative z-10 whitespace-pre-wrap break-keep`}>
                {ZERO_YEN_CONTENT.title}
              </h2>
            </div>

            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium opacity-60 whitespace-pre-line">
              {ZERO_YEN_CONTENT.description}
            </p>
          </div>

          {/* 🔴 Item Grid Board */}
          <motion.div 
            className={`relative overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] py-8 sm:py-14 px-6 sm:px-12 bg-transparent flex flex-col mb-10`}
            style={gpuStyle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* カード背景：PainManagement同期のエレガントな磨りガラス */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl z-0" />
            
            {/* 内側の繊細なガラス反射 */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl z-20 pointer-events-none" />

            {/* 光源（下部） */}
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_30px_rgba(56,189,248,0.8)] pointer-events-none z-20" />
            <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-sky-500/10 via-sky-500/5 to-transparent pointer-events-none z-0" />
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-sky-500/15 via-sky-500/5 to-transparent pointer-events-none z-0" />

            {/* アイテムグリッド構造 */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-y-8 sm:gap-y-10 gap-x-4 sm:gap-x-8 relative z-10">
              {ZERO_YEN_CONTENT.items.map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-5 relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-slate-950/80 border border-slate-700/60 group-hover:border-sky-400/50 transition-all duration-500 shadow-inner" />
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

          {/* 🔴 Footer：最下部カードデザイン（ベースコードの要求通り維持） */}
          <motion.div 
            className="mt-10 flex justify-center relative z-10 w-full" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {/* 上のボードと完全同一のカードデザイン */}
            <div className={`relative overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] py-5 px-8 bg-transparent w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-3 text-center md:text-left`} style={gpuStyle}>
              {/* カード背景：PainManagement同期のエレガントな磨りガラス */}
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl z-0" />
              
              {/* 内側の繊細なガラス反射 */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl z-20 pointer-events-none" />
              
              {/* 光源（下部） */}
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
