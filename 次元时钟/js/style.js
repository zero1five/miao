	window.onload = function(){
        clearInterval(fnTime);
        setInterval(fnTime, 1000);
        fnTime();
        function fnTime(){
			var myTime = new Date();
			var iHours = myTime.getHours();
			var iMin = myTime.getMinutes();
			var iSec = myTime.getSeconds();
			var clockbox = document.getElementById('clockbox');
			var aImg = clockbox.getElementsByTagName('img');

			var str = toTwo(iHours) + toTwo(iMin) + toTwo(iSec);

			function toTwo(n){ return n < 10 ? '0' + n : '' + n };

			aImg[0].src = 'img/'+str.charAt(0)+'.gif';
			aImg[1].src = 'img/'+str.charAt(1)+'.gif';
			aImg[3].src = 'img/'+str.charAt(2)+'.gif';
			aImg[4].src = 'img/'+str.charAt(3)+'.gif';
			aImg[6].src = 'img/'+str.charAt(4)+'.gif';
			aImg[7].src = 'img/'+str.charAt(5)+'.gif'; 

			setInterval(flashing,1000);
		    	function flashing(){
					aImg[2].src = 'img/colon.gif';
					aImg[5].src = 'img/colon.gif';
			    setTimeout(stop,500);
			        function stop(){
						aImg[2].src = 'img/flashing.gif';
						aImg[5].src = 'img/flashing.gif';
				}   		
			}       
		}
	}	