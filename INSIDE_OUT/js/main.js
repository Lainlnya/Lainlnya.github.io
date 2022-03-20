$(document).ready(function(){
    const move_page = () =>{
    //첫 화면에서 움직이는 애니메이션
        setTimeout(function(){
            $(".five_character").animate({"margin-top": "0vh"}, 2000);
            setTimeout(function(){
                $(".first_letter").animate({"margin-top": "0.3vw"}, 2000);
                setTimeout(function(){
                    $(".last_letter").animate({"font-size": "11vw", "margin-top":"2.3vw"}, 2000);
                    setTimeout(function(){
                        $(".click_btn").css("display", "block");
                    }, 2000);
                }, 1000);
            } ,1000);
        }, 1000);
        
        
        const first_page  = document.querySelector(".first_page");
        const five_character = document.querySelector(".five_character");
        const real_background = document.querySelector(".real_background");
        const second_page = document.querySelector(".second_page");
        five_character.addEventListener("click", function(){
                real_background.style.display = "none";
                first_page.style.display = "none";
                second_page.style.display = "block";
            
        //두번쨰 페이지 타이핑 이벤트
        const data = [
            {
            AboutDevTypeText: "<span>안녕? 나는 라일리야. 이 이야기의 주인공이지.<br/>원래 고향은 미네소타 주인데, 여기 샌프란시스코로 이사왔어.<br/>사람마다 감정의 리더는 모두 다른데, 나는 기쁨이가 감정의 리더야.<br/>내 머리속으로 들어와볼래?<br>다른 친구들 모두 만나게 해줄게</span>"
            }
        ];
        const want_speak = `<p class="speak_character">
        필름마크에 마우스를 올려놓으면, 움직이는 영상을 확인할 수 있어.<br>
        클릭하면 마음 컨트롤 타워에는 어떤 감정이 서있는지도 알 수 있지.<br>
        한 번 클릭해보는건 어때?
        </p>`;
        let type_text = document.getElementsByClassName("type_text");
        for (let j = 0; j < type_text.length; j++) {
        let currentElementId = type_text[j].id; //AboutDevTypeText
        let currentElementIdContent = data[0][currentElementId];//안에 들어있는 span들
        let element = document.getElementById(currentElementId);//element = <span id="AboutDevTypeText"></span>
        let devTypeText = currentElementIdContent;
        // type code
        let i = 0, isTag, text;
        (function type() {
            text = devTypeText.slice(0, ++i);
            if (text === devTypeText) return;
            element.innerHTML = text + `<span class='blinker'></span>`;
            let char = text.slice(-1);
            if (char === "<") isTag = true;
            if (char === ">") isTag = false;
            if (isTag) return type();
            setTimeout(type, 100);
        })();
            let see_yes = document.querySelector(".see_yes");
            let see_no = document.querySelector(".see_no");
            see_yes.addEventListener("click", function(){
                let second_page = document.querySelector(".second_page");
                let third_page = document.querySelector(".third_page");
                second_page.style.display = "none";
                third_page.style.display = "flex";
                //3페이지 라일리 생겼다 없어지는 코드
                setTimeout(function(){
                    $(".riley_speak").css("display", "block");
                    $(".riley_speak div").html(want_speak);
                }, 1000);
            })
            see_no.addEventListener("click", function(){
                $(".see_no_sub").animate({"margin-left": "74vw"}, 1000);
            });
        }
        });
    }
    move_page();
    //마우스 호버, 아웃시 영상 재생
    let third_effect = () =>{
        var emotion_collection = ["disgust", "joy", "crying", "fear", "angry"];
        for(let i=0; i<emotion_collection.length; i++){
            $("."+emotion_collection[i]+"_riley").on("mouseover", function(){
                $("."+emotion_collection[i]+"_riley").css({
                    "background": 'url("./image/riley/riley_'+ emotion_collection[i]+'.gif")',
                    "background-repeat":"no-repeat", "background-size": "cover", "width": "20vw", "height": "37vh"
                });
                switch(emotion_collection[i]){
                    case("disgust"):
                    $(".disgust_riley").css("background-position", "40% 50%");
                    break;
                }
            });
            $("."+emotion_collection[i]+"_riley").on("mouseout", function(){
                $("."+emotion_collection[i]+"_riley").css({
                    "background": 'url("./image/riley/riley_nomove/riley_'+ emotion_collection[i]+'.png")',
                    "background-repeat":"no-repeat", "background-size": "cover", "width": "20vw", "height": "37vh"
                });
                switch(emotion_collection[i]){
                    case("disgust"):
                    $(".disgust_riley").css("background-position", "40% 50%");
                    case("crying"):
                    $(".crying_riley").css("background-position", "50% 50%");
                    break;
                    case("joy"):
                    $(".joy_riley").css("background-position", "50% 50%");
                    break;
                    case ("angry"):
                    $(".angry_riley").css("background-position", "0% 50%");
                    break;
                }
            });
        }
    }
    third_effect();
    //클릭하면 캐릭터 소개 뜨는 창
    const character_description = {
        "cha_5": {
            "eng" :"anger",
            "color": "#D21F27",
            "img": './image/character/anger2.png',
            "name": "버럭",
            "good_word":"What have We done....", 
            "description": "상당히 다혈질적이고 열받을수록 머리 위에 열이 오르기 시작해 완전 폭발하면 불꽃이 치솟는다. 다른 감정들과 달리 막나가는 면이 두드러지지만 그렇다고 본성이 나쁜건 아니다. 기본적으로 라일리를 생각하는 성격이긴 하지만 심각한 막가파이다."
        },
        "cha_4" :{
            "eng" :"fear",
            "color": "#AC80B8",
            "img" : './image/character/fear.png',
            "name": "소심",
            "good_word": "Thank you, Joy. But I'll have you know I'm not scared of everything.",
            "description": "안전주의자. 하지만 정도가 지나쳐서 뭐든 겁부터 먹는다. 주로 보이는 역할은 놀라움, 두려움, 불안. 반면 다칠 일이 없는 꿈 보는 일을 할 때는 당당하게 행동한다.<br> 기쁨이가 라일리의 새 학교 첫 날 일어날 수 있는 모든 최악의 상황 리스트를 써달라고 했을 때, 유성을 뜻하는 meteor의 철자를 물어본다."
        },
        "cha_2": {
            "eng" :"joy",
            "color" : "#FAE5A4",
            "img" : './image/character/joy.png',
            "name": "기쁨",
            "good_word": "We can't focus on what's going wrong. There's always a way to turn things around!",
            "description": "감정 중 가장 먼저 생겨난 감정의 리더. 라일리는 무조건 행복하게만 해줘야 하고 절대 어떤 일이 있어서 슬프고 우울하게 해서는 안된다는 강한 신념과 강박관념이 있다.<br>기쁨의 머리카락, 눈동자 색이 다른 감정들과 다르게 자신만의 색이 아닌 슬픔의 파란색인 것도 결국은 기쁨과 슬픔은 조화를 이뤄야 함을 암시한다."
        },
        "cha_3":{
            "eng" :"sadness",
            "color": "#AEDBE8",
            "img" : './image/character/sadness.png',
            "name": "슬픔",
            "good_word": "I'm too sad to walk.",
            "description": "라일리가 태어났을 때 기쁨이와 같이 태어났다. 본인의 정체성이 슬픔인 탓인지 항상 축 처져있고 비관적이지만, 의외로 작중에서 우는 장면은 얼마 나오지 않는다.<br>오히려 우울증에 걸린 사람의 이미지에 더 가까운 반응이나 태도를 주로 보이는 편이다. 그러나 의외로 기억력이 상당하고 머리를 굴려야 할 떄는 잘 굴리는 모습도 갖추고 있다."
        },
        "cha_1":{
            "eng" :"disgust",
            "color" : "#87C35D",
            "img" : './image/character/disgust.png',
            "name": "까칠",
            "good_word" : "When I'm through, Riley will look so good that other kids will look at their own outfits and barf.",
            "description": "까칠함과 경멸이 주된 성격이다. 보이는 역할로는 생리적 거부, 까다로움, 짜증과 경멸이 있다. 브로콜리를 싫어하는 식성이라던지 라일리가 좋아하거나 싫어하는 것에 관한 반응에 가장 많이 개입한다.<br> 주로 위생이나 패션 등 외적인 이미지, 또래 아이들의 시선에 대해 가장 많은 신경을 쓴다."
        }
    }
    let view_cha = document.querySelectorAll(".view_cha");
    let go_to_video = document.querySelector(".each_video");
    for(let i=0; i<view_cha.length; i++){
        view_cha[i].addEventListener("click", function(){
            $.each(character_description, function(cha_index, cha_value){
                switch(cha_index){
                    case("cha_"+(i+1)):
                    $(".letter_trailer, .see_trailer").css("display", "none");
                    $(".introduce_character").css({
                        "display":"inline-flex",
                        "border" :"20px solid" + cha_value["color"],
                        "border-radius": "1vw"
                    });
                    $(".name_input").css("color", cha_value["color"]);
                    $(".display_character").css({
                        "background": "url("+cha_value["img"]+")",
                        "background-repeat": "no-repeat",
                        "background-size" : "contain"
                    });
                    switch(cha_value["name"]){
                        case("까칠"):
                        $(".display_character").css({"background-position": "0% 130%"});
                        break;
                        case("소심"):
                        $(".display_character").css({"background-position": "0% 140%"});
                        break;
                    }
                    
                    $(".name_input").html(cha_value["name"]);
                    $(".word_input").html(cha_value["good_word"]);
                    $(".desc_input").html(cha_value["description"]);
                    $(".speak_character").html(cha_value["name"] +"이를 골랐네! <br>" + cha_value["name"]+"이가 어떤 성격인지 알려줄게.");
                    $(".speak_character").css("font-size", "1.4vw");
                    $(".speak_character").css("margin-top", "11vh");
                    $(".view_video").on("click", function(){
                        $(".go_to_video").css("display", "block");
                        go_to_video.setAttribute("src", "./image/video/"+cha_value["eng"] +".mp4");
                    });
                    $(".xi-close-min").on("click", function(){
                        $(".go_to_video").css("display", "none");
                    })
                    break;
                }
            })
        })
    }
});