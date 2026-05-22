'use client'

import { X, MapPin, ArrowRight, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LineModalProps {
  isOpen: boolean
  onClose: () => void
}

const clinics = [
  {
    name: '福岡院',
    area: 'TENJIN AREA',
    address: '福岡市中央区天神',
    lineUrl: 'https://page.line.me/224hxaqa?openQrModal=true',
  },
  {
    name: '広島院',
    area: 'HONDORI AREA',
    address: '広島市中区本通',
    lineUrl: 'https://page.line.me/300yapum?openQrModal=true',
  },
  {
    name: '京都院',
    area: 'KYOTO AREA',
    address: '京都市中京区',
    lineUrl: 'https://page.line.me/875nqaox?openQrModal=true',
  },
]

export default function LineModal({ isOpen, onClose }: LineModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 🟢 背景：より深いブラーで没入感を演出 */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="fixed left-1/2 top-1/2 z-[210] w-[92%] max-w-md outline-none"
            initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-45%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-45%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* 🟢 本体：ガラスのような質感と繊細な枠線 */}
            <div className="relative bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[32px] overflow-hidden border border-white/20">
              
              {/* 装飾用の光の輪（背景） */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--emerald)]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="relative px-8 pt-10 pb-6 text-center">
                <button
                  onClick={onClose}
                  className="absolute right-6 top-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100/50 hover:bg-gray-200/50 transition-colors text-[var(--charcoal)]"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-br from-[#06C755] to-[#05b34d] shadow-lg shadow-green-200 mb-4 rotate-3">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-[var(--charcoal)] tracking-tight">
                  SELECT CLINIC
                </h3>
                <p className="text-[10px] tracking-[0.2em] text-[var(--gold)] font-bold mt-1 uppercase">
                  公式LINE 院を選択してください
                </p>
              </div>

              {/* Clinic List */}
              <div className="px-6 pb-10 space-y-4">
                {clinics.map((clinic, index) => (
                  <motion.a
                    key={index}
                    href={clinic.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-4 w-full p-5 bg-white rounded-2xl border border-gray-100 transition-all hover:border-[var(--emerald)]/30 hover:shadow-xl hover:shadow-green-900/5"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* アイコン部分 */}
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <div className="absolute inset-0 bg-[var(--emerald)] opacity-0 group-hover:opacity-10 rounded-xl transition-opacity" />
                      <div className="w-full h-full border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-[var(--emerald)] transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>

                    {/* テキスト部分 */}
                    <div className="flex-1 text-left">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-[var(--charcoal)] text-base">{clinic.name}</span>
                        <span className="text-[9px] font-bold text-gray-300 tracking-tighter uppercase">{clinic.area}</span>
                      </div>
                      <div className="text-[11px] text-[var(--charcoal-light)] mt-0.5 opacity-60">
                        {clinic.address}
                      </div>
                    </div>

                    {/* 矢印アイコン */}
                    <div className="w-8 h-8 rounded-full border border-gray-50 flex items-center justify-center transition-all group-hover:bg-[var(--emerald)] group-hover:border-[var(--emerald)]">
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="bg-gray-50/50 py-4 border-t border-gray-100">
                <p className="text-[10px] text-center text-gray-400 font-medium tracking-wider">
                  24時間いつでも気軽にご相談いただけます
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
