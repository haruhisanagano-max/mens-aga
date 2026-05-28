'use client'

import { TrendingUp, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BEFORE_AFTER_CONTENT } from '@/edit/before-after-content'

export default function BeforeAfter() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100"

  // 💡 【完璧な細さとデザイン】動かない光の筋（サイバーライン）の共通スタイル
  const cyberLineStyle = "absolute h-[1px] bg-gradient-to-r from-transparent pointer-events-none z-0 opacity-60";

  return (
    /* 💡 背景色はマシーン・痛み基準の最高級ネイビー（#050A15）へ完全固定 */
    <section id="transformation" className="py-15 sm:py-20 relative bg-[#050A15] text-slate-400 overflow-hidden">
      
      {/* 🔴 背景演出：まだらな光 ＋ 画像に隠れない外周に配置した「12箇所の青いサイバーライン」 */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 既存のまだら（斑）の光 */}
        <div className="absolute top-[5%] left-[5%] w-[450px] h-[450px] bg-sky-500/40 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[-5%] w-[550px] h-[550px] bg-indigo-500/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-400/30 blur-[130px] rounded-full" />

        {/* 💡 【すべて青系に統一 ＆ 画像を完全に避けて精密に12箇所配置】 */}
        <div className="absolute inset-0 z-0">
          
          {/* 1. 最上部ヘッダー左側 */}
          <div className={`${cyberLineStyle} top-[2%] left-[2%] w-[280px] rotate-[135deg] h-[1px] via-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.6)]`} />
          
          {/* 2. 最上部ヘッダー右側 */}
          <div className={`${cyberLineStyle} top-[4%] right-[3%] w-[240px] rotate-[45deg] h-[1px] via-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]`} />
          
          {/* 3. 1枚目（縦長画像）の左側アウタースペース */}
          <div className={`${cyberLineStyle} top-[14%] left-[-2%] w-[260px] rotate-[160deg] h-[1px] via-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.5)]`} />
          
          {/* 4. 1枚目（縦長画像）の右側アウタースペース */}
          <div className={`${cyberLineStyle} top-[22%] right-[-1%] w-[250px] rotate-[35deg] h-[1px] via-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]`} />
          
          {/* 5. 1枚目画像と信頼データの間（左側） */}
          <div className={`${cyberLineStyle} top-[33%] left-[1%] w-[300px] rotate-[20deg] h-[0.5px] via-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.4)]`} />
          
          {/* 6. 信頼データの右側アウタースペース */}
          <div className={`${cyberLineStyle} top-[40%] right-[2%] w-[280px] rotate-[145deg] h-[1px] via-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]`} />
          
          {/* 7. タイムライン1枚目の左側余白 */}
          <div className={`${cyberLineStyle} top-[50%] left-[-1%] w-[340px] rotate-[25deg] h-[0.5px] via-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.5)]`} />
          
          {/* 8. タイムライン1枚目と2枚目の間の隙間（右側） */}
          <div className={`${cyberLineStyle} top-[59%] right-[1%] w-[290px] rotate-[125deg] h-[1px] via-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)]`} />
          
          {/* 9. タイムライン2枚目の左側アウタースペース */}
          <div className={`${cyberLineStyle} top-[68%] left-[2%] w-[320px] rotate-[40deg] h-[1px] via-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.5)]`} />
          
          {/* 10. タイムライン2枚目と3枚目の間の隙間（右側） */}
          <div className={`${cyberLineStyle} top-[76%] right-[-2%] w-[350px] rotate-[155deg] h-[0.5px] via-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]`} />
          
          {/* 11. タイムライン3枚目の左下アウタースペース */}
          <div className={`${cyberLineStyle} top-[86%] left-[-1%] w-[290px] rotate-[110deg] h-[1px] via-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.6)]`} />
          
          {/* 12. フッターノートの右下スペース */}
          <div className={`${cyberLineStyle} bottom-[4%] right-[2%] w-[270px] rotate-[45deg] h-[1px] via-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]`} />

        </div>
      </div>

      <div className="max-w-full mx-auto px-6 relative z-10">
        
        {/* 🔴 Header：元の美しい余白を維持し、参照コードの手法で完璧にタイトル発光 */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-4 uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
            The Evolution of Skin
          </span>
          <div className="relative inline-block">
            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]`}>
              {BEFORE_AFTER_CONTENT.sectionTitle}
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-70">
            {BEFORE_AFTER_CONTENT.sectionSubtitle}
          </p>
        </div>

        {/* 🔴 ギャラリー：上の1枚（💡スマホでは枠なし画面幅いっぱい表示、PCなどの大画面ではサイズを自動調整） */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {BEFORE_AFTER_CONTENT.gallery.map((item, i) => (
            <motion.div
              key={i}
              className="group relative w-[calc(100%+3rem)] -mx-6 sm:w-full sm:mx-auto sm:max-w-md md:max-w-lg"
            >
              {/* スマホ全幅時はrounded-none、PC等で縮む時は他パート共通の rounded-xl に変化 */}
              <div className="aspect-[3/4] relative overflow-hidden rounded-none sm:rounded-xl bg-[#050A15]">
                {item.image && <Image src={item.image} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-6 sm:left-8 text-white text-left">
                  <p className="text-[10px] font-bold tracking-widest uppercase opacity-70 mb-1">{item.title}</p>
                  <p className="text-xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔴 信頼データ：3列（元の完璧な余白と線をダークサイバー仕様に同期） */}
        <div className="grid grid-cols-3 gap-2 mb-12 py-8 border-y border-slate-800/60">
          {BEFORE_AFTER_CONTENT.trustData.map((data, i) => (
            <div key={i} className="text-center">
              <p className="text-[9px] font-bold text-slate-500 mb-2 uppercase tracking-tighter">{data.label}</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-sans text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{data.value}</span>
                <span className="text-[10px] font-bold text-amber-300">{data.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 🔴 進化のタイムライン：下の3枚（💡角丸を他パート共通の rounded-xl に完璧に統一） */}
        <div className="space-y-16 relative">
          {BEFORE_AFTER_CONTENT.timelineSteps.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              
              {/* 画像エリアコンテナ：元の比率と横幅を維持 */}
              <div className="w-full relative max-w-xl mx-auto">
                
                {/* 💡 【修正：裏光源レイヤーの不透明度をほんの少しだけ引き算してマイルド化】 */}
                <div className="absolute inset-[-2px] bg-sky-500/30 rounded-xl blur-[8px] pointer-events-none" />
                <div className="absolute inset-[-1px] bg-cyan-400/25 rounded-xl blur-[4px] pointer-events-none" />
                
                {/* 💡 【画像コンテナ本体：アウターシャドウの光量も 0.4 ➔ 0.25 へ上品に微減衰】 */}
                <div className="aspect-video relative rounded-xl overflow-hidden border border-sky-400/30 bg-[#050A15] shadow-[0_0_30px_rgba(56,189,248,0.25)] z-10">
                  {step.image && <Image src={step.image} alt="" fill className="object-cover opacity-95" />}
                  <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-md z-30">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-300 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" />
                    <span className="text-[9px] font-black tracking-widest text-slate-200 uppercase">{step.session}</span>
                  </div>
                </div>
              </div>

              {/* テキストエリア：元の美しい w-full text-center に完全復元 */}
              <div className="w-full text-center">
                {/* 💡 【タイトル発光】白から青への極上グラデーション＆drop-shadow発光 */}
                <h4 className="font-sans text-xl sm:text-2xl font-bold bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                  {step.title}
                </h4>
                <p className="text-slate-300 leading-loose text-sm font-medium opacity-85 max-w-xl mx-auto">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* 🔴 Footer Note */}
        <div className="mt-18 text-center px-4">
           <div className="inline-flex items-start gap-3 px-6 py-4 bg-slate-900/60 rounded-xl text-slate-400 text-[10px] sm:text-xs border border-slate-700/60 font-bold tracking-tight shadow-inner text-left">
             <ShieldCheck className="w-5 h-5 flex-shrink-0 text-sky-400/70 mt-0.5" />
             <span className="opacity-80">※効果には個人差があります。適切な回数はカウンセリングにてご提案いたします。</span>
           </div>
        </div>

      </div>
    </section>
  )
}
