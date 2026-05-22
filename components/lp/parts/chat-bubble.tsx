'use client'

import { User } from 'lucide-react'
import { motion } from 'framer-motion'

interface ChatBubbleProps {
  question: string
  answer: string
  index: number
}

export default function ChatBubble({
  question,
  answer,
  index,
}: ChatBubbleProps) {
  return (
    <motion.div 
      className="space-y-2 sm:space-y-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
    >
      {/* Question - User bubble (right side) */}
      <div className="flex justify-end items-end gap-1.5 sm:gap-2">
        <motion.div 
          className="bg-[var(--mint)] rounded-2xl rounded-br-md px-3 sm:px-5 py-2 sm:py-3 max-w-[85%] shadow-sm"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-[var(--charcoal)] font-medium text-xs sm:text-sm md:text-base">
            {question}
          </p>
        </motion.div>
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[var(--mint-light)] flex items-center justify-center flex-shrink-0">
          <User className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--charcoal-light)]" />
        </div>
      </div>

      {/* Answer - Staff bubble (left side) */}
      <div className="flex items-end gap-1.5 sm:gap-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 border-2 border-[var(--gold)]/30">
          <span className="text-[8px] sm:text-xs font-bold text-[var(--gold)]">Staff</span>
        </div>
        <motion.div 
          className="bg-white rounded-2xl rounded-bl-md px-3 sm:px-5 py-3 sm:py-4 max-w-[85%] shadow-md border border-[var(--mint-dark)]"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-[var(--charcoal-light)] text-[10px] sm:text-xs md:text-sm leading-relaxed">
            {answer}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
