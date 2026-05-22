interface SectionDividerProps {
  fromColor: string
  toColor: string
  height?: number
}

export default function SectionDivider({ fromColor, toColor, height = 60 }: SectionDividerProps) {
  return (
    <div 
      className="relative w-full"
      style={{ 
        height: `${height}px`,
        background: `linear-gradient(to bottom, ${fromColor} 0%, ${toColor} 100%)`
      }}
    />
  )
}
