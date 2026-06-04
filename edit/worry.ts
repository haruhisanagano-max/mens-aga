// edit/worry.ts

export const WORRY_CONTENT = {
  badge: "NEGATIVE LOOP CHECK",
  title: "「隠す」日々への疲れ。\n終わらない出費への不安。",
  description: "「一生これを続けるのか…」\nふとした瞬間に感じる、ごまかし続けることへの限界。\n隠せば隠すほど自毛は減り、維持費は膨らんでいく。\nそんな「負のループ」に心当たりはありませんか？",
  
  // スマホでの視認性を高めるため、4つの独立したカードとして定義
  items: [
    {
      id: "01",
      title: "終わらない出費の限界",
      description: "毎月のメンテナンス代と、数年ごとの高額な買い替えローン。「自毛が減るほど費用が上がる」現実に嫌気がさしている。",
      image: "https://lh3.googleusercontent.com/d/188vlBew8w2OzOtQt1DP3jmH3FuBq6_Rw", // ★画像1
      alt: "高額な維持費に悩むイメージ"
    },
    {
      id: "02",
      title: "他人の視線と行動制限",
      description: "強風の日は外に出たくない。スポーツや社員旅行の温泉など、心から楽しめない場面が多すぎる。",
      image: "http://googleusercontent.com/profile/picture/2", // ★画像2
      alt: "他人の視線を気にするイメージ"
    },
    {
      id: "03",
      title: "外した時の頭皮ダメージ",
      description: "蒸れ、痒み、引っ張られる痛み。何より、メンテナンスの度に見る「さらに減り、細くなった自分の髪」が辛い。",
      image: "http://googleusercontent.com/profile/picture/3", // ★画像3
      alt: "頭皮の炎症や自毛の減少に悩むイメージ"
    },
    {
      id: "04",
      title: "「生やす」根本解決への渇望",
      description: "ごまかしの人生はもう終わりにしたい。毎月払っているそのお金を、自分の髪を取り戻すための「根本投資」に回しませんか？",
      image: "http://googleusercontent.com/profile/picture/4", // ★画像4
      alt: "前を向く根本解決のイメージ"
    }
  ]
};
