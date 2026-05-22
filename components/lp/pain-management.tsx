'use client'

import Image from 'next/image'
import { Minus, ShieldCheck, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン（AGA・重さ解消・ラグジュアリーガラスカスタム）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardRounded = "rounded-xl" 
  
  /* 💡 境界線：上と左のフチを白・青系の光で繊細にハイライトして、ガラスの端のキラリとした質感を出し、背景から切り離します */
  const cardBorder = "border border-slate-800/40 border-t-white/20 border-l-white/10"
  
  /* 💡 【重要】影と背景の魔法：
     外側のネオンを完全に消す代わりに、カードの真後ろに「超微弱な白い光のモヤ（rgba(255,255,255,0.03)）」を配置。
     さらにカードの内側を「ほんのり奥が透ける半透明（backdrop-blur-xl）」にして、内側発光グラデーションをブレンド。これで重さが消えます！ */
  const cardShadow = "shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),0_0_50px_rgba(255,255,255,0.02)] bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-950/100 backdrop-blur-xl"
  // ---------------------------------------------------------

  return (
    /* 💡 全体の背景：くすんだ墨色から、洗練された高級インテリジェンスを感じる「ディープネイビーグレー（#0B111E）」へ微調整 */
    <section id="pain" className={`${sectionPadding} relative bg-[#0B111E] text-slate-400 overflow-hidden`}>
      
      {/* 🖼️ 最背面：背景テクスチャ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.03] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header */}
        <div className={`text-center ${headerBottomMargin}`}>
          {/* アクセントゴールドを落ち着いた色味へ。発光は薄く白系で重ねる。 */}
          <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] uppercase block mb-4">
            {PAIN_CONTENT.badge}
          </span>
          <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-6 leading-tight`}>
            {PAIN_CONTENT.mainTitle.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
            {PAIN_CONTENT.mainSubtitle}
          </p>
        </div>

        {/* 🔴 Measures (各施策) */}
        <div className="space-y-12 sm:space-y-24 mb-20">
          {PAIN_CONTENT.measures.map((m, i) => (
            <div key={i} className={`relative grid lg:grid-cols-12 gap-0 items-center`}>
              
              {/* 背後の特大ID：サイアンブルーから、医療ブルー（SkyBlue）の柔らかい発光へ変更 */}
              <span className={`font-sans text-[12rem] sm:text-[22rem] font-black text-sky-400 opacity-[0.05] drop-shadow-[0_0_30px_rgba(56,189,248,0.4)] absolute -top-16 ${i % 2 === 0 ? '-right-4' : '-left-4'} italic pointer-events-none select-none z-0`}>
                {m.id}
              </span>

              {/* 画像フィールド */}
              <div className={`lg:col-span-7 relative z-10 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className={`${cardRounded} border border-slate-900 overflow-hidden aspect-[16/10] bg-slate-950 relative shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  {/* 画像の上のグラデーションも少しダークに引き締め */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
              </div>

              {/* テキストパネル */}
              <div className={`
                lg:col-span-6 
                relative z-20 
                mt-[-40px] lg:mt-0 
                ${i % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} 
                p-8 sm:p-14 ${cardRounded} ${cardBorder} ${cardShadow}
              `}>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">{m.id}</span>
                    <Minus className="w-8 h-[1px] text-slate-800" />
                    {/* 蛍光グリーンを廃止し、落ち着いた医療ブルー（Sky）へ。発光も薄く。 */}
                    <span className="text-[9px] font-bold text-sky-400 tracking-[0.2em] uppercase drop-shadow-[0_0_3px_rgba(56,189,248,0.3)]">Medical Approach</span>
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-slate-950/80 rounded border border-slate-900 text-[9px] font-bold text-slate-400 tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-400 leading-loose font-medium pt-2 border-t border-slate-900">
                    {m.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-950">
          <div className="flex flex-col items-center text-center">
            
            {/* 中央のラインをエメラルドから医療ブルーの柔らかい光の線へ */}
            <div className="w-[1px] h-12 bg-gradient-to-b from-sky-400 to-transparent shadow-[0_0_8px_rgba(56,189,248,0.6)] mb-8" />

            <div className="space-y-8">
              <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight tracking-tighter">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-slate-400 text-sm sm:text-base font-medium opacity-80">
                    {PAIN_CONTENT.reassurance.body1}
                  </p>
                  <div className="relative inline-block">
                    {/* 文字の後ろからの発光を、より柔らかい白系へ */}
                    <span className="relative z-10 text-slate-100 font-bold text-xl sm:text-3xl tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
                      {PAIN_CONTENT.reassurance.body2}
                    </span>
                  </div>
                </div>

                {/* 最も強いメッセージのゴールドとグリーンを廃止し、洗練された白とゴールドのグラデーションへ */}
                <p className="whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-slate-100 font-bold text-xl sm:text-2xl tracking-tighter leading-snug max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                  {PAIN_CONTENT.reassurance.body3}
                </p>
              </div>

              <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-slate-950/80 rounded-full text-slate-400 text-[10px] sm:text-xs border border-slate-900 font-bold shadow-inner">
                <ShieldCheck className="w-4 h-4 text-sky-400 drop-shadow-[0_0_4px_rgba(56,189,248,0.4)]" />
                <span>{PAIN_CONTENT.reassurance.note}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
