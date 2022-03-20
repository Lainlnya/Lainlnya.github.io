window.onload = function(){
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
}
