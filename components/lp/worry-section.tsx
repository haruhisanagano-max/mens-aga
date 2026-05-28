'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { WORRY_CONTENT } from '@/edit/worry'

export default function WorrySection() {
  // ---------------------------------------------------------
  // ★ デザイン調整用リモコン（マシーン・痛み・BeforeAfterと完全同期）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"

  // カードエリアのカスタマイズ（隙間を詰め、角丸を他と統一）
  const cardConfig = {
    bg: "bg-slate-950/40",               // 透過グラス背景
    backdrop: "backdrop-blur-xl",         // 磨りガラス
    rounded: "rounded-xl",               // 💡 他パートの画像と100%揃えた角丸
    borderWidth: "border",                
    borderColor: "border-sky-400/30",    
    shadow: "shadow-[0_0_50px_rgba(56,189,248,0.15)]",
    maxWidth: "max-w-[550px]",            // 💡 写真のサイズに合わせたタイトな横幅
    padding: "p-2 sm:p-3"                 // 💡 隙間を「ほんの少し」に縮小（フレーム化）
  }

  const photoConfig = {
    rounded: "rounded-lg",              // 中の写真の角丸（外枠より一段階小さくしてフィットさせる）
    maxSize: "w-full"                    // カードの幅いっぱいに表示
  }
  // ---------------------------------------------------------

  return (
    /* 💡 背景色は最高級ネイビー（#050A15）で、前後のパートとシームレスに結合 */
    <section className="py-16 sm:py-24 bg-[#050A15] text-slate-400 relative overflow-hidden">
     
      {/* 💡 【背景演出】まだらな光（同期） */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-sky-500/20 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[-10%] w-[450px] h-[450px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
         
          {/* 🔴 Header: 他のダークサイバーパートと完全一致の発光タイトル */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-4 uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
              {WORRY_CONTENT.badge}
            </span>
            <div className="relative inline-block">
              <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]`}>
                {WORRY_CONTENT.title}
              </h2>
            </div>
            <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-70 font-medium whitespace-pre-line">
              {WORRY_CONTENT.description}
            </p>
          </div>

          {/* 🔴 Image Area: 写真とカードを一体化させたタイトなフレーム構造 */}
          <div className="flex justify-center relative">
           
            {/* 💡 カード本体（フレームとして機能） */}
            <div
              className={`relative w-full flex items-center justify-center ${cardConfig.maxWidth} ${cardConfig.rounded} ${cardConfig.borderWidth} ${cardConfig.borderColor} ${cardConfig.shadow} ${cardConfig.bg} ${cardConfig.backdrop} ${cardConfig.padding}`}
            >
             
              {/* 💡 写真コンテナ（カードとのサイズ差を最小限に） */}
              <motion.div
                className={`relative w-full aspect-square overflow-hidden ${photoConfig.rounded} z-10`}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={WORRY_CONTENT.image}
                  alt={WORRY_CONTENT.alt}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                  priority
                />
               
                {/* 写真の表面に薄くネイビーの質感をのせて馴染ませる */}
                <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
              </motion.div>

              {/* 💡 カードの底辺だけに微かな光源（Pain/BeforeAfterのテイストを継承） */}
              <div className="absolute bottom-0 inset-x-10 h-[1px] bg-sky-400/40 blur-[4px] pointer-events-none" />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
