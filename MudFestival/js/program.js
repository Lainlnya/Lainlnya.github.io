window.onload=()=>{
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
		dateInput.innerHTML = '일시 : ' +this.mudDate;
		locationInput.innerHTML = '장소 : ' + this.mudLocation;
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
		"머드런",
		"갯벌게임체험",
		"칼라머드체험",
		"머드축제 일반존 패밀리존",
		"머드 셀프 마사지 체험"

];

const informationTag = [
		"12종의 다양한 장애물 코스를 돌파하는 색다른 와일드 머드 체험",
		"갯벌레슬링, 갯벌럼블, 갯벌축구, 갯벌게임 등  천연갯벌에서 벌어지는 다양한 체험놀이",
		"축제기간 중 관광객으로부터 가장 인기가 많은 체험 프로그램",
		"일반: 만 10세이상 성인만 입장가능/ 패밀리: 어린이만 입장가능",
		"가족, 연인, 친구와 함께 서로 온몸에 발라주며 즐거움을 선사하는 머드 셀프 마사지 체험"
];

const dateTag = [
		"2021.07.27~31",
		"2021.07.25~31",
		"2021.07.24~31",
		"2021.07.23~31",
		"축제기간 내 상시"
];

const placeTag = [
		"머드존",
		"대천 해수욕장 앞 머드 체험장",
		"머드광장 머드빌리지존",
		"머드광장 일반존/패밀리존",
		"머드광장 일반존 좌측"
];
let i=0;
while(i<indexTag.length){
	mudAll.push(new ProgramInfo(indexTag[i], photoTag[i], titleTag[i], informationTag[i],dateTag[i], placeTag[i]));
	mudAll[i].printThisInfo();
	i++;
}
};
