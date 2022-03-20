let triText = document.getElementById("triText");
let cirText = document.getElementById("cirText");
let ellipBtn = document.getElementById("ellipBtn");
triText.innerHTML = "주변관광<br>안내";
cirText.innerHTML = "프로그램<br>안내";
ellipBtn.innerHTML = "TOP";
addEventListener("click", function(event) {
    switch(event.target.id) {
        case "triText" : triText.setAttribute("href", "./Tour_5.html");  break;
        case "cirText" : cirText.setAttribute("href", "./program_2.html"); break;
        case "ellipBtn" : ellipBtn.setAttribute("href", "#wholeBox"); break;
    }  
})

//https://drive.google.com/file/d/1_g6IVWHWhNTDDpVKsIHlJI2hgrHNLCVA/view?usp=sharing