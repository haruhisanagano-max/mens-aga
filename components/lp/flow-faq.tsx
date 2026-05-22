'use client'

import { Calendar, MessageCircle, ClipboardList, Zap, Sparkles, HelpCircle, ShieldCheck } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import { FLOW_FAQ_CONTENT } from '@/edit/flow-faq'

const stepIcons = [Calendar, MessageCircle, ClipboardList, Zap, Sparkles]

export default function FlowFaq() {
  // ---------------------------------------------------------
  // ★ デザイン・シュッと凝縮リモコン
  // ---------------------------------------------------------
  const fontTitle = "font-serif"
  const fontBody = "font-sans"

  const sectionPadding = "py-12 sm:py-20" // 垂直方向を圧縮
  const headerBottomMargin = "mb-10 sm:mb-16"
  
  // カードを「細く・シュッと」させる設定
  const cardRounded = "rounded-2xl" // 丸みを抑えてスマートに
  const cardShadow = "shadow-[0_15px_45px_rgba(0,0,0,0.04)]"
  const cardBorder = "border border-gray-100"
  const cardMaxWidth = "max-w-[480px]" // 横幅を絞って間延びを解消
  // ---------------------------------------------------------

  return (
    <section id="faq" className={`${sectionPadding} relative bg-white overflow-hidden`}>
      
      {/* 🔴 背景の透かし英語は削除しました */}

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Flow Header: 他パートと完全同期 */}
        <div className={`text-center ${headerBottomMargin}`}>
          <span className="text-[10px] font-black tracking-[0.5em] text-[var(--gold-dark)] uppercase block mb-3">
            Service Journey
          </span>
          <h2 className={`${fontTitle} text-3xl sm:text-5xl font-bold text-[var(--charcoal)] tracking-tighter mb-4`}>
            {FLOW_FAQ_CONTENT.sectionTitle}
          </h2>
          <p className="text-[var(--charcoal-light)] text-sm sm:text-base max-w-xl mx-auto leading-relaxed opacity-80 font-medium">
            {FLOW_FAQ_CONTENT.sectionSubtitle}
          </p>
        </div>

        {/* 🔴 Flow Steps: 縦のラインを強調した「シュッとした」レイアウト */}
        <div className={`relative mx-auto ${cardMaxWidth} mb-24 sm:mb-32`}>
          {/* 動線ライン：細く洗練された1px線 */}
          <div className="absolute left-[23px] top-4 bottom-4 w-[1px] bg-gray-100" />

          <div className="space-y-8 relative z-10">
            {FLOW_FAQ_CONTENT.steps.map((step, index) => {
              const Icon = stepIcons[index] || Sparkles
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 group"
                >
                  {/* ステップ番号：シンプルで強いセリフ体 */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center relative z-20 group-hover:border-[var(--gold)] transition-colors">
                      <span className={`${fontTitle} text-lg font-black text-[var(--charcoal)]`}>{step.number}</span>
                    </div>
                  </div>

                  {/* カード：細身でスマートなデザイン */}
                  <div className={`flex-1 bg-white ${cardRounded} ${cardBorder} ${cardShadow} py-5 px-7 hover:translate-x-1 transition-transform duration-300`}>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-4 h-4 text-[var(--gold-dark)]" />
                      <h3 className={`${fontTitle} text-base sm:text-lg font-bold text-[var(--charcoal)]`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className={`${fontBody} text-xs sm:text-sm text-[var(--charcoal-light)] leading-relaxed font-medium opacity-80`}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* 🔴 FAQ Section: 「Conclusionバー」のデザイン言語に完全統合 */}
        <div id="faq-list" className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 rounded-full border border-gray-100 mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Q & A</span>
             </div>
             <h2 className={`${fontTitle} text-2xl sm:text-4xl font-bold text-[var(--charcoal)] tracking-tighter`}>
               {FLOW_FAQ_CONTENT.faqTitle}
             </h2>
          </div>

          <div className="space-y-3">
            {FLOW_FAQ_CONTENT.faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem 
                  value={`item-${index}`} 
                  className={`bg-gray-50/50 hover:bg-gray-50 border border-gray-100 ${cardRounded} overflow-hidden transition-all duration-300`}
                >
                  <AccordionTrigger className="px-6 sm:px-8 py-5 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <span className={`${fontTitle} text-base sm:text-lg font-black text-[var(--gold-dark)] opacity-50`}>Q</span>
                      <span className={`${fontBody} text-sm sm:text-base font-bold text-[var(--charcoal)] tracking-tight`}>
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  
                  {/* 🛠️ 修正：アンサーの余白を詰め、枠を横いっぱいに活用 */}
                  <AccordionContent className="px-6 sm:px-8 pb-6">
                    <div className="flex gap-4 border-t border-gray-200/50 pt-5">
                       <span className={`${fontTitle} text-base sm:text-lg font-black text-gray-300`}>A</span>
                       <p className={`${fontBody} text-sm sm:text-base text-[var(--charcoal-light)] leading-loose font-medium flex-1`}>
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        {/* 🔴 最後に Conclusion バーで締める（統一感） */}
        <div className="mt-16 sm:mt-24 text-center">
           <div className={`inline-flex items-center gap-4 px-8 py-5 bg-gray-50 rounded-[2rem] border border-gray-100 max-w-4xl mx-auto shadow-sm`}>
             <ShieldCheck className="w-6 h-6 text-[var(--gold)] shrink-0" />
             <p className="text-[var(--charcoal-light)] text-[10px] sm:text-xs font-bold tracking-tight text-left">
               ※上記以外にご不明な点がございましたら、カウンセリング時に専門スタッフが丁寧にお答えいたします。
             </p>
           </div>
        </div>

      </div>
    </section>
  )
}
