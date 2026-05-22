'use client'

import { LucideIcon } from 'lucide-react'

interface FormSelectOption {
  value: string
  label: string
}

interface FormSelectProps {
  id: string
  name: string
  label: string
  icon?: LucideIcon
  required?: boolean
  options: FormSelectOption[]
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function FormSelect({
  id,
  name,
  label,
  icon: Icon,
  required = false,
  options,
  placeholder = '選択してください',
  value,
  onChange,
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs sm:text-sm font-medium text-[var(--charcoal)] mb-1.5 sm:mb-2">
        <span className="flex items-center gap-1.5 sm:gap-2">
          {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--gold)]" />}
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      </label>
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[var(--mint-dark)] focus:border-[var(--emerald)] focus:ring-2 focus:ring-[var(--emerald)]/20 outline-none transition-all text-[var(--charcoal)] bg-white text-sm sm:text-base"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
