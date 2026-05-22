'use client'

import { TrendingUp, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BEFORE_AFTER_CONTENT } from '@/edit/before-after-content'

export default function BeforeAfter() {
  const fontTitle = "font-serif"

  return (
    /* py-32をpy-20に抑え、PC枠内での余白バランスをスマホに合わせました */
    <section id="transformation" className="py-15 sm:py-20 relative bg-white overflow-hidden">
      
      <div className="max-w-full mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span className="text-[10px] font-black tracking-[0.5em] text-[var(--gold-dark)] uppercase block mb-4">
            The Evolution of Skin
          </motion.span>
          <h2 className={`${fontTitle} text-3xl sm:text-4xl font-bold text-[var(--charcoal)] mb-6`}>
            {BEFORE_AFTER_CONTENT.sectionTitle}
          </h2>
          <p className="text-[var(--charcoal-light)] text-sm leading-relaxed max-w-lg mx-auto">
            {BEFORE_AFTER_CONTENT.sectionSubtitle}
          </p>
        </div>

        {/* ギャラリー：sm:grid-cols-3 を削除し、スマホと同じ1列を維持 */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {BEFORE_AFTER_CONTENT.gallery.map((item, i) => (
            <motion.div key={i} className="group relative">
              <div className="aspect-[3/4] relative overflow-hidden rounded-[2rem] shadow-2xl">
                {item.image && <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-[10px] font-bold tracking-widest uppercase opacity-70 mb-1">{item.title}</p>
                  <p className="text-xl font-bold">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 信頼データ：ここは3列のままでも640pxなら綺麗に収まるので維持 */}
        <div className="grid grid-cols-3 gap-2 mb-12 py-8 border-y border-gray-100">
          {BEFORE_AFTER_CONTENT.trustData.map((data, i) => (
            <div key={i} className="text-center">
              <p className="text-[9px] font-bold text-gray-400 mb-2 uppercase tracking-tighter">{data.label}</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className={`${fontTitle} text-2xl font-black text-[var(--charcoal)]`}>{data.value}</span>
                <span className="text-[10px] font-bold text-[var(--gold-dark)]">{data.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 進化のタイムライン：md:flex-row を削除し、常に縦並びを維持 */}
        <div className="space-y-16 relative">
          {BEFORE_AFTER_CONTENT.timelineSteps.map((step, i) => (
            <motion.div 
              key={i} 
              /* 🟢 md:flex-row系をすべて削除。常にflex-col（縦積み）にします */
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-full">
                <div className="aspect-video relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-gray-50">
                  {step.image && <Image src={step.image} alt="" fill className="object-cover" />}
                  <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 shadow-inner z-10">
                    <TrendingUp className="w-4 h-4 text-[var(--gold-dark)]" />
                    <span className="text-xs font-black text-[var(--gold-dark)] uppercase">{step.session}</span>
                  </div>
                </div>
              </div>

              <div className="w-full text-center">
                <h4 className={`${fontTitle} text-2xl font-bold text-[var(--charcoal)] mb-4`}>{step.title}</h4>
                <p className="text-[var(--charcoal-light)] leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-18 text-center px-4">
           <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl text-[var(--charcoal-light)] text-[10px] border border-gray-100 text-left">
             <ShieldCheck className="w-5 h-5 flex-shrink-0 text-[var(--gold)]" />
             <span>※効果には個人差があります。適切な回数はカウンセリングにてご提案いたします。</span>
           </div>
        </div>
      </div>
    </section>
  )
}
