'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { WORRY_CONTENT } from '@/edit/worry'

export default function WorrySection() {
  // ---------------------------------------------------------
  // ★ デザイン調整用リモコン（他のパートと同期）
  // ---------------------------------------------------------
  const fontTitle = "font-serif" // 明朝体（タイトル用）
  const fontBody = "font-sans"   // ゴシック体（本文用）

  // 画像自体のカスタマイズ
  const imgConfig = {
    rounded: "rounded-[2.5rem]",        // 角の丸み（2.5remで他パートのカードと同期）
    borderWidth: "border-2",            // 枠の太さ（border, border-2, border-4など）
    borderColor: "border-gray-100",     // 枠の色
    maxWidth: "max-w-[500px]",          // 画像の最大横幅
    shadow: "shadow-[0_30px_80px_rgba(0,0,0,0.06)]" // 影の強さ
  }
  // ---------------------------------------------------------

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          
          {/* 🔴 Header: ZeroYenItems と100%一致のデザイン */}
          <div className="text-center mb-10 sm:mb-16">
            <motion.span className="text-[10px] font-black tracking-[0.5em] text-[var(--gold-dark)] uppercase block mb-4">
              {WORRY_CONTENT.badge}
            </motion.span>
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-bold text-[var(--charcoal)] tracking-tighter mb-6`}>
              {WORRY_CONTENT.title}
            </h2>
            <p className="text-[var(--charcoal)] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed opacity-80 font-medium whitespace-pre-line">
              {WORRY_CONTENT.description}
            </p>
          </div>

          {/* 🔴 Image Area: 正方形1枚のみ */}
          <div className="flex justify-center">
            <motion.div 
              className={`relative w-full aspect-square overflow-hidden bg-white 
                ${imgConfig.maxWidth} ${imgConfig.rounded} ${imgConfig.borderWidth} ${imgConfig.borderColor} ${imgConfig.shadow}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src={WORRY_CONTENT.image}
                alt={WORRY_CONTENT.alt}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
