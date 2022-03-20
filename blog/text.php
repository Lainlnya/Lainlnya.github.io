<?php
// 메시지발송
function SendMesg($url) {
    // 테스트 후, 서버 상태에 따라 원활한 접속 방법을 이용해주세요.
    //$fp = fsockopen("ssl:munjanara.co.kr", 443, $errno, $errstr, 10);
    $fp = fsockopen("munjanara.co.kr", 80, $errno, $errstr, 10);

    if(!$fp){
        echo "$errno : $errstr";
        exit;
    }

    fwrite($fp, "GET $url HTTP/1.0\r\nHost: munjanara.co.kr\r\n\r\n"); 
    $flag = 0; 
    
    while(!feof($fp)){
        $row = fgets($fp, 1024);

        if($flag) $out .= $row;
        if($row=="\r\n") $flag = 1;
    }
    fclose($fp);
    return $out;
}


$userid = "kimyelim100";           // 문자나라 아이디
$passwd = "apple1304";           // 문자나라 2차 비밀번호(로그인 후 개인정보 수정에서 설정)
$hpSender = "01034346978";         // 보내는분 핸드폰번호(문자전송에서 발신번호 인증 필요!)
$hpReceiver = "01034346978";       // 받는분의 핸드폰번호
$adminPhone = "01034346978";       // 비상시 메시지를 받으실 관리자 핸드폰번호
$hpMesg = $_POST['question_person']."님(".$_POST['question_number'].")에게 메세지가 왔습니다.<br>".$_POST['textArea_byte_limit'];           // 메시지
$hpMesg = iconv("UTF-8", "EUC-KR","$hpMesg");
/*  UTF-8 글자셋 이용으로 한글이 깨지는 경우에만 주석을 푸세요. */
/*  ---------------------------------------- */
$hpMesg = urlencode($hpMesg);
$endAlert = 0;  // 전송완료알림창 ( 1:띄움, 0:안띄움 )

// 한줄로 이어쓰기 하세요.
SendMesg("/MSG/send/web_admin_send.htm?userid=$userid&passwd=$passwd&sender=$hpSender&receiver=$hpReceiver&encode=1&end_alert=$endAlert&message=$hpMesg");
echo "<script>alert('메세지가 전송되었습니다.');</script>";
echo "<script>location.href='http://chatwithyrmei.com'</script>";
?>