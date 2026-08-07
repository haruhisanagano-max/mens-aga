// edit/pricing-content.js
export const PRICING_CONTENT = {
  title: "料金プラン",
  subtitle: "明朗会計・分割払い対応",

  // ★ セクション全体の背景画像
  sectionBgImage: "/images/bg-pricing.png", 

  // メインの3大プラン
  mainPlans: [
    {
      name: "スモールプラン\n［ダーマペン導入］\n（目安:50㎠ 以内）",
      subtitle: "M字/生え際/天頂部",
    
      sessions: "6回コース",
      originalPrice: "",
      campaignPrice: "140,250",
      taxLabel: "（税込）",
      monthlyPrice: "25,000",
      features: ["1回コース ￥25,000（税込）","3回コース ￥74,250（税込）","6回コース ￥140,250（税込）"],
      buttonText: "このプランで予約",
      // ★ 追加：全身脱毛（顔・VIO除く）の照射範囲画像パス（適宜変更してください）
      treatmentImage: "https://lh3.googleusercontent.com/d/1wv6Oe7R09fyFcTXLpIKJu30bcBHfLV3C", 
    },
     {
      name: "ミディアムプラン\n［ダーマペン導入］\n（目安:150㎠ 以内）",
      subtitle: "M字/生え際/天頂部",
       popularBadge: "人気No.1",
      sessions: "6回コース",
      originalPrice: "",
      campaignPrice: "185,130",
      taxLabel: "（税込）",
      monthlyPrice: "33,000",
      features: ["1回コース ￥33,000（税込）","3回コース ￥98,010（税込）","6回コース ￥185,130（税込）"],
      buttonText: "このプランで予約",
      // ★ 追加：全身脱毛（顔・VIO除く）の照射範囲画像パス（適宜変更してください）
      treatmentImage: "https://lh3.googleusercontent.com/d/14QEzwUASrELNLJ5gkez511CHAa8qAGiE", 
    },
    {
      name: "ラージプラン\n［ダーマペン導入］\n（目安:250㎠ 以内）",
      subtitle: "M字/生え際/天頂部",
      
      sessions: "6回コース",
      originalPrice: "",
      campaignPrice: "224,400",
      taxLabel: "（税込）",
      monthlyPrice: "40,000",
      features: ["1回コース ￥40,000（税込）","3回コース ￥118,800（税込）","6回コース ￥224,400（税込）"],
      buttonText: "このプランで予約",
      // ★ 追加：全身脱毛（顔・VIO除く）の照射範囲画像パス（適宜変更してください）
      treatmentImage: "https://lh3.googleusercontent.com/d/1eZbtw1M-JatfpO5vS4lO_P390FWs6CU9", 
    },

     {
      name: "BENEVメソセラピー\n（機械注入）",
      subtitle: "M字/生え際/天頂部",
      
      sessions: "6回コース",
      originalPrice: "",
      campaignPrice: "168,300",
      taxLabel: "（税込）",
      monthlyPrice: "30,000",
      features: ["1回コース ￥30,000（税込）","3回コース ￥89,100（税込）","6回コース ￥168,300（税込）"],
      buttonText: "このプランで予約",
      // ★ 追加：全身脱毛（顔・VIO除く）の照射範囲画像パス（適宜変更してください）
      treatmentImage: "https://lh3.googleusercontent.com/d/1wv6Oe7R09fyFcTXLpIKJu30bcBHfLV3C", 
    }
  ],

  // 🔴 部位別プラン表（丸ごとコメントアウトして非表示化）
  /*
  table: {
    title: "部位別プラン",
    head: ["部位", "5回料金（税込）", "都度払い（税込）"],
    rows: [
      { name: "両ワキ",  price: "11,990", monthly: "2,750" },
      { name: "Vライン",  price: "20,900", monthly: "4,950" },
       { name: "Iライン",  price: "27,500", monthly: "6,600" },
       { name: "Oライン",  price: "20,900", monthly: "4,950" },
      { name: "顔",  price: "60,500", monthly: "14,520" },
      { name: "腕全体", price: "71,500", monthly: "16,500" },
      { name: "脚全体", price: "82,500", monthly: "18,480" },
      { name: "ドクターセレクト",  price: "88,000", monthly: "-" }
    ]
  },
  */

  paymentMethods: "お支払い方法：現金 / クレジットカード / 電子マネー / 医療ローン（最大60回分割）\n\n医療ローン お支払い例（24回支払い）\nダーマペン導入【MINOX】スモールプラン 6回\n月々約￥6,400",
 
};
