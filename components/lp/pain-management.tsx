'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  return (
    /* 💡 背景はCTAのように清潔感のある白（bg-white）へ完全刷新 */
    <section id="pain" className="py-16 sm:py-28 relative bg-white text-slate-800 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header */}
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-[10px] font-bold tracking-[0.5em] text-sky-600 block mb-4 uppercase">
            {PAIN_CONTENT.badge}
          </span>
          <h2 className="font-sans font-bold tracking-tight text-slate-900 text-3xl sm:text-5xl mb-6 leading-tight">
            {PAIN_CONTENT.mainTitle.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {PAIN_CONTENT.mainSubtitle}
          </p>
        </div>

        {/* 🔴 Measures (各施策) */}
        <div className="space-y-24 sm:space-y-32 mb-20">
          {PAIN_CONTENT.measures.map((m, i) => {
            const isEven = i % 2 === 0;
            return (
              /* 💡 カードの枠（borderやbg）を一切なくし、空間を贅沢に使うレイアウト */
              <div key={i} className="relative grid md:grid-cols-2 items-center gap-8 md:gap-16">
                
                {/* 背景の巨大ID番号（白背景に薄いグレーで透かします） */}
                <span className={`font-sans text-[12rem] sm:text-[18rem] font-black text-slate-50 absolute -top-12 ${isEven ? 'left-0' : 'right-0'} italic pointer-events-none select-none z-0 tracking-tighter leading-none`}>
                  {m.id}
                </span>

                {/* 1️⃣ 画像エリア：💡 白背景への完璧なシームレス溶け込み */}
                <div className={`relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] z-10 ${isEven ? 'md:order-last' : ''}`}>
                  <Image 
                    src={m.image} 
                    alt={m.title} 
                    fill 
                    className="object-cover" 
                    priority={i === 0}
                  />
                  
                  {/* 💡 画像の四方（上下左右）から白のグラデーションをかけ、背景と完全に同化させます */}
                  <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent pointer-events-none" />

                  {/* テキストと隣接する側はさらに強く白フェードをかけ、文字との一体感を強調 */}
                  <div className={`absolute inset-y-0 ${isEven ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'} w-1/2 from-white via-white/80 to-transparent pointer-events-none hidden md:block`} />
                </div>

                {/* 2️⃣ テキストエリア：枠線なしの純粋なタイポグラフィ構成 */}
                <div className="relative z-20 flex flex-col justify-center">
                  
                  <div className="flex items-center gap-2 mb-6">
                    <span className="font-sans text-2xl font-black italic text-sky-500">{m.id}</span>
                    <Minus className="w-6 h-[2px] text-slate-300" />
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full tracking-wider uppercase border border-sky-100">
                      Medical Approach
                    </span>
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-4 py-1.5 bg-slate-100 rounded-md text-[10px] font-bold text-slate-600 tracking-[0.1em] mb-6 self-start">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm sm:text-base text-slate-600 leading-loose font-medium">
                    {m.description}
                  </p>
                  
                </div>

              </div>
            );
          })}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-slate-100">
          <div className="flex flex-col items-center text-center">
            <div className="w-[2px] h-12 bg-gradient-to-b from-sky-300 to-transparent mb-8" />
            <div className="space-y-6">
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-full text-slate-600 text-xs font-bold border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-sky-500" />
                <span>{PAIN_CONTENT.reassurance.note}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
