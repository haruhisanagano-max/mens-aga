// edit/machine-content.ts

export const MACHINE_CONTENT = {
  badge: "厚生労働省承認・医療用脱毛機",
  title: "GentleMax Pro",
  subtitle: "熱破壊式の最高峰で、確実な実感を。",
  
  // なぜ人気なのか（画像を追加）
  reasons: [
    {
      img: "https://lh3.googleusercontent.com/d/1Rpv5KyMY1mbkpnRDuS3pLjzHUsBcO7Qh", // ★ 理由1の画像
      title: "熱破壊式の圧倒的パワー",
      desc: "毛根を瞬時に破壊する「ショット式」へのこだわり。1回目からポロポロと抜ける実感を。蓄熱式では難しい「太い毛・根深い毛」への圧倒的な強さを訴求。"
    },
    {
      img: "https://lh3.googleusercontent.com/d/1OFEk5DGYdLTh4bP40vddxz4PfDmMbz35", // ★ 理由2の画像
      title: "2波長による「パーソナライズ」",
      desc: "アレキサンドライト（浅く太い毛）とヤグ（深くしつこい毛）の2つを搭載。一人ひとりの肌色、部位ごとの毛質に合わせて瞬時に使い分ける「職人技」のような精密さを強調。"
    },
    {
      img: "https://lh3.googleusercontent.com/d/1a5y32hLyDxl8lwlGcTN2wriPXdA29Eb9", // ★ 理由3の画像
     title: "脱毛と同時に、澄みわたる素肌へ",
  desc: "使用するアレキサンドライトレーザーは、実は「シミやくすみ」の美肌治療にも使われる波長。毛根へのアプローチと同時に毛穴を引き締め、自己処理で傷ついた肌を明るいトーンへ導きます。「毛がなくなる」以上の、触れるたびに誇れるキメの整った肌へ。"
}
  ],

  // レーザーの深掘り
  lasers: [
    {
      name: "アレキサンドライト レーザー",
      wavelength: "755nm",
      target: "標準〜剛毛・美肌",
      feature: "メラニンへの吸収が非常に高く、日本人の肌と相性抜群。毛穴を引き締める美肌効果も期待できます。",
      points: ["濃い太い毛に強い", "美肌・毛穴改善", "国内導入数No.1"]
    },
    {
      name: "ヤグ レーザー",
      wavelength: "1064nm",
      target: "根深い毛・産毛・褐色肌",
      feature: "最も深く届く波長。VIOやヒゲなど根深い毛を根絶。日焼け肌や色黒の方でも安全に照射可能です。",
      points: ["VIO・ヒゲに最適", "日焼け肌もOK", "産毛まで対応"]
    }
  ],

  diagram: {
    image: "https://lh3.googleusercontent.com/d/1nPBu1NNmwdFdLr3wL-VQZGLs8qdEF6T6",
    limitedBadge: "最高位機種導入"
  },

  features: [
    { img: "https://lh3.googleusercontent.com/d/11X4lB9p3Vw7wkL7-z0GqrmVqXcF4uOCO" },
    { img: "https://lh3.googleusercontent.com/d/1MChk-WEA9gfziN0FVdVPxkWxGMXCRits" },
    { img: "https://lh3.googleusercontent.com/d/1yO0HvT0RI9V7rHeBoNTZDlGj5AeLLvgE" }
  ],

  sectionBgImage: "/images/bg-machine.png" // ★ 背景画像
};
