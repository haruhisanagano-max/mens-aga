'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Smartphone } from 'lucide-react'
import { CTA_CONTENT } from '@/edit/cta-content'
import { Button } from '@/components/ui/button' // 💡 これが抜けていました！

interface OnlineGuideModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenLineModal: () => void
}

export default function OnlineGuideModal({ isOpen, onClose, onOpenLineModal }: OnlineGuideModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-4 sm:px-6">
          
          {/* 背景のダークオーバーレイ（クリックで閉じる） */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* モーダル本体（ダークネイビーの世界観に統一） */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-slate-900/90 border border-slate-700/60 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8),_0_0_40px_rgba(56,189,248,0.15)] overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* 上部のメタリックハイライト */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* 閉じるボタン */}
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* ヘッダー部分 */}
            <div className="pt-8 pb-5 px-6 sm:px-8 border-b border-slate-800/60 text-center relative overflow-hidden">
              {/* ふんわり光る背景 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50px] bg-sky-500/10 blur-[20px] pointer-events-none" />
              
              <div className="relative z-10 space-y-2">
                <span className="flex items-center justify-center gap-1.5 text-[10px] font-black tracking-[0.3em] pl-[0.3em] text-sky-400 uppercase">
                  <Smartphone className="w-3.5 h-3.5" />
                  Guide
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                  {CTA_CONTENT.remoteStep.title}
                </h3>
              </div>
            </div>

            {/* コンテンツ部分（スクロール可能） */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6 relative">
              
              <div className="space-y-6">
                {CTA_CONTENT.remoteStep.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-900 border border-sky-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(56,189,248,0.2)] shrink-0">
                        <span className="text-[10px] font-black text-sky-400">{step.num}</span>
                      </div>
                      {/* 最後のステップ以外は縦線を引く */}
                      {index !== CTA_CONTENT.remoteStep.steps.length - 1 && (
                        <div className="w-[1px] h-full bg-slate-800/80 my-1.5" />
                      )}
                    </div>
                    
                    <div className="pt-1.5 pb-2 w-full">
                      <h4 className="text-sm font-bold text-slate-200 mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed opacity-80">{step.desc}</p>
                      
                      {/* 💡 ステップ2（送信指示）の下に、コピペしやすいテンプレート枠を表示 */}
                      {index === 1 && (
                        <div className="mt-3 p-3 bg-slate-950/60 rounded-xl border border-slate-700/50 shadow-inner relative overflow-hidden">
                          {/* 左端のアクセントライン */}
                          <div className="absolute top-0 left-0 bottom-0 w-1 bg-sky-500/50" />
                          <p className="text-[9px] font-bold text-sky-400 mb-1.5 uppercase tracking-widest pl-1">
                            送信メッセージ例
                          </p>
                          <p className="text-white font-mono text-xs whitespace-pre-wrap leading-relaxed pl-1">
                            {CTA_CONTENT.remoteStep.messageToSend}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* フッター（アクションボタン） */}
            <div className="p-5 sm:p-6 border-t border-slate-800/60 bg-slate-950">
              <Button 
                onClick={() => {
                  onClose(); 
                  onOpenLineModal(); 
                }}
                className="w-full h-14 bg-[#06C755] hover:bg-[#05b34c] text-white font-black rounded-xl shadow-[0_10px_20px_rgba(6,199,85,0.2)] transition-all active:scale-95 flex items-center justify-center gap-2 text-[13px] tracking-widest"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                院を選択してLINEを開始
              </Button>
              <p className="text-center text-[10px] text-slate-500 mt-3 font-bold tracking-widest">
                ※公式LINEのトーク画面よりお送りください
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
