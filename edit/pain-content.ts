// edit/pain-content.ts

export const PAIN_CONTENT = {
  // ① 全体の共通設定（コスト比較・投資仕様）
  badge: "Cost Performance & Evidence",
  mainTitle: "「隠す」ための終わらない維持費か。\n「生やす」ための賢明な投資か。",
  mainSubtitle: "かつらや増毛は根本解決にならないだけでなく、生涯にわたり莫大な維持費がかかり続けます。医療発毛なら、自毛が生え揃った後は安価な「維持治療」へ移行可能。長期的には圧倒的なコストダウンを実現します。",

  // ② 背面・前面の画像
  sectionBgImage: "/images/bg-pain.png", 
  sectionBgImagePC: "/images/pain-full-pc.png", 
  sectionBgImageM: "/images/pain-full-m.png", 

  // ③ 対策の具体的な内容（01, 02, 03として表示）
  measures: [
    {
      id: "01",
      title: "終わらない「隠すコスト」の真実",
      image: "http://googleusercontent.com/image_generation_content/16", // ★先ほど生成したコストグラフ画像
      subTitle: "5年間で約240万円。生涯続く買い替えと増毛費用",
      description: "かつらや美容増毛は、初期費用だけでなく、毎月のメンテナンス（編み直し・カット・増毛追加）や定期的な製品の買い替えが必須です。自毛が減るほど必要な本数が増え、気づけば莫大な金額を支払い続けることになります。"
    },
    {
      id: "02",
      title: "生え揃えば安くなる「根本投資」",
      image: "https://lh3.googleusercontent.com/d/1JPmpG9sQ-8s__a9FDKYsMwYs9jUQ3ttf", // ★[次に作成] ダウングレードを表現する画像
      subTitle: "月々数千円〜の「維持期」へ賢く移行",
      description: "医療発毛は最初の半年〜1年（発毛集中期）こそ一定の投資が必要ですが、理想のボリュームに達した後は高額な治療を卒業。抜け毛を防ぐ「安価な内服薬のみ」のプランへダウングレードし、手に入れた髪を低コストで一生涯守り抜きます。"
    },
    {
      id: "03",
      title: "頭皮への負担が「さらなるコスト増」を招く",
      image: "http://googleusercontent.com/image_generation_content/15", // ★生成済みの「リスクと矮小化CG」画像
      subTitle: "放置と牽引による毛根の「矮小化」リスク",
      description: "人工毛の結び目による牽引や通気性の悪化は、毛根をさらに細く弱らせAGAの進行を加速させます。ベースの髪が減ることで、さらなる増毛費用がかさむ「負のループ」から抜け出すには、根本からの医療アプローチしかありません。"
    }
  ],

  reassurance: {
    label: "SMART TRANSITION",
    title: "毎月の「隠す費用」を、「生やす投資」へ",
    body1: "隠し続けてAGAを進行させるほど、将来的な発毛難易度も高くなります。",
    body2: "いま支払っている高額な維持費を、ご自身の髪を取り戻すための根本治療に回しませんか？",
    
    // 💡 行動を促す知的なメッセージ（37文字）
    body3: "「もう手遅れかも」と諦める前に。\nまずは当院の無料カウンセリングへご相談ください。",
    
    note: "※ グラフの費用目安は一般的な増毛サロンと当院の比較シミュレーションです。お薬代は月々定額制となります。"
  }
};
