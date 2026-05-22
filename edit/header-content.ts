// edit/header-content.ts

export const HEADER_CONTENT = {
  // 🔴 ロゴ画像の設定
  logoImage: "https://lh3.googleusercontent.com/d/1EVTRbXaa2ipGRwnIm1Bfl1B_7WqYLDnN", // public/images/logo.png に画像を配置してください
  logoWidth: 160,               // PCでのロゴ横幅
  logoHeight: 40,               // PCでのロゴ高さ
  logoMobileWidth: 120,         // スマホでのロゴ横幅
  
  // テキストロゴ（画像がない場合のバックアップ）
  logoText: "LUXE BEAUTY CLINIC",

  // ナビゲーション
  nav: [
    { label: "キャンペーン", id: "campaign" },
    { label: "料金", id: "pricing" },
    { label: "クリニック紹介", id: "clinic" },
    { label: "よくある質問", id: "faq" },
  ],

  // ボタン設定
  buttons: {
    reserve: "無料予約",
    line: "LINE相談"
  }
};
