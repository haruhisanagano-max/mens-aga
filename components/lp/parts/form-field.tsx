'use client'

import { LucideIcon } from 'lucide-react'

interface FormFieldProps {
  id: string
  name: string
  label: string
  icon?: LucideIcon
  required?: boolean
  type?: 'text' | 'email' | 'tel' | 'date'
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormField({
  id,
  name,
  label,
  icon: Icon,
  required = false,
  type = 'text',
  placeholder,
  value,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs sm:text-sm font-medium text-[var(--charcoal)] mb-1.5 sm:mb-2">
        <span className="flex items-center gap-1.5 sm:gap-2">
          {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--gold)]" />}
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[var(--mint-dark)] focus:border-[var(--emerald)] focus:ring-2 focus:ring-[var(--emerald)]/20 outline-none transition-all text-[var(--charcoal)] text-sm sm:text-base"
        placeholder={placeholder}
      />
    </div>
  )
}
