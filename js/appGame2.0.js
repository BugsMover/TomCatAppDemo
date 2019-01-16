window.onload=function(){
	var cat = document.getElementById("cat");
	var time;
	document.getElementById("cymbal").onclick=function(){
		play(12,"cymbal")
	};
	document.getElementById("drink").onclick=function(){
		play(80,"drink")
	};
	document.getElementById("eat").onclick=function(){
		play(39,"eat")
	};
	document.getElementById("fart").onclick=function(){
		play(27,"fart")
	};
	document.getElementById("pie").onclick=function(){
		play(23,"pie")
	};
	document.getElementById("scratch").onclick=function(){
		play(55,"scratch")
	};
	document.getElementById("angry").onclick=function(){
		play(25,"angry")
	};
    document.getElementById("footLeft").onclick=function(){
		play(29,"footLeft")
	};
	document.getElementById("footRight").onclick=function(){
		play(29,"footRight")
	};
	document.getElementById("stomach").onclick=function(){
		play(25,"stomach")
	};
	document.getElementById("knockout").onclick=function(){
		play(80,"knockout")
	};
	function play(idx,name){
		clearInterval(time);
		var num=0;
		time = setInterval(function(){
			num++;
			if(num>idx){
				clearInterval(time)
			}else if(num<10){
				cat.src="Animations/"+name+"/"+name+"_0"+num+".jpg";
			}else{
				cat.src="Animations/"+name+"/"+name+"_"+num+".jpg";
			}
		},80)
	}
	
//	function(id_name jpg_num){
//	  document.getElementById(id_name).onclick=Function(){
//	  	var num=0;
//	  	time = setInterval(function(){
//	  		if(num>jpg_num){
//				clearInterval(time_cymbal)
//			}else if(jpg_num<10){
//			   cat.src="Animations/"+id_name+"/"+id_name+"_0"+num+".jpg";
//			}else{
//			  cat.src="Animations/"+id_name+"/"+id_name+"_"+num+".jpg";
//			}
//	  	},80);
//	  };
//	}
}
