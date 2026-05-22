'use client'

import { Check, X, Crown } from 'lucide-react'
import { motion } from 'framer-motion'

interface ComparisonRow {
  feature: string
  us: string | boolean
  others: string | boolean
}

interface ComparisonTableProps {
  data: ComparisonRow[]
  usLabel?: string
  usSubLabel?: string
  othersLabel?: string
  othersSubLabel?: string
}

export default function ComparisonTable({
  data,
  usLabel = '当院',
  usSubLabel = '熱破壊式',
  othersLabel = '他院',
  othersSubLabel = '蓄熱式',
}: ComparisonTableProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-[var(--mint-dark)] overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Table Header */}
      <div className="grid grid-cols-3">
        <div className="p-2 sm:p-4 md:p-6 bg-[var(--offwhite)] border-b border-r border-[var(--mint-dark)]">
          <span className="text-[10px] sm:text-xs md:text-sm text-[var(--charcoal-light)]">比較項目</span>
        </div>
        <div className="p-2 sm:p-4 md:p-6 bg-[var(--mint)] border-b border-r border-[var(--mint-dark)]">
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--gold)]" />
            <span className="font-serif font-semibold text-[var(--charcoal)] text-xs sm:text-sm md:text-base">{usLabel}</span>
          </div>
          <p className="text-[10px] sm:text-xs text-[var(--charcoal-light)] text-center mt-0.5 sm:mt-1">{usSubLabel}</p>
        </div>
        <div className="p-2 sm:p-4 md:p-6 bg-gray-100 border-b border-[var(--mint-dark)]">
          <span className="font-medium text-[var(--charcoal-light)] text-xs sm:text-sm md:text-base block text-center">{othersLabel}</span>
          <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-0.5 sm:mt-1">{othersSubLabel}</p>
        </div>
      </div>

      {/* Table Body */}
      {data.map((row, index) => (
        <motion.div
          key={index}
          className={`grid grid-cols-3 ${
            index !== data.length - 1 ? 'border-b border-[var(--mint-dark)]' : ''
          }`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
        >
          <div className="p-2 sm:p-3 md:p-5 border-r border-[var(--mint-dark)] flex items-center">
            <span className="text-[10px] sm:text-xs md:text-sm text-[var(--charcoal)]">{row.feature}</span>
          </div>
          <div className="p-2 sm:p-3 md:p-5 bg-[var(--mint-light)]/50 border-r border-[var(--mint-dark)] flex items-center justify-center">
            {typeof row.us === 'boolean' ? (
              row.us ? (
                <div className="flex items-center gap-1 sm:gap-2">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <span className="text-[10px] sm:text-xs md:text-sm text-[var(--charcoal)] font-medium hidden sm:inline">認定済</span>
                </div>
              ) : (
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              )
            ) : (
              <span className="text-[10px] sm:text-xs md:text-sm text-[var(--charcoal)] font-medium text-center">
                {row.us}
              </span>
            )}
          </div>
          <div className="p-2 sm:p-3 md:p-5 flex items-center justify-center">
            {typeof row.others === 'boolean' ? (
              row.others ? (
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              ) : (
                <div className="flex items-center gap-1 sm:gap-2">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 hidden sm:inline">未認定</span>
                </div>
              )
            ) : (
              <span className="text-[10px] sm:text-xs md:text-sm text-[var(--charcoal-light)] text-center">
                {row.others}
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
