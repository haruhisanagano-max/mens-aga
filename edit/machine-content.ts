// edit/machine-content.ts

export const MACHINE_CONTENT = {
  // 💡 サイバーネイビーに映える、スマートで強力なタイトル
  badge: "DUAL CORE THERAPY",
  title: "Advanced Meso & Prescription",
  subtitle: "内服薬で進行を止め、注入治療で直接生やす。\n「最速発毛」を追求した医療ハイブリッド。",
  
  // 💡 なぜ「通院」が必要なのかを明確化する2つのカード
  lasers: [
    {
      name: "ベースを構築する「内服薬・外用薬」",
      wavelength: "HOME CARE",
      target: "進行ストップ・土台形成",
      feature: "毎日のフィナステリド服用で抜け毛を根元からブロック。\nミノキシジル外用で頭皮の血流を強力に底上げし、\n24時間体制で髪が育つ確固たる土台を守り抜きます。",
      points: ["抜け毛の原因を徹底阻害", "毛細血管を拡張し血流UP", "毎日のホームケアで手軽に持続"]
    },
    {
      name: "発毛細胞を強制起動「機械注入治療」",
      wavelength: "CLINICAL MESO",
      target: "圧倒的スピード・広範囲濃密発毛",
      feature: "クリニックだからこそ許された、毛根深部への直接アプローチ。\n機械で頭皮に無数の微細な穴をあけ、発毛再生因子「ベネブ」と「ミノキシジル」を均一に浸透。\nお薬単体の治療を遥かに超えるスピード発毛を実現します。",
      points: ["発毛成分を徹底浸透", "微細針で痛みを抑えて均一注入" ] // ※ここの最後のカンマの後ろは空でも一応動きますが、消すか埋めるとより綺麗です
    }
  ],

  // 💡 中央のメインビジュアル（頭皮への浸透CGを想定）
  diagram: {
    image: "https://lh3.googleusercontent.com/d/1Z_3FwdusQByIASbZUW2AGwL2aMuxN5wN",
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
      img: "https://lh3.googleusercontent.com/d/1lGtGTcxrCmKRN-7ye9cxbHDu0TE4GjVU",
      
      title: "発毛再生因子の覚醒：\n高濃度「BENEV（ベネブ）」の頭皮浸透",
      desc: "国内外の医療機関で高い評価を受ける発毛再生因子「BENEV（ベネブ）」を採用。\n機械がもたらす頭皮の自己治癒力と組み合わせることで、細胞の再生スイッチをオン。\n機能が停止し眠っていた毛包を、最速で叩き起こします。"
    },
   {
      img: "https://lh3.googleusercontent.com/d/12XUwd4LK-KuEhFQf-ejIHOrRCoeL6WEo",
      title: "最速発毛へのアプローチ：\n「ミノキシジル」の高密マルチ注入",
      desc: "血流を強力に促進し発毛を促す「ミノキシジル」を、機械を用いて頭皮全体へ浸透させます。\n内服薬だけでは届きにくい局所的な薄毛部位や、M字・生え際へも均一かつ確実に薬剤を届けることで、発毛までの期間を劇的に短縮します。"
    },
   {
      img: "https://v-clinic.jp/wp-content/uploads/202606301015-5.mp4",
     isVideo: true, // 👈 これは忘れずに残してくださいね！
      title: "痛みを極限まで抑える：最先端マシーンによる注入法",
      desc: "従来の注射による手打ち治療のような、強い痛みの心配はありません。\n極細針が1秒間に無数の微細な穴をあけ、痛みを極限まで抑えながら、広範囲へ均一に薬剤を届けます。\n頭皮環境そのものを健やかに育てる、最もストレスのない先進の発毛治療です。"
    }
  ],

  sectionBgImage: "/images/bg-machine.png" 
};
