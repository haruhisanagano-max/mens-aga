import type { Metadata, Viewport } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-serif' })
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: '医療脱毛キャンペーン | ヴァージンクリニック',
  description: 'ジェントルマックスプロ導入。キャンペーン実施中。',
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

function PCSidebar() {
  const menus = [
    { label: "TOP", href: "#" },
    { label: "キャンペーン", href: "#campaign" },
    { label: "お悩み", href: "#transformation" },
    { label: "料金表", href: "#pricing" },
    { label: "クリニック", href: "#clinic" },
    { label: "予約", href: "#reservation" },
  ];
  return (
    <nav className="pc-sidebar-nav hidden flex-col gap-6 w-[150px]">
      <div className="flex flex-col gap-1 border-l-2 border-[#C9A962]/20 pl-6">
        <span className="text-[10px] font-black text-[#1A2F2A] tracking-widest mb-4 uppercase opacity-50">Menu</span>
        {menus.map((m, i) => (
          <a key={i} href={m.href} className="text-[13px] font-bold text-[#1A2F2A] hover:text-[#C9A962] transition-all py-2 hover:translate-x-1">{m.label}</a>
        ))}
      </div>
    </nav>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${notoSansJP.variable} scroll-smooth`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-53RKSNF');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="font-sans antialiased min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-53RKSNF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <PCSidebar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
