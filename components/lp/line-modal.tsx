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
          {/* 🟢 背景：ダーク世界観に合わせた深いオーバーレイ */}
          <motion.div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[300]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="fixed left-1/2 top-1/2 z-[310] w-[92%] max-w-md outline-none"
            initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-45%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-45%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* 🟢 本体：メタリックネイビーの世界観に合わせたダークグラス質感 */}
            <div className="relative bg-slate-900/90 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.8),_0_0_40px_rgba(56,189,248,0.1)] rounded-3xl overflow-hidden border border-slate-700/60">
              
              {/* 上部のメタリックハイライト */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />

              {/* 装飾用の光の輪（背景） */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="relative px-6 pt-10 pb-6 text-center">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 w-9 h-9 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-700 transition-colors text-slate-400 hover:text-white z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* LINEアイコンはブランドカラーを維持しつつ、ダーク背景に映えるよう発光 */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-br from-[#06C755] to-[#05b34d] shadow-[0_10px_20px_rgba(6,199,85,0.3)] mb-4 rotate-3 border border-white/20">
                  <MessageCircle className="w-8 h-8 text-white fill-current" />
                </div>
                
                <h3 className="font-sans text-2xl font-black text-white tracking-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                  SELECT CLINIC
                </h3>
                <p className="text-[10px] tracking-[0.2em] text-sky-400 font-bold mt-1.5 uppercase">
                  公式LINE 院を選択してください
                </p>
              </div>

              {/* Clinic List */}
              <div className="px-5 sm:px-6 pb-8 space-y-3">
                {clinics.map((clinic, index) => (
                  <motion.a
                    key={index}
                    href={clinic.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-4 w-full p-4 sm:p-5 bg-slate-800/40 rounded-2xl border border-slate-700/50 transition-all hover:border-sky-400/50 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* アイコン部分 */}
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <div className="absolute inset-0 bg-sky-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity" />
                      <div className="w-full h-full border border-slate-600/60 group-hover:border-sky-500/50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-sky-400 transition-colors bg-slate-900/50">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>

                    {/* テキスト部分 */}
                    <div className="flex-1 text-left">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-slate-100 text-base">{clinic.name}</span>
                        <span className="text-[9px] font-bold text-sky-500/80 tracking-tighter uppercase">{clinic.area}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 opacity-80 font-medium">
                        {clinic.address}
                      </div>
                    </div>

                    {/* 矢印アイコン（ホバーでLINEグリーンへ変化し誘導を強化） */}
                    <div className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center transition-all group-hover:bg-[#06C755] group-hover:border-[#06C755] shadow-inner group-hover:shadow-[0_0_10px_rgba(6,199,85,0.4)]">
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="bg-slate-950/80 py-4 border-t border-slate-800/60">
                <p className="text-[10px] text-center text-slate-500 font-bold tracking-widest">
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
