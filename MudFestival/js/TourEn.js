function Tour(toId, toImg, toMaint, toSubt, toAddt, tolcBox) {
	this.toId = toId;
	this.toImg = toImg;
	this.toMaint = toMaint;
	this.toSubt = toSubt;
	this.toAddt = toAddt;
	this.tolcBox = tolcBox;
	this.showTour = function () {
		switch(this.toId) {
			case 1:
				document.getElementById("iBox1").setAttribute("src", this.toImg);
				document.getElementById("mainT1").innerHTML = this.toMaint;
				document.getElementById("subT1").innerHTML = this.toSubt;
				document.getElementById("tB1").innerHTML = this.toAddt;
				document.getElementById("lcBox1").innerHTML = this.tolcBox;
				break;
			 case 2:
                                document.getElementById("iBox2").setAttribute("src", this.toImg);
                                document.getElementById("mainT2").innerHTML = this.toMaint;
                                document.getElementById("subT2").innerHTML = this.toSubt;
                                document.getElementById("tB2").innerHTML = this.toAddt;
				document.getElementById("lcBox2").innerHTML = this.tolcBox;
                                break;
			 case 3:
                                document.getElementById("iBox3").setAttribute("src", this.toImg);
                                document.getElementById("mainT3").innerHTML = this.toMaint;
                                document.getElementById("subT3").innerHTML = this.toSubt;
                                document.getElementById("tB3").innerHTML = this.toAddt;
				document.getElementById("lcBox3").innerHTML = this.tolcBox;
                                break;
			 case 4:
                                document.getElementById("iBox4").setAttribute("src", this.toImg);
                                document.getElementById("mainT4").innerHTML = this.toMaint;
                                document.getElementById("subT4").innerHTML = this.toSubt;
                                document.getElementById("tB4").innerHTML = this.toAddt;
				document.getElementById("lcBox4").innerHTML = this.tolcBox;
                                break;
			 case 5:
                                document.getElementById("iBox5").setAttribute("src", this.toImg);
                                document.getElementById("mainT5").innerHTML = this.toMaint;
                                document.getElementById("subT5").innerHTML = this.toSubt;
                                document.getElementById("tB5").innerHTML = this.toAddt;
				document.getElementById("lcBox5").innerHTML = this.tolcBox;
                                break;

		}
	}
}

const TourInfo = [
	[1, 2, 3, 4, 5, 6],
	[
		"https://www.mudfestival.or.kr/template/festival/user/images/sub/tour_box_img01.jpg",
		"https://www.mudfestival.or.kr/template/festival/user/images/sub/tour_box_img02.jpg",
		"https://www.mudfestival.or.kr/template/festival/user/images/sub/tour_box_img04.jpg",
		"https://www.mudfestival.or.kr/template/festival/user/images/sub/tour_box_img05.jpg",
		"https://www.mudfestival.or.kr/template/festival/user/images/sub/tour_box_img09.jpg"
	],
	[
		"Juk Island(Sanghwawon)",
		"Seongjusan Natural Recreation Forest",
		"Muchangpo Beach",
		"Oeyeon Island",
		"Oseo Mountain"
	],
	[
		"Juk Island is called Bamboo Island because of dense bamboos",
		"Forest bath at valley with beautiful forest made by Charyeong Mountain Range",
		"Muchangpo sea route, the miracle of Moses with sea bathing and forest bath",
		"Beautifulu scenery of three mountaintops guarding surrounding islands",
		"Wave of silver grass like watercolor, Sunset of the west sea from the top"
	],
	[
		"(Sinheuk-dong) 123, Meodeu-ro, Boryeong-si, Chungcheongnam-do, Republic of Korea,",
		"57-288, Hwajanggol-gil, Seongju-myeon, Boryeong-si, Chungcheongnam-do, Republic of Korea",
		"Muchangpo sea route, the miracle of Moses with sea bathing andforest bath",
		"Oeyeondo 1-gil, Ocheon-myeon, Boryeong-si, Chungcheongnam-do, Republic of Korea",
		"Wave of silver grass like watercolor, Sunset of the west sea from the top"
	],
	[
		"Location",
		"Location",
		"Location",
		"Location",
		"Location"
	]

];
const TourListOrder = [];

for(let i=0; i<TourInfo[0].length; i++){
	TourListOrder.push( new Tour( TourInfo[0][i], TourInfo[1][i], TourInfo[2][i], TourInfo[3][i], TourInfo[4][i], TourInfo[5][i]) );
}
for(i=0; i<TourInfo[0].length; i++){
        TourListOrder[i].showTour();
}

