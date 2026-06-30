// edit/machine-content.ts

export const MACHINE_CONTENT = {
  // 💡 サイバーネイビーに映える、スマートで強力なタイトル
  badge: "DUAL CORE THERAPY",
  title: "Advanced Meso & Prescription",
  subtitle: "内服薬で進行を止め、注入治療で直接生やす。\n「最速発毛」を追求した医療ハイブリッド。",
  
  // 💡 なぜ「通院」が必要なのかを明確化する2つのカード
  lasers: [
    {
      name: "ベースを構築する「内服薬」",
      wavelength: "HOME CARE",
      target: "進行ストップ・土台形成",
      feature: "毎日のフィナステリド服用で抜け毛を根元からブロック。\nミノキシジル外用で頭皮の血流を強力に底上げし、\n24時間体制で髪が育つ確固たる土台を守り抜きます。",
      points: ["抜け毛の原因を徹底阻害", "毛細血管を拡張し血流UP", "毎日のホームケアで手軽に持続"]
    },
    {
      name: "毛根を叩き起こす「頭皮注入治療」",
      wavelength: "CLINICAL MESO",
      target: "圧倒的スピード・局所集中発毛",
      feature: "クリニックだからこそ許された、毛根最深部への直接アプローチ。\n発毛細胞を強制起動させる高濃度な発毛成分を医師が届け、\nお薬単体の治療を遥かに超えるスピード発毛を実現します。",
      points: ["発毛成分をダイレクト注入", "診断に基づく精密手技" ] // ※ここの最後のカンマの後ろは空でも一応動きますが、消すか埋めるとより綺麗です
    }
  ],

  // 💡 中央のメインビジュアル（頭皮への浸透CGを想定）
  diagram: {
    image: "https://lh3.googleusercontent.com/d/17MFBjk18xHy_6i9n-KcLobfjdTLzkj71",
    limitedBadge: "メソセラピー"
  },

/* 💡 3連ミニ画像（アンプル / 手元 / マシン を想定）
features: [
  { img: "https://lh3.googleusercontent.com/d/11X4lB9p3Vw7wkL7-z0GqrmVqXcF4uOCO", alt: "独自ブレンドの高濃度発毛成分" },
  { img: "https://lh3.googleusercontent.com/d/1MChk-WEA9gfziN0FVdVPxkWxGMXCRits", alt: "医師による精密な診断と注入" },
  { img: "https://lh3.googleusercontent.com/d/1yO0HvT0RI9V7rHeBoNTZDlGj5AeLLvgE", alt: "痛みを抑えるハイテク注入機器" }
],
*/

  // 💡 縦並びの深掘りカード（成分・手打ち・マシンの3要素）
 
  reasons: [
    {
      // 💡 ココを教えていただいたWordPressのURLに変更！
      img: "https://v-clinic.jp/wp-content/uploads/AGAイメージ動画.mp4",
      isVideo: true, // 👈 これは忘れずに残してくださいね！
      title: "発毛細胞の強制起動：\n高濃度「MINOX」のダイレクト注入",
      desc: "内服薬だけでは届きにくい毛根の最深部（バルジ領域・毛乳頭）へ、\n細胞の再生スイッチを押す「高濃度ミノキ」を直接注入。\n機能が停止し眠っていた毛包を、最速で叩き起こします。"
    },
   {
      img: "https://lh3.googleusercontent.com/d/12XUwd4LK-KuEhFQf-ejIHOrRCoeL6WEo",
      title: "医師による精密アプローチ：\n生え際・M字へのピンポイント濃密注入",
      desc: "特に毛髪の衰退が激しく、薬だけでは治りにくい「生え際」や「M字」。\n医師が一人ひとりの進行状況や頭皮の状態を直接見極め、\n最も発毛を必要としているターゲットエリアへ、集中的かつ的確に薬剤を打ち込みます。"
    },
   {
      img: "https://lh3.googleusercontent.com/d/1dl5LLoUZo7no8moL0CCYS2n6JnEL1OtU",
      title: "最適なアプローチをカスタマイズ：\nご希望に合わせて「選べる注入方法」",
      desc: "痛みの感じ方やご希望の治療スタイルに合わせて、2つの注入方法からお選びいただけます。\n気になる部位へ的確にアプローチする「医師による手打ち」と、\n極細針で痛みを極限まで抑え、広範囲へ均一に届ける「最新鋭マシン」。\nご自身にとって最もストレスのない方法で、無理なく確実な発毛を目指せます。"
    }
  ],

  sectionBgImage: "/images/bg-machine.png" 
};
