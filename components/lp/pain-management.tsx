'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"

  return (
    /* 💡 背景色はマシーンと合わせたディープネイビー（#050A15）を維持 */
    <section id="pain" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【背景：まだらな光】マシーンパートのテイストを踏襲しつつ、枠線がない分、光が美しく映えるように配置 */}
      <div className="absolute top-[5%] right-[5%] w-[500px] h-[500px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header */}
        <div className={`text-center ${headerBottomMargin}`}>
          <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-4 uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
            {PAIN_CONTENT.badge}
          </span>
          <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-6 leading-tight`}>
            {PAIN_CONTENT.mainTitle.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-70">
            {PAIN_CONTENT.mainSubtitle}
          </p>
        </div>

        {/* 🔴 Measures (各施策) */}
        <div className="space-y-24 sm:space-y-40 mb-20">
          {PAIN_CONTENT.measures.map((m, i) => {
            const isEven = i % 2 === 0;
            return (
              /* 💡 カードの「枠（borderやbg）」を完全に撤廃し、画像とテキストが空間に浮かぶレイアウトに */
              <div key={i} className="relative grid md:grid-cols-2 items-center gap-8 md:gap-16">
                
                {/* 背景の巨大ID番号（暗闇にうっすら浮かび上がる） */}
                <span className={`font-sans text-[12rem] sm:text-[18rem] font-black text-slate-800 opacity-40 absolute -top-16 ${isEven ? 'left-0' : 'right-0'} italic pointer-events-none select-none z-0 tracking-tighter leading-none`}>
                  {m.id}
                </span>

                {/* 1️⃣ 画像エリア：💡 【ダークシームレス溶け込み】画像が背景のディープネイビーへ滑らかに消えていく */}
                <div className={`relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] z-10 ${isEven ? 'md:order-last' : ''}`}>
                  <Image 
                    src={m.image} 
                    alt={m.title} 
                    fill 
                    className="object-cover" 
                    priority={i === 0}
                  />
                  
                  {/* 💡 画像の四方から背景色（#050A15）のグラデーションをかけ、完全に同化（なじむ）させます */}
                  <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#050A15] to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#050A15] to-transparent pointer-events-none" />
                  
                  {/* テキストと隣接する側は、文字との境界をなくすために強めにフェードアウト */}
                  <div className={`absolute inset-y-0 ${isEven ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'} w-1/2 from-[#050A15] via-[#050A15]/80 to-transparent pointer-events-none`} />
                  
                  {/* 外側（画面端）も少し溶け込ませる */}
                  <div className={`absolute inset-y-0 ${isEven ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} w-1/4 from-[#050A15] to-transparent pointer-events-none`} />
                </div>

                {/* 2️⃣ テキストエリア：枠線なしで空間に直接配置 */}
                <div className="relative z-20 flex flex-col justify-center">
                  
                  <div className="flex items-center gap-2 mb-6">
                    <span className="font-sans text-2xl font-black italic text-amber-300 drop-shadow-[0_0_5px_rgba(245,158,11,0.3)]">{m.id}</span>
                    <Minus className="w-6 h-[2px] text-slate-600" />
                    <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full tracking-wider uppercase border border-sky-400/20">
                      Medical Approach
                    </span>
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-100 mb-6 tracking-tight leading-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-4 py-1.5 bg-slate-900/80 rounded-md text-[10px] font-bold text-slate-400 tracking-[0.1em] mb-6 self-start border border-slate-800">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm sm:text-base text-slate-300 leading-loose font-medium">
                    {m.description}
                  </p>
                  
                </div>

              </div>
            );
          })}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-slate-800/60">
          <div className="flex flex-col items-center text-center">
            <div className="w-[2px] h-12 bg-gradient-to-b from-sky-500/40 to-transparent mb-8" />
            <div className="space-y-6">
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-slate-900/60 rounded-full text-slate-300 text-xs font-bold border border-slate-700/60 shadow-inner">
                <ShieldCheck className="w-5 h-5 text-sky-400" />
                <span>{PAIN_CONTENT.reassurance.note}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
