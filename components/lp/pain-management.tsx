'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"

  return (
    /* 💡 背景色はマシーンと合わせたディープネイビー（#050A15） */
    <section id="pain" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【背景：まだらな光】マシーンパートのテイストを踏襲した、ぼやっとしたアンビエント光 */}
      <div className="absolute top-[10%] right-[10%] w-[450px] h-[450px] bg-sky-600/15 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[45%] left-[-5%] w-[550px] h-[550px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header */}
        <div className={`text-center ${headerBottomMargin}`}>
          <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-4 uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
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
        <div className="space-y-12 sm:space-y-20 mb-20">
          {PAIN_CONTENT.measures.map((m, i) => {
            const isEven = i % 2 === 0;
            return (
              /* 💡 新生・一体感カード（bg-#0A1120） */
              <div 
                key={i} 
                className="relative w-full rounded-2xl bg-[#0A1120] border border-slate-800/60 shadow-2xl overflow-hidden flex flex-col md:block min-h-[420px]"
              >
                
                {/* 1️⃣ 画像エリア（PC版）：💡 背景へグラデーションで溶け込むCTAスタイル */}
                <div className={`hidden md:block absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-[65%] h-full z-0`}>
                  <Image 
                    src={m.image} 
                    alt={m.title} 
                    fill 
                    className="object-cover"
                    priority={i === 0} 
                  />
                  {/* 💡 ここが最も重要な「なじませ」グラデーション。
                      カードの背景色（#0A1120）から透明へと変化し、画像の境界線を完全に消し去ります。 */}
                  <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-[#0A1120] via-[#0A1120]/90 to-transparent`} />
                  <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-[#0A1120] via-transparent to-transparent w-1/2`} />
                </div>

                {/* 画像エリア（スマホ版）：下に向かって溶け込む */}
                <div className="md:hidden relative w-full h-[280px] z-0">
                  <Image 
                    src={m.image} 
                    alt={m.title} 
                    fill 
                    className="object-cover"
                    priority={i === 0} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1120] via-[#0A1120]/90 to-transparent" />
                </div>

                {/* 2️⃣ テキストエリア：溶け込んだ画像の上に重なるように配置 */}
                <div className={`relative z-10 w-full md:w-[60%] p-8 sm:p-12 md:p-16 flex flex-col justify-center h-full min-h-[420px] ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                  
                  {/* 背景の巨大ID（テキストの裏に薄く配置） */}
                  <span className={`font-sans text-[8rem] sm:text-[12rem] absolute top-[-2rem] ${isEven ? 'right-4' : 'left-4'} opacity-[0.03] select-none font-black text-slate-100 z-0 leading-none`}>
                    {m.id}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">{m.id}</span>
                      <Minus className="w-5 h-[1px] text-slate-500" />
                      <span className="text-[9px] font-extrabold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-wide uppercase">
                        Medical Approach
                      </span>
                    </div>
                    
                    <h4 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 mb-4 tracking-tight leading-tight">
                      {m.title}
                    </h4>
                    
                    <div className="inline-block px-3 py-1.5 bg-slate-950/60 rounded border border-slate-800/60 text-[9px] font-bold text-slate-300 tracking-[0.1em] mb-6">
                      {m.subTitle}
                    </div>
                    
                    <p className="text-sm sm:text-base text-slate-300 leading-loose font-medium pt-4 border-t border-slate-700/40">
                      {m.description}
                    </p>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-slate-800/60">
          <div className="flex flex-col items-center text-center">
            <div className="w-[1px] h-12 bg-gradient-to-b from-sky-400/20 via-sky-500/5 to-transparent mb-8" />
            <div className="space-y-8">
              <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight tracking-tighter">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-slate-900/80 rounded-full text-slate-400 text-[10px] sm:text-xs border border-slate-700/60 font-bold shadow-wide">
                <ShieldCheck className="w-4 h-4 text-sky-400/60" />
                <span>{PAIN_CONTENT.reassurance.note}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
