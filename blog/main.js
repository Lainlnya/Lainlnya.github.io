$(function () {
    let first_top = $(".first_sec").offset();
    let second_top = $(".second_sec").offset();
    let third_top = $(".third_sec").offset();
    let fourth_top = $(".fourth_sec").offset();
    let fifth_top = $(".portfolio_area").offset();
    let sixth_top = $(".sixth_sec").offset();

    //헤더클릭 이벤트+nav이벤트
    $(document).on("click", function (e) {
        switch (e.target.className) {
            case "anna_logo":
                $("#nav1, #nav2, #nav3, #nav4, #nav5").css("display", "none");
                break;
            case "let_s":
                $("#nav1").css("display", "block");
                $("#nav2, #nav3, #nav4, #nav5").css("display", "none");
                break;
            case "dive_in":
                $("#nav2").css("display", "block");
                $("#nav3, #nav4, #nav5, #nav1").css("display", "none");
                break;
            case "about_skills":
                $("#nav3").css("display", "block");
                $("#nav1, #nav2, #nav4, #nav5").css("display", "none");
                break;
            case "about_portfolio":
                $("#nav4").css("display", "block");
                $("#nav1, #nav2, #nav3, #nav5").css("display", "none");
                break;
            case "about_experience":
                $("#nav5").css("display", "block");
                $("#nav1, #nav2, #nav3, #nav4").css("display", "none");
                break;
        }
    });

    //스크롤 이벤트
    $(window).on("mousewheel", function () {
        var scrollTop = document.body.scrollTop;
        if (scrollTop == 0) {
            scrollTop = document.documentElement.scrollTop;
        }
        if (scrollTop > second_top.top / 2) {
            $(".profile_p, .profile_li").animate({
                "opacity": 1,
                "margin-right": 0
            }, 1000);
            $(".profile_ed").animate({
                "opacity": 1,
                "margin-right": 0
            }, 2000);
        }
        if (scrollTop > third_top.top / 2) {
            $(".graph_input1").animate({
                "margin-left": "0"
            }, 2000);
            $(".graph_input2").animate({
                "margin-left": "0"
            }, 2200);
            $(".graph_input3").animate({
                "margin-left": "0"
            }, 2400);
            $(".graph_input4").animate({
                "margin-left": "0"
            }, 2600);
            $(".graph_input5").animate({
                "margin-left": "0"
            }, 2800);
            $(".graph_percent").css("opacity", "1");
        }
        if (scrollTop < second_top.top) {
            $("#nav1").css("display", "none");
        }
        if (scrollTop >= second_top.top * 0.95 && scrollTop < third_top.top) {
            $("#nav1").css("display", "block");
            $("#nav2, #nav3, #nav4, #nav5").css("display", "none");
        }
        if (scrollTop >= third_top.top * 0.95 && scrollTop < fourth_top.top) {
            $("#nav2").css("display", "block");
            $("#nav1, #nav3, #nav4, #nav5").css("display", "none");
        }
        if (scrollTop >= fourth_top.top * 0.95 && scrollTop < fifth_top.top) {
            $("#nav3").css("display", "block");
            $("#nav1, #nav2, #nav4, #nav5").css("display", "none");
        }
        if (scrollTop >= fifth_top.top * 0.95 && scrollTop < sixth_top.top) {
            $("#nav4").css("display", "block");
            $("#nav1, #nav2, #nav3, #nav5").css("display", "none");
        }
        if (scrollTop >= sixth_top.top * 0.95) {
            $("#nav5").css("display", "block");
            $("#nav1, #nav2, #nav3, #nav4").css("display", "none");
        }
    });

    //about me part1
    $(".profile_first").on("click", function () {
        $(".profile_third, .profile_third_p").removeClass("active_zindex");
        $(".profile_second, .profile_second_p").removeClass("active_zindex");
        $(".profile_second_p").css("display", "none");
        $(".profile_third_p").css("display", "none");
        $(".profile_first_p").css("display", "block");
        $(".profile_first, .profile_first_p").addClass("active_zindex");
    });
    $(".profile_second").on("click", function () {
        $(".profile_first, .profile_first_p").removeClass("active_zindex");
        $(".profile_third, .profile_third_p").removeClass("active_zindex");
        $(".profile_first_p").css("display", "none");
        $(".profile_third_p").css("display", "none");
        $(".profile_second_p").css("display", "block");
        $(".profile_second, .profile_second_p").addClass("active_zindex");
    });
    $(".profile_third").on("click", function () {
        $(".profile_first, .profile_first_p").removeClass("active_zindex");
        $(".profile_second, .profile_second_p").removeClass("active_zindex");
        $(".profile_first_p").css("display", "none");
        $(".profile_second_p").css("display", "none");
        $(".profile_third_p").css("display", "block");
        $(".profile_third, .profile_third_p").addClass("active_zindex");
    })
    //문자보내는 스크립트 -> 문자 계속 와서 비활성화 중
    // $(".send_message").on("click", function(){
    //     $(".message_layer").css("display", "flex");
    //     $(".captcha_area").css("display", "flex");
    //     let number_check = document.getElementById("number_check");
    //     number_check.addEventListener("keyup", function(){
    //         fn_checkByte($("#number_check").val());
    //     });
    // });
    // const check_number = /^[0-9]*$/g;
    // let question_person = document.querySelector(".question_person");
    // let question_number = document.getElementById("question_number");
    // question_number.addEventListener("keyup", function(){
    //     if(check_number.test($("#question_number").val())){
    //         $("#question_number").val("");
    //         alert("숫자만 입력가능합니다.");
    //     }
    // });
    // question_person.addEventListener("keyup", function(){

    // });

    function fn_checkByte(obj) {
        const maxByte = 80; //최대 80바이트
        const text_val = obj; //입력한 문자
        console.log(text_val);
        const text_len = obj.length; //입력한 문자수

        let totalByte = 0;
        for (let i = 0; i < text_len; i++) {
            const each_char = text_val.charAt(i);
            const uni_char = escape(each_char) //유니코드 형식으로 변환
            if (uni_char.length > 4) {
                // 한글 : 2Byte
                totalByte += 2;
            } else {
                // 영문,숫자,특수문자 : 1Byte
                totalByte += 1;
            }
        }

        if (totalByte > maxByte) {
            alert('최대 80Byte까지만 입력가능합니다.');
            document.getElementById("nowByte").innerText = totalByte;
            document.getElementById("nowByte").style.color = "red";
        } else {
            document.getElementById("nowByte").innerText = totalByte;
            document.getElementById("nowByte").style.color = "green";
        }
    }


    //captcha script
    let canvas = document.getElementById("my_canvas");
    let ctx = canvas.getContext("2d");
    //Random - 1000~9999
    let c_random = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    ctx.font = "70px Comic Sans MS";
    ctx.fillStyle = "#BB8B86";
    ctx.textAlign = "center";
    ctx.fillText(c_random, canvas.width / 2, canvas.height / 2);
    $("#check_capt").on("click", function (e) {
        let value_capt = $('#value_capt').val();
        if (c_random == value_capt) {
            $('.value_capt, .check_capt, .cap_guide, .my_canvas').attr("style", "display: none;");
            $(".message_area").css("display", "block");
        } else {
            alert("캡차 오류입니다.");
            location.href = "http://chatwithyrmei.com/";
        }
    });
    // let send_message = document.querySelector(".send_message");
    // send_message.addEventListener("mousedown", function () {
    //     send_message.style.backgroundColor = "#ffc884";
    // })
    // send_message.addEventListener("mouseup", function () {
    //     send_message.style.backgroundColor = "transparent";
    // })
    //skills페이지 mouseover이벤트
    let s_frontend = document.querySelector(".s_frontend");
    let s_backend = document.querySelector(".s_backend");
    let s_microsoft = document.querySelector(".s_microsoft");
    let s_async = document.querySelector(".s_async");
    let v_sass = document.querySelector('.v_sass');
    let v_js = document.querySelector('.v_js');
    let v_jquery = document.querySelector('.v_jquery');

    s_frontend.onmouseover = function () {
        $(".hover_me").css("display", "none");
        $(".view_skills").css("background-color", "rgb(252, 252, 252)");
        $(".v_wrap").css("display", "block");
    };
    s_frontend.onmouseout = function () {
        $(".hover_me").css("display", "block");
        $(".view_skills").css("background-color", "transparent");
        $(".v_wrap").css("display", "none");
    }
    s_backend.onmouseover = function () {
        $(".hover_me").css("display", "none");
        $(".view_skills").css("background-color", "rgb(252, 252, 252)");
        $(".v_wrap").css("display", "block");
        $(".v_html,.v_react").css("opacity", "0");
        v_sass.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_no.png");
        v_sass.firstChild.nextSibling.nextSibling.nextSibling.innerText = "78%";
        v_js.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_php.png");
        v_js.firstChild.nextSibling.nextSibling.nextSibling.innerText = "75%";
        v_jquery.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_mysql.png");
        v_jquery.firstChild.nextSibling.nextSibling.nextSibling.innerText = "70%";
    }
    s_backend.onmouseout = function () {
        $(".hover_me").css("display", "block");
        $(".view_skills").css("background-color", "transparent");
        v_sass.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_sa.png");
        v_sass.firstChild.nextSibling.nextSibling.nextSibling.innerText = "89%";
        v_js.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_js.png");
        v_js.firstChild.nextSibling.nextSibling.nextSibling.innerText = "89%";
        v_jquery.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_jq.png");
        v_jquery.firstChild.nextSibling.nextSibling.nextSibling.innerText = "89%";
        $(".v_wrap").css("display", "none");
        $(".v_html, .v_react").css("opacity", "1");
    }
    s_microsoft.onmouseover = function () {
        $(".hover_me").css("display", "none");
        $(".view_skills").css("background-color", "rgb(252, 252, 252)");
        $(".v_wrap").css("display", "block");
        $(".v_html, .v_sass, .v_jquery, .v_react").css("opacity", "0");
        v_js.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_ajax.png");
        v_js.firstChild.nextSibling.nextSibling.nextSibling.innerText = "70%";

    }
    s_microsoft.onmouseout = function () {
        $(".hover_me").css("display", "block");
        $(".view_skills").css("background-color", "transparent");
        v_js.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_js.png");
        v_js.firstChild.nextSibling.nextSibling.nextSibling.innerText = "89%";
        $(".v_wrap").css("display", "none");
        $(".v_html, .v_sass, .v_jquery, .v_react").css("opacity", "1");
    }
    s_async.onmouseover = function () {
        $(".hover_me").css("display", "none");
        $(".view_skills").css("background-color", "rgb(252, 252, 252)");
        $(".v_wrap").css("display", "block");
        $(".v_html,.v_react").css("opacity", "0");
        v_sass.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_excel.png");
        v_sass.firstChild.nextSibling.nextSibling.nextSibling.innerText = "95%";
        v_js.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_powerpoint.png");
        v_js.firstChild.nextSibling.nextSibling.nextSibling.innerText = "100%";
        v_jquery.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_word.png");
        v_jquery.firstChild.nextSibling.nextSibling.nextSibling.innerText = "100%";
    }
    s_async.onmouseout = function () {
        $(".hover_me").css("display", "block");
        $(".view_skills").css("background-color", "transparent");
        v_sass.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_sa.png");
        v_sass.firstChild.nextSibling.nextSibling.nextSibling.innerText = "89%";
        v_js.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_js.png");
        v_js.firstChild.nextSibling.nextSibling.nextSibling.innerText = "89%";
        v_jquery.firstChild.nextSibling.setAttribute("src", "./image/logo/skills_jq.png");
        v_jquery.firstChild.nextSibling.nextSibling.nextSibling.innerText = "89%";
        $(".v_wrap").css("display", "none");
        $(".v_html, .v_react").css("opacity", "1");
    }
    //포트폴리오 클릭이벤트
    const input_portfolio = {
        "p_1": {
            "p_img": "./image/portfolio/matrix.png",
            "p_name": "MATRIX CALCULATOR",
            "p_use": "HTML SASS JAVASCRIPT",
            "p_desc": "<br>자바스크립트를 활용한 첫 개인 프로젝트로,<br> 숫자를 입력해 두 개의 행렬을 연산하는 행렬계산기 입니다.<br><br>INPUT박스를 활용하여 값을 전달받았고, 행렬의 곱셈과 숫자 이외의 값이 들어갔을 때 발생하는 오류를 중점적으로 잡아 구현하였습니다.",
            "p_concept": "RETRO",
            "p_date": "AUGUST 2021",
            "p_work": "INDIVIDUAL PROJECT"
        },
        "p_2": {
            "p_img": "./image/portfolio/burger.png",
            "p_name": "BURGER SHOP",
            "p_use": "HTML PUG SASS JAVASCRIPT",
            "p_desc": "<br>자바스크립트를 활용한 거스름돈 계산기입니다.<br><br>상품 목록을 객체로 가져왔고, 동일한 상품목록이 있을 경우, 리스트에서 숫자만 더해지게 구현하였습니다.<br><br>상품이 더해지고 없어질 때 생기는 오류를 중점적으로 해결하려 노력히였습니다.",
            "p_concept": "HAMBURGER SHOP",
            "p_date": "SEPTEMBER 2021",
            "p_work": "INDIVIDUAL PROJECT"
        },
        "p_3": {
            "p_img": "./image/portfolio/starbucks.png",
            "p_name": "STARBUCKS KIOSK",
            "p_use": "HTML SASS JAVASCRIPT PHP AJAX",
            "p_desc": "<br>PHP와 AJAX를 활용하여 데이터베이스에 저장되어있던 <br>데이터를 가져오고, 포인트 적립을 위해 값을 다시 데이터에 <br>저장하는 것을 구현한 프로젝트입니다.<br><br>주변에서 볼 수 있는 키오스크의 디자인적, 기능적 오류에 대한 아쉬움에서 시작하게 되었으며, 자바스크립트에서 값을 다루는 것과 팀원들의 다양한 로직 유형을 볼 수 있었습니다.",
            "p_concept": "STARBUCKS KIOSK",
            "p_date": "OCTOBER 2021",
            "p_work": "TEAM PROJECT"
        },
        "p_6": {
            "p_img": "./image/portfolio/mud.png",
            "p_name": "MUD FESTIVAL",
            "p_use": "HTML SASS JAVASCRIPT",
            "p_desc": "<br>UI/UX를 구현해본 첫 팀프로젝트입니다.<br><br>페르소나를 선정하고, 그에 맞춰 머드축제 홈페이지를 재구상하였습니다. 지금까지는 아무 생각없이 바라봤던 홈페이지를 조금은 개발자의 입장에서 바라보게 되었습니다.<br><br>첫 프로젝트라 미흡한 부분이 많지만, 처음으로 만들어 본 것이라는 뿌듯함이 담겨있는 프로젝트 입니다.",
            "p_concept": "MUD FESTIVAL",
            "p_date": "JULY 2021",
            "p_work": "TEAM PROJECT"
        },
        "p_5": {
            "p_img": "./image/portfolio/insideout.png",
            "p_name": "INSIDE OUT",
            "p_use": "HTML SASS JAVASCRIPT",
            "p_desc": "<br>영화 캐릭터를 주제로 만든 캐릭터 소개 페이지입니다. <br><br>동적인 요소가 많이 들어간 페이지로, 하나의 이야기처럼 페이지가 이어질 수 있도록 구성했습니다.<br><br>특히 마지막 페이지에서는 화면 전체를 꽉차게 활용하면서 화면을 넓게 쓰는 방법을 배울 수 있었습니다.",
            "p_concept": "CHARACTER PAGE",
            "p_date": "NOVEMBER 2021",
            "p_work": "INDIVIDUAL PROJECT"
        },
        "p_4": {
            "p_img": "./image/portfolio/oliveyoung.png",
            "p_name": "OLIVE YOUNG",
            "p_use": "HTML SASS JAVASCRIPT PHP",
            "p_desc": "<br>반응형으로 만든 올리브영 기업 소개 페이지입니다. <br><br>기업에서 고객들에게 전달하고자 하는 부분이 무엇일까 생각하여 카테고리를 구성하였으며, 기업의 분위기를 담은 색깔들을 사용하여 페이지를 디자인하였습니다. <br><br>모바일과 테블릿 환경에서 사용자들이 편안함을 느끼는 폰트 크기에 대해서도 생각해보게 되었습니다.",
            "p_concept": "COMPANY PAGE",
            "p_date": "OCTOBER 2021",
            "p_work": "INDIVIDUAL PROJECT"
        },
        "p_7": {
            "p_img": "./image/portfolio/photoshop.png",
            "p_name": "PRODUCT DETAIL",
            "p_use": "PHOTOSHOP",
            "p_desc": "<br>포토샵을 활용해서 만든 총 3가지의 제품 상세페이지입니다. <br><br>제품을 구매할 소비자를 고려하여 제품의 특징을 상세페이지에 담았으며, 꼭 담아야 하는 정보를 명확하고 깔끔하게 전달하기 위해 노력했습니다.",
            "p_concept": "PRODUCT DETAIL",
            "p_date": "SEPTEMBER 2021",
            "p_work": "INDIVIDUAL PROJECT"
        },
        "p_8": {
            "p_img": "./image/portfolio/infographic.png",
            "p_name": "INFOGRAPHIC",
            "p_use": "ILLUSTRATOR",
            "p_desc": "<br>일러스트를 활용해서 만든 저만의 인포그래픽입니다. <br><br>제 이미지에 맞는 색감을 이용하고, 일러스트를 컨셉으로 하여 제작하였습니다.",
            "p_concept": "MY INFOGRAPHIC",
            "p_date": "SEPTEMBER 2021",
            "p_work": "INDIVIDUAL PROJECT"
        }
    }
    let input_contents =
        `<i class="xi-close"></i>
    <section class="view_img_sec">
        <figure>
            <img class="preview_img">
            <figcaption>
                <h1 class="p_name"></h1>
                <p class="p_use"></p>
                <div class = "page_btn">GO TO PAGE</div>
                <div class = "document_btn">DOCUMENT</div>
            </figcaption>
        </figure>
    </section>
    <section class="view_portfolio_page">
        <h1>PROJECT PREVIEW</h1>
        <p class="p_desc"></p>
        <div class="preview_chead">CONCEPT</div><div class="preview_concept"></div>
        <div>DATE</div><div class="preview_date"></div>
        <div class="preview_work"></div>
    </section>`;
    let portfolio_each = document.querySelectorAll(".portfolio_each");
    for (let i = 0; i < portfolio_each.length; i++) {
        portfolio_each[i].addEventListener("click", function () {
            $.each(input_portfolio, function (i_index, i_value) {
                switch (i_index) {
                    case ("p_" + (i + 1)):
                        $(".view_preview").html(input_contents);
                        $(".preview_img").attr("src", i_value["p_img"]);
                        $(".p_name").text(i_value["p_name"]);
                        $(".p_use").text(i_value["p_use"]);
                        $(".p_desc").html(i_value["p_desc"]);
                        $(".preview_concept").html(i_value["p_concept"]);
                        $(".preview_date").html(i_value["p_date"]);
                        $(".preview_work").html(i_value["p_work"]);
                        $(".view_preview").css("display", "block");
                        break;
                }
            })
            $(".xi-close").on("click", function () {
                $(".view_preview").css("display", "none");
            });
        });
    };
    //포트폴리오 링크
    $(this).on("click", ".page_btn", function (e) {
        switch (e.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText) {
            case "MATRIX CALCULATOR":
                window.open('http://chatwithyrmei.com/portfolio/Matrix/');
                break;
            case "BURGER SHOP":
                window.open('http://chatwithyrmei.com/portfolio/Hamburger/');
                break;
            case "STARBUCKS KIOSK":
                window.open('http://chatwithyrmei.com/portfolio/KioskProject/');
                break;
            case "MUD FESTIVAL":
                window.open('http://chatwithyrmei.com/portfolio/MudFestival/html/mainpage.html');
                break;
            case "INSIDE OUT":
                window.open('http://chatwithyrmei.com/portfolio/INSIDEOUT/');
                break;
            case "OLIVE YOUNG":
                window.open('http://chatwithyrmei.com/portfolio/oliveyoung/');
                break;
            case "PRODUCT DETAIL":
                window.open('http://chatwithyrmei.com/portfolio/Photoshop/levain_cookie.html');
                break;
            case "INFOGRAPHIC":
                window.open('http://chatwithyrmei.com/portfolio/Infographic/INFOGRAPIC_FINAL.pdf');
                break;
        }
    });
    $(this).on("click", ".document_btn", function (e) {
        switch (e.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerText) {
            case "MATRIX CALCULATOR":
                window.open('http://chatwithyrmei.com/portfolio/Matrix/Matrix_Calculator.pdf');
                break;
            case "BURGER SHOP":
                window.open('http://chatwithyrmei.com/portfolio/Hamburger/Hamburger.pdf');
                break;
            case "STARBUCKS KIOSK":
                window.open('http://chatwithyrmei.com/portfolio/KioskProject/kiosk_starbucks.pdf');
                break;
            case "MUD FESTIVAL":
                window.open('http://chatwithyrmei.com/portfolio/MudFestival/Mud_Festival.pdf');
                break;
            case "INSIDE OUT":
                window.open('http://chatwithyrmei.com/portfolio/INSIDEOUT/inside_out.pdf');
                break;
            case "OLIVE YOUNG":
                window.open('http://chatwithyrmei.com/portfolio/oliveyoung/oliveyoung.pdf');
                break;
            case "PRODUCT DETAIL":
                window.open('http://chatwithyrmei.com/portfolio/Photoshop/levain_cookie.html');
                break;
            case "INFOGRAPHIC":
                window.open('http://chatwithyrmei.com/portfolio/Infographic/INFOGRAPIC_FINAL.pdf');
                break;
        }
    });
    //experience 페이지 이벤트
    let experience_page1 = document.querySelector(".experience_page1");
    let experience_page2 = document.querySelector(".experience_page2");
    let experience_page3 = document.querySelector(".experience_page3");
    let experience_page4 = document.querySelector(".experience_page4");

    let change_page = [1, 2, 3, 4];
    $(".right_btn").on("click", function (e) {
        switch (e.target.parentNode.className) {
            case "experience_page" + change_page[0]:
                experience_page1.style.display = "none";
                experience_page2.style.display = "block";
                break;
            case "experience_page" + change_page[1]:
                experience_page2.style.display = "none";
                experience_page3.style.display = "block";
                break;
            case "experience_page" + change_page[2]:
                experience_page3.style.display = "none";
                experience_page4.style.display = "block";
                break;
            case "experience_page" + change_page[3]:
                experience_page4.style.display = "none";
                experience_page1.style.display = "block";
                break;
        }
    });
    $(".left_btn").on("click", function (e) {
        switch (e.target.parentNode.className) {
            case "experience_page" + change_page[0]:
                experience_page1.style.display = "none";
                experience_page4.style.display = "block";
                break;
            case "experience_page" + change_page[1]:
                experience_page2.style.display = "none";
                experience_page1.style.display = "block";
                break;
            case "experience_page" + change_page[2]:
                experience_page3.style.display = "none";
                experience_page2.style.display = "block";
                break;
            case "experience_page" + change_page[3]:
                experience_page4.style.display = "none";
                experience_page3.style.display = "block";
                break;
        }
    });
})