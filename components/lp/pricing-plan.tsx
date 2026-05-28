'use client'

import { Check, CreditCard, Sparkles, Minus, UserIcon, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PRICING_CONTENT } from '@/edit/pricing-content' 
import { BANNER_CONTENT } from '@/edit/banner-content' 
import { Button } from '@/components/ui/button'

interface PricingPlanProps {
  onOpenCampaign: (id: string) => void
}

export default function PricingPlan({ onOpenCampaign }: PricingPlanProps) {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"
  const fontBody = "font-sans"

  const sectionPadding = "py-10 sm:py-12"
  const headerBottomMargin = "mb-6 sm:mb-8"
  const cardRounded = "rounded-xl" 

  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"
  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' }

  return (
    // 💡 修正：バナー配置に合わせ、セクション最下部の余白（pb）をタイトに引き締め
    <section id="pricing" className={`${sectionPadding} pb-10 sm:pb-12 relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 【背景演出：光源の位置を調整】 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[3%] left-[12%] w-56 h-56 bg-sky-400/40 rounded-full blur-3xl opacity-90" />
        <div className="absolute top-[16%] right-[10%] w-48 h-48 bg-cyan-400/40 rounded-full blur-3xl opacity-80" />
        <div className="absolute top-[32%] left-[5%] w-64 h-64 bg-sky-400/45 rounded-full blur-3xl opacity-90" />
        <div className="absolute top-[50%] right-[15%] w-52 h-52 bg-sky-400/40 rounded-full blur-3xl opacity-85" />
        <div className="absolute top-[66%] left-[10%] w-60 h-60 bg-cyan-400/40 rounded-full blur-3xl opacity-80" />
        <div className="absolute top-[80%] right-[8%] w-48 h-48 bg-sky-400/45 rounded-full blur-3xl opacity-90" />
        
        {/* 💡 修正：バナーが上に詰まったのに合わせて、光の位置も少し上（bottom-[6%]）へスライド */}
        <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[80%] h-60 bg-sky-400/25 rounded-full blur-[120px] opacity-80" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {PRICING_CONTENT.sectionBgImage && (
          <Image 
            src={PRICING_CONTENT.sectionBgImage} 
            alt="" 
            fill 
            className="object-cover opacity-[0.02] mix-blend-overlay" 
            priority 
          />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          
          {/* Header */}
          <div className={`text-center ${headerBottomMargin}`}>
            <motion.span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-2 uppercase drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">
              Pricing & Investment
            </motion.span>
            <div className="relative inline-block">
              <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-3 leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]`}>
                {PRICING_CONTENT.title}
              </h2>
            </div>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium opacity-70 whitespace-pre-line">
              {PRICING_CONTENT.subtitle}
            </p>
          </div>

          {/* Main Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 items-stretch">
            {PRICING_CONTENT.mainPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col ${cardRounded} ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden group bg-transparent`}
                style={gpuStyle}
                whileHover={{ y: -5, borderColor: 'rgba(56,189,248,0.4)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[100px] z-0" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.06] via-transparent to-transparent pointer-events-none z-0" />

                {/* 下部光源 */}
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_30px_rgba(56,189,248,0.8)] pointer-events-none z-20" />
                <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-sky-500/10 via-sky-500/5 to-transparent pointer-events-none z-0" />
                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-sky-500/15 via-sky-500/5 to-transparent pointer-events-none z-0" />

                {plan.popularBadge && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 text-[9px] font-black px-4 py-1.5 rounded-bl-xl shadow-md z-20 flex items-center gap-1 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">
                    <Sparkles className="w-3 h-3 fill-slate-950" />
                    <span>{plan.popularBadge}</span>
                  </div>
                )}
                
                <div className="pt-5 pb-5 px-5 sm:px-6 flex flex-col h-full relative z-10">
                  <div className="text-center mb-3.5">
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-white mb-1 tracking-tight">
                      {plan.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Minus className="w-3 h-[1px] text-sky-400/40" />
                      <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">{plan.sessions}</span>
                      <Minus className="w-3 h-[1px] text-sky-400/40" />
                    </div>
                    <p className="text-xs text-slate-400 font-bold tracking-wide">{plan.subtitle}</p>
                  </div>

                  <div className="bg-slate-950/40 rounded-2xl p-3.5 mb-3.5 border border-slate-800 text-center relative z-10 shadow-inner">
                    <div className="text-[10px] text-slate-500 font-bold line-through mb-0.5">
                      通常価格 ¥{plan.originalPrice}
                    </div>
                    <div className="flex items-baseline justify-center gap-0.5 mb-1.5">
                      <span className="text-base font-bold text-white mr-1">¥</span>
                      <span className={`font-sans text-3xl sm:text-4xl font-black text-white leading-none tracking-tight drop-shadow-[0_0_20px_rgba(56,189,248,0.65)]`}>
                        {plan.campaignPrice}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 ml-1">{plan.taxLabel}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/60 rounded-full border border-slate-700/50 text-amber-300 shadow-sm drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                      <CreditCard className="w-3 h-3" />
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        分割月々 ¥{plan.monthlyPrice}〜
                      </span>
                    </div>
                  </div>

                  {/* 特徴リスト */}
                  <ul className="space-y-2 mb-3.5 flex-grow border-t border-slate-800/60 pt-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-slate-950/60 border border-slate-700/60 flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                          <Check className="w-2.5 h-2.5 text-sky-400" />
                        </div>
                        <span className="text-xs font-semibold text-slate-300 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.treatmentImage && (
                    <div className="mb-3.5 border-t border-slate-800/60 pt-3">
                      <div className="text-center mb-1.5 flex items-center justify-center gap-2">
                        <UserIcon className="w-3 h-3 text-sky-400" />
                        <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">照射範囲</span>
                      </div>
                      <div className="relative w-full h-[125px] bg-white rounded-xl border border-slate-700/60 overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)]">
                        <Image
                          src={plan.treatmentImage}
                          alt={`${plan.name}の施術対象部位`}
                          fill
                          className="object-contain p-1.5"
                        />
                      </div>
                    </div>
                  )}

                  <Button
                    asChild
                    className={`w-full py-4.5 rounded-xl font-black transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 relative z-10 text-sm tracking-wide ${
                      plan.popularBadge 
                        ? "bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 font-black shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:from-amber-300 hover:to-amber-200" 
                        : "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700"
                    }`}
                  >
                    <a href="#reservation">{plan.buttonText}</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Table：部位別プラン表 */}
          <motion.div 
            className={`relative overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] bg-transparent flex flex-col`}
            style={gpuStyle}
          >
            <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[100px] z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none z-0" />

            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_30px_rgba(56,189,248,0.8)] pointer-events-none z-20" />
            <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-sky-500/10 via-sky-500/5 to-transparent pointer-events-none z-0" />

            <div className="relative z-10 flex flex-col w-full">
              <div className="bg-slate-950/30 p-3 text-center border-b border-slate-800/60">
                <div className="flex items-center justify-center gap-3">
                  <Minus className="w-6 h-[1px] text-sky-400/30" />
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight">
                    {PRICING_CONTENT.table.title}
                  </h3>
                  <Minus className="w-6 h-[1px] text-sky-400/30" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr className="bg-slate-950/10">
                      {PRICING_CONTENT.table.head.map((h, i) => (
                        <th key={i} className="py-2.5 px-6 text-[10px] font-black text-slate-400 text-center uppercase tracking-[0.2em] border-b border-slate-800/40">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40">
                    {PRICING_CONTENT.table.rows.map((row, index) => (
                      <tr key={index} className="group hover:bg-slate-800/30 transition-colors">
                        <td className="py-2.5 px-6 text-xs sm:text-sm font-bold text-slate-200 text-center">{row.name}</td>
                        <td className={`py-2.5 px-6 text-sm sm:text-base font-black text-white text-center ${fontBody} drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]`}>
                          ¥{row.price}
                        </td>
                        <td className={`py-2.5 px-6 text-sm sm:text-base font-black text-amber-300 text-center ${fontBody} drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]`}>
                          {row.monthly === "-" ? "-" : `¥${row.monthly}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="mt-8 sm:mt-10 flex justify-center" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div 
              className={`relative overflow-hidden flex flex-col md:flex-row items-center justify-center gap-4 px-8 py-4 rounded-xl ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] bg-transparent w-full max-w-4xl mx-auto`}
              style={gpuStyle}
            >
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[100px] z-0" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none z-0" />
              
              <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent shadow-[0_0_20px_rgba(56,189,248,0.6)] pointer-events-none z-20" />
              
              <div className="flex items-center gap-3 shrink-0 relative z-10">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                <span className="font-sans text-sm sm:text-base font-extrabold text-slate-100 whitespace-nowrap uppercase tracking-wider">
                  Payment Methods
                </span>
              </div>

              <div className="hidden md:block w-[1px] h-5 bg-slate-700/60 mx-2 shrink-0 relative z-10" />

              <div className="relative z-10 text-center md:text-left">
                <p className="font-sans text-slate-300 text-xs sm:text-sm font-bold tracking-wide opacity-90">
                  {PRICING_CONTENT.paymentMethods}
                </p>
              </div>
            </div>
          </motion.div>

          {/* バナーエリア：💡 【修正】余白を引き締め。pt-10➔pt-6, mt-10➔mt-6 に縮小 */}
          <div className="w-full pt-6 border-t border-slate-800/40 mt-6 flex flex-col items-center relative">
            {BANNER_CONTENT.banners.map((banner) => (
              <button
                key={banner.id}
                onClick={() => onOpenCampaign(banner.id)}
                className="relative w-full max-w-4xl aspect-[17/6] overflow-hidden transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] active:scale-[0.98] shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-xl sm:rounded-2xl border border-slate-800 group z-10"
              >
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

        </motion.div>
      </div>
    </section>
  )
}
