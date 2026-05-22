'use client'

import { Menu, X } from 'lucide-react'
import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { HEADER_CONTENT } from '@/edit/header-content'

interface HeaderProps {
  scrollY: number
  onLineClick?: () => void
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

export default function Header({ scrollY, onLineClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = scrollY > 50

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }, [])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    setTimeout(() => {
      // 🔴 メニューから遷移させるために、遷移先(PricingPlan.tsx)のIDを "pricing" に合わせる必要があります
      const element = document.getElementById(targetId)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
      }
    }, 100)
  }, [])

  return (
    <motion.header 
      // 🟢 軽量化：backdrop-blurを削除し、不透明度を95% (bg-white/95) に上げることで
      // ぼかし無しでも背後の文字と重なって読みづらくなるのを防いでいます。
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/60 shadow-sm py-2 border-b border-gray-100' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12 sm:h-16">
        
        {/* ロゴ：isScrolled が false の時は opacity-0（透明）にする */}
<div 
  className={`relative cursor-pointer transition-all duration-500 flex items-center ${
    isScrolled 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 -translate-y-2 pointer-events-none'
  }`} 
  onClick={scrollToTop}
>
  {HEADER_CONTENT.logoImage ? (
    <Image 
      src={HEADER_CONTENT.logoImage} 
      alt={HEADER_CONTENT.logoText} 
      width={HEADER_CONTENT.logoWidth} 
      height={HEADER_CONTENT.logoHeight} 
      className="object-contain" 
    />
  ) : (
    <span className="font-serif text-lg sm:text-xl font-bold tracking-tighter text-[var(--charcoal)]">
      {HEADER_CONTENT.logoText}
    </span>
  )}
</div>

        {/* ナビゲーション (PC) */}
        <nav className="hidden lg:flex items-center gap-8">
          {HEADER_CONTENT.nav.map((item) => (
            <a 
              key={item.id} href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)}
              className={`text-[12px] font-bold tracking-wider transition-colors hover:text-[var(--emerald)] ${
                isScrolled ? 'text-[var(--charcoal)]' : 'text-white drop-shadow-md'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ボタン類 */}
        <div className="flex items-center gap-4">
          <button onClick={onLineClick} className="hidden lg:flex items-center gap-2 text-sm font-bold text-[#06C755]">
            <LineIcon className="w-5 h-5" />
            <span>{HEADER_CONTENT.buttons.line}</span>
          </button>
          
          <Button asChild className={`hidden lg:flex px-8 rounded-full h-11 text-sm font-bold ${isScrolled ? 'bg-[var(--emerald)] text-white' : 'bg-white text-[var(--charcoal)] shadow-xl'}`}>
            <a href="#reservation" onClick={(e) => handleNavClick(e, 'reservation')}>
              {HEADER_CONTENT.buttons.reserve}
            </a>
          </Button>

          {/* ハンバーガーメニュー */}
          <button 
            className={`lg:hidden p-1 transition-colors ${isScrolled ? 'text-[var(--charcoal)]' : 'text-white'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* スマホメニュー */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            // 🟢 軽量化：ぼかしなし、シンプルな不透明背景
            className="lg:hidden bg-white border-t border-gray-100 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col py-4 px-6">
              {HEADER_CONTENT.nav.map((item) => (
                <a 
                  key={item.id} href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)}
                  className="py-4 text-base font-bold text-[var(--charcoal)] border-b border-gray-50 flex items-center justify-between"
                >
                  {item.label}
                </a>
              ))}
              <div className="py-6 flex flex-col gap-4">
                <Button onClick={() => { setIsMenuOpen(false); onLineClick?.(); }} className="w-full bg-[#06C755] h-14 rounded-xl text-white font-bold">
                  <LineIcon className="w-6 h-6 mr-2" /> {HEADER_CONTENT.buttons.line}
                </Button>
                <Button asChild className="w-full bg-[var(--emerald)] h-14 rounded-xl text-white font-bold">
                  <a href="#reservation" onClick={(e) => handleNavClick(e, 'reservation')}>
                    {HEADER_CONTENT.buttons.reserve}
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
