export const CAMPAIGN_CONTENT = {
  sectionBgImage: "", 
  topLabel: "SPECIAL OFFER",
  subtitle: "「本気で生やしたい」あなたのための特別スタートプラン。今だけの特別価格です。",
  timer: {
    month: "", 
    days: 3,
    hours: 12,
    minutes: 0,
    seconds: 0
  },

  plans: [
    {
      name: "Sサイズ-1回（40~60ショット）",
      originalPrice: "12,000",
      campaignPrice: "9,600",
      taxLabel: "（税込）", 
      discountBadge: "20%OFF", 
      discountAmount: "2,400円引き",
      // 🔴 ここを追加（キャンペーンの詳細内容）
      features: [
        "初めての方のみ",
        "期間限定の割引キャンペーン"
      ]
    },
      {
      name: "Mサイズ-1回（60~100ショット）",
      originalPrice: "21,000",
      campaignPrice: "16,800",
      taxLabel: "（税込）", 
      discountBadge: "20%OFF", 
      discountAmount: "4,200円引き",
      // 🔴 ここを追加（キャンペーンの詳細内容）
    
    },
     {
      name: "Lサイズ-1回（100~150ショット）",
      originalPrice: "45,000",
      campaignPrice: "36,000",
      taxLabel: "（税込）", 
      discountBadge: "20%OFF", 
      discountAmount: "9,000円引き",
      // 🔴 ここを追加（キャンペーンの詳細内容）
      
    }
      
  ],

  limit: {
    fullText: "特別キャンペーン価格"
  },
  buttonText: "今すぐこの価格で予約する",
  notes: [
    "ヴァージンクリニックでのご契約が初めての方限定の特別プランです。",
    "他の割引キャンペーン、紹介特典等との併用はできません。",
    "頭皮の状態や体質によっては、当日施術を受けられない場合がございます。"
  ]
};
