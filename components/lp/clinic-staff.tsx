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

  // 💡 【デザイン設定：磨りガラスの質感やタイトな余白を完全維持】
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"
  const fontBody = "font-sans"

  const sectionPadding = "py-10 sm:py-12" 
  const headerBottomMargin = "mb-6 sm:mb-8" 
  const cardRounded = "rounded-xl" 

  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"
  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' }

  const clinic = CLINIC_STAFF_CONTENT.clinics[activeClinic];
  const clinicKeys = Object.keys(CLINIC_STAFF_CONTENT.clinics) as ClinicLocation[];

  return (
    <section id="clinic" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 背景演出：11か所・まばらな淡い球体アビエントグロウ */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[2%] left-[10%] w-64 h-56 bg-sky-400/40 rounded-full blur-3xl opacity-90" />
        <div className="absolute top-[12%] right-[10%] w-56 h-56 bg-cyan-400/40 rounded-full blur-3xl opacity-85" />
        <div className="absolute top-[24%] left-[5%] w-64 h-64 bg-sky-400/45 rounded-full blur-3xl opacity-90" />
        <div className="absolute top-[36%] right-[5%] w-60 h-60 bg-sky-400/40 rounded-full blur-3xl opacity-85" />
        <div className="absolute top-[48%] left-[15%] w-64 h-64 bg-cyan-400/40 rounded-full blur-3xl opacity-80" />
        <div className="absolute top-[60%] right-[15%] w-52 h-52 bg-sky-400/40 rounded-full blur-3xl opacity-85" />
        <div className="absolute top-[72%] left-[10%] w-64 h-64 bg-cyan-400/40 rounded-full blur-3xl opacity-80" />
        <div className="absolute top-[84%] right-[10%] w-52 h-52 bg-sky-400/45 rounded-full blur-3xl opacity-90" />
        <div className="absolute top-[95%] left-[30%] w-60 h-60 bg-sky-400/50 rounded-full blur-3xl opacity-90" />
        <div className="absolute top-[10%] left-[25%] w-56 h-56 bg-cyan-400/35 rounded-full blur-3xl opacity-80" />
        <div className="absolute top-[70%] right-[5%] w-52 h-52 bg-sky-400/35 rounded-full blur-3xl opacity-80" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {CLINIC_STAFF_CONTENT.sectionBgImage && (
          <Image 
            src={CLINIC_STAFF_CONTENT.sectionBgImage} 
            alt="" 
            fill 
            className="object-cover opacity-[0.02] mix-blend-overlay" 
            priority 
          />
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center ${headerBottomMargin}`}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-2 uppercase"
          >
            Hospitality & Quality
          </motion.span>
          <div className="relative inline-block">
            {/* 💡 【唯一の発光点】メインタイトルのみ、最高峰の発光グラデーションを100%維持 */}
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-3 leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]`}>
              {CLINIC_STAFF_CONTENT.title}
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium opacity-70">
            {CLINIC_STAFF_CONTENT.subtitle}
          </p>
        </div>

        {/* 🔴 1. Doctor Card */}
        <motion.div 
          className={`p-6 sm:p-10 mb-6 sm:mb-8 ${cardRounded} ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] bg-transparent relative overflow-hidden`}
          style={gpuStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[100px] z-0" />
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_30px_rgba(56,189,248,0.8)] pointer-events-none z-20" />
          <div className="absolute bottom-0 inset-x-0 h-[60%] bg-gradient-to-t from-sky-500/10 via-transparent to-transparent pointer-events-none z-0" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10 relative z-10">
            {/* 院長画像：白液晶枠仕様 */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden flex-shrink-0 bg-white border border-slate-700/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)] relative">
              <Image src={CLINIC_STAFF_CONTENT.doctor.image} alt={CLINIC_STAFF_CONTENT.doctor.name} fill className="object-contain p-1.5" />
            </div>

            <div className="flex-1 text-center md:text-left pt-1">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Minus className="w-6 h-[1px] text-sky-400/40" />
                <span className="text-[10px] font-black tracking-widest text-sky-400 uppercase">
                  Executive Director
                </span>
                <Minus className="w-6 h-[1px] text-sky-400/40" />
              </div>

              <h3 className="font-sans text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight">
                {CLINIC_STAFF_CONTENT.doctor.name}
              </h3>
              <p className="text-xs text-amber-300 font-black mb-4 tracking-wide">
                {CLINIC_STAFF_CONTENT.doctor.title}
              </p>
              <p className={`${fontBody} text-xs sm:text-sm text-slate-300 leading-relaxed font-medium opacity-90`}>
                {CLINIC_STAFF_CONTENT.doctor.message}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 🔴 2. Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 sm:mb-12">
          {CLINIC_STAFF_CONTENT.features.map((f, i) => (
            <div 
              key={i} 
              className={`flex items-stretch ${cardRounded} ${glassBorder} shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden min-h-[85px] sm:min-h-[100px] relative bg-transparent`}
            >
              <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[100px] z-0" />
              
              {/* 💡 【修正点：画像が正方形の枠いっぱいにぴったり入るように変更】
                   パディングを完全に排除し、`object-cover` に切り替えました。
                   これにより画像エリアの背景の白（余白）が100%綺麗に消え去り、隙間なく画像で満たされます。 */}
              <div className="w-24 sm:w-28 flex-shrink-0 relative bg-white border-r border-slate-700/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)] z-10">
                <Image 
                  src={f.image} 
                  alt={f.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              <div className="flex-1 flex flex-col justify-center px-4 py-2 relative z-10">
                <h4 className="font-sans font-bold text-white text-xs sm:text-sm mb-1 leading-tight tracking-tight">
                  {f.title}
                </h4>
                <p className="text-[10px] text-slate-400 font-bold leading-snug opacity-80 line-clamp-2">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔴 3. Clinic Explorer */}
        <div className="relative">
          <div className="flex justify-center gap-2 mb-6">
            {clinicKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveClinic(key)}
                className={`px-6 py-2 rounded-full text-xs font-black tracking-widest transition-all duration-300 border ${
                  activeClinic === key 
                    ? "bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 border-amber-300" 
                    : "bg-slate-900/50 text-slate-400 border-slate-800 hover:bg-slate-800/70 hover:text-slate-300"
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
              className={`${cardRounded} ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] bg-transparent overflow-hidden`}
              style={gpuStyle}
            >
              <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[100px] z-0" />
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_30px_rgba(56,189,248,0.8)] pointer-events-none z-20" />
              <div className="absolute bottom-0 inset-x-0 h-[40%] bg-gradient-to-t from-sky-500/10 via-transparent to-transparent pointer-events-none z-0" />

              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
                
                {/* 左側：院内ビジュアルエリア */}
                <div className="lg:col-span-5 p-5 sm:p-6 space-y-4 bg-slate-950/20 border-b lg:border-b-0 lg:border-r border-slate-800/60">
                  {/* 💡 写真を100%鮮明に表示（opacity-90を完全撤廃して本来の明るさに） */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 shadow-inner bg-slate-900/40">
                    <Image src={clinic.mainImage} alt="" fill className="object-cover" />
                  </div>
                  <div className="aspect-video relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900/40 shadow-inner">
                    <iframe src={clinic.mapIframeUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {clinic.gallery.map((img, i) => (
                      <div key={i} className="aspect-square relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900/40 shadow-inner">
                        <Image src={img.url} alt="" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 右側：院詳細テキストエリア */}
                {/* 💡 【左詰め＆スキマ排除】仕切り線から美しく揃うよう、左パディングを lg:pl-8 に最適化。 */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:pl-8 flex flex-col justify-center">
                  <div className="mb-6">
                    {/* 💡 ラベル左側の横棒（Minus）を完全消去。文字の頭が完璧に左詰めになります。 */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">Clinic Identity</span>
                    </div>
                    <h3 className="font-sans text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                      {clinic.fullName}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-slate-200 text-xs sm:text-sm font-bold leading-relaxed">{clinic.description1}</p>
                      <p className="text-slate-400 text-xs sm:text-sm font-medium opacity-80 leading-relaxed">{clinic.description2}</p>
                    </div>
                  </div>

                  {/* 詳細情報カード群 */}
                  <div className="space-y-3 mb-6">
                    {[
                      { icon: MapPin, label: "Address", content: <>{clinic.zipCode} {clinic.address}</> },
                      { icon: Phone, label: "Contact", content: <span className="text-lg font-black text-white">{clinic.phone}</span> },
                      { icon: Train, label: "Nearest Station", content: clinic.nearestStation },
                      { icon: Clock, label: "Business Hours", content: (
                        <div className="w-full pt-1">
                          <table className="w-full text-xs">
                            <tbody className="divide-y divide-slate-800/40">
                              <tr><td className="py-1.5 font-bold text-slate-300">平日</td><td className="py-1.5 text-right text-slate-400">{clinic.hours.weekday}</td></tr>
                              <tr><td className="py-1.5 font-bold text-slate-300">土日祝</td><td className="py-1.5 text-right text-slate-400">{clinic.hours.weekend}</td></tr>
                              <tr><td className="py-1.5 font-bold text-rose-400">定休日</td><td className="py-1.5 text-right text-rose-400 font-black">{clinic.hours.closed}</td></tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-3.5 rounded-xl bg-slate-950/30 border border-slate-800/60 transition-all hover:bg-slate-950/50">
                        <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-inner">
                          <item.icon className="w-3.5 h-3.5 text-sky-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                          <div className="text-slate-200 text-xs font-bold leading-normal">{item.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full py-5 rounded-xl bg-slate-800 text-white font-black border border-slate-700 hover:bg-slate-700 transition-all shadow-md text-sm tracking-wide">
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
          className="mt-10 sm:mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className={`relative overflow-hidden flex flex-col md:flex-row items-center gap-4 px-8 py-4 rounded-xl ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] bg-transparent w-full max-w-4xl mx-auto`} style={gpuStyle}>
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[100px] z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none z-0" />
            
            <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent shadow-[0_0_20px_rgba(56,189,248,0.6)] pointer-events-none z-20" />
            
            <div className="flex items-center justify-center gap-3 shrink-0 relative z-10 w-full md:w-auto">
              <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
              <span className="font-sans text-sm sm:text-base font-extrabold text-slate-100 whitespace-nowrap uppercase tracking-wider">
                Conclusion
              </span>
            </div>

            <div className="hidden md:block w-[1px] h-5 bg-slate-700/60 mx-2 shrink-0 relative z-10" />

            <div className="flex-1 space-y-1 relative z-10 text-center md:text-left">
              <p className="font-sans text-slate-300 text-xs sm:text-sm font-bold leading-relaxed whitespace-pre-line opacity-90">
                当院は完全予約制の上質な空間です。
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-1 gap-y-0.5">
                <p className="font-sans text-slate-300 text-xs sm:text-sm font-bold">
                  スムーズなご案内のため、
                </p>
                <span className="text-sky-400 font-black text-xs sm:text-sm border-b border-sky-400/30 pb-0.5">
                  事前のご予約
                </span>
                <p className="font-sans text-slate-300 text-xs sm:text-sm font-bold">
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
