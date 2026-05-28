'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CTA_CONTENT } from '@/edit/cta-content'
import OnlineGuideModal from '@/components/lp/online-guide-modal'
import LineModal from '@/components/lp/line-modal'
import { Smartphone } from 'lucide-react'

// page.tsxからのPropsを受け取れるように型を定義
interface CtaSectionProps {
  onOpenGuide?: () => void
}

export default function CtaSection({ onOpenGuide }: CtaSectionProps) {
  const fontTitle = "font-sans font-bold tracking-tight"

  const [isGuideOpen, setIsGuideOpen] = useState(false)
  const [isLineOpen, setIsLineOpen] = useState(false)

  const handleOpenGuide = () => {
    if (onOpenGuide) {
      onOpenGuide()
    } else {
      setIsGuideOpen(true)
    }
  }

  const closeGuide = () => setIsGuideOpen(false)

  const handleOpenLineFromGuide = useCallback(() => {
    setIsGuideOpen(false)
    setTimeout(() => {
      setIsLineOpen(true)
    }, 150)
  }, [])

  return (
    // 💡 overflow-hidden で画面はみ出しを確実に防止
    <section className="w-full py-10 sm:py-16 relative bg-[#050A15] overflow-hidden z-10">
      
      {/* 【背景演出：青の光源を除去し、メタリックな白・グレーの洗練された光に統一】 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#050A15] via-[#050A15]/80 to-transparent z-10" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#050A15] via-[#050A15]/80 to-transparent z-10" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-transparent via-slate-50/90 to-transparent blur-3xl z-0" />
        <div className="absolute top-1/2 left-0 w-[60%] h-[80%] bg-sky-100/60 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/4 z-0" />
        <div className="absolute top-1/2 right-0 w-[60%] h-[80%] bg-white/70 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 z-0" />
      </div>

      {/* 💡 【解決策：完全なるブロック要素化】 
          flexを使わず「block」と「px-4」を組み合わせることで、
          他のコンポーネントがどう干渉しようと、絶対に左右に16pxの余白を強制します */}
      <div className="w-full max-w-6xl mx-auto relative z-20 block px-4 sm:px-6 box-border">
        
        {/* キャンペーン風の光るカードコンテナ：mx-auto で確実に中央に配置 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15),_0_0_40px_rgba(255,255,255,0.6)] ring-1 ring-inset ring-white/80 overflow-hidden relative"
        >
          {/* カード最上部のハイライト */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 shadow-[0_0_15px_rgba(255,255,255,1)] z-30" />
          
          {/* 画像エリア */}
          <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden z-20">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent z-10 mix-blend-overlay pointer-events-none" />
            
            {CTA_CONTENT.image ? (
              <Image 
                src={CTA_CONTENT.image} 
                alt="CTA Image" 
                fill 
                className="object-cover object-center scale-[1.02] transition-transform duration-700 ease-out" 
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-slate-200" />
            )}

            {/* スタイリッシュな光源 */}
            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-sky-50/90 blur-[4px] shadow-[0_0_40px_rgba(255,255,255,1),_0_0_20px_rgba(56,189,248,0.6)] z-20" />
          </div>

          {/* テキスト＆ボタンエリア */}
          <div className="w-full p-6 sm:p-10 lg:p-12 flex flex-col items-center text-center relative z-10">
            
            {/* INVITATION */}
            <div className="flex items-center justify-center gap-3 mb-5 w-full">
              <div className="w-8 h-[1px] bg-slate-500/50" />
              <span className="text-[10px] font-black tracking-[0.3em] pl-[0.3em] text-sky-700 uppercase">Invitation</span>
              <div className="w-8 h-[1px] bg-slate-500/50" />
            </div>
            
            {/* タイトル */}
            <h2 className={`${fontTitle} w-full text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tighter leading-[1.35] drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)] mb-8`}>
              {CTA_CONTENT.title.split('\n').map((line, index) => (
                <span key={index} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h2>

            {/* ボタンエリア */}
            <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-3">
              
              {/* メインボタン */}
              <Button 
                asChild
                className="w-full h-auto py-3.5 sm:py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-[0_10px_25px_rgba(15,23,42,0.4)] transition-all active:scale-95"
              >
                <a href="#reservation" className="flex flex-col items-center justify-center">
                  <span className="text-[10px] sm:text-[11px] text-sky-400 font-bold mb-1 tracking-widest opacity-90 text-center">
                    ＼ スマホ完結・24時間WEB受付中 ／
                  </span>
                  <span className="text-lg sm:text-xl font-black tracking-widest text-center">
                    {CTA_CONTENT.reserveButtonText}
                  </span>
                </a>
              </Button>

              {/* サブボタン：💡 アイコンの位置を元の「テキストのすぐ横」に戻して綺麗に配置 */}
              <Button 
                onClick={handleOpenGuide} 
                className="w-full h-14 sm:h-16 bg-white/80 hover:bg-white text-slate-800 border-2 border-slate-300/80 font-black rounded-xl shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Smartphone className="w-5 h-5 text-slate-500" />
                <span className="text-sm sm:text-base tracking-widest text-center">
                  {CTA_CONTENT.onlineButtonText}
                </span>
              </Button>
              
            </div>
          </div>
        </motion.div>
      </div>

      <OnlineGuideModal isOpen={isGuideOpen} onClose={closeGuide} onOpenLineModal={handleOpenLineFromGuide} />
      <LineModal isOpen={isLineOpen} onClose={() => setIsLineOpen(false)} />
    </section>
  )
}
