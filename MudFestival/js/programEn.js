window.onload=function(){
	let heightCount = 0;
	let plusEventHandler = null;
	let minusEventHandler = null;
	document.querySelector('#languageSelectList').style.height = '0px';
	const languageBtn = document.querySelector('#languageBtn');
	const showList = () => {
			const languageSelectList = document.querySelector('#languageSelectList');
			if( heightCount <= 80 ){
					languageSelectList.style.height = heightCount + 'px';
					heightCount = heightCount + 4;
			}else {
					clearInterval(plusEventHandler);
			}
	}
	const hideList = () => {
			const languageSelectList = document.querySelector('#languageSelectList');
			if( heightCount >= 0 ){
					languageSelectList.style.height = heightCount + 'px';
					heightCount = heightCount - 4;
			}else {
					clearInterval(minusEventHandler);
			}
	}
	languageBtn.addEventListener('click',(e) => {
			let i = 0;
			const downIcon = document.querySelector('#downIcon');
			const languageSelectList = document.querySelector('#languageSelectList');

					if(e.target.classList[1] == 'active' && languageSelectList.style.height == '80px' ){
							minusEventHandler = setInterval(hideList,10);
							languageBtn.style.backgroundColor = 'rgb(255,255,255)';
							languageBtn.style.color = '#2f2f2f';
					if( downIcon.className == 'xi-caret-down-min'){
							downIcon.className = 'xi-caret-up-min';
					}else{
							downIcon.className = 'xi-caret-down-min';
				 	}
					e.target.classList.toggle('active');
					}
					if(e.target.classList[1] == undefined && languageSelectList.style.height == '0px'){
							plusEventHandler = setInterval(showList,10);
							languageBtn.style.backgroundColor = 'rgb(240, 147, 43)';
							languageBtn.style.color = 'rgb(255,255,255))';
					if( downIcon.className == 'xi-caret-down-min'){
							downIcon.className = 'xi-caret-up-min';
					}else{
							downIcon.className = 'xi-caret-down-min';
					}
					e.target.classList.toggle('active');
					}
	});
function ProgramInfo(indexNum, photoG, title, information, mudDate, mudLocation){
        this.indexNum=indexNum;
        this.photoG=photoG;
        this.title=title;
        this.information= information;
        this.mudDate= mudDate;
        this.mudLocation=mudLocation;
        this.printThisInfo=function(){
                let photoInput = document.getElementById('image'+this.indexNum);
                let titleInput = document.getElementById('name'+this.indexNum);
                let informationInput = document.getElementById('description'+this.indexNum);
                let dateInput = document.getElementById('date'+ this.indexNum);
                let locationInput = document.getElementById('place'+this.indexNum);
                photoInput.style.backgroundImage='url("'+ this.photoG + '")';
                titleInput.innerHTML = this.title;
                informationInput.innerHTML = this.information;
                dateInput.innerHTML = 'Date : ' +this.mudDate;
                locationInput.innerHTML = 'Place : ' + this.mudLocation;
        }
}

let mudAll=[];

const indexTag = [1, 2, 3, 4, 5];
const photoTag = [
                "../image/mudrun.jpg",
                "../image/whatismud3.jpg",
                "../image/colormud.png",
                "../image/mudfestival.jpg",
                "../image/mudmassage.jpg"
];
const titleTag = [
                "Mud Run",
                "Mud Flat Game",
                "Experience Color Mud Painting",
                "Mud Festival for Adults/for Kids",
                "Self Massage with Mud"

];

const informationTag = [
		"Experience Wild Mud Running over 12kinds of hurdles",
		"Many kinds of Games in Mud like Mud flat wrestling, Mud flat soccer, Mud flat game",
		"Most Popular Program from tourists during Festival",
		"Adults: Above 10 years old/ Kids: Under 9 years old",
		"Self Massage with mud giving excitement pasting each other with family, couple, and friends"
];

const dateTag = [
                "2021.07.27~31",
                "2021.07.25~31",
                "2021.07.24~31",
                "2021.07.23~31",
                "Everyday during Festival"
];

const placeTag = [
                "Mud Zone",
                "Mud Place in front of Daecheon Beach",
                "Mud Plaza Mud Village ",
                "Mud Plaza for Adults/Kids",
                "Left to the Mud Plaza for Adults"
];
let i=0;
while(i<indexTag.length){
        mudAll.push(new ProgramInfo(indexTag[i], photoTag[i], titleTag[i], informationTag[i],dateTag[i], placeTag[i]));
        mudAll[i].printThisInfo();
        i++;
}
};

