// edit/pricing-content.js
export const PRICING_CONTENT = {
  title: "料金プラン",
  subtitle: "明朗会計・分割払い対応",

  // ★ セクション全体の背景画像
  sectionBgImage: "/images/bg-pricing.png", 

  // メインの3大プラン
  mainPlans: [
    {
      name: "Sサイズ",
      subtitle: "M字/生え際/天頂部",
      popularBadge: "人気No.1",
      sessions: "6回コース",
      originalPrice: "67,320",
      campaignPrice: "53,856",
      taxLabel: "（税込）",
      monthlyPrice: "13,464",
      features: ["1回コース ￥13,200（税込）","3回コース ￥35,640（税込）"],
      buttonText: "このプランで予約",
      // ★ 追加：全身脱毛（顔・VIO除く）の照射範囲画像パス（適宜変更してください）
      treatmentImage: "https://lh3.googleusercontent.com/d/1-wuLrV329o3TUyuvgHex1Tq1OJawns0n", 
    },
     {
      name: "Mサイズ",
      subtitle: "M字/生え際/天頂部",
      
      sessions: "6回コース",
      originalPrice: "117,810",
      campaignPrice: "94,248",
      taxLabel: "（税込）",
      monthlyPrice: "23,562",
      features: ["1回コース ￥23,100（税込）","3回コース ￥62,370（税込）"],
      buttonText: "このプランで予約",
      // ★ 追加：全身脱毛（顔・VIO除く）の照射範囲画像パス（適宜変更してください）
      treatmentImage: "https://lh3.googleusercontent.com/d/1-wuLrV329o3TUyuvgHex1Tq1OJawns0n", 
    },
    {
      name: "Lサイズ",
      subtitle: "M字/生え際/天頂部",
      
      sessions: "6回コース",
      originalPrice: "252,450",
      campaignPrice: "201,960",
      taxLabel: "（税込）",
      monthlyPrice: "50,490",
      features: ["1回コース ￥49,500（税込）","3回コース ￥133,650（税込）"],
      buttonText: "このプランで予約",
      // ★ 追加：全身脱毛（顔・VIO除く）の照射範囲画像パス（適宜変更してください）
      treatmentImage: "https://lh3.googleusercontent.com/d/1-wuLrV329o3TUyuvgHex1Tq1OJawns0n", 
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

  paymentMethods: "お支払い方法：現金 / クレジットカード / 医療ローン（最大60回分割）"
};
