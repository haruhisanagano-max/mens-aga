'use client'

import { Star, Minus } from 'lucide-react'
import Image from 'next/image'
import { SELECTION_CONTENT } from '@/edit/selection-guide-content'

export default function SelectionGuide() {
  const fontTitle = "font-serif"
  const allCards = [SELECTION_CONTENT.google, ...SELECTION_CONTENT.platforms]
  const hasBgImage = !!SELECTION_CONTENT.sectionBgImage

  return (
    <section id="selection" className="py-16 sm:py-24 relative bg-[#FDFBF7] overflow-hidden">
      
      {/* 背景画像（変更なし） */}
      {hasBgImage && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src={SELECTION_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-40" priority />
        </div>
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 text-center mb-8">
          <span className="inline-block px-5 py-1 bg-[var(--gold)]/10 text-[var(--gold-dark)] text-[10px] font-black tracking-[0.4em] uppercase mb-4 rounded-full">
            {SELECTION_CONTENT.badge}
          </span>
          <h2 className={`${fontTitle} text-3xl sm:text-5xl font-bold text-[var(--charcoal)] mb-4 leading-tight`}>
            {SELECTION_CONTENT.title.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
        </div>

        {/* 🔴 左右にはみ出る・超軽量スクロールエリア */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-10 px-[10%] sm:px-[20%] gap-6 scrollbar-hide snap-x snap-mandatory">
            {allCards.map((card, i) => (
              <div 
                key={i} 
                className="snap-center shrink-0 w-[280px] sm:w-[380px]"
              >
                <ReviewCard card={card} fontTitle={fontTitle} />
              </div>
            ))}
            {/* 最後の余白調整用パーツ */}
            <div className="shrink-0 w-[5%] h-1" />
          </div>
        </div>
      </div>

      {/* スクロールバーを隠すためのスタイル */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}

function ReviewCard({ card, fontTitle }: any) {
  return (
    <div className="relative h-[480px] sm:h-[580px] p-8 sm:p-10 overflow-hidden rounded-[40px] border border-white bg-white/80 shadow-[0_15px_45px_rgba(0,0,0,0.05)]">
      {/* ガラス風の反射演出 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/10 opacity-60 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        {/* ロゴエリア */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
            {card.logo && (
              <div className="relative w-6 h-6">
                <Image src={card.logo} alt="" fill className="object-contain" />
              </div>
            )}
            <span className="text-[var(--charcoal)] font-black italic text-[10px] uppercase">
              {card.name}
            </span>
          </div>
          <div className="flex text-[var(--gold)] gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 fill-current ${i < 4 ? '' : 'opacity-20'}`} />
            ))}
          </div>
        </div>

        {/* スコア */}
        <div className="flex items-baseline gap-3 mb-2">
          <span className={`${fontTitle} text-7xl sm:text-9xl font-black text-[var(--charcoal)] leading-none tracking-tighter`}>
            {card.rating}
          </span>
          <span className="text-[var(--gold)] font-black text-xl italic leading-none">SCORE</span>
        </div>

        <div className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-auto">
          Total <span className="text-[var(--charcoal)] text-xl font-black mx-1 underline decoration-[var(--gold)] underline-offset-4">{card.total}</span> {card.totalLabel}
        </div>

        {/* 院別リスト */}
        <div className="pt-6 border-t border-gray-100 space-y-4">
          {card.details?.map((d: any, i: number) => (
            <div key={i} className="flex items-center justify-between">
              <div className="text-xs font-bold text-[var(--charcoal-light)] uppercase tracking-tighter">{d.city}</div>
              <div className="flex items-center gap-2">
                <Star className="w-3 h-3 text-[var(--gold)] fill-current" />
                <div className="text-lg font-black text-[var(--charcoal)]">{d.rating}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
