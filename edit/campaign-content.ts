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
      name: "スモールプラン-1回（手打ち/30~40ショット）",
      originalPrice: "13,200",
      campaignPrice: "10,560",
      taxLabel: "（税込）", 
      discountBadge: "20%OFF", 
      discountAmount: "2,640円引き",
      // 🔴 ここを追加（キャンペーンの詳細内容）
      features: [
        "初めての方のみ",
        "期間限定の割引キャンペーン"
      ]
    },
      {
      name: "ミディアムプラン-1回（手打ち/50~90ショット）",
      originalPrice: "23,100",
      campaignPrice: "18,480",
      taxLabel: "（税込）", 
      discountBadge: "20%OFF", 
      discountAmount: "4,620円引き",
      // 🔴 ここを追加（キャンペーンの詳細内容）
    
    },
     {
      name: "ラージプラン-1回（100~140ショット）",
      originalPrice: "49,500",
      campaignPrice: "39,600",
      taxLabel: "（税込）", 
      discountBadge: "20%OFF", 
      discountAmount: "9,900円引き",
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
