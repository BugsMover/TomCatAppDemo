window.onload=function(){
	var cat = document.getElementById("cat");
	var time;
	document.getElementById("cymbal").onclick=function(){
		//每次点击 清除上一个动画的定时器 再启动当前动画的定时器
		clearInterval(time);
		var num = 0;//自增变量
	   time = setInterval(function(){
			num++;
			if(num>12){
				clearInterval(time_cymbal)
			}else if(num<10){
			   cat.src="Animations/cymbal/cymbal_0"+num+".jpg";
			}else{
			  cat.src="Animations/cymbal/cymbal_"+num+".jpg";
			}
		},80)
	};
	
//	document.getElementById("angry").onclick=function(){
//	var num = 0;//自增变量
//	 var  time_angry = setInterval(function(){
//			num++;
//			if(num>25){
//				clearInterval(time_angry)
//			}else if(num<10){
//			   cat.src="Animations/angry/angry_0"+num+".jpg";
//			}else{
//			  cat.src="Animations/angry/angry_"+num+".jpg";
//			}
//		},80)
//	};
	
	document.getElementById("drink").onclick=function(){
		clearInterval(time);
	var num = 0;//自增变量
	   time = setInterval(function(){
			num++;
			if(num>80){
				clearInterval(time_drink)
			}else if(num<10){
			   cat.src="Animations/drink/drink_0"+num+".jpg";
			}else{
			  cat.src="Animations/drink/drink_"+num+".jpg";
			}
		},80)
	};
	
	document.getElementById("eat").onclick=function(){
		clearInterval(time);
	var num = 0;//自增变量
	   time = setInterval(function(){
			num++;
			if(num>39){
				clearInterval(time_eat)
			}else if(num<10){
			   cat.src="Animations/eat/eat_0"+num+".jpg";
			}else{
			  cat.src="Animations/eat/eat_"+num+".jpg";
			}
		},80)
	};
	
	document.getElementById("fart").onclick=function(){
		clearInterval(time);
	var num = 0;//自增变量
	   time = setInterval(function(){
			num++;
			if(num>27){
				clearInterval(time_fart)
			}else if(num<10){
			   cat.src="Animations/fart/fart_0"+num+".jpg";
			}else{
			  cat.src="Animations/fart/fart_"+num+".jpg";
			}
		},80)
	};
	
//	document.getElementById("pie").onclick=function(){
//	var num = 0;//自增变量
//	 var  time_pie = setInterval(function(){
//			num++;
//			if(num>23){
//				clearInterval(time_pie)
//			}else if(num<10){
//			   cat.src="Animations/pie/pie_0"+num+".jpg";
//			}else{
//			  cat.src="Animations/pie/pie_"+num+".jpg";
//			}
//		},80)
//	};
	
	document.getElementById("pie").onclick=function(){
		clearInterval(time);
	var num = 0;//自增变量
	   time = setInterval(function(){
			num++;
			if(num>23){
				clearInterval(time_pie)
			}else if(num<10){
			   cat.src="Animations/pie/pie_0"+num+".jpg";
			}else{
			  cat.src="Animations/pie/pie_"+num+".jpg";
			}
		},80)
	};
	
	document.getElementById("scratch").onclick=function(){
		clearInterval(time);
	var num = 0;//自增变量
	   time = setInterval(function(){
			num++;
			if(num>55){
				clearInterval(time_scratch)
			}else if(num<10){
			   cat.src="Animations/scratch/scratch_0"+num+".jpg";
			}else{
			  cat.src="Animations/scratch/scratch_"+num+".jpg";
			}
		},80)
	};
}

