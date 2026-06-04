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

  // 3つの画像を順番にフワッと表示させるアニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

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
              <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)] whitespace-pre-line`}>
                {WORRY_CONTENT.title}
              </h2>
            </div>
            <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-70 font-medium whitespace-pre-line">
              {WORRY_CONTENT.description}
            </p>
          </div>

          {/* 🔴 Image Area: 3つの画像をグリッド配置 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {WORRY_CONTENT.images.map((img) => (
              /* 💡 カード本体（フレームとして機能） */
              <motion.div
                key={img.id}
                variants={itemVariants}
                className={`relative w-full flex items-center justify-center ${cardConfig.maxWidth} ${cardConfig.rounded} ${cardConfig.borderWidth} ${cardConfig.borderColor} ${cardConfig.shadow} ${cardConfig.bg} ${cardConfig.backdrop} ${cardConfig.padding}`}
              >
                
                {/* 💡 写真コンテナ（カードとのサイズ差を最小限に） */}
                <div className={`relative w-full aspect-square overflow-hidden ${photoConfig.rounded} z-10`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* 写真の表面に薄くネイビーの質感をのせて馴染ませる */}
                  <div className="absolute inset-0 bg-[#050A15]/20 pointer-events-none transition-opacity duration-300 hover:opacity-0" />
                </div>

                {/* 💡 カードの底辺だけに微かな光源 */}
                <div className="absolute bottom-0 inset-x-10 h-[1px] bg-sky-400/40 blur-[4px] pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
