'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'
import { CTA_CONTENT } from '@/edit/cta-content'

// 🟢 onOpenLineModal プロップスを追加
export default function OnlineGuideModal({ 
  isOpen, 
  onClose, 
  onOpenLineModal 
}: { 
  isOpen: boolean, 
  onClose: () => void,
  onOpenLineModal: () => void 
}) {
  const goldTextGlow = "drop-shadow-[0_2px_10px_rgba(201,169,98,0.5)]"

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
          />

          {/* 🟢 余白を p-8 sm:p-9 に縮小（以前のサイズ感） */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] border-[3px] border-[var(--gold)]/20 shadow-2xl overflow-hidden p-8 sm:p-9"
          >
            <div className="absolute inset-[8px] border border-[var(--gold)]/10 rounded-[2rem] pointer-events-none" />

            <button onClick={onClose} className="absolute right-6 top-6 text-gray-300 hover:text-[var(--gold)] z-20">
              <X className="w-6 h-6" />
            </button>

            {/* 🟢 全体の間隔を space-y-10 → space-y-6 に凝縮 */}
            <div className="relative z-10 space-y-6">
              <div className="text-center space-y-1">
                <span className="text-[10px] font-black tracking-[0.4em] text-[var(--gold-dark)] uppercase block">Guide</span>
                <h3 className={`font-serif text-xl font-bold text-[var(--charcoal)] tracking-tighter ${goldTextGlow}`}>
                  {CTA_CONTENT.remoteStep.title}
                </h3>
              </div>

              {/* 🟢 リストの間隔を space-y-8 → space-y-5 に凝縮 */}
              <div className="space-y-5 text-left">
                {CTA_CONTENT.remoteStep.steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="font-serif italic text-xl text-[var(--gold)]/30 font-black pt-1">
                      {step.num}
                    </span>
                    <div className="space-y-0.5 flex-1">
                      <p className="text-[var(--charcoal)] font-black text-xs tracking-tight">{step.title}</p>
                      <p className="text-[var(--charcoal-light)] text-[10px] font-medium leading-relaxed opacity-70">{step.desc}</p>
                      
                      {i === 1 && (
                        <div className="mt-2 p-3 bg-[#F9F6F0] rounded-xl border border-[var(--gold)]/15">
                          <p className="text-[7px] font-black text-[var(--gold-dark)] mb-0.5 uppercase tracking-widest">Send Message</p>
                          <p className="text-[var(--charcoal)] font-black text-[11px] whitespace-pre-wrap leading-tight">
                            {CTA_CONTENT.remoteStep.messageToSend}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* 🟢 LINEボタン：高さを py-6 → py-4 にしてコンパクトに */}
              <div className="pt-1">
                <button
                  onClick={() => {
                    onClose(); // 現在のモーダルを閉じる
                    onOpenLineModal(); // LINE院選択モーダルを開く
                  }}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#06C755] text-white rounded-xl font-black text-[11px] tracking-[0.2em] shadow-lg hover:brightness-105 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  院を選択してLINEを開始
                </button>
              </div>

              <p className="text-center text-[9px] text-gray-300 font-medium tracking-widest">
                ※公式LINE登録後のトーク画面よりお送りください
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
