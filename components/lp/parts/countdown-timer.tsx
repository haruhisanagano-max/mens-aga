'use client'

import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'
import { motion } from 'framer-motion'

interface CountdownTimerProps {
  initialDays?: number
  initialHours?: number
  initialMinutes?: number
  initialSeconds?: number
  label?: string
}

export default function CountdownTimer({
  initialDays = 3,
  initialHours = 12,
  initialMinutes = 45,
  initialSeconds = 30,
  label = 'キャンペーン終了まで',
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 23
          days--
        }
        if (days < 0) {
          days = 0
          hours = 0
          minutes = 0
          seconds = 0
        }
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: '日' },
    { value: timeLeft.hours, label: '時間' },
    { value: timeLeft.minutes, label: '分' },
    { value: timeLeft.seconds, label: '秒' },
  ]

  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A962]" />
        <span className="text-xs sm:text-sm font-medium text-white tracking-wider uppercase">
          {label}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-6 max-w-lg mx-auto">
        {timeUnits.map((item, index) => (
          <motion.div 
            key={index} 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          >
            <div className="bg-gradient-to-b from-[#252525] to-[#1A1A1A] border border-[#C9A962]/40 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-5 mb-1 sm:mb-2 shadow-inner">
              <span 
                className="font-mono text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#C9A962] tracking-tighter block"
                style={{ 
                  textShadow: '0 0 20px rgba(201, 169, 98, 0.4)',
                  fontFamily: "'Oswald', 'Bebas Neue', sans-serif"
                }}
              >
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm text-white/60 uppercase tracking-wider">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
