'use client'



import Image from 'next/image'

import { ShieldCheck } from 'lucide-react'

import { PAIN_CONTENT } from '@/edit/pain-content'



export default function PainManagement() {

  const fontTitle = "font-sans font-bold tracking-tight"

  const sectionPadding = "py-16 sm:py-28"

  const headerBottomMargin = "mb-16 sm:mb-24"

  const cardTextPadding = "p-8 sm:p-14" // 余白を広げて優雅に

  const cardRounded = "rounded-xl"

 

  // 💡 【透過グラス枠】マシーンパートと完全同期

  const glassBorder = "border border-slate-700/60 border-t-white/10 border-l-white/10"



  const gpuStyle = { transform: 'translateZ(0)', willChange: 'opacity, transform' };



  return (

    /* 💡 背景色はマシーン基準の最高級ネイビー（#050A15） */

    <section id="pain" className={`${sectionPadding} relative bg-[#050A15] text-slate-400 overflow-hidden`}>

     

      {/* 💡 【まだら（斑）の光】マシーンパートをベースにしつつ、セクション全体をぶち抜く強力な直線光源ラインを追加。 */}

      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">

        {/* 中心を走る鋭い斜めの光の線 */}

        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_49.8%,#38bdf8_50%,transparent_50.2%)] blur-[1px]" />

        {/* 周緯に広がる強力な光のモヤ */}

        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_35%,#0ea5e9_50%,transparent_65%)] blur-[120px] opacity-60" />

      </div>



      <div className="absolute inset-0 z-0 pointer-events-none">

        {PAIN_CONTENT.sectionBgImage && (

          <Image src={PAIN_CONTENT.sectionBgImage} alt="" fill className="object-cover opacity-[0.02] mix-blend-overlay" priority />

        )}

      </div>



      <div className="max-w-4xl mx-auto px-6 relative z-10">

       

        {/* 🔴 Header：タイトルを光源青でセンス良く目立たせる。 */}

        <div className={`text-center ${headerBottomMargin}`}>

          <span className="text-[10px] font-bold tracking-[0.5em] text-amber-300 block mb-6 uppercase drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">

            {PAIN_CONTENT.badge}

          </span>

         

          <div className="relative inline-block">

            {/* 💡 【タイトル発光】白から青へと変わるグラデーションと、青い光のdrop-shadowで文字自体を発光させる. */}

            <h2 className={`${fontTitle} text-3xl sm:text-5xl font-extrabold mb-8 leading-tight bg-gradient-to-b from-white via-sky-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]`}>

              {PAIN_CONTENT.mainTitle.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}

            </h2>

          </div>



          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium opacity-60">

            {PAIN_CONTENT.mainSubtitle}

          </p>

        </div>



        {/* 🔴 Measures (各施策) */}

        <div className="space-y-16 sm:space-y-28 mb-20">

          {PAIN_CONTENT.measures.map((m, i) => (

            <div

              key={i}

              className={`relative overflow-hidden ${cardRounded} ${glassBorder} shadow-[0_40px_80px_rgba(0,0,0,0.8)] bg-transparent flex flex-col`}

              style={gpuStyle}

            >

             

              {/* 1️⃣ 画像エリア：フィルターや黒幕のない100%クリーン表示（IDの下）. */}

              <div className="relative aspect-[16/9] bg-[#050A15] w-full overflow-hidden border-b border-slate-800 z-20">

                <Image

                  src={m.image}

                  alt=""

                  fill

                  className="object-cover opacity-90 hover:opacity-100 transition-all duration-1000"

                  priority={i === 0}

                />

              </div>



              {/* 2️⃣ 下側：テキストパネル（磨りガラス×一体感シームレス境界） */}

              <div className={`${cardTextPadding} relative w-full flex flex-col justify-center overflow-hidden bg-slate-900/40 backdrop-blur-3xl z-10`}>

               

                {/* 表面反射（Machine基準。マシーンパート基準の透過グラスを適用しつつ、重なる側は不透明にする。） */}

                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent pointer-events-none z-0" />

                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.06] via-transparent to-transparent pointer-events-none z-0" />



                {/* 💡 【光源は下部】Machineと同じテイストのシャープな斜め直線をCSSグラデーションで複数配置。 */}

                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_30px_rgba(56,189,248,0.8)] pointer-events-none z-20" />

                <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-sky-500/10 via-sky-500/5 to-transparent pointer-events-none z-0" />

               

                {/* ② 下部：境界線からテキストエリアへ向かって滲み出る柔らかい光の層 */}

                <div className={`absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-sky-500/15 via-sky-500/5 to-transparent pointer-events-none z-0`} />



                <div className="relative z-10">

                  {/* 💡 【数字とタグ】隙間と線をなくし、左寄せに統一 */}

                  <div className="flex items-center gap-3 mb-6">

                    <span className="font-sans text-2xl font-black italic text-amber-300/90 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">

                      {m.id}

                    </span>

                    <span className="text-[9px] font-black text-sky-400/90 bg-sky-500/10 border border-sky-400/20 px-2.5 py-1 rounded tracking-[0.15em] uppercase">

                      Medical Approach

                    </span>

                  </div>

                 

                  {/* 💡 【カードタイトル発光】文字自体に青い発光を強め、タイトルを際立たせる. */}

                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">

                    {m.title}

                  </h3>

                 

                  {/* 💡 【修正】ここの mb-8 を mb-4 に縮小して、詳細文との隙間をタイトに */}

                  <div className="inline-block px-3 py-1.5 bg-slate-950/80 rounded border border-slate-700/60 text-[10px] font-bold text-slate-300 tracking-[0.1em] mb-4 shadow-inner">

                    {m.subTitle}

                  </div>

                 

                  {/* 💡 【修正】mt-4 を削除して、上の要素とのダブり余白をカット */}

                  <p className="text-sm sm:text-base text-slate-300 leading-loose font-medium opacity-80">

                    {m.description}

                  </p>

                </div>



                {/* 背景の特大ID（超薄く） */}

                <span className="font-sans italic text-[8rem] sm:text-[14rem] absolute -bottom-10 -right-4 opacity-[0.03] select-none font-black text-white z-0">

                  {m.id}

                </span>



              </div>



            </div>

          ))}

        </div>



        {/* 🔴 Reassurance：下部の安心エリア */}

        {/* 💡 【修正】謎の境界線（border-t）と、不要な縦線（光源ライン）を完全に消去しました */}

        <div className="max-w-4xl mx-auto pt-4">

          <div className="flex flex-col items-center text-center">

           

            <div className="space-y-10">

              <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">

                {PAIN_CONTENT.reassurance.title}

              </h3>

              <div className="mt-4 inline-flex items-center gap-4 px-8 py-4 bg-slate-900/60 rounded-full text-slate-300 text-[11px] sm:text-xs border border-slate-700/60 font-bold shadow-2xl backdrop-blur-md">

                <ShieldCheck className="w-5 h-5 text-sky-400/80" />

                <span className="tracking-wide">{PAIN_CONTENT.reassurance.note}</span>

              </div>

            </div>

          </div>

        </div>



      </div>

    </section>

  )

} 

