let triTextEng = document.getElementById("triTextEng");
let cirTextEng = document.getElementById("cirTextEng");
let ellipBtn = document.getElementById("ellipBtn");  
triTextEng.innerHTML = "Nearby Tourism";
cirTextEng.innerHTML = "Program";
ellipBtn.innerHTML = "TOP";
addEventListener("click", function(event) {
    switch(event.target.id) {
        case "triTextEng" : triTextEng.setAttribute("href", "./TourEn_5.html");  break;
        case "cirTextEng" : cirTextEng.setAttribute("href", "./programEn_2.html"); break;
        case "ellipBtn" : ellipBtn.setAttribute("href", "#wholeBox"); break;
    }  
})