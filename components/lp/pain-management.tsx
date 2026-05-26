'use client'

import Image from 'next/image'
import { ShieldCheck, Minus } from 'lucide-react'
import { PAIN_CONTENT } from '@/edit/pain-content'

export default function PainManagement() {
  const fontTitle = "font-sans font-bold tracking-tight text-slate-100" 
  const sectionPadding = "py-16 sm:py-28"
  const headerBottomMargin = "mb-12 sm:mb-20"
  const cardRoundedTop = "rounded-t-xl"
  const cardRoundedBottom = "rounded-b-xl"
  
  // 💡 マシーンパートと全く同じ、枠線の極細透過ハイライト反射
  const glassBorder = "border-x border-b border-slate-700/60 border-t-white/10 border-l-white/10"

  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };

  return (
    /* 背景色はマシーンと合わせたディープネイビー（#050A15）をベースに採用 */
    <section id="pain" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>
      
      {/* 💡 【背景：まだらな光】マシーンパートを踏襲しつつ、ペイン独自の配置と色味でボヤッとした光を散りばめました */}
      <div className="absolute top-[10%] right-[10%] w-[450px] h-[450px] bg-sky-500/20 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[45%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/15 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[20%] w-[550px] h-[550px] bg-cyan-400/15 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        {PAIN_CONTENT.sectionBgImage && (
          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />
        )}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* 🔴 Header */}
        <div className={`text-center ${headerBottomMargin}`}>
          <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-4 uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
            {PAIN_CONTENT.badge}
          </span>
          <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-6 leading-tight`}>
            {PAIN_CONTENT.mainTitle.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-70">
            {PAIN_CONTENT.mainSubtitle}
          </p>
        </div>

        {/* 🔴 Measures (各施策) */}
        <div className="space-y-16 sm:space-y-28 mb-20">
          {/* 💡 【バグ修正】構文エラーを防ぐため、明示的な return を使用する安全な書き方に変更しました */}
          {PAIN_CONTENT.measures.map((m, i) => {
            return (
              <div key={i} className="relative flex flex-col items-center w-full gap-0" style={gpuStyle}>
                
                {/* 背景の巨大ID番号 */}
                <span className="font-sans text-[10rem] sm:text-[16rem] font-black text-slate-900 opacity-[0.4] absolute -top-20 right-4 italic pointer-events-none select-none z-0">
                  {m.id}
                </span>

                {/* 1️⃣ 上側：画像フィールド
                    画像自体には黒幕やグラデーションを一切かけず、100%明るいクリーンな状態を保ちます。 */}
                <div className="w-full relative z-10">
                  <div className={`${cardRoundedTop} border-t border-x border-slate-800 overflow-hidden aspect-[16/9] bg-[#050A15] relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}>
                    <Image 
                      src={m.image} 
                      alt="" 
                      fill 
                      className="object-cover transition-transform duration-700 hover:scale-105" 
                      priority={i === 0}
                    />
                  </div>
                </div>

                {/* 2️⃣ 下側：テキストパネル（マシーンパート完全同期の透過ガラス仕様） */}
                <div className={`
                  w-full relative z-10 p-8 sm:p-12 
                  ${cardRoundedBottom} ${glassBorder}
                  bg-slate-900/40 backdrop-blur-2xl
                  shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]
                  overflow-hidden
                `}>
                  
                  {/* 💡 【シームレス境界グラデーション】
                      画像は明るいまま、ガラスカードの「最上部（画像との接点）」にのみ、
                      背景色（#050A15）から透明へと溶け込むグラデーションを敷くことで、
                      画像とガラスが超自然に同化する設計にしました。 */}
                  <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#050A15] to-transparent opacity-90 pointer-events-none z-10" />

                  {/* マシーンパートと同じ極上の艶を生み出す「2箇所のガラス表面反射」 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent pointer-events-none z-0" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.08] via-transparent to-transparent pointer-events-none z-0" />

                  {/* 💡 【各カード下部のマシーン風光源】
                      マシーンパートの「光の芯＋滲み出るグラデーション」のロジックを下端に配置しました。 */}
                  {/* ① 底辺を走る鋭いレーザー光の芯 */}
                  <div className="absolute bottom-[-1px] inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/90 to-transparent shadow-[0_0_20px_rgba(56,189,248,1)] pointer-events-none z-20" />
                  {/* ② 底辺から上に向かって柔らかく広がるシアンの光 */}
                  <div className="absolute bottom-0 inset-x-0 h-[60%] bg-gradient-to-t from-sky-500/20 via-sky-500/5 to-transparent pointer-events-none z-0" />
                  {/* ③ ガラス内部のアンビエント発光 */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(56,189,248,0.08),transparent_70%)] pointer-events-none z-0" />

                  <div className="space-y-5 relative z-10">
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
                    
                    <p className="text-sm text-slate-300 leading-loose font-medium pt-2 border-t border-slate-700/30">
                      {m.description}
                    </p>
                  </div>
                  
                </div>

              </div>
            );
          })}
        </div>

        {/* 🔴 Reassurance：下部の安心エリア */}
        <div className="max-w-4xl mx-auto pt-12 sm:pt-16 border-t border-slate-900/60">
          <div className="flex flex-col items-center text-center">
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
