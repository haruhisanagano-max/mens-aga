// edit/comparison-content.ts

export const COMPARISON_CONTENT = {
  title: "根本投資（医療発毛） vs 終わらない維持費（隠す対処）",
  subtitle: "5年間の総額と将来性で見る、賢明なコストパフォーマンスの選択",

  // ★ セクション全体の背景画像
  sectionBgImage: "/images/bg-comparison.png", 

  // 比較テーブルのヘッダーラベル（スマホ閲覧に最適化した最小の文字数）
  labels: {
    feature: "比較項目",
    ourClinic: "当院",
    ourMethod: "根本医療発毛",
    otherClinic: "他社",
    otherMethod: "かつら・増毛"
  },

  // 比較データ（スマホで1マス4〜8文字程度に抑え、横スクロールや崩れを完全に防止）
  rows: [

    { label: "自毛の状態", us: "◎ 自分の髪が復活", others: "× 放置でさらに減少" },
    { label: "頭皮への負担", us: "◎ 医療で正常化", others: "▲ 牽引・密閉の負担" },
    { label: "製品の買い替え", us: "なし（卒業あり）", others: "数十万が定期発生" },
    { label: "根本の原因", us: "◎ 医療が直接解決", others: "× 隠すだけで未解決" },
    { label: "サポート体制", us: "○ 専門医の診断", others: "サロンの調整のみ" }
  ],

  // 下部のPoint（スマホで右端にぶつからないよう3行目安でスマートに）
  point: {
    title: "Point",
    text: "かつらや増毛は「自毛が減るほど維持費が膨らむ」終わらない負のループ。当院の医療発毛なら、最初の集中治療で生え揃った後は安価な内服薬プラン（維持期）へダウングレード可能です。ご自身の髪を取り戻すことが、長期的には最も賢くコストパフォーマンスの高い解決策になります。"
  }
};
