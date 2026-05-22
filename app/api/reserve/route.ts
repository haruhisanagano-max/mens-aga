import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { clinic, name, email, phone, preferredDate, preferredTime, plan, message } = data;

    // 1. メールの通り道を準備（XサーバーのSMTPを使用）
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. 院ごとの送り先設定（実際のアドレスに書き換えてください）
    const clinicEmails: Record<string, string> = {
      "京都院": "haruhisa_nagano@sincere-vision.com", // 本番: contact@kyoto.v-clinic.jp
      "福岡院": "contact@fukuoka.v-clinic.jp",
      "広島院": "contact@hiroshima.v-clinic.jp",
    };

    // 共通の予約詳細ブロック（箇条書きで整理）
    const reservationDetail = `
--------------------------------------------------
【ご予約内容の詳細】
■ご希望の医院　： ${clinic}
■お名前（氏名）： ${name} 様
■電話番号　　　： ${phone}
■メールアドレス： ${email}
■ご希望日　　　： ${preferredDate}
■ご希望時間帯　： ${preferredTime}
■ご希望のプラン： ${plan}
■ご質問・ご要望：
${message || "（なし）"}
--------------------------------------------------`;

    // 3. 【院・管理者への通知メール】
    await transporter.sendMail({
      from: `"女性専用LP予約システム" <${process.env.EMAIL_USER}>`,
      to: clinicEmails[clinic] || "admin@v-clinic.jp",
      cc: "haruhisa_nagano@sincere-vision.com", 
      subject: `【新規予約通知】${clinic} / ${name}様`,
      text: `女性専用LPから新規の予約申し込みがありました。
内容を確認し、お客様へ折り返しのご連絡をお願いいたします。
${reservationDetail}
※このメールはシステムからの自動送信です。`,
    });

    // 4. 【お客様への自動確認メール】
    await transporter.sendMail({
      from: `"ヴァージンクリニック" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `【仮予約受付完了】ヴァージンクリニック`,
      text: `${name} 様

この度はヴァージンクリニックにお申し込みいただき、誠にありがとうございます。

以下の内容で「仮予約」を承りました。
24時間以内に、当院スタッフよりお電話またはメールにて、予約確定のご連絡を差し上げます。
${reservationDetail}

※現時点ではまだ予約は確定しておりません。
スタッフからの連絡をお待ちくださいますようお願い申し上げます。

もし24時間以内に連絡がない場合や、お急ぎの場合は、大変お手数ですが公式サイトに記載の電話番号までお問い合わせください。

スタッフ一同、ご来院を心よりお待ちしております。

--------------------------------------------------
ヴァージンクリニック 公式サイト
https://v-clinic.jp
--------------------------------------------------`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
