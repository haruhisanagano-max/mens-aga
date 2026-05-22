'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Train, ExternalLink, ShieldCheck, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CLINIC_STAFF_CONTENT } from '@/edit/clinic-content'
import { Button } from '@/components/ui/button'

type ClinicLocation = keyof typeof CLINIC_STAFF_CONTENT.clinics;

export default function ClinicStaff() {
  const [activeClinic, setActiveClinic] = useState<ClinicLocation>('kyoto');

  const fontTitle = "font-serif"
  const fontBody = "font-sans"

  const sectionPadding = "py-16 sm:py-28" 
  const headerBottomMargin = "mb-12 sm:mb-20" 
  
  const cardRounded = "rounded-[2.5rem]" 
  const cardShadow = "shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
  const cardBorder = "border border-gray-100"

  const clinic = CLINIC_STAFF_CONTENT.clinics[activeClinic];
  const clinicKeys = Object.keys(CLINIC_STAFF_CONTENT.clinics) as ClinicLocation[];

  return (
    <section id="clinic" className={`${sectionPadding} relative bg-white overflow-hidden`}>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header */}
        <div className={`text-center ${headerBottomMargin}`}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black tracking-[0.5em] text-[var(--gold-dark)] uppercase block mb-4"
          >
            Hospitality & Quality
          </motion.span>
          <h2 className={`${fontTitle} text-3xl sm:text-5xl font-bold text-[var(--charcoal)] mb-6`}>
            {CLINIC_STAFF_CONTENT.title}
          </h2>
          <p className="text-[var(--charcoal-light)] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-80 font-medium">
            {CLINIC_STAFF_CONTENT.subtitle}
          </p>
        </div>

       {/* 🔴 1. Doctor Card（mbを縮小して下のカードと近づけました） */}
        <motion.div 
          className={`p-8 sm:p-14 mb-8 sm:mb-10 ${cardRounded} ${cardBorder} bg-white ${cardShadow} relative overflow-hidden`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 sm:gap-16 relative z-10">
            <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-white shadow-xl relative">
              <Image src={CLINIC_STAFF_CONTENT.doctor.image} alt={CLINIC_STAFF_CONTENT.doctor.name} fill className="object-cover" />
            </div>

          <div className="flex-1 text-center">
  <div className="flex items-center justify-center gap-3 mb-4">
    {/* 左の棒 */}
    <Minus className="w-8 h-[1px] text-[var(--gold)]/30" />
    
    <span className="text-[10px] font-black tracking-widest text-[var(--gold-dark)] uppercase">
      Executive Director
    </span>
    
    {/* 右の棒（hidden md:block を削除しました） */}
    <Minus className="w-8 h-[1px] text-[var(--gold)]/30" />
  </div>

              <h3 className={`${fontTitle} text-2xl sm:text-3xl font-bold text-[var(--charcoal)] mb-2`}>
                {CLINIC_STAFF_CONTENT.doctor.name}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--gold-dark)] font-black mb-6 italic">
                {CLINIC_STAFF_CONTENT.doctor.title}
              </p>
              <p className={`${fontBody} text-sm sm:text-base text-[var(--charcoal-light)] leading-loose font-medium opacity-90`}>
                {CLINIC_STAFF_CONTENT.doctor.message}
              </p>
            </div>
          </div>
        </motion.div>

       {/* 🔴 2. Features（丸みを院長カードと統一） */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16 sm:mb-24">
          {CLINIC_STAFF_CONTENT.features.map((f, i) => (
            <div 
              key={i} 
              /* rounded-2xl を ${cardRounded} に変更しました */
              className={`flex items-stretch ${cardRounded} ${cardBorder} bg-white shadow-sm overflow-hidden min-h-[80px] sm:min-h-[120px]`}
            >
              {/* 左側の画像エリア */}
              <div className="w-24 sm:w-28 flex-shrink-0 relative bg-gray-50">
                <Image 
                  src={f.image} 
                  alt={f.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              {/* テキストエリア */}
              <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 py-3">
                <h4 className={`${fontTitle} font-bold text-[var(--charcoal)] text-xs sm:text-sm mb-1 leading-tight`}>
                  {f.title}
                </h4>
                <p className="text-[10px] text-gray-400 font-bold leading-tight opacity-80 line-clamp-2">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔴 3. Clinic Explorer */}
        <div className="relative">
          <div className="flex justify-center gap-2 mb-8">
            {clinicKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveClinic(key)}
                className={`px-8 py-3 rounded-full text-xs sm:text-sm font-black tracking-widest transition-all ${
                  activeClinic === key 
                  ? "bg-[var(--charcoal)] text-white shadow-lg" 
                  : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                }`}
              >
                {CLINIC_STAFF_CONTENT.clinics[key].name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeClinic}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className={`${cardRounded} ${cardBorder} ${cardShadow} bg-white overflow-hidden`}
            >
              <div className="grid lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-5 p-8 space-y-6 bg-gray-50/50 border-r border-gray-100">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                    <Image src={clinic.mainImage} alt="" fill className="object-cover" />
                  </div>
                  <div className="aspect-video relative rounded-3xl overflow-hidden border border-gray-200 bg-white">
                    <iframe src={clinic.mapIframeUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {clinic.gallery.map((img, i) => (
                      <div key={i} className="aspect-square relative rounded-2xl overflow-hidden border border-white shadow-sm">
                        <Image src={img.url} alt="" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 sm:p-14">
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <Minus className="w-8 h-[1px] text-[var(--gold)]/30" />
                      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Clinic Identity</span>
                    </div>
                    <h3 className={`${fontTitle} text-3xl sm:text-4xl font-bold text-[var(--charcoal)] tracking-tighter mb-6`}>
                      {clinic.fullName}
                    </h3>
                    <div className="space-y-3">
                      <p className="text-[var(--charcoal)] text-sm sm:text-base font-bold leading-relaxed">{clinic.description1}</p>
                      <p className="text-[var(--charcoal-light)] text-xs sm:text-sm font-medium opacity-70 leading-relaxed">{clinic.description2}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                    {[
                      { icon: MapPin, label: "Address", content: <>{clinic.zipCode} {clinic.address}</> },
                      { icon: Phone, label: "Contact", content: <span className="text-xl font-black text-[var(--charcoal)]">{clinic.phone}</span> },
                      { icon: Train, label: "Nearest Station", content: clinic.nearestStation },
                      { icon: Clock, label: "Business Hours", content: (
                        <div className="w-full pt-1">
                          <table className="w-full text-xs sm:text-sm">
                            <tbody className="divide-y divide-gray-50">
                              <tr><td className="py-2 font-bold text-[var(--charcoal)]">平日</td><td className="py-2 text-right text-[var(--charcoal-light)]">{clinic.hours.weekday}</td></tr>
                              <tr><td className="py-2 font-bold text-[var(--charcoal)]">土日祝</td><td className="py-2 text-right text-[var(--charcoal-light)]">{clinic.hours.weekend}</td></tr>
                              <tr><td className="py-2 font-bold text-red-500">定休日</td><td className="py-2 text-right text-red-500 font-black">{clinic.hours.closed}</td></tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    ].map((item, i) => (
                      <div key={i} className="flex gap-5 p-5 rounded-3xl bg-gray-50/50 border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                          <item.icon className="w-4 h-4 text-[var(--gold)]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">{item.label}</p>
                          <div className="text-[var(--charcoal)] text-xs sm:text-sm font-bold leading-normal">{item.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full py-8 rounded-2xl bg-[var(--charcoal)] text-white font-black hover:bg-black transition-all shadow-xl hover:-translate-y-1">
                    <a href={clinic.mapPageUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Googleマップでルートを確認
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 🔴 Footer: 「Conclusionバー」 */}
        <motion.div 
          className="max-w-4xl mx-auto mt-16 sm:mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-5 px-8 py-6 bg-gray-50 rounded-[2rem] border border-gray-100 w-full max-w-4xl mx-auto">
            <div className="flex items-center gap-3 shrink-0">
              <ShieldCheck className="w-6 h-6 text-[var(--gold)] shrink-0" />
              <span className={`${fontTitle} text-lg sm:text-xl font-bold text-[var(--charcoal)] whitespace-nowrap uppercase tracking-tight`}>
                Conclusion
              </span>
            </div>

            <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-4 shrink-0" />

            <div className="flex-1">
              <p className={`${fontBody} text-[var(--charcoal)] text-sm sm:text-base font-bold leading-relaxed text-center md:text-left`}>
                当院は完全予約制の上質な空間です。
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-1.5 mt-1">
                <p className={`${fontBody} text-[var(--charcoal)] text-xs sm:text-sm font-medium opacity-60`}>
                  スムーズなご案内のため、
                </p>
                <span className="text-[var(--gold-dark)] font-black text-sm sm:text-base border-b border-[var(--gold)]/30">
                  事前のご予約
                </span>
                <p className={`${fontBody} text-[var(--charcoal)] text-xs sm:text-sm font-medium opacity-60`}>
                  をお願いしております。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
