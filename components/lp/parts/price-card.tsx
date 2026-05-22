'use client'

import { Check, CreditCard, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface PriceCardProps {
  name: string
  subtitle: string
  sessions: number
  originalPrice: number
  campaignPrice: number
  monthlyPrice: number
  features: string[]
  popular?: boolean
  index?: number
}

export default function PriceCard({
  name,
  subtitle,
  sessions,
  originalPrice,
  campaignPrice,
  monthlyPrice,
  features,
  popular = false,
  index = 0,
}: PriceCardProps) {
  return (
    <motion.div
      className={`relative bg-white rounded-xl sm:rounded-2xl shadow-lg border overflow-hidden ${
        popular ? 'border-[var(--gold)] ring-2 ring-[var(--gold)]/20' : 'border-[var(--mint-dark)]'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {popular && (
        <div className="absolute top-0 left-0 right-0 bg-[var(--gold)] text-white text-[10px] sm:text-xs font-medium text-center py-1.5 sm:py-2">
          <Sparkles className="w-3 h-3 inline-block mr-1" />
          人気No.1
        </div>
      )}
      
      <div className={`p-4 sm:p-6 md:p-8 ${popular ? 'pt-10 sm:pt-12' : ''}`}>
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-[var(--charcoal)]">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--charcoal-light)]">{subtitle}</p>
          <p className="text-[10px] sm:text-xs text-[var(--charcoal-light)] mt-0.5 sm:mt-1">{sessions}回コース</p>
        </div>

        <div className="text-center mb-4 sm:mb-6">
          <div className="text-xs sm:text-sm text-[var(--charcoal-light)] line-through">
            ¥{originalPrice.toLocaleString()}
          </div>
          <div className="flex items-baseline justify-center gap-1 mt-1 flex-wrap">
            <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--charcoal)]">
              ¥{campaignPrice.toLocaleString()}
            </span>
            <span className="text-[10px] sm:text-sm text-[var(--charcoal-light)]">（税込）</span>
          </div>
          <div className="flex items-center justify-center gap-1 sm:gap-2 mt-2 sm:mt-3">
            <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--gold)]" />
            <span className="text-[10px] sm:text-sm text-[var(--charcoal-light)]">
              月々<span className="font-semibold text-[var(--charcoal)]">¥{monthlyPrice.toLocaleString()}</span>〜
            </span>
          </div>
        </div>

        <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--charcoal-light)]">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className={`w-full text-xs sm:text-sm ${
            popular
              ? 'bg-[var(--emerald)] hover:bg-[var(--emerald-light)] text-white'
              : 'bg-[var(--mint)] hover:bg-[var(--mint-dark)] text-[var(--charcoal)]'
          }`}
        >
          <a href="#reservation">このプランで予約</a>
        </Button>
      </div>
    </motion.div>
  )
}
