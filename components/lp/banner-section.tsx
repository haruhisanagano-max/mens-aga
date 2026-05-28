'use client'

import Image from 'next/image'
import { BANNER_CONTENT } from '@/edit/banner-content'

interface BannerSectionProps {
  onOpenCampaign: (id: string) => void
}

export default function BannerSection({ onOpenCampaign }: BannerSectionProps) {
  return (
    // 💡 上下の余白を少しゆったり取り、前後のセクションとの間合いを調整
    <section className="py-12 sm:py-20 relative bg-[#050A15] overflow-hidden z-10">
      
      {/* 💡 【背景演出：明暗をつけて立体感を出すライティング】 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 上下セクションへの自然なグラデーションフェード */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#050A15] to-transparent z-10" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050A15] to-transparent z-10" />

        {/* 💡 バナーの裏側から漏れ出す光（メタリックな白＋青系のオーラ） */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-5xl h-[120%] bg-slate-100/5 blur-[100px] z-0" />
        <div className="absolute top-1/2 left-[15%] w-[400px] h-[400px] bg-sky-400/20 blur-[130px] rounded-full -translate-y-1/2 z-0" />
        <div className="absolute top-1/2 right-[15%] w-[400px] h-[400px] bg-cyan-300/15 blur-[130px] rounded-full -translate-y-1/2 z-0" />
      </div>

      <div className="w-full relative z-20 flex flex-col items-center px-4 sm:px-6">
        
        {/* 💡 他のセクションのカードと同じ幅（max-w-4xl）に合わせるコンテナ */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8">
          
          {BANNER_CONTENT.banners.map((banner) => (
            <button
              key={banner.id}
              onClick={() => onOpenCampaign(banner.id)}
              // 💡 固定サイズを廃止し、w-full と aspect-[17/6]（元画像の比率）でレスポンシブ化
              className="relative w-full aspect-[17/6] overflow-hidden transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_35px_rgba(56,189,248,0.3)] active:scale-[0.98] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl sm:rounded-3xl border border-slate-700/50 group"
            >
              {/* ホバー時にバナーの上をキラッと光が走るエフェクト（高級感アップ） */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out z-10 pointer-events-none" />
              
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                className="object-cover"
                priority // バナーは視認性が重要なので優先ロード
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
