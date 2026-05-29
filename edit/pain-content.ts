// edit/pain-content.ts

export const PAIN_CONTENT = {
  // ① 全体の共通設定（AGAサイバー仕様）
  badge: "Science & Evidence",
  mainTitle: "抜け毛を止め、生やす。\n医学に基づいた、3つのアプローチ。",
  mainSubtitle: "AGAは進行性の病気です。気根の寿命が尽きる前に、科学的根拠のある医療の力で、確かな発毛へと導きます。",

  // ② 背面・前面の画像（既存のままでOK、後からAGA画像に変えられます）
  sectionBgImage: "/images/bg-pain.png", 
  sectionBgImagePC: "/images/pain-full-pc.png", 
  sectionBgImageM: "/images/pain-full-m.png", 

  // ③ 対策の具体的な内容（01, 02として表示）
  measures: [
    {
      id: "01",
      title: "原因を狙い撃つ。守りの内服薬。",
      image: "https://lh3.googleusercontent.com/d/1JPmpG9sQ-8s__a9FDKYsMwYs9jUQ3ttf", // ★ここにAGA治療やドクターの画像を当てはめます
      subTitle: "フィナステリド・デュタステリド処方",
      description: "薄毛の最大の引き金である「悪性男性ホルモン（DHT）」の生成を根元からブロック。乱れきったヘアサイクルを正常な長さに引き戻し、まずはこれ以上の抜け毛の進行を完全に食い止めます。"
    },
    {
      id: "02",
      title: "血管を拡張し、眠る毛根を叩き起こす。",
      image: "https://lh3.googleusercontent.com/d/1JPmpG9sQ-8s__a9FDKYsMwYs9jUQ3ttf", 
      subTitle: "高濃度ミノキシジル（内服・外用）",
      description: "毛細血管を力強く拡張し、頭皮への血流を爆発的にアップ。毛根の最深部にある毛乳頭へ発毛に必要な栄養を強制的に届けることで、休止期に入って眠っていた髪の毛を太く、強く、一気に生やし込みます。"
    }
  ],

 reassurance: {
    label: "CLINICAL DOCTOR SUPPORT",
    title: "将来の薄毛に不安のある方へ",
    body1: "AGA治療は、早く始めるほど劇的な効果とコストパフォーマンスを発揮します。",
    body2: "医師の診断のもと、あなたの進行度に合わせた最適な組み合わせをご提案。",
    
    // 💡 以前の美しい分量に合わせて、無駄な煽りを削り知的に短縮！（37文字）
    body3: "「もう手遅れかも」と諦める前に。\nまずは当院へ、お気軽にご相談ください。",
    
    note: "※ 無料カウンセリングを実施中。お薬代は選べるプラン制（月々定額）となります。"
  }
};
