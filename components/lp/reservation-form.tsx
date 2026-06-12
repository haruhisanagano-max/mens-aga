'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, Phone, Mail, User, MessageSquare, Shield, Check, ChevronDown, MapPin, ArrowRight, Sparkles, AlertTriangle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { RESERVATION_CONTENT } from '@/edit/reservation-form'
import { Button } from '@/components/ui/button'

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    clinic: '', 
    name: '', 
    age: '', 
    email: '', 
    phone: '', 
    preferredDate: '', 
    preferredTime: '', 
    plan: '', 
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // ★ 追加：未成年チェック関連のステート
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)
  const [isConsentChecked, setIsConsentChecked] = useState(false)
  const isMinor = formData.age === '18歳未満（未成年）'

  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"
  const fontBody = "font-sans"

  const sectionPadding = "py-16 sm:py-24"
  const headerBottomMargin = "mb-10 sm:mb-16"
  const cardRounded = "rounded-2xl" 
  const glassBorder = "border border-slate-700/60 border-t-white/20 border-l-white/20"
  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' }
  
  const inputRounded = "rounded-xl"
  const inputBg = "bg-slate-900/60 shadow-inner"
  const inputBorder = "border border-sky-800/60"
  const inputFocus = "focus:bg-slate-950 focus:border-sky-400 focus:outline-none focus:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300"
  
  const selectedClinic = RESERVATION_CONTENT.clinics.find(c => c.name === formData.clinic);
  const selectedClinicTel = selectedClinic?.tel || "0120-000-000";

  // ★ 年齢が変更されたら同意ステートをリセットする
  useEffect(() => {
    if (!isMinor) {
      setIsConsentChecked(false)
      setIsScrolledToBottom(false)
    }
  }, [isMinor])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  // ★ スクロール検知ロジック
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    // スクロール位置が最下部に到達したか（誤差5pxを許容）
    if (scrollHeight - scrollTop <= clientHeight + 5) {
      setIsScrolledToBottom(true);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('./send.php', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success === true) {
        setIsSubmitted(true);
      } else {
        alert("送信に失敗しました: " + (result.message || "お電話にてお問い合わせください。"));
      }
    } catch (error) {
      alert("通信エラーが発生しました。お電話にてお問い合わせください。");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ 
      clinic: '', 
      name: '', 
      age: '', 
      email: '', 
      phone: '', 
      preferredDate: '', 
      preferredTime: '', 
      plan: '', 
      message: '' 
    });
    setIsConsentChecked(false);
    setIsScrolledToBottom(false);
  }

  return (
    <section id="reservation" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[1px] h-[60%] bg-sky-400 rotate-[-45deg] blur-[1px] opacity-60 shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
        <div className="absolute top-[15%] right-[-5%] w-[1px] h-[70%] bg-cyan-400 rotate-[30deg] blur-[1px] opacity-50 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
        <div className="absolute top-[35%] right-[10%] w-[2px] h-[50%] bg-amber-300 rotate-[65deg] blur-[1px] opacity-40 shadow-[0_0_10px_rgba(252,211,77,0.7)]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[1px] h-[60%] bg-cyan-400 rotate-[20deg] blur-[1px] opacity-50 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
        <div className="absolute top-[30%] left-[20%] w-[650px] h-[650px] bg-sky-500/35 blur-[150px] rounded-full opacity-90 mix-blend-plus-lighter" />
        <div className="absolute top-[35%] left-[25%] w-[550px] h-[550px] bg-indigo-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[30%] w-[550px] h-[550px] bg-sky-400/30 blur-[150px] rounded-full opacity-95 mix-blend-plus-lighter" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        <div className={`text-center ${headerBottomMargin}`}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.5em] text-amber-300 uppercase block mb-3 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]"
          >
            Online Reservation
          </motion.span>
          
          <div className="relative inline-block py-4">
            <div className="absolute inset-x-4 inset-y-2 bg-sky-500/20 blur-2xl rounded-full pointer-events-none" />
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent relative z-10 whitespace-pre-wrap break-keep antialiased drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]`}>
              {RESERVATION_CONTENT.title}
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium opacity-80 mt-2">
            {RESERVATION_CONTENT.subtitle}
          </p>
        </div>

        <motion.div 
          className={`bg-transparent ${cardRounded} ${glassBorder} p-6 sm:p-8 md:px-12 relative overflow-hidden dropshadow-[0_0_25px_rgba(56,189,248,0.25)]`} 
          style={gpuStyle}
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[100px] z-0" />
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_30px_rgba(56,189,248,0.8)] pointer-events-none z-20" />
          <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-sky-500/10 via-transparent to-transparent pointer-events-none z-0" />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.9)] blur-[1px] z-10" />

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10 pt-2">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_5px_rgba(56,189,248,0.6)]" /> 
                {RESERVATION_CONTENT.labels.clinic}
              </label>
              <div className="relative">
                <select 
                  name="clinic" required value={formData.clinic} onChange={handleChange} 
                  className={`w-full px-4 py-3 ${inputRounded} ${inputBg} ${inputBorder} text-slate-100 font-medium text-sm appearance-none ${inputFocus}`}
                >
                  <option value="" className="bg-slate-900">院を選択してください</option>
                  {RESERVATION_CONTENT.clinics.map(c => <option key={c.name} value={c.name} className="bg-slate-900">{c.name}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_5px_rgba(56,189,248,0.6)]" /> 
                  {RESERVATION_CONTENT.labels.name}
                </label>
                <input 
                  type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="山田 花子" 
                  className={`w-full px-4 py-3 ${inputRounded} ${inputBg} ${inputBorder} text-slate-100 placeholder-slate-600 font-medium text-sm ${inputFocus}`} 
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_5px_rgba(56,189,248,0.6)]" /> 
                  {RESERVATION_CONTENT.labels.age}
                </label>
                <div className="relative">
                  <select 
                    name="age" required value={formData.age} onChange={handleChange} 
                    className={`w-full px-4 py-3 ${inputRounded} ${inputBg} ${inputBorder} text-slate-100 font-medium text-sm appearance-none ${inputFocus}`}
                  >
                    <option value="" className="bg-slate-900">年齢を選択</option>
                    {RESERVATION_CONTENT.ageOptions.map(age => (
                      <option key={age} value={age} className="bg-slate-900">{age}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_5px_rgba(56,189,248,0.6)]" /> 
                  {RESERVATION_CONTENT.labels.phone}
                </label>
                <input 
                  type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="090-0000-0000" 
                  className={`w-full px-4 py-3 ${inputRounded} ${inputBg} ${inputBorder} text-slate-100 placeholder-slate-600 font-medium text-sm ${inputFocus}`} 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_5px_rgba(56,189,248,0.6)]" /> 
                  {RESERVATION_CONTENT.labels.email}
                </label>
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="example@mail.com" 
                  className={`w-full px-4 py-3 ${inputRounded} ${inputBg} ${inputBorder} text-slate-100 placeholder-slate-600 font-medium text-sm ${inputFocus}`} 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_5px_rgba(56,189,248,0.6)]" /> 
                  {RESERVATION_CONTENT.labels.date}<span className="text-rose-400">*</span>
                </label>
                <input 
                  type="date" name="preferredDate" required value={formData.preferredDate} onChange={handleChange} 
                  className={`w-full px-4 h-[48px] sm:h-[50px] ${inputRounded} ${inputBg} ${inputBorder} text-slate-100 font-medium text-sm block [color-scheme:dark] ${inputFocus}`} 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_5px_rgba(56,189,248,0.6)]" /> 
                  {RESERVATION_CONTENT.labels.time}<span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <select 
                    name="preferredTime" required value={formData.preferredTime} onChange={handleChange} 
                    className={`w-full px-4 h-[48px] sm:h-[50px] ${inputRounded} ${inputBg} ${inputBorder} text-slate-100 font-medium text-sm appearance-none ${inputFocus}`}
                  >
                    <option value="" className="bg-slate-900">選択</option>
                    {RESERVATION_CONTENT.timeOptions.map(time => (
                      <option key={time} value={time} className="bg-slate-900">{time}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_5px_rgba(56,189,248,0.6)]" />
                  {RESERVATION_CONTENT.labels.plan}
                </label>
                <div className="relative">
                  <select 
                    name="plan" required value={formData.plan} onChange={handleChange} 
                    className={`w-full px-4 py-3 ${inputRounded} ${inputBg} ${inputBorder} text-slate-100 font-medium text-sm appearance-none ${inputFocus}`}
                  >
                    <option value="" className="bg-slate-900">プランを選択してください</option>
                    {RESERVATION_CONTENT.planOptions.map(opt => <option key={opt} value={opt} className="bg-slate-900">{opt}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_5px_rgba(56,189,248,0.6)]" /> 
                  {RESERVATION_CONTENT.labels.message}
                </label>
                <textarea 
                  name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="ご質問やご要望があればご記入ください" 
                  className={`w-full px-4 py-3 ${inputRounded} ${inputBg} ${inputBorder} text-slate-100 placeholder-slate-600 font-medium text-sm resize-none ${inputFocus}`} 
                />
              </div>
            </div>

            {/* 🛡️ プライバシーポリシー */}
            <div className="flex items-start gap-3 p-4 sm:p-5 bg-slate-950/40 rounded-xl border border-slate-800/60 shadow-inner mt-2">
              <Shield className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 opacity-80" />
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold leading-relaxed opacity-90">
                {RESERVATION_CONTENT.privacyPolicy}
              </p>
            </div>

            {/* ★ ここから追加：18歳未満（未成年）を選択した時だけ表示される未成年同意ブロック */}
            <AnimatePresence>
              {isMinor && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 sm:p-5 bg-slate-900/80 border border-amber-500/40 rounded-xl shadow-[inset_0_0_15px_rgba(245,158,11,0.05)] relative">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-4 h-4 text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.6)]" />
                      <label className="text-sm font-bold text-amber-400 tracking-wide">
                        {RESERVATION_CONTENT.minorConsent.title}
                      </label>
                    </div>
                    
                    {/* スクロールエリア */}
                    <div 
                      onScroll={handleScroll}
                      className="h-32 overflow-y-auto text-xs text-slate-300 leading-relaxed p-4 bg-slate-950/80 border border-slate-800 rounded-lg shadow-inner mb-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-900 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                      {RESERVATION_CONTENT.minorConsent.text.split('\n').map((line, i) => (
                        <p key={i} className="mb-1.5 last:mb-0 min-h-[1em]">{line}</p>
                      ))}
                    </div>

                    {/* 同意チェックボックス */}
                    <div className="flex flex-col gap-1.5">
                      <label className={`flex items-center gap-3 w-fit ${!isScrolledToBottom ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80 transition-opacity'}`}>
                        <div className="relative flex items-center">
                          <input 
                            type="checkbox" 
                            disabled={!isScrolledToBottom}
                            checked={isConsentChecked}
                            onChange={(e) => setIsConsentChecked(e.target.checked)}
                            className="peer w-5 h-5 appearance-none border border-slate-500 rounded bg-slate-800 checked:bg-sky-500 checked:border-sky-500 disabled:bg-slate-900 disabled:border-slate-700 transition-colors cursor-inherit"
                          />
                          <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-200">
                          {RESERVATION_CONTENT.minorConsent.checkboxLabel}
                        </span>
                      </label>
                      {!isScrolledToBottom && (
                        <span className="text-[10px] text-amber-500 animate-pulse ml-8">
                          {RESERVATION_CONTENT.minorConsent.scrollInstruction}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 🚀 送信ボタン（disabled判定に未成年のチェック状態を追加） */}
            <Button 
              type="submit" 
              disabled={isSubmitting || (isMinor && !isConsentChecked)} 
              className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-black py-5 sm:py-6 rounded-xl shadow-[0_10px_20px_rgba(56,189,248,0.2)] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(56,189,248,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base tracking-widest mt-4"
            >
              {isSubmitting ? <span>{RESERVATION_CONTENT.submittingText}</span> : <>{RESERVATION_CONTENT.submitButton} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" /></>}
            </Button>

            <p className="text-center text-[10px] sm:text-xs font-bold tracking-widest text-slate-500 pt-1">
              {RESERVATION_CONTENT.footerNote}
            </p>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className={`relative max-w-sm w-full bg-slate-900 border border-slate-700 shadow-[0_0_60px_rgba(56,189,248,0.15)] rounded-3xl p-8 sm:p-10 text-center`}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sky-500/10 border border-sky-400/30 flex items-center justify-center shadow-[inset_0_0_15px_rgba(56,189,248,0.1)]">
                <Check className="w-8 h-8 text-sky-400" />
              </div>
              <h2 className={`${fontTitle} text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight`}>
                {RESERVATION_CONTENT.success.title}
              </h2>
              <p className="text-xs text-slate-300 mb-8 leading-relaxed font-medium">
                {RESERVATION_CONTENT.success.message}
              </p>
              <div className="space-y-4">
                <div className="p-5 bg-slate-950/60 rounded-xl border border-slate-800 shadow-inner">
                  <p className="text-[10px] font-black text-amber-400 uppercase mb-1 tracking-widest">{RESERVATION_CONTENT.success.telLabel}</p>
                  <a href={`tel:${selectedClinicTel}`} className="text-2xl font-black text-white tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{selectedClinicTel}</a>
                  <p className="text-[10px] font-bold text-slate-500 mt-1">{formData.clinic} 直通番号</p>
                </div>
                <Button onClick={handleReset} className="w-full py-6 rounded-full bg-slate-800 border border-slate-700 font-black text-white hover:bg-slate-700 tracking-widest transition-colors">
                  {RESERVATION_CONTENT.success.backToTop}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
