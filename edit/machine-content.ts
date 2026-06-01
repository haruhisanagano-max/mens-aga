// edit/machine-content.ts

export const MACHINE_CONTENT = {
  // 💡 サイバーネイビーに映える、スマートで強力なタイトル
  badge: "DUAL CORE THERAPY",
  title: "Advanced Meso & Prescription",
  subtitle: "内服薬で進行を止め、注入治療で直接生やす。\n「最速発毛」を追求した医療ハイブリッド。",
  
  // 💡 なぜ「通院」が必要なのかを明確化する2つのカード
  lasers: [
    {
      name: "ベースを構築する「内服・外用薬」",
      wavelength: "HOME CARE",
      target: "進行ストップ・土台形成",
      feature: "毎日のフィナステリド服用で抜け毛を根元からブロック。\nミノキシジル外用で頭皮の血流を強力に底上げし、\n24時間体制で髪が育つ確固たる土台を守り抜きます。",
      points: ["抜け毛の原因を徹底阻害", "毛細血管を拡張し血流UP", "毎日のホームケアで手軽に持続"]
    },
    {
      name: "毛根を叩き起こす「頭皮注入治療」",
      wavelength: "CLINICAL MESO",
      target: "圧倒的スピード・局所集中発毛",
      feature: "クリニックだからこそ許された、毛根最深部への直接アプローチ。\n発毛細胞を強制起動させる高濃度な成長因子を医師が届け、\nお薬単体の治療を遥かに超えるスピード発毛を実現します。",
      points: ["成長因子をダイレクト注入", "診断に基づく精密手技", "痛みを極限まで抑えた高性能マシン"]
    }
  ],

  // 💡 中央のメインビジュアル（頭皮への浸透CGを想定）
  diagram: {
    image: "https://lh3.googleusercontent.com/d/1WdG4XZowxZhHlriy_oQRQCnAlzNB2DX6",
    limitedBadge: "メディカル・メソセラピー"
  },

  // 💡 3連ミニ画像（アンプル / 手元 / マシン を想定）
  features: [
    { img: "https://lh3.googleusercontent.com/d/11X4lB9p3Vw7wkL7-z0GqrmVqXcF4uOCO", alt: "独自ブレンドの高濃度成長因子" },
    { img: "https://lh3.googleusercontent.com/d/1MChk-WEA9gfziN0FVdVPxkWxGMXCRits", alt: "医師による精密な診断と注入" },
    { img: "https://lh3.googleusercontent.com/d/1yO0HvT0RI9V7rHeBoNTZDlGj5AeLLvgE", alt: "痛みを抑えるハイテク注入機器" }
  ],

  // 💡 縦並びの深掘りカード（成分・手打ち・マシンの3要素）
  reasons: [
    {
      img: "https://lh3.googleusercontent.com/d/1ov1yOJ0HjR4p54Oyry91o5wjvaYEfrUw",
      title: "発毛細胞の強制起動：\n高濃度「成長因子＋MINOX」のダイレクト注入",
      desc: "内服薬だけでは届きにくい毛根の最深部（バルジ領域・毛乳頭）へ、\n細胞の再生スイッチを押す「成長因子」と「高濃度ミノキ」を直接注入。\n機能が停止し眠っていた毛包を、最速で叩き起こします。"
    },
    {
      img: "https://lh3.googleusercontent.com/d/1kli4LneW3Xue8aM6uHyCS9pHVS1VpCbW",
      title: "医師による精密アプローチ：\n生え際・M字へのピンポイント濃密注入",
      desc: "特に毛髪の衰退が激しく、薬だけでは治りにくい「生え際」や「M字」。\n頭皮の厚みや毛根の深さをプロの医師が指先で感知しながら、\n最も発毛効果が出る「深さ」へ的確に薬剤を届けます。"
    },
    {
      img: "https://lh3.googleusercontent.com/d/1iMed3MVo5eS0L7fm9VjQSECtofrdAGIQ",
      title: "最先端ハイテクマシン導入：\n痛みを極限まで抑え、頭皮全体へ均一に浸透",
      desc: "広範囲の薄毛には、最新鋭のメカニカル注入マシンを使用。\n超極細針が均一な圧力と驚異的なスピードで薬剤を注入するため、\n手打ちに比べ痛みが劇的に軽減。ムラなく全体を発毛へ導きます。"
    }
  ],

  sectionBgImage: "/images/bg-machine.png" 
};
