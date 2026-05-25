// edit/machine-content.ts

export const MACHINE_CONTENT = {
  badge: "CLINICAL HAIR GROWTH TREATMENT",
  title: "Advanced Meso & Prescription",
  subtitle: "医師が頭皮へ直接届ける、最速を追求した医療発毛。",
  
  // 縦並びロングカードの深掘り（01, 02, 03）
  reasons: [
    {
      img: "https://lh3.googleusercontent.com/d/1Rpv5KyMY1mbkpnRDuS3pLjzHUsBcO7Qh", // ★ 01の画像（成分イメージなど）
      title: "毛根再生スイッチを押す「高濃度 成長因子×MINOX」",
      desc: "ただの薬の服用だけでは届きにくい毛根の最深部へ、発毛細胞を呼び覚ます「成長因子（グロスファクター）」と「高濃度ミノキシジル（MINOX）」の極上ブレンド液をダイレクトに注入。眠っていた毛包を最速で叩き起こし、太く長い髪の生成を強力にブーストします。"
    },
    {
      img: "https://lh3.googleusercontent.com/d/1OFEk5DGYdLTh4bP40vddxz4PfDmMbz35", // ★ 02の画像（ドクターの手打ち風景など）
      title: "医師による「精密手打ち」で気になる部位を狙い撃ち",
      desc: "特に毛髪の衰退が目立つ「生え際のM字ライン」や「つむじのトップ」には、医師がシリンジを用いてピンポイントで手打ち。一人ひとりの頭皮の厚みや毛根の深さをプロの指先で感知しながら、最も効果の出る深さへ的確に薬剤を届けます。"
    },
    {
      img: "https://lh3.googleusercontent.com/d/1a5y32hLyDxl8lwlGcTN2wriPXdA29Eb9", // ★ 03の画像（注入マシンのイメージなど）
      title: "最先端マシンで、痛みを抑えて「全体へ均一注入」",
      desc: "頭皮全体や広範囲の薄毛には、最先端のガンタイプ注入マシンを使用。超極細の針が均一な圧力と驚異的なスピードで機械的に注入するため、手打ちに比べて痛みが劇的に軽減されます。スピーディーな施術で頭皮への負担を最小限に抑え、ムラなく成分を浸透させます。"
    }
  ],

  // 2大アプローチ（上の2分割カード用）
  lasers: [
    {
      name: "ベースを整える「内服・外用薬」",
      wavelength: "HOME CARE",
      target: "維持・予防・全体発毛",
      feature: "毎日の内服薬（フィナステリド）で抜け毛原因を根本ブロックし、ミノキシジル外用で頭皮全体の血流を底上げ。24時間体制で髪が育つ土台を守り抜きます。",
      points: ["抜け毛の原因を阻害", "頭皮の血流アップ", "毎日手軽に継続"]
    },
    {
      name: "最速を生み出す「頭皮注入治療」",
      wavelength: "CLINICAL MESO",
      target: "早期発毛・局所集中ケア",
      feature: "クリニックだからこそ許された、頭皮への直接アプローチ。眠っている毛包へ成長因子を直接浸透させることで、お薬単体での治療を遥かに超えるスピード発毛を目指します。",
      points: ["成長因子をダイレクト注入", "医師によるスピード施術", "選べる手打ち＆マシン"]
    }
  ],

  diagram: {
    image: "https://lh3.googleusercontent.com/d/1nPBu1NNmwdFdLr3wL-VQZGLs8qdEF6T6", // ★ メインの注入治療イメージ画像
    limitedBadge: "最先端メソセラピー導入"
  },

  // 真ん中の3連ミニ画像BOX
  features: [
    { img: "https://lh3.googleusercontent.com/d/11X4lB9p3Vw7wkL7-z0GqrmVqXcF4uOCO" },
    { img: "https://lh3.googleusercontent.com/d/1MChk-WEA9gfziN0FVdVPxkWxGMXCRits" },
    { img: "https://lh3.googleusercontent.com/d/1yO0HvT0RI9V7rHeBoNTZDlGj5AeLLvgE" }
  ],

  sectionBgImage: "/images/bg-machine.png" // ★ 背景画像（既存のままでOK）
};
