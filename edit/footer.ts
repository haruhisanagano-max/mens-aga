// edit/footer.ts

export const FOOTER_CONTENT = {
  // 🔴 ロゴ画像の設定（public/images/logo-footer.png に画像を置いてください）
  logoImage: "https://lh3.googleusercontent.com/d/1EVTRbXaa2ipGRwnIm1Bfl1B_7WqYLDnN", 
  logoWidth: 180,  // 横幅を少しコンパクトに
  logoHeight: 45,  // 高さ

  // 🔴 背景・余白のリモコン（ここで全て決まります）
  style: {
    backgroundColor: "#ffffff", // 背景色
    paddingTop: "30px",         // フッター全体の上の余白
    paddingBottom: "20px",      // フッター全体の下の余白
    logoMarginBottom: "15px",   // 🆕 ロゴとコピーライトの間の距離（ここを詰めました）
    borderTopColor: "rgba(4, 75, 65, 0.1)" // 境界線をより繊細な色に
  },
  
  copyright: "© 2026 VIRGIN CLINIC.（緑風会） All Rights Reserved.",
  
  links: [] 
};
