$(function(){
    //---------------------------메인페이지--------------------------------
    //마우스 호버 effect
    $(".sub1_pic1").on("mouseover", function(){
        $(".plag_s").css("display", "block");
    });
    $(".sub1_pic1").on("mouseout", function(){
        $(".plag_s").css("display", "none");
    });
    $(".sub1_pic2").on("mouseover", function(){
        $(".plag_t").css("display", "block");
    });
    $(".sub1_pic2").on("mouseout", function(){
        $(".plag_t").css("display", "none");
    });
    $(".sub1_pic3").on("mouseover", function(){
        $(".plag_st").css("display", "block");
    });
    $(".sub1_pic3").on("mouseout", function(){
        $(".plag_st").css("display", "none");
    });
    //---------------------------HISTORY, RECRUIT페이지--------------------------------
    var link = document.location.href;
    if(link == "http://pager.kr/~c14st06/portfolio/oliveyoung/index.php?menu=1"){
        var story_part2 = $(".story_part2").offset();
    }

    if(link == "http://pager.kr/~c14st06/portfolio/oliveyoung/index.php?menu=2"){    
        var h_2019 = $(".h_2019").offset();
        var h_2016 = $(".h_2016").offset();
        var h_2012 = $(".h_2012").offset();
        var h_2007 = $(".h_2007").offset();
        var h_1999 = $(".h_1999").offset();
    }
    if(link =="http://pager.kr/~c14st06/portfolio/oliveyoung/index.php?menu=3"){
        var want_pic = $(".want_pic").offset();
    }

    $(window).on("mousewheel",function(){
        var scrollTop = document.body.scrollTop;
        if(scrollTop == 0 ){
            scrollTop = document.documentElement.scrollTop;
        }
        if(link == "http://pager.kr/~c14st06/portfolio/oliveyoung/index.php?menu=1"){
            if(scrollTop > story_part2.top * 0.7){
                $(".story_part2 p").animate({"color": "#fcfcfc"}, 300);
                $(".story_part2 p").animate({"padding-top": "16vh"}, 1000);
            }
        }
        if(link == "http://pager.kr/~c14st06/portfolio/oliveyoung/index.php?menu=2"){
                if(scrollTop > h_2019.top * 0.6){
                    $(".green_line").animate({"margin-left": "0vw"}, 1000);
                }
                if(scrollTop > h_2016.top * 0.6){
                    $(".h_2016 h3").animate({"margin-right": "3vw"}, 1000);
                    $(".h_2016 p").animate({"margin-right": "3vw"}, 1000);
                }
                if(scrollTop > h_2012.top * 0.6){
                    $(".header_2012").animate({"margin-top":"60vh"}, 1000);
                }
                if(scrollTop > h_2007.top * 0.7){
                    $(".fifth_wrap").animate({"margin-top": "10vh"}, 1000);
                }
                if( scrollTop> h_1999.top * 0.8){
                    $(".last_p").animate({"margin-right": "0vw"}, 1000);
                }
        }
        if(link == "http://pager.kr/~c14st06/portfolio/oliveyoung/index.php?menu=3"){
            if( scrollTop > want_pic.top / 3){
                $(".want_pic").css("animation", "move_pic 10s infinite");
            }
        }
    });
});