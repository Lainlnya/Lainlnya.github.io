window.onload=function(){
        //alert 띄우는 부분
        let view_error = (error_message)=>{
            $(".view_error").css("display", "block");
            $(".view_error").html(error_message);
            $(".view_error").click(function(){
                $(".view_error").css("display", "none");
            });

        }              
        const hamburger_info = {
            "anna_burger" : {"name": "ANNA BURGER", "price": "8,900"},
            "chicken_burger" : {"name": "CHICKEN BURGER", "price": "9,930"},
            "mac_burger" : {"name": "MEGA BURGER", "price": "10,270"},
            "double_burger" :{"name": "DOUBLE MEAT", "price": "12,320"},
            "potato_burger" : {"name": "POTATO BURGER", "price": "8,980"},
            "vegan_burger" : {"name": "VEGAN BURGER", "price": "10,460"},
            "tomato_burger" :{"name": "TOMATO BURGER", "price": "13,260"},
            "triple_burger" : {"name": "TRIPLE BURGER", "price": "17,690"},
            "chicken_nuggets":{"name": "CHICKEN NUGGET", "price": "10,260"},
            "french_fries" : {"name": "FRENCH FRIES", "price": "5,920"},
            "vanilla_shake" : {"name": "VANILLA_SHAKE", "price": "3,610"},
            "hamburger_coke": {"name": "DRINK COCA COLA", "price": "1,500"}
        }
        const price_info = {
            "fmill_won": {"price": 50000},
            "mill_won": {"price": 10000},
            "fthou_won": {"price": 5000},
            "thou_won": {"price": 1000},
            "fbaek_won": {"price": 500},
            "baek_won": {"price": 100},
            "ften_won":{"price": 50},
            "ten_won": {"price": 10}
        }
        let each_burger = document.querySelector('.each_burger');
        make_hamburger = (option_id) => {
            each_burger.innerHTML+=
                `<div id="burger_${option_id}" class="burger_totallist">
            <div class="delete_wrap"><button id="delete_${option_id}" class="burger_delete">X</button></div>
            <p id="burger_${option_id}" class="burger_item">${hamburger_info[option_id]["name"]}</p>
            <p class="burger_price">₩<span class="burger_pprice" id="price_${option_id}">${hamburger_info[option_id]["price"]}</span></p>
            <div class="minus_wrap"><button id="minus_${option_id}" class="burger_minus">-</button></div>
            <span id="numss_${option_id}" class="burger_num">1</span>
            <div class="plus_wrap"><button id="pluss_${option_id}" class="burger_plus">+</button></div>
            </div></div>`;

        }
        let buy_num=0;
        let pay_num=0;
        $(this).on("click", function(e){

            //천단위 콤마 찍는 부분
            plus_comma = (comma_things) => {
                return comma_things.replace(",","");
            }
            calcu_comma = (comma_things) => {
                return comma_things.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }


            let temp_number = parseInt($("#numss_"+String(e.target.id).substr(6)).html());
            let temp_numbertwo = parseInt($("#numss_"+e.target.id).html());
            //각자의 버거를 눌렀을 때
            if(e.target.className.includes("bg_choi")){
                if($("#numss_"+e.target.id).html()>=1){
                    let dbl_buy=0;
                    $("#numss_"+e.target.id).html(++temp_numbertwo);
                    dbl_buy=parseInt(plus_comma($("#price_"+e.target.id).html()));
                    buy_num+=dbl_buy;
                    $("#print_area").html( calcu_comma(buy_num));
                }else{
                make_hamburger(e.target.id);
                buy_num += parseInt( plus_comma(hamburger_info[e.target.id]["price"]));
                $("#print_area").html( calcu_comma(buy_num));
                }
            }            
            //더하기버튼 눌렀을 때
            if(e.target.id=="pluss_"+String(e.target.id).substr(6)){
                let temp_buy=0;
                $("#numss_"+ String(e.target.id).substr(6)).html(++temp_number);
                    temp_buy=parseInt(plus_comma($("#price_"+String(e.target.id).substr(6)).html()));
                    buy_num+=temp_buy;
                    $("#print_area").html( calcu_comma(buy_num));
            }
            //빼기 버튼 눌렀을 떄
            if(e.target.id=="minus_"+String(e.target.id).substr(6)){
                if($("#numss_"+String(e.target.id).substr(6)).html()<=1){
                    temp_buy2=parseInt(plus_comma($("#price_"+String(e.target.id).substr(6)).html()));
                    buy_num-=temp_buy2;
                    $("#print_area").html( calcu_comma(buy_num));     
                    $("#burger_"+String(e.target.id).substr(6)).remove();
                    $("#numss_"+String(e.target.id).substr(6)).html(--temp_number);
                }else{
                    let temp_buy2=0;
                    $("#numss_"+String(e.target.id).substr(6)).html(--temp_number);
                    temp_buy2=parseInt( plus_comma($("#price_"+String(e.target.id).substr(6)).html()));
                    buy_num-=temp_buy2;
                    $("#print_area").html( calcu_comma(buy_num));
                }
            }
            //X버튼 눌렀을 떄
            if(e.target.id=="delete_"+String(e.target.id).substr(7)){
                let temp_buy3 = 0;
                temp_buy3=($("#numss_"+String(e.target.id).substr(7)).html() * parseInt(plus_comma($("#price_"+String(e.target.id).substr(7)).html())));
                buy_num-=temp_buy3;
                $("#print_area").html(calcu_comma(buy_num));
                $("#burger_"+String(e.target.id).substr(7)).remove();
            }
            //돈 버튼을 눌렀을 떄
            if(e.target.className.includes("won_money")){
                switch(e.target.id){
                    case("fmill_won"):
                    case("mill_won"):
                    case("fthou_won"):
                    case("thou_won"):
                    case("fbaek_won"):
                    case("baek_won"):
                    case("ften_won"):
                    case("ten_won"):
                        pay_num+= price_info[e.target.id]["price"];
                        $("#money_area").html(calcu_comma(pay_num));
                        break;
                }
            }
            
            //금액 제한 및 alert창
            if(buy_num>100000 || pay_num>100000){
                view_error("100,000원 이상은 담으실 수 없습니다.");
                $("#print_area").html(0);
                $("#money_area").html(0);
                $(".each_burger").html("");
                $(".return_area").html(0);
                $("#input_exchange").html("");
                buy_num=0;
                pay_num=0;
            }else if( buy_num<=0 && pay_num<=0 ){
                $("#print_area").html("");
                $("#money_area").html("");
                $(".return_area").html("");
            }else if( buy_num==0 && pay_num!==0){
                $("#print_area").html("");
                $("#money_area").html( calcu_comma(pay_num));
            }else if( buy_num!==0 && pay_num==0){
                $("#print_area").html(calcu_comma(buy_num));
                $("#money_area").html("");
            }
            else{
                $("#print_area").html( calcu_comma(buy_num));
                $("#money_area").html( calcu_comma(pay_num));
            }
        });
        //반환버튼 눌렀을 때
        const root_money = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
        $("#return_button").on("click", function(){
            const view_money = [0, 0, 0, 0, 0, 0, 0, 0];
            let calcu_num = pay_num-buy_num;
            //받은 금액이 물건 가격보다 적을 때
            if(calcu_num<0){
                view_error("돈을 지불해주세요.");
            }
            else if(buy_num==0){
                view_error("물건을 선택해주세요.");
            }else {
                $("#return_area").html(calcu_comma(calcu_num));
                $.each(root_money, function(r_index, r_value){
                    while(calcu_num>=r_value){
                        calcu_num-=r_value;
                        console.log(r_index);
                        let i=0;
                        while(i<root_money.length){
                            if(r_index==i){
                                view_money[i]+=1;
                            }
                            i++;
                        }
                        let input_exchange = `
                        <div class="money_list">오만원</div><div class="money_list">${view_money[0]}</div>
                        <div class="money_list">만원</div><div class="money_list">${view_money[1]}</div>
                        <div class="money_list">오천원</div><div class="money_list">${view_money[2]}</div>
                        <div class="money_list">천원</div><div class="money_list">${view_money[3]}</div>
                        <div class="money_list">오백원</div><div class="money_list">${view_money[4]}</div>
                        <div class="money_list">백원</div><div class="money_list">${view_money[5]}</div>
                        <div class="money_list">오십원</div><div class="money_list">${view_money[6]}</div>
                        <div class="money_list">십원</div><div class="money_list">${view_money[7]}</div>
                        `
                        $("#input_exchange").html(input_exchange);
                    }
                });
            }
        });
        //리셋버튼 눌렀을 떄
        $("#reset_button").on("click", function(){
            $("#print_area").html(0);
            $("#money_area").html(0);
            $(".each_burger").html("");
            $(".return_area").html(0);
            $("#input_exchange").html("");
            buy_num=0;
            pay_num=0;
        })
};
