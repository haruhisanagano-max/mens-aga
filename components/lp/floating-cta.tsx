'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Calendar, Zap } from 'lucide-react'
import { CTA_MODAL_CONTENT } from '@/edit/cta-modal'

interface FloatingCtaProps {
  onLineClick: () => void
}

export default function FloatingCta({ onLineClick }: FloatingCtaProps) {
  const { floatingCta } = CTA_MODAL_CONTENT

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pointer-events-none">
      <motion.div 
        className="max-w-xl mx-auto flex flex-col items-center pointer-events-auto relative"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
      >
        
        {/* ❌ 画面の3分の1を青く染めていた、外側の大きな空間光源はご指示通りすべて完全撤去しました */}

        {/* 🏷️ バッジ部分 */}
        <div className="bg-[#050A15] text-white text-[10px] sm:text-xs font-black px-5 py-1.5 rounded-t-xl tracking-widest uppercase shadow-[0_-4px_12px_rgba(0,0,0,0.5)] mb-[-1px] border border-slate-700/60 border-t-white/10 border-l-white/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ backgroundPosition: ['-100% 0%', '100% 0%'] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            style={{
              backgroundImage: 'linear-gradient(90deg, transparent 30%, rgba(56, 189, 248, 0.12) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
            }}
          />
          <Zap className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20 inline-block mr-2 relative z-10 drop-shadow-[0_0_5px_rgba(56,189,248,0.8)]" />
          <span className="text-sky-400 font-extrabold relative z-10 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
            {floatingCta.badge}
          </span>
          <span className="mx-2 text-slate-600 relative z-10">|</span>
          <span className="text-slate-200 relative z-10">{floatingCta.priceText}</span>
        </div>

        {/* 🔲 メインコンテナ：マシンの最高級カードに見立てた重厚なブラックネイビー枠 */}
        <div className="flex w-full gap-3 h-14 sm:h-16 rounded-2xl overflow-hidden p-1.5 relative z-10 bg-[#050A15] shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-slate-700/60 border-t-white/10 border-l-white/10">
          
          {/* ❌ 最下部にあった直線的な青い光の芯（2pxのライン）は完全に削除しました */}

          {/* ⚡ 【新設計：枠とボタンの間の光源（z-5）】
              コンテナの下部中央から上に向かって、"ふわーっ" と丸く優しく広がる青い環境光です。
              `z-5` に配置したことで、ベースの黒枠（背景）の上、かつ上に乗るボタン（z-10）の下という
              ご指定通りの絶妙なレイヤーに挟まり、ボタンの背後を幻想的にライトアップします。 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.22)_0%,transparent_65%)] pointer-events-none z-5" />
          
          {/* 全体を極薄く包むベースの環境微光（z-0） */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.03),transparent_100%)] pointer-events-none z-0" />

          {/* 🟢 LINE相談ボタン：光源（z-5）の上に安全に乗るため z-10 を指定 */}
          <button 
            onClick={onLineClick}
            className="flex-1 flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-xl transition-all active:scale-[0.98] shadow-inner relative z-10"
          >
            <MessageSquare className="w-4 h-4 opacity-95" />
            <span className="text-xs sm:text-sm font-black tracking-wider text-white">{floatingCta.lineButton}</span>
          </button>

          {/* 🖤 予約ボタン（最重要CTA）：同じく z-10 で光源の上へ配置 */}
          <a 
            href="#reservation"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-b from-slate-900 to-[#020617] hover:from-slate-800 hover:to-slate-900 text-white rounded-xl transition-all active:scale-[0.98] border border-slate-800 border-t-white/5 border-l-white/5 relative overflow-hidden shadow-md z-10"
          >
            {/* 💡 【5秒に1度のステルス・シマー】読了を邪魔せず、たまにキラッと走る鋭い青光 */}
            <motion.div
              className="absolute inset-y-0 w-[40%] pointer-events-none z-0"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)',
                transform: 'skewX(-25deg)',
              }}
              animate={{ left: ['-60%', '160%'] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 5,
                ease: [0.25, 1, 0.5, 1],
              }}
            />

            <Calendar className="w-4 h-4 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] relative z-10" />
            <span className="text-xs sm:text-sm font-black tracking-wider text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              {floatingCta.reserveButton}
            </span>
          </a>
          
        </div>
      </motion.div>
    </div>
  )
}
