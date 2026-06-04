'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { WORRY_CONTENT } from '@/edit/worry'

export default function WorrySection() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"

  // 4分割カード用のスタイリング
  const cardConfig = {
    bg: "bg-slate-950/40",               
    backdrop: "backdrop-blur-xl",         
    rounded: "rounded-2xl",              
    borderWidth: "border",                
    borderColor: "border-sky-400/20",    
    shadow: "shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]",
    padding: "p-3 sm:p-4"                
  }

  const photoConfig = {
    rounded: "rounded-xl",             
    maxSize: "w-full"                    
  }

  // アニメーション設定（カードが順番にフワッと現れる）
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="py-16 sm:py-24 bg-[#050A15] text-slate-400 relative overflow-hidden">
      
      {/* 背景演出 */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-sky-500/20 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[-10%] w-[450px] h-[450px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-4 uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
              {WORRY_CONTENT.badge}
            </span>
            <div className="relative inline-block">
              <h2 className={`${fontTitle} text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)] whitespace-pre-line`}>
                {WORRY_CONTENT.title}
              </h2>
            </div>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed opacity-80 font-medium whitespace-pre-line mt-2">
              {WORRY_CONTENT.description}
            </p>
          </div>

          {/* Grid Cards Area (スマホで1列、PCで2列) */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {WORRY_CONTENT.items.map((item) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                className={`relative flex flex-col ${cardConfig.rounded} ${cardConfig.borderWidth} ${cardConfig.borderColor} ${cardConfig.shadow} ${cardConfig.bg} ${cardConfig.backdrop} ${cardConfig.padding} transition-all duration-300`}
              >
                {/* 内部の正方形画像 */}
                <div className={`relative w-full aspect-square overflow-hidden ${photoConfig.rounded} mb-5 z-10`}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A15]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* 画像左上のナンバリングバッジ */}
                  <div className="absolute top-3 left-3 bg-sky-500/20 border border-sky-400/50 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-sky-300 font-bold text-xs font-mono tracking-wider">CHECK {item.id}</span>
                  </div>
                </div>

                {/* テキストエリア */}
                <div className="flex-1 flex flex-col justify-start px-1 sm:px-2 pb-2">
                  <h3 className="text-slate-100 font-bold text-lg sm:text-xl mb-3 tracking-tight border-b border-sky-900/50 pb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
