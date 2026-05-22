'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Calendar } from 'lucide-react'
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
        <div className="fixed inset-0 z-[150] flex items-center justify-center px-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            /* 🟢 修正：p-8に固定（sm:p-10を削除）。max-w-md（約448px）に抑えて、スマホらしい幅を維持 */
            className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 z-20">
              <X className="w-7 h-7" />
            </button>

            <div className="relative z-10 space-y-6">
              <div className="text-center border-b border-gray-100 pb-4">
                <span className="text-[var(--gold-dark)] text-xs font-black tracking-widest uppercase">Special Campaign</span>
                {/* 🟢 修正：text-xlに固定（sm:text-2xlを削除） */}
                <h3 className="text-xl font-bold text-[var(--charcoal)] mt-2">{content.title}</h3>
              </div>

              <div>
                <h4 className="flex items-center text-[var(--gold-dark)] font-bold mb-2 text-sm">適用条件</h4>
                <p className="bg-gray-50 p-4 rounded-xl text-[13px] text-gray-700 leading-relaxed">
                  {content.conditions}
                </p>
              </div>

              <div>
                <h4 className="flex items-center text-gray-400 font-bold mb-2 text-sm">注意事項</h4>
                <div className="text-[12px] text-gray-500 leading-relaxed whitespace-pre-wrap">
                  {content.notes}
                </div>
              </div>

              {/* アクションボタン */}
              {/* 🟢 修正：grid-cols-1に固定（sm:grid-cols-2を削除）。常に縦に2つ並ぶスマホスタイルを維持 */}
              <div className="grid grid-cols-1 gap-3 pt-4">
                <button
                  onClick={onOpenLineModal}
                  className="flex items-center justify-center gap-2 py-4 bg-[#06C755] text-white rounded-full font-black text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  LINEで相談
                </button>
                <a
                  href="#reservation"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 py-4 bg-[var(--charcoal)] text-white rounded-full font-black text-sm shadow-lg hover:bg-black transition-all text-center"
                >
                  <Calendar className="w-5 h-5" />
                  Web予約フォーム
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
