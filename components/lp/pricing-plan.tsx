'use client'

import { Check, CreditCard, Sparkles, Minus, UserIcon } from 'lucide-react' // アイコンを変更
import { motion } from 'framer-motion'
import Image from 'next/image'
// PRICING_CONTENT のインポートパスは適宜プロジェクトに合わせて変更してください。
import { PRICING_CONTENT } from '@/edit/pricing-content' 
import { Button } from '@/components/ui/button'

export default function PricingPlan() {
  // ---------------------------------------------------------
  // ★ デザイン設定：前回「完璧」と言っていただいた状態を完全維持
  // ---------------------------------------------------------
  const fontTitle = "font-serif"
  const fontBody = "font-sans"

  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-10 sm:mb-16" // 12/20 -> 10/16 に微減
  
  const cardRounded = "rounded-[2.5rem]" 
  const cardShadow = "shadow-[0_30px_80px_rgba(0,0,0,0.06)]"
  const cardBorder = "border border-gray-100"
  // ---------------------------------------------------------

  return (
    <section id="pricing" className={`${sectionPadding} relative bg-white overflow-hidden`}>
      
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {PRICING_CONTENT.sectionBgImage && (
          <Image 
            src={PRICING_CONTENT.sectionBgImage} 
            alt="" 
            fill 
            className="object-cover opacity-[0.03]" 
            priority 
          />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          
          {/* Header */}
          <div className={`text-center ${headerBottomMargin}`}>
            <motion.span className="text-[10px] font-black tracking-[0.5em] text-[var(--gold-dark)] uppercase block mb-4">
              Pricing & Investment
            </motion.span>
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-bold text-[var(--charcoal)] mb-6 tracking-tighter`}>
              {PRICING_CONTENT.title}
            </h2>
            <p className="text-[var(--charcoal-light)] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-80 font-medium whitespace-pre-line">
              {PRICING_CONTENT.subtitle}
            </p>
          </div>

          {/* Main Plans Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 sm:mb-24 items-stretch"> {/* 20/32 -> 16/24 に微減 */}
            {PRICING_CONTENT.mainPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col bg-white ${cardRounded} ${cardBorder} ${cardShadow} overflow-hidden group`}
                whileHover={{ y: -8 }}
              >
                {plan.popularBadge && (
                  <div className="absolute top-0 right-0 bg-[var(--gold)] text-white text-[9px] font-black px-4 py-1.5 rounded-bl-2xl shadow-sm z-20 flex items-center gap-1 uppercase tracking-widest">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.popularBadge}</span>
                  </div>
                )}
                
                {/* 修正：上下パディングを縮小 (pt-8 pb-7 -> pt-8 pb-5, sm:pt-10 sm:pb-8 -> sm:pt-10 sm:pb-6) */}
                <div className="pt-8 pb-5 px-7 sm:pt-10 sm:pb-6 sm:px-9 flex flex-col h-full">
                  <div className="text-center mb-6"> {/* mb-8 -> mb-6 */}
                    <h3 className={`${fontTitle} text-2xl font-bold text-[var(--charcoal)] mb-1`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mb-3"> {/* mb-4 -> mb-3 */}
                      <Minus className="w-3 h-[1px] text-[var(--gold)]/30" />
                      <span className="text-[10px] font-black text-[var(--gold-dark)] uppercase tracking-widest">{plan.sessions}</span>
                      <Minus className="w-3 h-[1px] text-[var(--gold)]/30" />
                    </div>
                    <p className="text-xs text-gray-400 font-bold mb-4">{plan.subtitle}</p> {/* mb-6 -> mb-4 */}
                  </div>

                  <div className="bg-gray-50/50 rounded-3xl p-5 mb-6 border border-gray-100 text-center relative z-10"> {/* p-6 mb-8 -> p-5 mb-6 */}
                    <div className="text-[10px] text-gray-300 font-bold line-through mb-1">
                      通常価格{plan.originalPrice}
                    </div>
                    <div className="flex items-baseline justify-center gap-0.5 mb-2">
                      <span className="text-lg font-bold text-[var(--charcoal)] mr-1">¥</span>
                      <span className={`${fontTitle} text-4xl md:text-5xl font-black text-[var(--charcoal)] leading-none tracking-tighter`}>
                        {plan.campaignPrice}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 ml-1">{plan.taxLabel}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-gray-100 text-[var(--gold-dark)]">
                      <CreditCard className="w-3 h-3" />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        都度払い ¥{plan.monthlyPrice}
                      </span>
                    </div>
                  </div>

                  {/* 特徴リスト：下マージンを縮小 (mb-7 -> mb-5) */}
                  <ul className="space-y-2.5 mb-5 flex-grow"> {/* space-y-3 mb-10 -> space-y-2.5 mb-5 */}
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[var(--gold)]" />
                        </div>
                        <span className="text-xs font-bold text-[var(--charcoal-light)] leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* ★【新設】最初から表示する照射範囲画像枠 (長方形) */}
                  {plan.treatmentImage && (
                    <div className="mb-6 border-t border-gray-100 pt-6">
                      <div className="text-center mb-4 flex items-center justify-center gap-2">
                         <UserIcon className="w-3 h-3 text-[var(--gold)]" /> {/* アイコンを変更 */}
                         <span className="text-[10px] font-black text-[var(--gold-dark)] uppercase tracking-widest">照射範囲</span>
                      </div>
                      {/* 横長の白い枠 (角丸、影) */}
                      <div className="relative w-full h-[180px] bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-inner-md">
                        <Image
                          src={plan.treatmentImage}
                          alt={`${plan.name}の施術対象部位`}
                          fill
                          className="object-contain p-2" // 画像全体が収まるように object-contain、パディングを追加
                        />
                      </div>
                    </div>
                  )}

                  <Button
                    asChild
                    className={`w-full py-6 rounded-2xl font-black transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 relative z-10 ${
                      plan.popularBadge 
                        ? "bg-[var(--gold)] text-white hover:bg-[var(--gold-dark)]" 
                        : "bg-[var(--charcoal)] text-white hover:bg-black"
                    }`} // py-7 -> py-6
                  >
                    <a href="#reservation">{plan.buttonText}</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Table */}
          <motion.div className={`${cardRounded} ${cardBorder} ${cardShadow} bg-white overflow-hidden`}>
            <div className="bg-gray-50/50 p-5 sm:p-7 text-center border-b border-gray-100"> {/* p-6 sm:p-8 -> p-5 sm:p-7 */}
              <div className="flex items-center justify-center gap-3 mb-1">
                <Minus className="w-8 h-[1px] text-[var(--gold)]/30" />
                <h3 className={`${fontTitle} text-xl sm:text-2xl font-bold text-[var(--charcoal)]`}>
                  {PRICING_CONTENT.table.title}
                </h3>
                <Minus className="w-8 h-[1px] text-[var(--gold)]/30" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[400px]">
                <thead>
                  <tr className="bg-white">
                    {PRICING_CONTENT.table.head.map((h, i) => (
                      <th key={i} className="py-5 px-6 text-[10px] font-black text-gray-400 text-center uppercase tracking-[0.2em] border-b border-gray-50"> {/* py-6 -> py-5 */}
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
  {PRICING_CONTENT.table.rows.map((row, index) => (
    <tr key={index} className="group hover:bg-gray-50/50 transition-colors">
      <td className="py-5 px-6 text-sm font-bold text-[var(--charcoal)] text-center">{row.name}</td>
      
      {/* 5回料金（真っ直ぐ・サイズをベースに） */}
      <td className={`py-5 px-6 text-base font-black text-[var(--charcoal)] text-center ${fontBody}`}>
        ¥{row.price}
      </td>
      
      {/* 都度払い（イタリックを解除・サイズをベースに統一・「-」の時は¥を消す） */}
      <td className={`py-5 px-6 text-base font-black text-[var(--gold-dark)] text-center ${fontBody}`}>
        {row.monthly === "-" ? "-" : `¥${row.monthly}`}
      </td>
    </tr>
  ))}
</tbody>
              </table>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
