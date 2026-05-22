<?php
// ★安全装置：React側に「これはJSON形式の返事だよ」と正確に伝える
header('Content-Type: application/json; charset=utf-8');

// 文字化け防止の設定
mb_language("Japanese");
mb_internal_encoding("UTF-8");

// --- 1. 届いたデータ（JSON）を読み込む ---
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    // データの整理
    $clinic = $data['clinic'];
    $name   = $data['name'];
    $age    = $data['age'];     // ★【追加】年齢データを受け取る
    $email  = $data['email'];
    $phone  = $data['phone'];
    $date   = $data['preferredDate'];
    $time   = $data['preferredTime'];
    $plan   = $data['plan'];
    $msg    = $data['message'];

    // 院ごとのメールアドレス振り分け
    $clinicEmails = [
        "京都院" => "contact@v-clinic.jp",
        "福岡院" => "contact@fukuoka.v-clinic.jp",
        "広島院" => "reserve@hiroshima.v-clinic.jp",
    ];
    $to_admin = isset($clinicEmails[$clinic]) ? $clinicEmails[$clinic] : "admin@v-clinic.jp";

    // メールの共通本文
    $reservationDetail = "
--------------------------------------------------
【ご予約内容の詳細】
■ご希望の医院　： $clinic
■お名前（氏名）： $name 様
■ご年齢　　　　： $age
■電話番号　　　： $phone
■メールアドレス： $email
■ご希望日　　　： $date
■ご希望時間帯　： $time
■ご希望のプラン： $plan
■ご質問・ご要望：
$msg
--------------------------------------------------";

    // メールの送り主（エックスサーバーで作成済みのメールアドレス）
    $from_email = "reserve-flp@v-clinic.jp"; 
    $headers = "From: " . mb_encode_mimeheader("ヴァージンクリニック予約システム") . " <$from_email>";

    // --- 2. 院・管理者への通知メール送信 ---
    $subject_admin = "【新規予約通知】$clinic / $name 様";
    $body_admin = "LPから新規の予約申し込みがありました。\n$reservationDetail";
    mb_send_mail($to_admin, $subject_admin, $body_admin, $headers);
    

    // --- 3. お客様への自動返信メール送信 ---
    $subject_user = "【仮予約受付完了】ヴァージンクリニック";
    $body_user = "$name 様\n\nお申し込みありがとうございます。\n現在「仮予約」の状態です。スタッフからの連絡をお待ちください。\n$reservationDetail";
    mb_send_mail($email, $subject_user, $body_user, $headers);

    // 成功したことをブラウザに伝える
    echo json_encode(["success" => true]);
} else {
    // データが空の場合
    echo json_encode(["success" => false, "message" => "データが届いていません"]);
}
