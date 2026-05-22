'use client'

import Image from 'next/image'
import { BANNER_CONTENT } from '@/edit/banner-content'

interface BannerSectionProps {
  onOpenCampaign: (id: string) => void
}

export default function BannerSection({ onOpenCampaign }: BannerSectionProps) {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* 1. md:flex-row を削除（PCで横に広がるのを阻止）
           2. sm:gap-6 を削除（スマホと同じ gap-4 に固定）
        */}
        <div className="flex flex-col items-center justify-center gap-4">
          {BANNER_CONTENT.banners.map((banner) => (
            <button
              key={banner.id}
              onClick={() => onOpenCampaign(banner.id)}
              className="relative overflow-hidden transition-all hover:brightness-105 active:scale-[0.98] shadow-md rounded-lg"
              /* スマホでの 340px 指定はそのまま維持します。
                 ただし、万が一 340px 未満の古いスマホで見た時のために
                 max-width: 100% を保険で入れています（見た目は変わりません）。
              */
              style={{ width: '340px', maxWidth: '100%', height: '120px' }}
            >
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
