export const CAMPAIGN_CONTENT = {
  sectionBgImage: "", 
  topLabel: "SPECIAL OFFER",
  subtitle: "最高峰マシン「ジェントルマックスプロ」による全身脱毛。今だけの特別価格です。",
  timer: {
    month: "", 
    days: 3,
    hours: 12,
    minutes: 0,
    seconds: 0
  },

  plans: [
    {
      name: "全身医療脱毛 5回コース（+1回）",
      originalPrice: "223,300",
      campaignPrice: "132,000",
      taxLabel: "（税込）", 
      discountBadge: "実質約40%OFF", 
      discountAmount: "91,330円引き",
      // 🔴 ここを追加（キャンペーンの詳細内容）
      features: [
        "麻酔代が契約回数分0円",
        "契約コースにプラス１回プレゼント",
        "全身５回コース以上が20%OFF"
      ]
    },
      {
      name: "全身＋VIO脱毛プラン　5回コース（+1回）",
      originalPrice: "296,450",
      campaignPrice: "179,520",
      taxLabel: "（税込）", 
      discountBadge: "実質約40%OFF", 
      discountAmount: "44,880円引き",
      // 🔴 ここを追加（キャンペーンの詳細内容）
    
    },
     {
      name: "全身パーフェクト脱毛プラン 5回コース（+1回）",
      originalPrice: "365,200",
      campaignPrice: "227,920",
      taxLabel: "（税込）", 
      discountBadge: "実質約40%OFF", 
      discountAmount: "56,980円引き",
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
    "お肌の状態や体質によっては、当日施術を受けられない場合がございます。"
  ]
};
