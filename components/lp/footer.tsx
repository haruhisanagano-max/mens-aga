'use client'

import Image from 'next/image'
import { FOOTER_CONTENT } from '@/edit/footer'

export default function Footer() {
  const { logoImage, logoWidth, logoHeight, style, copyright, links } = FOOTER_CONTENT;

  return (
    <footer 
      style={{ 
        backgroundColor: style.backgroundColor,
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        borderTop: `1px solid ${style.borderTopColor}`
      }}
      className="relative w-full"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          
          {/* 🖼️ ロゴエリア：余白はリモコン(style.logoMarginBottom)で制御 */}
          <div 
            style={{ marginBottom: style.logoMarginBottom }}
            className="flex justify-center transition-transform duration-300 hover:scale-105"
          >
            {logoImage ? (
              <Image
                src={logoImage}
                alt="LUXE BEAUTY CLINIC"
                width={logoWidth}
                height={logoHeight}
                className="object-contain"
                priority
              />
            ) : (
              // 画像がない場合のみ出す最低限のテキスト
              <div className="font-serif text-lg tracking-[0.2em] text-[var(--charcoal)]">
                LUXE BEAUTY CLINIC
              </div>
            )}
          </div>

          {/* 🔗 リンク（データがある場合のみコンパクトに表示） */}
          {links && links.length > 0 && (
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
              {links.map((link, i) => (
                <a key={i} href={link.href} className="text-[10px] text-[var(--charcoal-light)] hover:text-[var(--gold)] transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* 📜 コピーライト：pt-8などのクラスを削除して隙間を解消 */}
          <div className="w-full max-w-[200px] text-center border-t border-gray-100 pt-3">
            <p className="text-[9px] tracking-widest text-[var(--charcoal-light)] opacity-50 uppercase">
              {copyright}
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
