'use client'

import Image from 'next/image' 
import { Calendar, MessageCircle, ClipboardList, Zap, Sparkles, HelpCircle, ShieldCheck, Minus } from 'lucide-react'
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
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"
  const fontBody = "font-sans"

  const sectionPadding = "py-10 sm:py-12" 
  const headerBottomMargin = "mb-6 sm:mb-8" 
  
  const cardRounded = "rounded-xl" 
  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"
  const cardShadow = "shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
  const cardMaxWidth = "max-w-[480px]" 
  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' }

  const movingCyberLineStyle = "absolute h-[0.5px] bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-moving-line pointer-events-none z-0 opacity-40 shadow-[0_0_10px_rgba(56,189,248,0.5)]";

  return (
    <section id="faq" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-[5%] w-[400px] h-[400px] bg-sky-500/30 blur-[120px] rounded-full" />
        <div className="absolute top-[45%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/25 blur-[150px] rounded-full" />
        <div className="absolute bottom-[5%] left-[10%] w-[450px] h-[450px] bg-cyan-400/25 blur-[130px] rounded-full" />

        <div className="absolute inset-0 z-0">
          <div className={`${movingCyberLineStyle} top-[3%] left-[5%] w-[250px] rotate-[135deg] h-[1px] via-sky-400`} style={{ animationDuration: '6s', animationDelay: '0s' }} />
          <div className={`${movingCyberLineStyle} top-[8%] right-[8%] w-[220px] rotate-[45deg] h-[1px] via-cyan-400`} style={{ animationDuration: '8s', animationDelay: '2s' }} />
          <div className={`${movingCyberLineStyle} top-[18%] left-[2%] w-[260px] rotate-[160deg] h-[1px] via-sky-400`} style={{ animationDuration: '7s', animationDelay: '1s' }} />
          <div className={`${movingCyberLineStyle} top-[28%] right-[5%] w-[240px] rotate-[35deg] h-[1px] via-cyan-400`} style={{ animationDuration: '9s', animationDelay: '3s' }} />
          <div className={`${movingCyberLineStyle} top-[40%] left-[8%] w-[280px] rotate-[20deg] h-[0.5px] via-sky-400`} style={{ animationDuration: '10s', animationDelay: '4s' }} />
          <div className={`${movingCyberLineStyle} top-[52%] right-[2%] w-[260px] rotate-[145deg] h-[1px] via-cyan-400`} style={{ animationDuration: '8s', animationDelay: '1s' }} />
          <div className={`${movingCyberLineStyle} top-[65%] left-[5%] w-[320px] rotate-[25deg] h-[0.5px] via-sky-400`} style={{ animationDuration: '11s', animationDelay: '5s' }} />
          <div className={`${movingCyberLineStyle} top-[75%] right-[8%] w-[270px] rotate-[125deg] h-[1px] via-cyan-400`} style={{ animationDuration: '9s', animationDelay: '2s' }} />
          <div className={`${movingCyberLineStyle} top-[85%] left-[10%] w-[300px] rotate-[40deg] h-[1px] via-sky-400`} style={{ animationDuration: '8s', animationDelay: '0s' }} />
          <div className={`${movingCyberLineStyle} top-[92%] right-[5%] w-[330px] rotate-[155deg] h-[0.5px] via-cyan-400`} style={{ animationDuration: '12s', animationDelay: '6s' }} />
          <div className={`${movingCyberLineStyle} bottom-[5%] left-[2%] w-[270px] rotate-[110deg] h-[1px] via-sky-400`} style={{ animationDuration: '10s', animationDelay: '3s' }} />
          <div className={`${movingCyberLineStyle} bottom-[2%] right-[10%] w-[250px] rotate-[45deg] h-[1px] via-cyan-400`} style={{ animationDuration: '7s', animationDelay: '1s' }} />
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {FLOW_FAQ_CONTENT.sectionBgImage && (
          <Image src={FLOW_FAQ_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Flow Header */}
        <div className={`text-center ${headerBottomMargin}`}>
          <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-2 uppercase">
            Service Journey
          </span>
          <div className="relative inline-block">
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-3 leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]`}>
              {FLOW_FAQ_CONTENT.sectionTitle}
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium opacity-70">
            {FLOW_FAQ_CONTENT.sectionSubtitle}
          </p>
        </div>

        {/* Flow Steps */}
        <div className={`relative mx-auto ${cardMaxWidth} mb-14 sm:mb-20`}>
          <div className="absolute left-[23px] top-4 bottom-4 w-[1px] bg-slate-800" />
          <div className="space-y-4 relative z-10">
            {FLOW_FAQ_CONTENT.steps.map((step, index) => {
              const Icon = stepIcons[index] || Sparkles
              return (
                <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-start gap-4 sm:gap-6 group">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center relative z-20 group-hover:border-sky-400/40 transition-colors shadow-inner">
                      <span className="font-sans text-base font-black text-slate-200">{step.number}</span>
                    </div>
                  </div>
                  <div className={`flex-1 bg-transparent ${cardRounded} ${glassBorder} ${cardShadow} py-4 px-6 hover:translate-x-1 transition-all duration-300 relative overflow-hidden`} style={gpuStyle}>
                    <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[100px] z-0" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <Icon className="w-4 h-4 text-sky-400" />
                        <h3 className="font-sans text-sm sm:text-base font-bold text-white tracking-tight">{step.title}</h3>
                      </div>
                      <p className={`${fontBody} text-xs sm:text-sm text-slate-300 leading-relaxed font-medium opacity-90`}>{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* 🔴 FAQ Section */}
        <div id="faq-list" className="max-w-3xl mx-auto border-t border-slate-800/60 pt-10 sm:pt-14">
          
          {/* 💡 【修正点】flex flex-col items-center を付与し、Q&Aタグが横並びになるのを強制的に阻止！ */}
          <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950/40 rounded-full border border-slate-800 mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Q & A</span>
             </div>
             <div className="relative inline-block">
               <h2 className={`${fontTitle} text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]`}>
                 {FLOW_FAQ_CONTENT.faqTitle}
               </h2>
             </div>
          </div>

          <div className="space-y-2.5">
            {FLOW_FAQ_CONTENT.faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className={`bg-transparent border border-slate-800 ${cardRounded} overflow-hidden transition-all duration-300 relative`}>
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[100px] z-0" />
                  <AccordionTrigger className="px-5 sm:px-7 py-4 hover:no-underline group relative z-10 border-none text-left">
                    <div className="flex items-center gap-3 sm:gap-4 text-left pr-4">
                      <span className="font-sans text-base sm:text-lg font-black text-sky-400">Q</span>
                      <span className={`${fontBody} text-xs sm:text-sm font-bold text-slate-100 tracking-tight leading-snug group-hover:text-sky-300 transition-colors`}>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 sm:px-7 pb-4 relative z-10">
                    <div className="flex gap-3 sm:gap-4 border-t border-slate-800/80 pt-3.5">
                       <span className="font-sans text-base sm:text-lg font-black text-slate-500">A</span>
                       <p className={`${fontBody} text-xs sm:text-sm text-slate-300 leading-relaxed font-medium flex-1`}>{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 text-center">
            <div className={`relative overflow-hidden flex flex-col md:flex-row items-center justify-center gap-3 px-6 py-4 rounded-xl ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] bg-transparent w-full max-w-4xl mx-auto`} style={gpuStyle}>
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[100px] z-0" />
              <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent pointer-events-none z-20" />
              <div className="flex items-center justify-center gap-2.5 shrink-0 relative z-10 w-full md:w-auto">
                <ShieldCheck className="w-4.5 h-4.5 text-sky-400 shrink-0" />
                <span className="font-sans text-xs sm:text-sm font-extrabold text-slate-200 whitespace-nowrap uppercase tracking-wider">Conclusion</span>
              </div>
              <div className="hidden md:block w-[1px] h-4 bg-slate-800 mx-2 shrink-0 relative z-10" />
              <div className="relative z-10 flex-1 text-center md:text-left">
                <p className="font-sans text-slate-400 text-[10px] sm:text-xs font-bold tracking-wide opacity-80 leading-relaxed">
                  {FLOW_FAQ_CONTENT.faqs[0] ? "※上記以外にご不明な点がございましたら、カウンセリング時に専門スタッフが丁寧にお答えいたします。" : ""}
                </p>
              </div>
            </div>
        </div>

      </div>
    </section>
  )
}
