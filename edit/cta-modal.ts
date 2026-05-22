// edit/cta-modal.ts

export const CTA_MODAL_CONTENT = {
  // 画面下の追いかけボタン
  floatingCta: {
    badge: "今だけ20%OFF",
    priceText: "全身脱毛 ¥132,000",
    reserveButton: "カウンセリング予約",
    lineButton: "LINEで相談"
  },

  // LINE院選択画面
  lineModal: {
    title: "公式LINEを選択してください",
    clinics: [
      { name: "福岡院", area: "天神エリア", url: "https://line.me/R/ti/p/@fukuoka" },
      { name: "広島院", area: "本通エリア", url: "https://line.me/R/ti/p/@hiroshima" },
      { name: "京都院", area: "四条河原町エリア", url: "https://line.me/R/ti/p/@kyoto" }
    ]
  }
};
