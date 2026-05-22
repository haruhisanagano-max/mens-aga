// edit/cta-content.ts　
export const CTA_CONTENT = {
  // ...既存の項目
  title: "『お問合せ』\n『無料カウンセリング』",
  reserveButtonText: "無料来院予約",
  onlineButtonText: "オンライン診療",
  image: "https://lh3.googleusercontent.com/d/1rrIslb17DCrHYEiiwpPzXrC6CKQLQi7s", 

  // 🆕 オンライン診療の手順説明（ポップアップ用）
  remoteStep: {
    title: "オンライン診療のご予約手順",
    // 🔴 ここを修正しました！ \n を使い、全体をひとつに繋げます。
    messageToSend: "オンライン診療希望\n氏名：〇〇\n希望日時：〇月〇日11時～12時", 
    steps: [
      { num: "01", title: "公式LINEを友だち追加", desc: "まずはご希望のクリニックの公式LINEを友だち追加してください。" },
      { num: "02", title: "メッセージを送信", desc: "トーク画面に「オンライン診療希望」とメッセージをお送りください。" },
      { num: "03", title: "日程調整・完了", desc: "スタッフより折り返し、カウンセリング日程をご案内いたします。" }
    ]
  }
};
