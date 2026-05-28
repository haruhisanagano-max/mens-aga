'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SELECTION_CONTENT } from '@/edit/selection-guide-content'

export default function SelectionGuide() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"
  const allCards = [SELECTION_CONTENT.google, ...SELECTION_CONTENT.platforms]
  const hasBgImage = !!SELECTION_CONTENT.sectionBgImage

  return (
    /* 💡 【差し色：深海サファイア（#040D21）】
         全体のネイビーの世界観を100%維持したまま、わずかにクリアな透明感を足した高級な紺青。
         前後のセクションから流れるように繋がり、雰囲気を絶対に壊しません。 */
    <section id="selection" className="py-12 sm:py-16 relative bg-[#040D21] text-slate-400 overflow-hidden">
      
      {/* 💡 【背景演出】画面全体をフワッと包み込む、澄み切ったアイスブルーのまだら光 */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/15 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* 背景画像 */}
      {hasBgImage && (
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay">
          <Image src={SELECTION_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-10" priority />
        </div>
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 text-center mb-8 sm:mb-12">
          {/* バッジも氷結青に同期 */}
          <span className="inline-block px-5 py-1 bg-sky-500/10 text-sky-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-3 rounded-full border border-sky-500/20 drop-shadow-[0_0_5px_rgba(56,189,248,0.3)]">
            {SELECTION_CONTENT.badge}
          </span>
          <div className="relative inline-block">
            {/* 💡 【純白の美しいタイトル発光】濁りゼロのホワイトクリア発光 */}
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-b from-white via-slate-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.35)]`}>
              {SELECTION_CONTENT.title.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
          </div>
          {SELECTION_CONTENT.subtitle && (
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed opacity-60 font-medium mt-1">
              {SELECTION_CONTENT.subtitle}
            </p>
          )}
        </div>

        {/* 🔴 スクロールエリア（高度タイト設計・間延び完全解消版を維持） */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-6 px-[10%] sm:px-[20%] gap-5 scrollbar-hide snap-x snap-mandatory">
            {allCards.map((card, i) => (
              <div 
                key={i} 
                className="snap-center shrink-0 w-[270px] sm:w-[360px]"
              >
                <ReviewCard card={card} fontTitle={fontTitle} />
              </div>
            ))}
            <div className="shrink-0 w-[5%] h-1" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}

/* 🔴 レビューカード：磨りガラス透過仕様の角丸（rounded-xl） */
function ReviewCard({ card, fontTitle }: any) {
  // 💡 【巨大スコア数字発光】白ベースを完全維持したクリーンな輝き
  const numberGlow = "bg-gradient-to-b from-white via-slate-50 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]";

  return (
    /* 高度はスマホ画面に完璧に美しく収まる h-[310px] sm:h-[390px] の凝縮デザイン */
    <div className="relative h-[310px] sm:h-[390px] p-5 sm:p-7 overflow-hidden rounded-xl border border-sky-500/20 bg-slate-950/50 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      {/* アイスブルーの微細な反射光演出 */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.06] via-transparent to-cyan-500/[0.04] pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* 上部ブロック */}
        <div>
          {/* ロゴエリア */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-xl">
              {card.logo && (
                <div className="relative w-4 h-4 filter brightness-110">
                  <Image src={card.logo} alt="" fill className="object-contain" />
                </div>
              )}
              <span className="text-slate-200 font-bold italic text-[9px] uppercase tracking-wider">
                {card.name}
              </span>
            </div>
            {/* 星の評価：上品に発光する氷結アイスブルー（sky-400） */}
            <div className="flex text-sky-400 gap-0.5 filter drop-shadow-[0_0_5px_rgba(56,189,248,0.5)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 fill-current ${i < 4 ? '' : 'opacity-20 text-slate-700'}`} />
              ))}
            </div>
          </div>

          {/* スコア数字：白く神々しく発光 */}
          <div className="flex items-baseline gap-2 mb-1">
            <span className={`${fontTitle} text-6xl sm:text-7xl font-black ${numberGlow} leading-none tracking-tighter`}>
              {card.rating}
            </span>
            <span className="text-sky-400 font-black text-[9px] tracking-widest leading-none border-b border-sky-400/30 pb-0.5">SCORE</span>
          </div>

          {/* トータル表記 */}
          <div className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[8px]">
            Total <span className="text-white text-base font-black mx-1 underline decoration-sky-500/40 underline-offset-4">{card.total}</span> {card.totalLabel}
          </div>
        </div>

        {/* 下部ブロック：院別リスト */}
        {card.details && card.details.length > 0 && (
          <div className="pt-3 border-t border-slate-900 space-y-1.5">
            {card.details?.map((d: any, i: number) => (
              <div key={i} className="flex items-center justify-between">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{d.city}</div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-2.5 h-2.5 text-sky-400 fill-current" />
                  <div className="text-sm font-black text-slate-100">{d.rating}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* 💡 【サファイアの隠し味】カードの底辺に、極細の鮮やかなサイバーブルー光源ラインをペイント */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent shadow-[0_0_20px_rgba(56,189,248,0.6)] pointer-events-none z-20" />
    </div>
  )
}
