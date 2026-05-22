'use client'

import { LucideIcon } from 'lucide-react'

interface ClinicInfoCardProps {
  icon: LucideIcon
  title: string
  children: React.ReactNode
}

export default function ClinicInfoCard({
  icon: Icon,
  title,
  children,
}: ClinicInfoCardProps) {
  return (
    <div className="flex items-start gap-2 sm:gap-3 bg-[var(--mint-light)]/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="font-semibold text-[var(--charcoal)] text-xs sm:text-sm mb-0.5 sm:mb-1">{title}</h4>
        <div className="text-xs sm:text-sm text-[var(--charcoal-light)]">{children}</div>
      </div>
    </div>
  )
}
