export const COMPARISON_CONTENT = {
  title: "クリニック医療 vs 市販セルフケア",
  subtitle: "なぜ当院の「医学的アプローチ」が必要なのか",

  // ★ セクション全体の背景画像
  sectionBgImage: "/images/bg-comparison.png", 

  // 比較テーブルのヘッダーラベル（文字数を脱毛と同等に最小化）
  labels: {
    feature: "比較項目",
    ourClinic: "当院",
    ourMethod: "医療AGA治療",
    otherClinic: "市販・他院",
    otherMethod: "育毛剤・市販ケア"
  },

  // 比較データ（脱毛と全く同じ文字数ボリューム：1マス4〜7文字）
  rows: [
    { label: "治療アプローチ", us: "医療用医薬品", others: "医薬部外品" },
    { label: "効果の実感",   us: "3ヶ月〜半年",  others: "年単位〜効果薄" },
    { label: "抜け毛の抑制", us: "◎ 根元から阻止", others: "△ 頭皮ケア程度" },
    { label: "眠る毛根への作用", us: "◎ 強制発毛",   others: "× 生やす力なし" },
    { label: "医学的根拠",   us: "推奨度A（最高）", others: "なし（マイルド）" },
    { label: "処方の最適化", us: "○ 医師の診断",  others: "× 一律の既製品" },
    { label: "副作用サポート", us: "血液検査あり", others: "自己責任" },
    { label: "厚労省承認",   us: "承認薬ベース",  others: "未承認が多数" } 
  ],

  // 下部のPoint（こちらも右端にぶつからないよう3行目安でスマートに）
  point: {
    title: "Point",
    text: "医療AGA治療は医学的根拠に基づき、抜け毛を根本から止めつつ眠った毛根を強制発毛させます。市販の育毛剤のような気休めの頭皮ケアではなく、医師の診断のもとで正しく治療することが、最も早くてコストパフォーマンスの高い解決策です。"
  }
};
