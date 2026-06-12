// edit/zero-yen-items.ts

export const ZERO_YEN_CONTENT = { 
  badge: "¥0 SUPPORT",
  title: "6つの追加料金0円約束",
  description: "ヴァージンクリニックでは、強引な勧誘や不透明な追加費用は一切ありません。\n表示価格のみで、確かな発毛へと最短距離でご案内します。",

  // 背景画像（前回の直リンクを使用）
  sectionBgImage: "", 

  // 💡 AGAクリニックで定番の「6つの0円」に最適化
  items: [
    { icon: "Stethoscope", label: "初診・再診料" },
    { icon: "ClipboardCheck", label: "カウンセリング" },
    { icon: "Microscope", label: "頭皮・毛根診断" }, // AGAならではの強み
    { icon: "Syringe", label: "プラン変更手数料" },        // 薬の副作用チェック用（契約時無料など）
    { icon: "CalendarX", label: "予約キャンセル料" }, // 忙しい男性に刺さる
    { icon: "Truck", label: "お薬の配送料" },        // オンラインや薬の郵送に対応している場合
  ],

  footer: {
    text1: "「思ってたより高くなった…」\nそんな経験はさせません。",
    text2_pre: "当院は",
    text2_highlight: "完全明朗会計", 
    text2_post: "をお約束します。"
  }
};
