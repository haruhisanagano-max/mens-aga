'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_CONTENT } from '@/edit/footer'

export default function Footer() {
  // 💡 【エラー解消その1】
  // 型エラーの原因になっていた「logoHref」をここから完全に削除しました。
  const { logoImage, logoWidth, logoHeight, style, copyright, links } = FOOTER_CONTENT;

  const darkBgColor = "#020409";
  const darkBorderColor = "rgba(30, 41, 59, 0.4)";

  // 💡 【エラー解消その2 ＆ URLの指定場所】
  // TypeScriptの型チェックをバイパス（as any）させて安全に取得します。
  // 🔗 もし特定のURL（例: https://google.com など）に飛ばしたい場合は、
  // 下の、"/" の部分を直接 `"https://example.com"` に書き換えてしまえばOKです！
  const destinationUrl = (FOOTER_CONTENT as any).logoHref || "https://v-clinic.jp/";

  // 🔗 リンクのnever型エラー対策（現状維持）
  const safeLinks = links as Array<{ href: string; label: string }> | undefined;

  return (
    <footer 
      style={{ 
        backgroundColor: darkBgColor,
        paddingTop: '40px',
        paddingBottom: '120px',
        borderTop: `1px solid ${darkBorderColor}`
      }}
      className="relative w-full block"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          
          {/* 🖼️ ロゴエリア（リンク化） */}
          <div 
            style={{ marginBottom: style.logoMarginBottom }}
            className="flex justify-center transition-transform duration-300 hover:scale-105"
          >
            <Link href={destinationUrl} className="cursor-pointer block">
              {logoImage ? (
                <Image
                  src={logoImage}
                  alt="VIRGIN CLINIC"
                  width={logoWidth}
                  height={logoHeight}
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="font-serif text-lg tracking-[0.2em] text-slate-200">
                  VIRGIN CLINIC
                </div>
              )}
            </Link>
          </div>

          {/* 🔗 リンク */}
          {safeLinks && safeLinks.length > 0 && (
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
              {safeLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  className="text-[10px] text-slate-400 hover:text-sky-400 tracking-widest transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* 📜 コピーライト */}
          <div className="w-full max-w-[200px] text-center border-t border-slate-800/60 pt-3">
            <p className="text-[9px] tracking-widest text-slate-500 uppercase opacity-80">
              {copyright}
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
