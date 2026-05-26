'use client'

import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  const fontTitle = "font-sans font-bold tracking-tight" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-16 sm:mb-24"
  const cardTextPadding = "p-8 sm:p-14" // 余白を少し広げて優雅に
  const cardRounded = "rounded-xl" 
  
  // 💡 【透過グラス枠】マシーンパートと完全同期
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    /* 💡 背景色はマシーン基準の最高級ネイビー（#050A15） */
    <section id="pain" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 背景の斑な光（Machine準拠） */}
      <div className="absolute top-[5%] left-[5%] w-[450px] h-[450px] bg-sky-500/25 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-5%] w-[550px] h-[550px] bg-indigo-500/20 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-400/20 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header：タイトルを光源でセンス良く目立たせる */}
        <div className={`text-center ${headerBottomMargin}`}>
          <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-6 uppercase drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
            {PAIN_CONTENT.badge}
          </span>
          
          <div className="relative inline-block">
            {/* タイトルの背後に配置する「センスの良い隠し光源」 */}
            <div className="absolute inset-0 bg-sky-400/20 blur-[40px] rounded-full -z-10" />
            
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-8 leading-tight bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}>
              {PAIN_CONTENT.mainTitle.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-60">
            {PAIN_CONTENT.mainSubtitle}
          </p>
        </div>

        {/* 🔴 Measures (各施策) */}
        <div className="space-y-16 sm:space-y-28 mb-20">
          {PAIN_CONTENT.measures.map((m, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] bg-transparent flex flex-col`}
              style={gpuStyle}
            >
              
              {/* 1️⃣ 画像エリア（100%クリア。ノイズとなるオーバーレイなし） */}
              <div className="relative aspect-[16/9] bg-[#050A15] w-full overflow-hidden border-b border-slate-800 z-20">
                <Image 
                  src={m.image} 
                  alt="" 
                  fill 
                  className="object-cover opacity-90 hover:opacity-100 transition-all duration-1000" 
                  priority={i === 0}
                />
              </div>

              {/* 2️⃣ 下側：テキストパネル（余白と整理されたタイポグラフィ） */}
              <div className={`${cardTextPadding} relative w-full flex flex-col justify-center overflow-hidden bg-slate-900/40 backdrop-blur-3xl z-10`}>
                
                {/* 表面反射（Machine準拠） */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.06] via-transparent to-transparent pointer-events-none z-0" />

                {/* 💡 【光源は下部】カード底辺から滲み出るシャープな光の帯 */}
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_30px_rgba(56,189,248,0.8)] pointer-events-none z-20" />
                <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-sky-500/10 via-transparent to-transparent pointer-events-none z-0" />

                <div className="relative z-10">
                  {/* 💡 【修正：数字とタグ】隙間と線をなくし、左寄せに統一 */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-sans text-2xl font-black italic text-amber-300/90 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">
                      {m.id}
                    </span>
                    <span className="text-[9px] font-black text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2.5 py-1 rounded tracking-[0.15em] uppercase">
                      Medical Approach
                    </span>
                  </div>
                  
                  {/* 💡 カードタイトルも光源を感じる質感に */}
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    {m.title}
                  </h3>
                  
                  <div className="inline-block px-3 py-1.5 bg-slate-950/80 rounded border border-slate-700/60 text-[10px] font-bold text-slate-400 tracking-[0.1em] mb-8 shadow-inner">
                    {m.subTitle}
                  </div>
                  
                  {/* 💡 【修正：余白のクリーン化】不自然な横線を消し、余白のみで構成 */}
                  <p className="text-sm sm:text-base text-slate-300 leading-loose font-medium opacity-80">
                    {m.description}
                  </p>
                </div>

                {/* 背景の特大ID（超薄く） */}
                <span className="font-sans italic text-[8rem] sm:text-[14rem] absolute -bottom-10 -right-4 opacity-[0.03] select-none font-black text-white z-0">
                  {m.id}
                </span>

              </div>

            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-slate-800/80">
          <div className="flex flex-col items-center text-center">
            {/* センタリング用光源ライン */}
            <div className="w-[1px] h-16 bg-gradient-to-b from-sky-400/30 via-sky-500/5 to-transparent mb-10" />
            
            <div className="space-y-10">
              <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              <div className="mt-4 inline-flex items-center gap-4 px-8 py-4 bg-slate-900/60 rounded-full text-slate-400 text-[11px] sm:text-xs border border-slate-700/60 font-bold shadow-2xl backdrop-blur-md">
                <ShieldCheck className="w-5 h-5 text-sky-400/80" />
                <span className="tracking-wide">{PAIN_CONTENT.reassurance.note}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
