function Tour(toId, toImg, toMaint, toSubt, toAddt) {
	this.toId = toId;
	this.toImg = toImg;
	this.toMaint = toMaint;
	this.toSubt = toSubt;
	this.toAddt = toAddt;
	this.showTour = function () {
		switch(this.toId) {
			case 1:
				document.getElementById("iBox1").setAttribute("src", this.toImg);
				document.getElementById("mainT1").innerHTML = this.toMaint;
				document.getElementById("subT1").innerHTML = this.toSubt;
				document.getElementById("tB1").innerHTML = this.toAddt;
				break;
			 case 2:
                                document.getElementById("iBox2").setAttribute("src", this.toImg);
                                document.getElementById("mainT2").innerHTML = this.toMaint;
                                document.getElementById("subT2").innerHTML = this.toSubt;
                                document.getElementById("tB2").innerHTML = this.toAddt;
                                break;
			 case 3:
                                document.getElementById("iBox3").setAttribute("src", this.toImg);
                                document.getElementById("mainT3").innerHTML = this.toMaint;
                                document.getElementById("subT3").innerHTML = this.toSubt;
                                document.getElementById("tB3").innerHTML = this.toAddt;
                                break;
			 case 4:
                                document.getElementById("iBox4").setAttribute("src", this.toImg);
                                document.getElementById("mainT4").innerHTML = this.toMaint;
                                document.getElementById("subT4").innerHTML = this.toSubt;
                                document.getElementById("tB4").innerHTML = this.toAddt;
                                break;
			 case 5:
                                document.getElementById("iBox5").setAttribute("src", this.toImg);
                                document.getElementById("mainT5").innerHTML = this.toMaint;
                                document.getElementById("subT5").innerHTML = this.toSubt;
                                document.getElementById("tB5").innerHTML = this.toAddt;
                                break;

		}
	}
}

const TourInfo = [
	[1, 2, 3, 4, 5],
	[
		"https://www.mudfestival.or.kr/template/festival/user/images/sub/tour_box_img01.jpg",
		"https://www.mudfestival.or.kr/template/festival/user/images/sub/tour_box_img02.jpg",
		"https://www.mudfestival.or.kr/template/festival/user/images/sub/tour_box_img04.jpg",
		"https://www.mudfestival.or.kr/template/festival/user/images/sub/tour_box_img05.jpg",
		"https://www.mudfestival.or.kr/template/festival/user/images/sub/tour_box_img09.jpg"
	],
	[
		"죽도 (상화원)",
		"성주산자연휴양림",
		"무창포해수욕장",
		"외연도",
		"오서산"
	],
	[
		"대나무가 울창한 섬이라 하여 대섬이라고도 불리우는 죽도",
		"차령산맥이 빚어낸 아름다운 숲이 장관인 계곡에서 산림욕",
		"해수욕과 산림욕을 함께 즐기는 모세의 기적 무창포 바닷길",
		"주위의 섬들을 호위하듯 거느리고 있는 세개 산봉우리의 멋진 경관",
		"수채화처럼 펼쳐진 억새 물결, 정상에서 바라보는 서해의 낙조"
	],
	[
		"충청남도 보령시 머드로 123 (신흑동)",
		"충청남도 보령시 성주면 화장골길 57-288",
		"충청남도 보령시 웅천읍 열린바다1길 10",
		"충청남도 보령시 오천면 외연도1길",
		"충청남도 보령시 청소면 넙티로"
	]

];
const TourListOrder = [];

for(let i=0; i<TourInfo[0].length; i++){
	TourListOrder.push( new Tour( TourInfo[0][i], TourInfo[1][i], TourInfo[2][i], TourInfo[3][i], TourInfo[4][i]) );
}
for(i=0; i<TourInfo[0].length; i++){
        TourListOrder[i].showTour();
}

