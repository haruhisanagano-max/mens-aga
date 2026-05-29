export const MACHINE_CONTENT = {
  // 💡 高級感を持たせる英字バッジとタイトル
  badge: "CLINICAL HAIR GROWTH TREATMENT",
  title: "Advanced Meso & Prescription",
  subtitle: "内服薬でベースを整え、注入治療で直接叩き起こす。\n「最速」を追求したWアプローチ。",
  
  // 💡 旧アレキ・ヤグに相当する、2大アプローチ（上の2分割カード用）
  lasers: [
    {
      name: "ベースを整える「内服・外用薬」",
      wavelength: "HOME CARE",
      target: "進行ストップ・ベース構築",
      feature: "毎日のフィナステリド服用で抜け毛の原因を根本からブロックし、ミノキシジル外用で頭皮全体の血流を底上げ。24時間体制で髪が育つ確固たる土台を守り抜きます。",
      points: ["抜け毛の原因を阻害", "頭皮の血流アップ", "毎日手軽に継続"]
    },
    {
      name: "毛根を叩き起こす「頭皮注入治療」",
      wavelength: "CLINICAL MESO",
      target: "圧倒的スピード・局所集中ケア",
      feature: "クリニックだからこそ許された、頭皮の最深部への直接アプローチ。発毛細胞を呼び覚ます成長因子を医師の手でダイレクトに届けることで、お薬単体の治療を遥かに超えるスピード発毛を実現します。",
      points: ["成長因子を直接注入", "医師によるスピード施術", "選べる手打ち＆マシン"]
    }
  ],

  // 💡 メインの注入治療イメージ画像とバッジ
  diagram: {
    image: "https://lh3.googleusercontent.com/d/1nPBu1NNmwdFdLr3wL-VQZGLs8qdEF6T6",
    limitedBadge: "最先端メソセラピー導入"
  },

  // 💡 真ん中の3連ミニ画像BOX（成分 / 技術 / 最新）
  features: [
    { img: "https://lh3.googleusercontent.com/d/11X4lB9p3Vw7wkL7-z0GqrmVqXcF4uOCO", alt: "高濃度 成長因子×MINOX" },
    { img: "https://lh3.googleusercontent.com/d/1MChk-WEA9gfziN0FVdVPxkWxGMXCRits", alt: "医師による精密手打ち" },
    { img: "https://lh3.googleusercontent.com/d/1yO0HvT0RI9V7rHeBoNTZDlGj5AeLLvgE", alt: "高性能注入マシン" }
  ],

  // 💡 縦並びロングカードの深掘り（01, 02, 03）
  reasons: [
    {
      img: "https://lh3.googleusercontent.com/d/1Rpv5KyMY1mbkpnRDuS3pLjzHUsBcO7Qh",
      title: "発毛細胞の再生：\n高濃度 成長因子＋MINOXのダイレクト注入",
      desc: "市販品やただの内服薬では届きにくい毛根の最深部へ、毛根の再生スイッチを押す「成長因子（ベネブ）」と「高濃度ミノキシジル（MINOX）」の極上ブレンド液をダイレクトに注入。眠っていた毛包を最速で叩き起こし、太く長い髪の生成を強力にブーストします。"
    },
    {
      img: "https://lh3.googleusercontent.com/d/1OFEk5DGYdLTh4bP40vddxz4PfDmMbz35",
      title: "医師による精密手打ち：\n生え際・M字へのピンポイント濃密注入",
      desc: "特に毛髪の衰退が激しい「生え際のM字ライン」や「つむじのトップ」には、医師による手打ちでアプローチ。一人ひとりの頭皮の厚みや毛根の深さをプロの指先で感知しながら、最も効果の出る深さへ的確に薬剤を届けます。"
    },
    {
      img: "https://lh3.googleusercontent.com/d/1a5y32hLyDxl8lwlGcTN2wriPXdA29Eb9",
      title: "高性能マシン注入：\n痛みを極限まで抑え、頭皮全体へ素早く均一浸透",
      desc: "頭皮全体や広範囲の薄毛には、メカニカルで洗練された高性能な注入マシンを使用。超極細の針が均一な圧力と驚異的なスピードで薬剤を機械的に注入するため、手打ちに比べて痛みが劇的に軽減されます。スピーディーな施術で頭皮への負担を最小限に抑え、ムラなく全体を発毛へと導きます。"
    }
  ],

  sectionBgImage: "/images/bg-machine.png" 
};
