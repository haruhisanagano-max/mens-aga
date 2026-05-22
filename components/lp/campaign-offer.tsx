'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { CAMPAIGN_CONTENT } from '@/edit/campaign-content'

export default function CampaignOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: CAMPAIGN_CONTENT?.timer?.days || 0,
    hours: CAMPAIGN_CONTENT?.timer?.hours || 0,
    minutes: CAMPAIGN_CONTENT?.timer?.minutes || 0,
    seconds: CAMPAIGN_CONTENT?.timer?.seconds || 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0; }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!CAMPAIGN_CONTENT || !CAMPAIGN_CONTENT.plans || CAMPAIGN_CONTENT.plans.length === 0) {
    return null;
  }

  const plansCount = CAMPAIGN_CONTENT.plans.length;
  const goldTextGlow = "drop-shadow-[0_2px_10px_rgba(201,169,98,0.3)]"

  // 🟢 修正：PC(640px)でも横に並ばせないよう、gridは常に1列に固定
  const containerStyles = {
    1: { maxWidth: 'max-w-2xl', padding: 'p-6 sm:px-10', grid: 'grid-cols-1' },
    2: { maxWidth: 'max-w-2xl', padding: 'p-5 sm:px-10', grid: 'grid-cols-1' },
    3: { maxWidth: 'max-w-2xl', padding: 'p-4 sm:px-10', grid: 'grid-cols-1' },
  }[plansCount > 3 ? 3 : plansCount as 1 | 2 | 3];

  return (
    <section id="campaign" className="py-10 sm:py-16 relative bg-[#FDFBF7] overflow-hidden">
      <div className={`mx-auto px-6 relative z-10 ${containerStyles.maxWidth}`}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-4 h-[1px] bg-[var(--gold)]/50" />
            <span className="text-[8px] font-black text-[var(--gold-dark)] tracking-[0.4em] uppercase">Limited</span>
            <div className="w-4 h-[1px] bg-[var(--gold)]/50" />
          </div>
          <h2 className={`font-serif text-2xl sm:text-4xl font-bold text-[var(--charcoal)] tracking-tighter ${goldTextGlow}`}>
            <span className="text-[var(--gold)]">{CAMPAIGN_CONTENT?.timer?.month || ''}</span> Special Campaign
          </h2>
        </motion.div>

        <div className="relative">
          <div className={`bg-white rounded-[2rem] border border-[var(--gold)]/20 shadow-xl relative overflow-hidden ${containerStyles.padding}`}>
            
            <div className="absolute inset-[6px] border border-[var(--gold)]/10 rounded-[1.7rem] pointer-events-none" />

            {/* 🕒 タイマー */}
            <div className="flex justify-center items-center gap-2 sm:gap-3 mb-8 border-b border-gray-50 pb-8 mx-auto max-w-sm relative z-10">
              {[
                { v: timeLeft.days, l: 'Days' }, { v: timeLeft.hours, l: 'Hours' }, 
                { v: timeLeft.minutes, l: 'Mins' }, { v: timeLeft.seconds, l: 'Secs' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  {/* 🟢 修正：タイマーボックスが大きくなりすぎないよう調整 */}
                  <div className="bg-red-600 text-white rounded-xl w-14 h-16 sm:w-16 sm:h-20 flex items-center justify-center shadow-md mb-2">
                    <span className="font-serif text-3xl sm:text-4xl font-black tracking-tighter leading-none">
                      {String(item.v).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[9px] font-black text-red-600 uppercase tracking-widest">{item.l}</span>
                </div>
              ))}
            </div>

            {/* 先着枠 */}
            <div className="flex justify-center mb-10 relative z-10">
              <div className="min-w-[180px] h-10 flex items-center justify-center px-6 border border-red-600/30 bg-red-50 rounded-full">
                <span className="text-[9px] sm:text-[11px] font-black tracking-[0.3em] text-red-600 uppercase">
                  {CAMPAIGN_CONTENT?.limit?.fullText}
                </span>
              </div>
            </div>

            {/* プラン内容 */}
            <div className={`grid grid-cols-1 items-center gap-y-16 mb-10 relative z-10`}>
              {CAMPAIGN_CONTENT.plans.map((p, i) => {
                const isMain = i === 0;
                return (
                  <motion.div key={i} className="relative text-center flex flex-col items-center">
                    
                    <div className={`text-[var(--charcoal)] mb-3 font-black tracking-[0.1em] ${isMain ? 'text-[14px] sm:text-[18px]' : 'text-[12px] sm:text-[16px]'}`}>
                      {p.name}
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      <span className={`${isMain ? 'bg-red-600 animate-pulse' : 'bg-red-500'} text-white text-xs font-black px-3 py-1 rounded-md shadow-md`}>
                        {p.discountBadge}
                      </span>
                    </div>

                    <div className={`flex items-center justify-center gap-2 mb-1 ${isMain ? 'text-gray-500' : 'text-gray-400'}`}>
                      <span className="text-xs font-bold tracking-widest">通常価格</span>
                      <span className={`line-through ${isMain ? 'text-xl' : 'text-lg'} font-bold tracking-widest`}>¥{p.originalPrice}</span>
                    </div>
                    
                    <div className="flex flex-col items-center mb-2">
                      <div className={`flex items-baseline gap-1 leading-none ${isMain ? 'text-red-600' : 'text-[var(--charcoal)]'}`}>
                        <span className={`${isMain ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-serif font-bold`}>¥</span>
                        {/* 🟢 修正：価格が640pxを突き破らないよう sm:text-7xl に抑える */}
                        <span className={`font-serif font-black tracking-tighter leading-none ${isMain ? 'text-6xl sm:text-7xl' : 'text-5xl sm:text-6xl'}`}>
                          {p.campaignPrice}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] mt-3 uppercase">
                        {p.taxLabel}
                      </span>
                    </div>

                    {/* 詳細リスト */}
                    {/* @ts-ignore */}
                    {p.features && p.features.length > 0 && (
                      <div className={`w-full max-w-sm mx-auto mt-8 mb-4 border rounded-2xl p-6 text-left shadow-sm ${isMain ? 'bg-red-50/50 border-red-100' : 'bg-gray-50/50 border-gray-100'}`}>
                        <ul className="space-y-3">
                          {/* @ts-ignore */}
                          {p.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className={`w-5 h-5 shrink-0 ${isMain ? 'text-red-600' : 'text-[var(--gold)]'}`} />
                              <span className={`text-sm font-bold leading-snug ${isMain ? 'text-[var(--charcoal)]' : 'text-[var(--charcoal-light)]'}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 🟢 修正：スマホ・PC共通で縦の区切り線（波線）を表示。PC用の縦線を廃止 */}
                    {i !== CAMPAIGN_CONTENT.plans.length - 1 && (
                      <div className="absolute -bottom-10 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                    )}
                    
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center relative z-10 pt-4">
              <Button asChild className="bg-[var(--charcoal)] hover:bg-black text-white font-black px-12 py-6 sm:py-7 rounded-full text-base sm:text-xl w-full sm:w-auto shadow-xl transition-all">
                <a href="#reservation" className="tracking-[0.2em]">
                  {CAMPAIGN_CONTENT?.buttonText}
                </a>
              </Button>
            </div>
          </div>

          <div className={`mt-6 grid grid-cols-1 gap-1 mx-auto px-4 max-w-xl`}>
            {CAMPAIGN_CONTENT?.notes?.map((n: string, i: number) => (
              <p key={i} className="text-[8px] text-gray-400 font-medium leading-tight flex gap-1.5 items-baseline">
                <span className="text-[var(--gold)] font-serif italic text-xs">†</span> {n}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
