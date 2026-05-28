'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Check, Timer } from 'lucide-react'
import Image from 'next/image'
import { CAMPAIGN_CONTENT } from '@/edit/campaign-content'
import { BANNER_CONTENT } from '@/edit/banner-content' // 💡 バナーデータをインポート

// 💡 page.tsxからのプロップスを受け取れるように拡張
interface CampaignOfferProps {
  onOpenCampaign: (id: string) => void
}

export default function CampaignOffer({ onOpenCampaign }: CampaignOfferProps) {
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
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"

  const containerStyles = {
    1: { maxWidth: 'max-w-2xl' },
    2: { maxWidth: 'max-w-2xl' },
    3: { maxWidth: 'max-w-2xl' },
  }[plansCount > 3 ? 3 : plansCount as 1 | 2 | 3];

  return (
    // 💡 下のパディング（pb）を少し調整して、追加したバナーとの間隔を確保
    <section id="campaign" className="pt-16 sm:pt-24 pb-20 sm:pb-28 relative bg-[#050A15] text-slate-400 overflow-hidden">
      
      {/* 背景演出：思い切った爆光・まだら（斑）の光 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[2%] left-[5%] w-[500px] h-[500px] bg-sky-500/25 blur-[130px] rounded-full" />
        <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-5%] w-[550px] h-[550px] bg-cyan-400/25 blur-[130px] rounded-full" />
        <div className="absolute bottom-[2%] right-[10%] w-[450px] h-[450px] bg-teal-500/15 blur-[120px] rounded-full" />
      </div>

      <div className={`mx-auto px-6 relative z-10 ${containerStyles.maxWidth}`}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 uppercase block drop-shadow-[0_0_5px_rgba(245,158,11,0.4)]">
              {CAMPAIGN_CONTENT.topLabel || "SPECIAL OFFER"}
            </span>
          </div>
          <div className="relative inline-block">
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-b from-white via-slate-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]`}>
              Special Campaign
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed opacity-70 font-medium">
            {CAMPAIGN_CONTENT.subtitle}
          </p>
        </motion.div>

        <div className="space-y-6 relative z-10">
          
          {/* 🕒 タイマー部分 */}
          <div className="flex flex-col items-center mx-auto max-w-sm border-b border-slate-900/60 pb-4">
            <div className="flex items-center gap-1.5 mb-2 text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase">
              <Timer className="w-3.5 h-3.5 text-sky-400" />
              <span>Time Remaining</span>
            </div>
            
            <div className="flex justify-center items-center gap-2 sm:gap-3">
              {[
                { v: timeLeft.days, l: 'Days' }, { v: timeLeft.hours, l: 'Hours' }, 
                { v: timeLeft.minutes, l: 'Mins' }, { v: timeLeft.seconds, l: 'Secs' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-slate-950 border border-slate-800 rounded-lg w-13 h-14 sm:w-16 sm:h-18 flex items-center justify-center shadow-inner mb-1.5">
                    <span className="font-mono text-2xl sm:text-3xl font-black tracking-tight text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]">
                      {String(item.v).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">{item.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 先着枠 */}
          <div className="flex justify-center">
            <div className="min-w-[180px] h-9 flex items-center justify-center px-6 border border-amber-500/30 bg-amber-500/10 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <span className="text-[10px] font-bold tracking-[0.3em] text-amber-300 uppercase drop-shadow-[0_0_5px_rgba(245,158,11,0.4)]">
                {CAMPAIGN_CONTENT?.limit?.fullText}
              </span>
            </div>
          </div>

          {/* プラン内容 */}
          <div className="grid grid-cols-1 items-center gap-y-5">
            {CAMPAIGN_CONTENT.plans.map((p, i) => {
              const isMain = i === 0;
              return (
                <motion.div 
                  key={i} 
                  className={`relative text-center flex flex-col items-center w-full max-w-xl mx-auto border backdrop-blur-md transition-all duration-300 ${
                    isMain 
                      ? 'bg-slate-950/75 border-sky-400 shadow-[0_0_35px_rgba(56,189,248,0.35)] rounded-xl p-6 sm:p-8 z-20' 
                      : 'bg-slate-950/40 border-sky-500/20 shadow-[0_0_15px_rgba(56,189,248,0.12)] rounded-xl p-5 sm:p-6 z-10'
                  }`}
                >
                  <div className={`font-bold tracking-wide mb-3.5 ${isMain ? 'text-white text-base sm:text-xl' : 'text-slate-300 text-sm sm:text-base'}`}>
                    {p.name}
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-5">
                    <span className={`text-[10px] font-black px-3 py-1 rounded border tracking-wider uppercase ${
                      isMain 
                        ? 'bg-sky-500/10 text-sky-400 border-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.6)] animate-pulse' 
                        : 'bg-sky-500/5 text-sky-400/80 border-sky-500/30 shadow-[0_0_8px_rgba(56,189,248,0.3)]'
                    }`}>
                      {p.discountBadge}
                    </span>
                    {p.discountAmount && (
                      <span className={`border text-[10px] font-bold px-3 py-1 rounded tracking-wide ${
                        isMain
                          ? 'bg-amber-500/10 text-amber-300 border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.4)]'
                          : 'bg-amber-500/5 text-amber-400/80 border-amber-500/20'
                      }`}>
                        {p.discountAmount}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-2 text-slate-500">
                    <span className="text-[10px] font-bold tracking-wider">通常価格</span>
                    <span className="line-through text-sm sm:text-base font-medium tracking-wide">¥{p.originalPrice}</span>
                  </div>
                  
                  <div className="flex flex-col items-center mb-2">
                    <div className="flex items-baseline gap-0.5 leading-none">
                      <span className={`font-sans font-bold ${isMain ? 'text-sky-400 text-xl sm:text-2xl' : 'text-sky-400/80 text-lg'}`}>¥</span>
                      <span className={`font-sans font-black tracking-tighter leading-none bg-gradient-to-b from-white via-slate-50 to-white bg-clip-text text-transparent ${
                        isMain 
                          ? 'text-5xl sm:text-6xl drop-shadow-[0_0_25px_rgba(56,189,248,0.85)]' 
                          : 'text-4xl sm:text-5xl drop-shadow-[0_0_15px_rgba(56,189,248,0.45)]'
                      }`}>
                        {p.campaignPrice}
                      </span>
                    </div>
                    <span className="text-[9px] text-slate-500 font-bold tracking-[0.2em] mt-3 uppercase">
                      {p.taxLabel}
                    </span>
                  </div>

                  {/* 特典詳細リスト */}
                  {/* @ts-ignore */}
                  {p.features && p.features.length > 0 && (
                    /* @ts-ignore */
                    <div className={`w-full max-w-md mx-auto mt-6 border rounded-xl p-4 sm:p-5 text-left bg-slate-950/40 ${isMain ? 'border-sky-500/20 shadow-[inset_0_0_20px_rgba(56,189,248,0.05)]' : 'border-slate-800'}`}>
                      <ul className="space-y-3">
                        {/* @ts-ignore */}
                        {p.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isMain ? 'text-sky-400 drop-shadow-[0_0_5px_rgba(56,189,248,0.5)]' : 'text-slate-500'}`} />
                            <span className={`text-xs font-medium leading-normal ${isMain ? 'text-slate-200' : 'text-slate-400'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                </motion.div>
              );
            })}
          </div>

          {/* 大本命コンバージョンボタン */}
          <div className="text-center pt-2">
            <Button asChild className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-black px-12 py-6 sm:py-7 rounded-full text-sm sm:text-lg w-full sm:w-auto shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] hover:scale-[1.02]">
              <a href="#reservation" className="tracking-[0.15em] flex items-center justify-center gap-2">
                <span>{CAMPAIGN_CONTENT?.buttonText}</span>
              </a>
            </Button>
          </div>

          {/* 🔴 【統合成功】つなぎ目を完全になくして最下部に埋め込まれたバナーエリア */}
          <div className="w-full pt-10 border-t border-slate-900/40 mt-6 flex flex-col items-center">
            {BANNER_CONTENT.banners.map((banner) => (
              <button
                key={banner.id}
                onClick={() => onOpenCampaign(banner.id)}
                // 💡 幅は他のカード類と完全に統一し、ホバーでリッチにネオンが光る設計
                className="relative w-full aspect-[17/6] overflow-hidden transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] active:scale-[0.98] shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-xl sm:rounded-2xl border border-slate-800 group"
              >
                {/* キラッと光が走るリッチエフェクト */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out z-10 pointer-events-none" />
                
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

        </div>

        {/* 下部注釈 */}
        <div className="mt-8 grid grid-cols-1 gap-1.5 mx-auto px-4 max-w-xl">
          {CAMPAIGN_CONTENT?.notes?.map((n: string, i: number) => (
            <p key={i} className="text-[10px] text-slate-500 font-medium leading-relaxed flex gap-1.5 items-baseline">
              <span className="text-amber-400 font-mono text-xs">†</span>
              <span className="opacity-80">{n}</span>
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}
