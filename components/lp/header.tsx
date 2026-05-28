'use client'

import { Menu, X } from 'lucide-react'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { HEADER_CONTENT } from '@/edit/header-content'

interface HeaderProps {
  scrollY: number
  onLineClick?: () => void // 💡 使わなくなっても親から渡されてエラーにならないよう残してあります
}

export default function Header({ scrollY }: HeaderProps) {
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
      // 💡 前回の超透明度（/60）を維持。ボタンが消えたことで、より一層LPが綺麗に透けて見えます。
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050A15]/60 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-2 border-b border-slate-800/40' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12 sm:h-16">
        
        {/* 🖼️ ロゴエリア */}
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
              priority
            />
          ) : (
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tighter text-slate-200">
              {HEADER_CONTENT.logoText}
            </span>
          )}
        </div>

        {/* 🔗 ナビゲーション (PC)：ホバーでサイバーブルー（sky-400）に光る仕様 */}
        <nav className="hidden lg:flex items-center gap-8">
          {HEADER_CONTENT.nav.map((item) => (
            <a 
              key={item.id} href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)}
              className={`text-[12px] font-bold tracking-wider transition-colors hover:text-sky-400 ${
                isScrolled ? 'text-slate-300' : 'text-white drop-shadow-md'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 🍔 ハンバーガーメニュー（スマホ用） 
            PCボタンを消去したため、右端にこのかっこいい光源ボタンだけが綺麗にフィットします */}
        <div className="flex items-center lg:hidden">
          <motion.button 
            className={`w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-300 ${
              isMenuOpen
                ? 'bg-[#091124] border-slate-800 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                : isScrolled
                  ? 'bg-[#091124]/90 border-slate-800 text-slate-300 hover:text-sky-400'
                  : 'bg-transparent border-white/20 text-white hover:bg-white/10'
            }`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>

      </div>

      {/* 📱 スマホメニュー（ドロワー） */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-[#050A15]/90 backdrop-blur-xl border-t border-slate-800/60 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {/* 💡 スマホメニュー下部にあったLINEと予約のデカいボタンをすべて消去。
                メニューを開いた時も、リンクだけがスマートに並ぶ極上仕様になりました。 */}
            <nav className="flex flex-col py-2 px-6">
              {HEADER_CONTENT.nav.map((item) => (
                <a 
                  key={item.id} href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)}
                  className="py-4 text-base font-bold text-slate-200 border-b border-slate-900/40 flex items-center justify-between hover:text-sky-400 transition-colors"
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
