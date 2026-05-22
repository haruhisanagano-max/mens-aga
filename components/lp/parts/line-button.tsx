'use client'

import { Button } from '@/components/ui/button'
import LineIcon from './line-icon'

interface LineButtonProps {
  onClick: () => void
  text?: string
  variant?: 'filled' | 'outline'
  fullWidth?: boolean
}

export default function LineButton({
  onClick,
  text = 'LINEで相談',
  variant = 'filled',
  fullWidth = false,
}: LineButtonProps) {
  if (variant === 'filled') {
    return (
      <Button
        onClick={onClick}
        className={`bg-[#06C755] hover:bg-[#05b34d] text-white ${fullWidth ? 'w-full' : ''}`}
      >
        <span className="flex items-center justify-center gap-2">
          <LineIcon className="w-5 h-5" />
          <span className="text-sm font-semibold">{text}</span>
        </span>
      </Button>
    )
  }

  return (
    <Button
      onClick={onClick}
      variant="outline"
      className={`border-[#06C755] text-[#06C755] hover:bg-[#06C755]/10 ${fullWidth ? 'w-full' : ''}`}
    >
      <span className="flex items-center justify-center gap-2">
        <LineIcon className="w-5 h-5" />
        <span className="text-sm font-semibold">{text}</span>
      </span>
    </Button>
  )
}
