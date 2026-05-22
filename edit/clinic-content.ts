// edit/clinic-content.ts

export const CLINIC_STAFF_CONTENT = {
  title: "クリニック紹介",
  subtitle: "信頼と安心のクリニックで、美しさをサポート",

  // ★ セクション全体の背景画像
  sectionBgImage: "/images/bg-clinic.png", 

  doctor: {
    name: "佐々木 朋宏",
    title: "医師 / 理事長",
    message: "当院ではコストや痛み、肌への負担を抑え、誰もが安心して受けられる医療脱毛を追求しています。厚生労働省承認の『ジェントルマックスプロ』を導入し、エステとの違いやケアについても丁寧に説明いたします。はじめての方も、乗り換えをご検討中の方も、お気軽にご相談ください。",
    image: "https://lh3.googleusercontent.com/d/10fSez7cgb4xBjXEh-gCze_bH-PHmIA-K"
  },

  features: [
    { title: "全台ジェントルマックスプロ", desc: "最高位の脱毛器で最高の効果を実感", image: "https://lh3.googleusercontent.com/d/1MD7DSQrw1AANeBguvdZ8UI4fUT94Lbit" },
    { title: "女性スタッフ対応", desc: "デリケートな部位も女性スタッフが担当", image: "https://lh3.googleusercontent.com/d/1iovqjmFX16KKzqPtu5yIDeTfX9AeO3Fd" },
    { title: "丁寧なカウンセリング", desc: "お悩みやご希望をしっかりヒアリング", image: "https://lh3.googleusercontent.com/d/1dBvodRb1c2okhWFLBLDwKdAgmRkVfFaq" }
  ],

  clinics: {

     kyoto: {
      name: "京都院",
      description1: "四条通の喧騒から少し離れた、六角通と柳馬場通が交差する落ち着いたエリア。歴史ある街並みに馴染む『イーグルコート京都六角雅心庵』の2階です。",
      description2: "烏丸・河原町・御池の各方面から徒歩圏内。どの路線からでも通いやすく、お買い物や仕事帰りにも立ち寄りやすい、静かで上質な空間をご用意しています。",
      fullName: "ヴァージンクリニック 京都院",
      nearestStation: "阪急京都河原町駅から徒歩1分",
      zipCode: "〒604-8073",
      address: "京都府京都市中京区六角通柳馬場東入大黒町７１　イーグルコート京都六角雅心庵２F",
      phone: "075-708-8113",
      access: ["四条駅、烏丸御池駅、京都市役所前駅、京都河原町駅　各駅より徒歩5分"],
      hours: { weekday: "平日10:00 - 19:00", weekend: "土日祝10:00 - 19:00", closed: "水曜日" },
      mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6535.946555466881!2d135.7645279483921!3d35.00737404456697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109c1445f3e87%3A0x81786b8b1b32bbe9!2z44O044Kh44O844K444Oz44Kv44Oq44OL44OD44Kv5Lqs6YO96Zmi!5e0!3m2!1sja!2sjp!4v1775195210148!5m2!1sja!2sjp", 
      mapPageUrl: "https://www.google.com/maps/place/%E3%83%B4%E3%82%A1%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF%E4%BA%AC%E9%83%BD%E9%99%A2/@35.007374,135.7645279,16z/data=!4m6!3m5!1s0x600109c1445f3e87:0x81786b8b1b32bbe9!8m2!3d35.0075641!4d135.7644644!16s%2Fg%2F11fs__5v3d?entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D",
      mainImage: "https://lh3.googleusercontent.com/d/15vH0--97-oQtqWhf_96QVd57M8s9j_Q8",
      gallery: [
        { label: "待合室", url: "https://lh3.googleusercontent.com/d/1G0SRHRaYEY3UeUzD7BKcB7EKQE6S1uJf" },
        { label: "パウダー", url: "https://lh3.googleusercontent.com/d/1SAduOCvaywcILuwv4w1Bi7BqZGjYrkvx" },
        { label: "施術", url: "https://lh3.googleusercontent.com/d/1u2HdBYaqnMjH7uY6FQeI7m19oJ5fs-rl" }
      ]
    },
    fukuoka: {
      name: "福岡院",
      description1: "天神の喧騒から一本路地に入った、落ち着きのある今泉エリア。静かな街並みに溶け込む商業ビル『ノイラ天神』の2階です。",
      description2: "完全個室・女性スタッフ対応で、デリケートなお悩みも安心してご相談いただけます。",
      fullName: "ヴァージンクリニック 福岡天神院",
      nearestStation: "地下鉄　天神駅／地下鉄　天神南駅／西鉄　福岡(天神)駅　各駅より徒歩5分",
      zipCode: "〒810-0021",
      address: "福岡県福岡市中央区今泉2-5-28 ノイラ天神2Ｆ",
      phone: "092-791-3912",
      access: [
        "西鉄福岡（天神）駅 北口より徒歩3分",
        "福岡市地下鉄空港線「天神駅」4番出口より徒歩2分",
        "福岡市地下鉄七隈線「天神南駅」5番出口より徒歩5分"
      ],
      hours: { weekday: "平日10:00 - 19:00", weekend: "土日祝10:00 - 19:00", closed: "水曜日" },
      mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.9368991320373!2d130.3962550285006!3d33.58590211554397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541910f4cf05549%3A0x6c6b85532013ca9a!2z44O044Kh44O844K444Oz44Kv44Oq44OL44OD44Kv56aP5bKh5aSp56We6Zmi!5e0!3m2!1sja!2sjp!4v1775193598185!5m2!1sja!2sjp",
      mapPageUrl: "https://www.google.com/maps/place/%E3%83%B4%E3%82%A1%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF%E7%A6%8F%E5%B2%A1%E5%A4%A9%E7%A5%9E%E9%99%A2/@33.5859021,130.396255,19z/data=!3m2!4b1!5s0x3541918447392345:0xa0f51adeda3890fe!4m6!3m5!1s0x3541910f4cf05549:0x6c6b85532013ca9a!8m2!3d33.585901!4d130.3969001!16s%2Fg%2F11htm1d_ds?entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D",
      mainImage: "https://lh3.googleusercontent.com/d/1uEWKOlFQmtNPWQjdRVYVd7QGUsTxmkZl",
      gallery: [
        { label: "受付", url: "https://lh3.googleusercontent.com/d/1EsfhRPcLn-E7MtJPug3VG46p03fKZmyd" },
        { label: "パウダー", url: "https://lh3.googleusercontent.com/d/1BNfkh4O_Xcu471oaxvDTrKugHBBZ_RGc" },
        { label: "施術", url: "https://lh3.googleusercontent.com/d/1sxAcAtV6J1ub2ixzPvcSmjW-mc_7r6DP" }
      ]
    },
    hiroshima: {
      name: "広島院",
      description1: "紙屋町交差点からすぐ、エディオン広島本館の裏手に位置する『平田ビル』の3階です。",
      description2: "プライバシーに配慮した完全予約制。周囲を気にせずリラックスして施術を受けられます。",
      fullName: "ヴァージンクリニック 広島院",
      nearestStation: "広電本線「紙屋町西」駅から徒歩1分／アストラムライン「本通」駅から徒歩3分",
      zipCode: "〒730-0051",
      address: "広島県広島市中区大手町1-4-1 平田ビル3F",
      phone: "082-207-0007",
      access: ["広電本通電停より徒歩1分", "アストラムライン「本通駅」直結", "JR広島駅より路面電車で約15分"],
      hours: { weekday: "平日10:00 - 19:00", weekend: "土日祝10:00 - 19:00", closed: "水曜日" },
      mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.2497738606844!2d132.45355281155813!3d34.394996799441515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa3d16771fdb1%3A0x1601880ef7d340bb!2z44O044Kh44O844K444Oz44Kv44Oq44OL44OD44Kv5bqD5bO26Zmi!5e0!3m2!1sja!2sjp!4v1775193975855!5m2!1sja!2sjp", 
      mapPageUrl: "https://www.google.com/maps/place/%E3%83%B4%E3%82%A1%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%8B%E3%83%83%E3%82%AF%E5%BA%83%E5%B3%B6%E9%99%A2/@34.3949968,132.4535528,17z/data=!3m2!4b1!5s0x355aa20e9751fad3:0xaf5b18acfcc10eb1!4m6!3m5!1s0x355aa3d16771fdb1:0x1601880ef7d340bb!8m2!3d34.3949924!4d132.4561331!16s%2Fg%2F11rj4q2jz0?entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D",
      mainImage: "https://lh3.googleusercontent.com/d/1g2iulDDwCY7ggjX43kzfdv5YnimLlbAe",
      gallery: [
        { label: "パウダー", url: "https://lh3.googleusercontent.com/d/1muc6mitovEaON-VMxoO2m7Fyo4nVpEpG" },
        { label: "施術", url: "https://lh3.googleusercontent.com/d/1e3ORfy9SFSlup592gZwxcynLpvUqehuk" },
        { label: "待合", url: "https://lh3.googleusercontent.com/d/1IOXLvJRJxeuA6sGIPgyo2zJeCPITGwTm" }
      ]
    }
   
  }
};
