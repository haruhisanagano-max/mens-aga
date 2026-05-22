'use client'

import { motion } from 'framer-motion'

interface PartialPlan {
  name: string
  sessions: number
  price: number
  monthlyPrice: number
}

interface PartialPlanTableProps {
  plans: PartialPlan[]
  title?: string
}

export default function PartialPlanTable({
  plans,
  title = '部位別プラン',
}: PartialPlanTableProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-[var(--mint-dark)] p-4 sm:p-6 md:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-[var(--charcoal)] text-center mb-4 sm:mb-6">
        {title}
      </h3>
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <table className="w-full min-w-[400px] sm:min-w-[500px]">
          <thead>
            <tr className="border-b border-[var(--mint-dark)]">
              <th className="text-left py-2 sm:py-3 px-3 sm:px-4 text-[10px] sm:text-xs md:text-sm font-medium text-[var(--charcoal)]">部位</th>
              <th className="text-center py-2 sm:py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm font-medium text-[var(--charcoal)]">回数</th>
              <th className="text-right py-2 sm:py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm font-medium text-[var(--charcoal)]">料金（税込）</th>
              <th className="text-right py-2 sm:py-3 px-3 sm:px-4 text-[10px] sm:text-xs md:text-sm font-medium text-[var(--charcoal)]">月々</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <tr key={index} className="border-b border-[var(--mint-dark)]/50 last:border-b-0">
                <td className="py-2 sm:py-3 px-3 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[var(--charcoal)]">{plan.name}</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[var(--charcoal-light)] text-center">{plan.sessions}回</td>
                <td className="py-2 sm:py-3 px-2 sm:px-4 text-[10px] sm:text-xs md:text-sm font-semibold text-[var(--charcoal)] text-right">
                  ¥{plan.price.toLocaleString()}
                </td>
                <td className="py-2 sm:py-3 px-3 sm:px-4 text-[10px] sm:text-xs md:text-sm text-[var(--charcoal-light)] text-right">
                  ¥{plan.monthlyPrice.toLocaleString()}〜
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
