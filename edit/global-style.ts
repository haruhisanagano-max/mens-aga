// edit/【0】サイト全体(global-style).ts

export const GLOBAL_STYLE = {
  clinicName: "LUXE BEAUTY CLINIC",
  gaTagId: "G-E9N857TB9Q", 

  colors: {
    // メインカラー
    emerald: "#004B40",      // [var(--emerald)]
    emeraldLight: "#006456", // [var(--emerald-light)]
    
    // アクセント・装飾
    gold: "#C9A962",         // [var(--gold)]
    goldLight: "#D4BC82",    // [var(--gold-light)]
    
    // 背景・ベース
    mint: "#FAFCFB",         // [var(--mint)]
    mintLight: "#F2FAF8",    // [var(--mint-light)]
    mintDark: "#D1E5E0",     // [var(--mint-dark)]
    
    // テキスト
    charcoal: "#1A2F2A",     // [var(--charcoal)]
    charcoalLight: "#4A5D59", // [var(--charcoal-light)]
  },

  shapes: {
    commonRounded: "0px",    // 全体の角丸（0pxで角を立たせる）
    buttonRounded: "9999px", // ボタンの丸み
  }
};
