'use client'

import { Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { FIRST_VIEW_CONTENT } from '@/edit/first-view-content'

export default function FirstView() {
  const mainHeadline = FIRST_VIEW_CONTENT?.mainHeadline || {}
  const trustBadges = FIRST_VIEW_CONTENT?.trustBadges || []

  // edit側のテキストデータが本当に入力されているか判定
  const hasText = mainHeadline.line1 || mainHeadline.highlight || FIRST_VIEW_CONTENT?.subHeadline || trustBadges.length > 0

  return (
    // 💡 【完全復活】左右の隙間を確実にゼロにしていた、オリジナルの最優先フラグ（p-0! m-0!）を戻します
    <section 
      className="relative w-full bg-[#FDFBF7] p-0! m-0! block"
    >
      
      {/* 🖼️ 背景画像エリア：ここも親の干渉を一切許さないように p-0! m-0! を徹底 */}
      <div className="w-full block p-0! m-0!">
        {/* 💡 w-full! と h-auto! に「!」を付与。
            これで、親要素の flex や余白の設定を力技でねじ伏せて左右100%に広げます。
            余計な absolute の残骸もないため、下半分が隠れるバグも絶対に起きません。 */}
        <img 
          src={FIRST_VIEW_CONTENT?.spImage} 
          alt="Main Visual"
          className="w-full! h-auto! block p-0! m-0!"
        />
      </div>

      {/* 📝 テキストエリア：💡 現在のように文字がすべて空なら、この下のエリア自体が1ミリの余白も残さず完全消滅します */}
      {hasText && (
        <div className="w-full px-6 pt-8 pb-16 block box-border bg-[#FDFBF7]">
          <div className="max-w-4xl mx-auto flex flex-col items-center w-full">
            
            {(mainHeadline.line1 || mainHeadline.highlight || FIRST_VIEW_CONTENT?.subHeadline) && (
              <motion.div 
                className="text-center w-full"
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black text-[#111] leading-[1.15] tracking-tight">
                  {mainHeadline.line1 && <span className="block">{mainHeadline.line1}</span>}
                  {mainHeadline.highlight && <span className="block text-[var(--gold-dark)] mt-1">{mainHeadline.highlight}</span>}
                </h1>
                {FIRST_VIEW_CONTENT?.subHeadline && (
                  <p className="mt-5 text-xs sm:text-sm text-[#333] font-bold tracking-widest opacity-90">
                    {FIRST_VIEW_CONTENT?.subHeadline}
                  </p>
                )}
              </motion.div>
            )}

            {/* バッジエリア */}
            {trustBadges.length > 0 && (
              <div className="mt-8 sm:mt-12 w-full flex flex-col items-center">
                <div className="flex items-center justify-center gap-x-6 gap-y-3 flex-wrap opacity-70">
                  {trustBadges.map((badge: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] text-[#111] font-black tracking-widest uppercase whitespace-nowrap">
                      <Minus className="w-3 h-[1px] bg-[var(--gold)]" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  )
}
