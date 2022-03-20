const menuArray =[];
const menuBar = document.querySelector('#menuBar');
const menuBarExit = document.querySelector('#menuBarExit');
const menuBox = document.querySelector('#menuBox');
const menuTopSection = document.querySelector('#menuTopSection');
const menuBottomSection = document.querySelector('#menuBottomSection');
const wholeBox = document.querySelector('#wholeBox');
let leftCount = 152; //  menuBox position left 값
let plusEventHandler = null;
let minusEventHandler = null;
function MenuProto(imgUrl,title,id,href){
	this.imgUrl = imgUrl;
	this.title = title;
	this.id = id;
	this.href = href;
	this.painting = () => {
		let tempString = '';
		tempString += '<div class="menuBtnBox menuBtn'+this.id+'">';
		tempString += '<div class="menuIconBox">';
		tempString += '<img class="menuIcon menuIcon'+this.id+'" src="'+this.imgUrl+'"/>';
		tempString += '</div>';
		tempString += '<a class="menuLink"href="'+this.href+'">'+this.title+'</a>';
		tempString += '</div>';
		if(this.id < 5){
			menuTopSection.innerHTML += tempString;
		}else{
			menuBottomSection.innerHTML += tempString;
		}
	}
}
const menuInfo = [
                        [ // 경로
                                '../image/mud-icon-4.jpg',
                                '../image/schedule.png',
                                '../image/house.png',
                                '../image/brochure.png',
                                '../image/tour-guide.png',
                                '../image/ticket.png',
                                '../image/noticeboard.png',
                                '../image/question.png'
                        ],
                        [ // 타이틀
                                '머드란?',
                                '프로그램 안내',
                                '숙박 안내',
                                '시설 안내',
                                '주변 관광지',
                                '입장료 안내',
                                '공지사항',
                                '자주묻는 질문'
                        ],
			[ // id 값
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8
                        ],
                        [ // 링크 주소
                                '../html/mudIntro_1.html',
                                '../html/program_2.html',
                                '../html/Accom_3.html',
                                '../html/Faci_4.html',
                                '../html/Tour_5.html',
                                '../html/fee_6.html',
                                '../html/notification_7.html',
                                '../html/FAQ_8.html'
                        ]
                ];
let i = 0;
while(i < menuInfo[0].length){
	menuArray.push(new MenuProto(menuInfo[0][i], menuInfo[1][i], menuInfo[2][i], menuInfo[3][i]));
	menuArray[i].painting();
	i++;
}
const showMenu = () => {
	menuBox.style.left = leftCount + '%';
	if( leftCount != 50 ){
		leftCount = leftCount - 2;
	}else {
		clearInterval(minusEventHandler);
	}
}
const hideMenu = () => {
        menuBox.style.left = leftCount + '%';
        if( leftCount != 152 ){
                leftCount = leftCount + 2;
        }else {
                clearInterval(plusEventHandler);
		menuBox.style.display = 'none';
        }
}

menuBar.addEventListener('click',(e)=>{
	menuBar.style.display = 'none';
	menuBarExit.style.display = 'block';
	menuBox.style.display = 'block';
	wholeBox.style.height = '800px';
	minusEventHandler = setInterval(showMenu,10);
});
menuBarExit.addEventListener('click',(e)=>{
	menuBarExit.style.display = 'none';
	menuBar.style.display = 'block';
	wholeBox.style.height = 'auto'; // 기본 값 
        plusEventHandler = setInterval(hideMenu,10);
});
