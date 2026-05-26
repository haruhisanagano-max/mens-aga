'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  // ---------------------------------------------------------
  // ★ デザイン刷新用リモコン（カード脱却・白ベース＆一体感Seamless版）
  // ---------------------------------------------------------
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardRoundedTop = "rounded-t-xl"
  const cardRoundedBottom = "rounded-b-xl"
  
  // 💡 マシーンパートと全く同じ、枠線の極細透過ハイライト反射
  const glassBorder = "border-x border-b border-slate-700/60 border-t-white/10 border-l-white/10"
  // ---------------------------------------------------------

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    /* 💡 背景色はマシーンと合わせたディープネイビー（#050A15）をベースに採用 */
    <section id="pain" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【背景：まだらな光】マシーンパートの手法を踏襲しつつ、ペイン独自の配置と色味でボヤッとした光を散りばめました。
          セクション全体を大きく斜めにぶち抜く、強力なシアンブルーの直線光源ラインです。
          ビルドエラーを防ぐため、標準的なTailwindグラデーションのみでモヤと芯を表現しました。 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        {/* 中心を走る鋭い斜めの光の線 */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_49.8%,#38bdf8_50%,transparent_50.2%)] blur-[1px]" />
        {/* 周囲に広がる強力な光のモヤ */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_35%,#0ea5e9_50%,transparent_65%)] blur-[120px] opacity-60" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 aspect-[16/10] bg-[#050A15] relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>

              {/* テキストパネル（白系。画像との重なり部分の文字を完全に保護） */}
              <div className={`
                lg:col-span-6 
                relative z-20 
                mt-[-40px] lg:mt-0 
                ${i % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} 
                ${cardTextPadding} ${cardRounded} ${glassBorder}
                
                /* 💡 【画像グラデーション追加】画像自体を右上から白へと滑らかに溶け込ませ、
                   白のなじみ具合くらいにしたい。
                   空中（外側）に向かって、美しく深みを変える贅沢なグラデーション仕様です。
                   画像自体は不透明なので暗くなりません。 */
                bg-gradient-to-br 
                ${i % 2 === 0 
                  ? 'from-white via-white/95 to-white/85' 
                  : 'from-white/85 via-white/95 to-white'
                }
                
                shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]
                overflow-hidden
              `}>
                
                {/* 💡 【マシーンと変化をつけた斜め滲みトップライト】
                    左右のカード配置に合わせて、右上（または左上）の角からシアンブルーの光が
                    ガラスの内部に優しく、しかし確実に視認できる絶妙な強さ（0.18支線 leading-loose font-medium pt-2 border-t border-slate-700_40 leading-loose pt-2 border-t border-slate-700/30'}`} pointer-events-none z-0 />

                <div className="space-y-5 relative z-10 pl-4 border-l border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">{m.id}</span>
                    <Minus className="w-4 h-[1px] text-slate-600" />
                    <span className="text-[9px] font-extrabold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-wide uppercase">
                      Medical Approach
                    </span>
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-slate-950/60 rounded border border-slate-800/60 text-[9px] font-bold text-slate-400 tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30 overflow-hidden`}>
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-900/60 flex-col items-center text-center overflow-hidden aspect-[16/10] bg-[#050A15] relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>

              {/* テキストパネル（白系。画像との重なり部分の文字を完全に保護） */}
              <div className={`
                lg:col-span-6 
                relative z-20 
                mt-[-40px] lg:mt-0 
                ${i % 2 === 0 ? 'lg:-ml-20' : 'lg:-mr-20'} 
                ${cardTextPadding} ${cardRounded} ${glassBorder}
                
                /* 💡 【画像グラデーション追加】画像事態をグラデーションにする。
                   白のなじみ具合くらいにしたい。
                   空中（外側）に向かって、美しく深みを変える贅沢なグラデーション仕様です。
                   画像自体は不透明なので暗くなりません。 */
                bg-gradient-to-br 
                ${i % 2 === 0 
                  ? 'from-white via-white/95 to-white/85' 
                  : 'from-white/85 via-white/95 to-white'
                }
                
                shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]
                overflow-hidden
              `}>
                
                {/* 💡 【マシーンと変化をつけた斜め滲みトップライト】
                    左右のカード配置に合わせて、右上（または左上）の角からシアンブルーの光が
                    ガラスの内部に優しく、しかし確実に視認できる絶妙な強さ（0.18支線 leading-loose font-medium pt-2 border-t border-slate-700_40 leading-loose pt-2 border-t border-slate-700/30'}`} pointer-events-none z-0 />

                <div className="space-y-5 relative z-10 pl-4 border-l border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xl font-bold italic text-amber-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">{m.id}</span>
                    <Minus className="w-4 h-[1px] text-slate-600" />
                    <span className="text-[9px] font-extrabold text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2 py-0.5 rounded tracking-wide uppercase">
                      Medical Approach
                    </span>
                  </div>
                  
                  <h4 className="font-sans text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                    {m.title}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-slate-950/60 rounded border border-slate-800/60 text-[9px] font-bold text-slate-400 tracking-[0.1em]">
                    {m.subTitle}
                  </div>
                  
                  <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30 overflow-hidden`}>
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-900/60 flex-col items-center text-center overflow-hidden aspect-[16/10] bg-[#050A15] relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]`}>
                  <Image 
                    src={m.image} 
                    alt="" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>

              {/* カードの下部外部の薄い接地用シャドウ（維持） */}
              <div className="absolute inset-0 z-0 bottom-[-30px] left-1/2 -translate-x-1/2 w-[70%] h-[30px] bg-sky-400/5 blur-[20px] pointer-events-none rounded-full" />
            </div>
          ))}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-900/60 flex-col items-center text-center overflow-hidden`}>
            <div className="w-[1px] h-12 bg-gradient-to-b from-sky-400/20 via-sky-500/5 to-transparent mb-8" />
            <div className="space-y-8">
              <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight tracking-tighter">
                {PAIN_CONTENT.reassurance.title}
              </h3>
              <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-slate-950/80 rounded-full text-slate-400 text-[10px] sm:text-xs border border-slate-800/60 font-bold shadow-wide">
                <ShieldCheck className="w-4 h-4 text-sky-400/60" />
                <span>{PAIN_CONTENT.reassurance.note}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
