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
      name: "全身+VIO脱毛プラン",
      subtitle: "首（前面）除く",
      sessions: "５回コース（+1回）",
      originalPrice: "296,450",
      campaignPrice: "179,520",
      taxLabel: "（税込）",
      monthlyPrice: "41,800",
      features: ["両ワキ、両ヒジ上、両ヒジ下、手の指・甲","うなじ、背中（上・下）、お尻、胸、腹","膝上、膝、膝下、足の指・甲","Vライン、Iライン、Oライン"],
      buttonText: "このプランで予約",
      // ★ 追加：全身脱毛（顔・VIO除く）の照射範囲画像パス（適宜変更してください）
      treatmentImage: "https://lh3.googleusercontent.com/d/1qMMjKAs1yX0xV3E95xGS0U3Y26CIHUgi", 
    },
    {
      name: "全身パーフェクト脱毛",
      subtitle: "顔・VIO含む全部位/首（前面）除く",
      sessions: "5回コース（+1回）",
      originalPrice: "365,200",
      campaignPrice: "227,920",
      taxLabel: "（税込）",
      monthlyPrice: "48,400",
      features: ["額、頬、鼻、鼻下、あご", "両ワキ、両ヒジ上、両ヒジ下、手の指・甲","うなじ、背中（上・下）、お尻、胸、腹","膝上、膝、膝下、足の指・甲","Vライン、Iライン、Oライン"],
      buttonText: "このプランで予約",
      // ★ 追加：全身+VIOの照射範囲画像パス（適宜変更してください）
      treatmentImage: "https://lh3.googleusercontent.com/d/1wC2HtmM98zymIin12Q-xVk2HnfVEArYG",
    }
  
  ],

  // 部位別プラン表
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

  paymentMethods: "お支払い方法：現金 / クレジットカード / 医療ローン（最大60回分割）"
};
