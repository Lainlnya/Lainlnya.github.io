//공지사항.js

let textLink1 = document.getElementById("textLink1");
let viewsNumber = 3523;

textLink1.addEventListener("click", function() {
	let viewsNumber1 = document.getElementById("viewsNumber1");
	viewsNumber++;
	viewsNumber1.innerHTML = viewsNumber;
});
