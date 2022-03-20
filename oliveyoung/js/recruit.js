$(function(){
    $("#submit_btn").on("click", function(){
        $(".submit_alert").css("display", "block");
        $(".cancel_btn").on("click", function(){
            $(".submit_alert").css("display", "none");
        })
        $(".confirm_btn").on("click", function(){
            location.href="http://pager.kr/~c14st06/portfolio/oliveyoung/";
        })
    })
})