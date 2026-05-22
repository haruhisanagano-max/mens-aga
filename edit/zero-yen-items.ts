// edit/zero-yen-items.ts

export const ZERO_YEN_CONTENT = { 
  badge: "¥0 SUPPORT",
  title: "6の追加料金0円約束",
  description: "ヴァージンクリニックでは、強引な勧誘や不透明な追加費用は一切ありません。\n表示価格のみで、理想の素肌まで最短距離でご案内します。",

  // 背景画像（前回の直リンクを使用）
  sectionBgImage: "", 

  // 10項目に調整（5列×2段でデザインが完璧に揃います）
  items: [
    { icon: "Stethoscope", label: "初診・再診料" },
    { icon: "ClipboardCheck", label: "カウンセリング" },
    { icon: "Zap", label: "テスト照射" },
     { icon: "Scissors", label: "照射漏れ" }, // 背中・うなじ等、手が届かない部位

   { icon: "Pill", label: "初回薬代" },
    { icon: "MapPin", label: "転院手数料" }, // クリニック間の移動
  ],

  footer: {
    text1: "「思ってたより高くなった…」\nそんな経験はさせません。",
    text2_pre: "当院は",
    text2_highlight: "完全明朗会計", 
    text2_post: "をお約束します。"
  }
};
