'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Calendar, Sparkles, ShieldCheck, Info } from 'lucide-react'
import { BANNER_CONTENT } from '@/edit/banner-content'

interface CampaignModalProps {
  isOpen: boolean
  onClose: () => void
  campaignId: string | null
  onOpenLineModal: () => void
}

export default function CampaignModal({ isOpen, onClose, campaignId, onOpenLineModal }: CampaignModalProps) {
  const data = BANNER_CONTENT.banners.find(b => b.id === campaignId)
  const content = data?.modal

  if (!content) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-5">
          
          {/* 背景のダークオーバーレイ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* モーダル本体（ダークメタリック世界観） */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-slate-900/95 border border-slate-700/60 rounded-[2rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.8),_0_0_40px_rgba(56,189,248,0.1)] overflow-hidden z-10"
          >
            {/* 上部のメタリックハイライト */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            
            {/* 閉じるボタン */}
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative z-10 space-y-6">
              
              {/* ヘッダー */}
              <div className="text-center border-b border-slate-800/60 pb-5 relative overflow-hidden">
                {/* ほんのり光る背景 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-sky-500/5 blur-[20px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <span className="flex items-center gap-1.5 text-sky-400 text-[10px] font-black tracking-[0.3em] pl-[0.3em] uppercase">
                    <Sparkles className="w-3 h-3" />
                    Special Campaign
                  </span>
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                    {content.title}
                  </h3>
                </div>
              </div>

              {/* 適用条件 */}
              <div>
                <h4 className="flex items-center gap-2 text-sky-400 font-bold mb-2.5 text-xs tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  適用条件
                </h4>
                <div className="bg-slate-950/60 border border-slate-700/50 p-4 rounded-2xl text-[13px] text-slate-200 leading-relaxed shadow-inner">
                  {content.conditions}
                </div>
              </div>

              {/* 注意事項 */}
              <div>
                <h4 className="flex items-center gap-2 text-slate-400 font-bold mb-2.5 text-xs tracking-wider">
                  <Info className="w-4 h-4" />
                  注意事項
                </h4>
                <div className="text-[12px] text-slate-400 leading-relaxed whitespace-pre-wrap px-1 opacity-80 font-medium">
                  {content.notes}
                </div>
              </div>

              {/* アクションボタン：縦並びでスマホ操作性を優先 */}
              <div className="flex flex-col gap-3 pt-4">
                <button
                  onClick={onOpenLineModal}
                  className="flex items-center justify-center gap-2 py-4.5 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-xl font-black text-[14px] tracking-widest shadow-[0_10px_20px_rgba(6,199,85,0.2)] transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  LINEで相談・予約
                </button>
                
                <a
                  href="#reservation"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-black text-[14px] tracking-widest shadow-lg transition-all active:scale-95 text-center border border-slate-700/60"
                >
                  <Calendar className="w-5 h-5 text-sky-400" />
                  Web来院予約フォーム
                </a>
              </div>

              <p className="text-center text-[10px] text-slate-500 font-bold tracking-widest pt-1">
                ※公式LINEは24時間いつでも受付中です
              </p>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
