'use client'

import { useState, useEffect, useCallback } from 'react'
import Header from '@/components/lp/header'
import FirstView from '@/components/lp/first-view'
import CampaignOffer from '@/components/lp/campaign-offer'
import CampaignModal from '@/components/lp/campaign-modal'
import BeforeAfter from '@/components/lp/before-after'
import WorrySection from '@/components/lp/worry-section'
import SelectionGuide from '@/components/lp/selection-guide' 
import MachineDeepDive from '@/components/lp/machine-deep-dive'
import PainManagement from '@/components/lp/pain-management'
import Comparison from '@/components/lp/comparison'
import ZeroYenItems from '@/components/lp/zero-yen-items'
import PricingPlan from '@/components/lp/pricing-plan'
import ClinicStaff from '@/components/lp/clinic-staff'
import FlowFaq from '@/components/lp/flow-faq'
import ReservationForm from '@/components/lp/reservation-form'
import Footer from '@/components/lp/footer' 
import FloatingCta from '@/components/lp/floating-cta'
import LineModal from '@/components/lp/line-modal'
import CtaSection from '@/components/lp/cta-section'
import OnlineGuideModal from '@/components/lp/online-guide-modal'

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)
  
  // 状態管理
  const [isLineModalOpen, setIsLineModalOpen] = useState(false)
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false)
  const [isCampaignOpen, setIsCampaignOpen] = useState(false)
  const [activeCampaignId, setActiveCampaignId] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // スクロールアニメーション
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // スムーズスクロール
  const handleSmoothScroll = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLAnchorElement
    if (target.tagName === 'A' && target.hash) {
      const element = document.querySelector(target.hash)
      if (element) {
        e.preventDefault()
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [handleSmoothScroll])

  // --- モーダル操作系関数 ---
  const openLineModal = useCallback(() => setIsLineModalOpen(true), [])
  const closeLineModal = useCallback(() => setIsLineModalOpen(false), [])
  
  const openGuideModal = useCallback(() => setIsGuideModalOpen(true), [])
  const closeGuideModal = useCallback(() => setIsGuideModalOpen(false), [])

  // キャンペーンバナー操作
  const openCampaignModal = useCallback((id: string) => {
    setActiveCampaignId(id)
    setIsCampaignOpen(true)
  }, [])

  const closeCampaignModal = useCallback(() => {
    setIsCampaignOpen(false)
    setTimeout(() => setActiveCampaignId(null), 300)
  }, [])

  // キャンペーンからLINE選択へ切り替えるリレー関数
  const handleOpenLineFromCampaign = useCallback(() => {
    setIsCampaignOpen(false)
    setTimeout(() => {
      setIsLineModalOpen(true)
    }, 150)
  }, [])

  // ガイドからLINE選択へ切り替えるリレー関数
  const handleOpenLineFromGuide = useCallback(() => {
    setIsGuideModalOpen(false)
    setTimeout(() => {
      setIsLineModalOpen(true)
    }, 100)
  }, [])

  return (
    <main className="min-h-screen bg-unified-gradient overflow-x-hidden">
      <Header scrollY={scrollY} onLineClick={openLineModal} />
      
      <FirstView />
      
      {/* 💡 修正1: 統合した最下部バナーが動くように関数を紐付け */}
      <CampaignOffer onOpenCampaign={openCampaignModal} />

      {/* 💡 旧BannerSection（bg-whiteで分断されていた独立パート）はここから完全に撤去しました */}

      <WorrySection />

      <BeforeAfter />
      <SelectionGuide />
      <MachineDeepDive />

      <CtaSection onOpenGuide={openGuideModal} />

      <PainManagement />
      <Comparison />
      <ZeroYenItems />
      
      {/* 💡 修正2: 料金表の下に統合したバナーも動くように関数を紐付け */}
      <PricingPlan onOpenCampaign={openCampaignModal} />
        
      <CtaSection onOpenGuide={openGuideModal} />
      
      <ClinicStaff />

      <FlowFaq />
      <ReservationForm />

      <Footer />
      <FloatingCta onLineClick={openLineModal} />
      
      {/* --- 各種モーダル --- */}
      <OnlineGuideModal 
        isOpen={isGuideModalOpen} 
        onClose={closeGuideModal}
        onOpenLineModal={handleOpenLineFromGuide} 
      />

      <CampaignModal 
        isOpen={isCampaignOpen} 
        onClose={closeCampaignModal} 
        campaignId={activeCampaignId} 
        onOpenLineModal={handleOpenLineFromCampaign} 
      />

      <LineModal isOpen={isLineModalOpen} onClose={closeLineModal} />
    </main>
  )
}
