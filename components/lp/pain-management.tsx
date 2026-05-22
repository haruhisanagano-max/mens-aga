'use client'

import Image from 'next/image'
import { Minus, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（AGA・スマートチャコール＆扇状グロウカスタム）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardRounded = "rounded-xl" 
  
  /* 💡 境界線：少し明るいグレーのカードに合わせて、エッジを上品に馴染ませる薄い境界線 */
  const cardBorder = "border border-slate-700/30"
  
  /* 💡 【重要】影と背景のアップデート：
     カード本体の色を、真っ黒から上品な「チャコールグレー（#1E293B）」へ明るく引き上げました！
     さらに、当初のように「カードの下部だけ」に医療ブルーの光がぽろぽろと微弱に漏れ出るような、下方向限定のドロップシャドウをブレンドしています */
  const cardShadow = "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_20px_30px_-10px_rgba(56,189,248,0.06)] bg-[#1E293B]"
  // ---------------------------------------------------------

  return (
    /* 全体の背景：ディープチャコール（墨色ベース） */
    <section id="pain" className={`${sectionPadding} relative bg-[#090F19] text-slate-400 overflow-hidden`}>
      
      {/* 最背面：背景テクスチャ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header */}
        <div className={`text-center ${headerBottomMargin}`}>
          <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-4 uppercase">
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
        <div className="space-y-12 sm:space-y-24 mb-20">
          {PAIN_CONTENT.measures.map((m, i) => (
            <div key={i} className={`relative grid lg:grid-cols-12 gap-0 items-center`}>
              
              {/* 背後の特大ID：背景に深く静かに溶け込む透かしデザイン */}
              <span className={`font-sans text-[12rem] sm:text-[22rem] font-black text-slate-900 opacity-[0.25] absolute -top-16 ${i % 2 === 0 ? '-right-4' : '-left-4'} italic pointer-events-none select-none z-0`}>
                {m.id}
              </span>

              {/* 画像フィールド */}
              <div className={`lg:col-span-7 relative z-10 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className={`${cardRounded} border border-slate-800/50 overflow-hidden aspect-[16/10] bg-slate-950 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090F19]/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* テキストパネル */}
              <div className={`
                lg:col-span-6 
                relative z-20 
                mt-[-40px] lg:mt-0 
                ${i % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} 
                p-8 sm:p-14 ${cardRounded} ${cardBorder} ${cardShadow}
                overflow-hidden /* 💡 光をカードの枠内に綺麗に閉じ込める設定 */
              `}>
                
                {/* 💡 【新発明】カード最下部から、上に向かって扇状にポワッと「控えめ」に広がる医療ブルーの光のグラデーション */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[45%] bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.08),transparent_70%)] pointer-events-none z-0" />

                {/* 文字が光の裏に隠れないように z-10 で手前に引き上げ */}
                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-xl font-bold italic text-amber-300">{m.id}</span>
                    <Minus className="w-8 h-[1px] text-slate-600/50" />
                    
                    {/* 💡 タグだけピカピカ光るビミョーな感じを廃止！
                       光を消して、背景のグレーに美しく馴染む上質なマットデザイン（大人の男らしさ）に変えました */}
                    <span className="text-[9px] font-bold text-sky-400/90 bg-sky-500/5 border border-sky-400/20 px-2.5 py-0.5 rounded tracking-[0.2em] uppercase">
                      Medical Approach
                    </span>
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-slate-900/60 rounded border border-slate-800/60 text-[9px] font-bold text-slate-400 tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-300/90 leading-loose font-medium pt-2 border-t border-slate-700/30">
                    {m.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-900/60">
          <div className="flex flex-col items-center text-center">
            
            {/* 中央のラインも、鋭く静かな細い光の針へ */}
            <div className="w-[1px] h-12 bg-gradient-to-b from-sky-400/20 via-sky-500/5 to-transparent mb-8" />

            <div className="space-y-8">
              <h3 className="font-sans text-2xl sm:text-4xl font-bold text-slate-100 leading-tight tracking-tighter">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm sm:text-base font-medium opacity-80">
                    {PAIN_CONTENT.reassurance.body1}
                  </p>
                  <div>
                    <span className="relative z-10 text-slate-200 font-bold text-xl sm:text-3xl tracking-tighter">
                      {PAIN_CONTENT.reassurance.body2}
                    </span>
                  </div>
                </div>

                <p className="whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-amber-200 font-bold text-xl sm:text-2xl tracking-tighter leading-snug max-w-2xl mx-auto">
                  {PAIN_CONTENT.reassurance.body3}
                </p>
              </div>

              <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-slate-900/50 rounded-full text-slate-400 text-[10px] sm:text-xs border border-slate-800/60 font-bold shadow-inner">
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
