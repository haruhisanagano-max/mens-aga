'use client'

import { useState } from 'react'
import { Calendar, Clock, Phone, Mail, User, MessageSquare, Shield, Check, ChevronDown, MapPin, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { RESERVATION_CONTENT } from '@/edit/reservation-form'
import { Button } from '@/components/ui/button'

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    clinic: '', 
    name: '', 
    age: '', // ★追加
    email: '', 
    phone: '', 
    preferredDate: '', 
    preferredTime: '', 
    plan: '', 
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // ---------------------------------------------------------
  // ★ デザイン統一用リモコン
  // ---------------------------------------------------------
  const fontTitle = "font-serif"
  const sectionPadding = "py-12 sm:py-20"
  const headerBottomMargin = "mb-10 sm:mb-14"
  const cardRounded = "rounded-[2.5rem]" 
  const cardShadow = "shadow-[0_30px_80px_rgba(0,0,0,0.06)]"
  const cardBorder = "border border-gray-100"
  const inputRounded = "rounded-xl"
  const inputBg = "bg-gray-50/50"

  const selectedClinic = RESERVATION_CONTENT.clinics.find(c => c.name === formData.clinic);
  const selectedClinicTel = selectedClinic?.tel || "0120-000-000";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      age: '', // ★追加
      email: '', 
      phone: '', 
      preferredDate: '', 
      preferredTime: '', 
      plan: '', 
      message: '' 
    });
  }

  return (
    <section id="reservation" className={`${sectionPadding} relative bg-white overflow-hidden`}>
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className={`text-center ${headerBottomMargin}`}>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[10px] font-black tracking-[0.5em] text-[var(--gold-dark)] uppercase block mb-4">
            Online Reservation
          </motion.span>
          <h2 className={`${fontTitle} text-3xl sm:text-5xl font-bold text-[var(--charcoal)] mb-6 tracking-tighter`}>
            {RESERVATION_CONTENT.title}
          </h2>
          <p className="text-[var(--charcoal)] text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-bold opacity-70">
            {RESERVATION_CONTENT.subtitle}
          </p>
        </div>

        <motion.div className={`bg-white ${cardRounded} ${cardBorder} ${cardShadow} p-8 sm:p-14 relative overflow-hidden`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[var(--gold)]/30 rounded-full" />

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 🏥 医院選択 */}
            <div className="space-y-2">
              <label className="text-[13px] sm:text-sm font-black text-[var(--charcoal)] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--gold)]" /> {RESERVATION_CONTENT.labels.clinic}
              </label>
              <div className="relative">
                <select name="clinic" required value={formData.clinic} onChange={handleChange} className={`w-full px-5 py-3.5 ${inputRounded} ${inputBg} border border-gray-100 text-[var(--charcoal)] font-bold text-sm outline-none appearance-none focus:bg-white transition-all`}>
                  <option value="">院を選択してください</option>
                  {RESERVATION_CONTENT.clinics.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
              </div>
            </div>

            {/* 👤 お名前 & 年齢選択 (横並び) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[13px] sm:text-sm font-black text-[var(--charcoal)] flex items-center gap-2">
                  <User className="w-4 h-4 text-[var(--gold)]" /> {RESERVATION_CONTENT.labels.name}
                </label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="山田 花子" className={`w-full px-5 py-3.5 ${inputRounded} ${inputBg} border border-gray-100 font-bold text-sm outline-none focus:bg-white transition-all`} />
              </div>
              
              {/* ★追加項目：年齢選択 */}
              <div className="space-y-2">
                <label className="text-[13px] sm:text-sm font-black text-[var(--charcoal)] flex items-center gap-2">
                  <User className="w-4 h-4 text-[var(--gold)]" /> {RESERVATION_CONTENT.labels.age}
                </label>
                <div className="relative">
                  <select name="age" required value={formData.age} onChange={handleChange} className={`w-full px-5 py-3.5 ${inputRounded} ${inputBg} border border-gray-100 text-[var(--charcoal)] font-bold text-sm outline-none appearance-none focus:bg-white transition-all`}>
                    <option value="">年齢を選択してください</option>
                    {RESERVATION_CONTENT.ageOptions.map(age => (
                      <option key={age} value={age}>{age}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* 📞 電話番号 & ✉️ メールアドレス (ペアで横並び) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[13px] sm:text-sm font-black text-[var(--charcoal)] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[var(--gold)]" /> {RESERVATION_CONTENT.labels.phone}
                </label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="090-0000-0000" className={`w-full px-5 py-3.5 ${inputRounded} ${inputBg} border border-gray-100 font-bold text-sm outline-none focus:bg-white transition-all`} />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] sm:text-sm font-black text-[var(--charcoal)] flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[var(--gold)]" /> {RESERVATION_CONTENT.labels.email}
                </label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="example@mail.com" className={`w-full px-5 py-3.5 ${inputRounded} ${inputBg} border border-gray-100 font-bold text-sm outline-none focus:bg-white transition-all`} />
              </div>
            </div>

            {/* 🗓️ 日付 & 時間帯 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[13px] sm:text-sm font-black text-[var(--charcoal)] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[var(--gold)]" /> {RESERVATION_CONTENT.labels.date}*
                </label>
                <input 
                  type="date" 
                  name="preferredDate" 
                  required 
                  value={formData.preferredDate} 
                  onChange={handleChange} 
                  className={`w-full px-5 h-[52px] ${inputRounded} ${inputBg} border border-gray-100 font-bold text-sm outline-none focus:bg-white transition-all block`} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] sm:text-sm font-black text-[var(--charcoal)] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--gold)]" /> {RESERVATION_CONTENT.labels.time}*
                </label>
                <div className="relative">
                  <select name="preferredTime" required value={formData.preferredTime} onChange={handleChange} className={`w-full px-5 h-[52px] ${inputRounded} ${inputBg} border border-gray-100 font-bold text-sm outline-none appearance-none focus:bg-white transition-all`}>
                    <option value="">選択してください</option>
                    {RESERVATION_CONTENT.timeOptions.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* 📝 プラン & 備考 */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[13px] sm:text-sm font-black text-[var(--charcoal)]">{RESERVATION_CONTENT.labels.plan}</label>
                <div className="relative">
                  <select name="plan" required value={formData.plan} onChange={handleChange} className={`w-full px-5 py-3.5 ${inputRounded} ${inputBg} border border-gray-100 font-bold text-sm outline-none appearance-none focus:bg-white transition-all`}>
                    <option value="">プランを選択してください</option>
                    {RESERVATION_CONTENT.planOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[13px] sm:text-sm font-black text-[var(--charcoal)] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[var(--gold)]" /> {RESERVATION_CONTENT.labels.message}
                </label>
                <textarea name="message" rows={3} value={formData.message} onChange={handleChange} className={`w-full px-5 py-4 ${inputRounded} ${inputBg} border border-gray-100 font-bold text-sm outline-none focus:bg-white transition-all resize-none`} placeholder="ご質問など" />
              </div>
            </div>

            <div className="flex items-start gap-3 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <Shield className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
              <p className="text-[10px] sm:text-[11px] text-[var(--charcoal-light)] font-bold leading-relaxed">{RESERVATION_CONTENT.privacyPolicy}</p>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-[var(--charcoal)] text-white hover:bg-black font-black py-7 rounded-full shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50">
              {isSubmitting ? <span>{RESERVATION_CONTENT.submittingText}</span> : <>{RESERVATION_CONTENT.submitButton} <ArrowRight className="w-5 h-5" /></>}
            </Button>
          </form>
        </motion.div>
      </div>

      {/* 🔴 Success Popup */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`relative max-w-sm w-full bg-white rounded-[2.5rem] p-10 text-center shadow-2xl`}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h2 className={`${fontTitle} text-2xl font-bold text-[var(--charcoal)] mb-4`}>{RESERVATION_CONTENT.success.title}</h2>
              <p className="text-xs text-[var(--charcoal-light)] mb-8 leading-relaxed font-bold">{RESERVATION_CONTENT.success.message}</p>
              <div className="space-y-4">
                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-black text-[var(--gold-dark)] uppercase mb-1">{RESERVATION_CONTENT.success.telLabel}</p>
                  <a href={`tel:${selectedClinicTel}`} className="text-2xl font-black text-[var(--charcoal)] tracking-tighter">{selectedClinicTel}</a>
                  <p className="text-[10px] font-bold text-gray-400 mt-1">{formData.clinic} 直通番号</p>
                </div>
                <Button onClick={handleReset} className="w-full py-6 rounded-full bg-[var(--charcoal)] font-black text-white">{RESERVATION_CONTENT.success.backToTop}</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
