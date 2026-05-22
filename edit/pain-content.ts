// edit/pain-content.ts

export const PAIN_CONTENT = {
  // ① 全体の共通設定
  badge: "Comfort & Science",
  mainTitle: "痛みを抑える、\n当院からのお約束。",
  mainSubtitle: "最新のテクノロジーと細やかな配慮で、\n「痛みに弱い」という不安を、安心へと変えていきます。",

  // ② 背面・前面の画像
  sectionBgImage: "/images/bg-pain.png", 
  sectionBgImagePC: "/images/pain-full-pc.png", 
  sectionBgImageM: "/images/pain-full-m.png", 

  // ③ 対策の具体的な内容（01, 02として表示）
  measures: [
    {
      id: "01",
      title: "瞬間保護。−26℃の静寂。",
      image: "https://lh3.googleusercontent.com/d/1JPmpG9sQ-8s__a9FDKYsMwYs9jUQ3ttf", // ★ここに追加！
      subTitle: "DCD（ダイナミッククーリングデバイス）",
      description: "レーザー照射の「0.数秒前」に、冷却ガスが皮膚表面を瞬時に保護。熱による衝撃を打ち消し、高出力でも驚くほど穏やかな体感を実現します。ジェルによる不快感もありません。"
    },
   
  ],

  // ④ 安心メッセージ（テキストデータ）
  reassurance: {
    label: "PROFESSIONAL CARE",
    title: "痛みに不安のある方へ",
    body1: "当院では、お客様ごとの痛みの感じ方に合わせて、",
    body2: "出力強弱と照射技術の組み合わせで調整いたします。",
    body3: "「痛みが心配で脱毛を諦めていた」\nという方も、ぜひ一度ご相談ください。",
    note: "※ 麻酔のご用意もございますが、ご利用料金がございます。"
  }
};
