'use client'

import { motion } from 'framer-motion'

interface ClinicTabProps {
  name: string
  isActive: boolean
  onClick: () => void
}

export default function ClinicTab({
  name,
  isActive,
  onClick,
}: ClinicTabProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 sm:py-4 md:py-5 px-2 sm:px-4 md:px-6 font-semibold text-xs sm:text-sm md:text-base transition-all relative ${
        isActive
          ? 'bg-[var(--emerald)] text-white'
          : 'bg-[var(--mint-light)] text-[var(--charcoal)] hover:bg-[var(--mint)]'
      }`}
    >
      <span className="block truncate">{name}</span>
      {isActive && (
        <motion.div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full z-10"
          layoutId="clinicTab"
        >
          <div className="w-0 h-0 border-l-6 sm:border-l-8 border-r-6 sm:border-r-8 border-t-6 sm:border-t-8 border-transparent border-t-[var(--emerald)]" />
        </motion.div>
      )}
    </button>
  )
}
