'use client'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FaqItemProps {
  question: string
  answer: string
  value: string
}

export default function FaqItem({
  question,
  answer,
  value,
}: FaqItemProps) {
  return (
    <AccordionItem
      value={value}
      className="border border-[var(--mint-dark)] rounded-lg sm:rounded-xl px-3 sm:px-4 data-[state=open]:bg-[var(--mint-light)]/30"
    >
      <AccordionTrigger className="text-left text-[var(--charcoal)] hover:no-underline py-3 sm:py-4">
        <span className="flex items-start gap-2 sm:gap-3">
          <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--mint)] flex items-center justify-center text-[10px] sm:text-xs font-medium text-[var(--charcoal)]">
            Q
          </span>
          <span className="text-xs sm:text-sm font-medium pr-4">{question}</span>
        </span>
      </AccordionTrigger>
      <AccordionContent className="text-[10px] sm:text-xs md:text-sm text-[var(--charcoal-light)] pl-7 sm:pl-9 pb-3 sm:pb-4">
        {answer}
      </AccordionContent>
    </AccordionItem>
  )
}
