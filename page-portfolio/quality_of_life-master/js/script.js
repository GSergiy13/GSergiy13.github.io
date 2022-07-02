$(document).ready(function () {

	function get_timer() {

	var date_new = dateEnd; // June 3,2012 02:00

	var date_t = new Date(date_new);
	var date = new Date();
	var timer = date_t - date;
	if(date_t > date) {
		var day = parseInt(timer/(60*60*1000*24));
		if(day < 10) {
			day = '0' + day;
		}
		day = day.toString();
		var hour = parseInt(timer/(60*60*1000))%24;
		if(hour < 10) {
			hour = '0' + hour;
		}
		hour = hour.toString();
		var min = parseInt(timer/(1000*60))%60;
		if(min < 10) {
			min = '0' + min;
		}
		min = min.toString();
		var sec = parseInt(timer/1000)%60;
		if(sec < 10) {
			sec = '0' + sec;
		}
		sec = sec.toString();
		if(day[1] == 9 && 
			hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#day0"),day[0]);
	}
	else {
		$("#day0").html(day[0]);
	}
	if(hour[0] == 2 && 
		hour[1] == 3 && 
		min[0] == 5 && 
		min[1] == 9 && 
		sec[0] == 5 && 
		sec[1] == 9) {
		animation($("#day1"),day[1]);
}
else {
	$("#day1").html(day[1]);
}
if(hour[1] == 3 && 
	min[0] == 5 && 
	min[1] == 9 && 
	sec[0] == 5 && 
	sec[1] == 9) {
	animation($("#hour0"),hour[0]);
}
else {
	$("#hour0").html(hour[0]);
}
		//Äëÿ åäèíèö ÷àññîâ	
		if(min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#hour1"),hour[1]);
	}
	else {
		$("#hour1").html(hour[1]);
	}
	if(min[1] == 9 && 
		sec[0] == 5 && 
		sec[1] == 9) {
		animation($("#min0"),min[0]);
}
else {
	$("#min0").html(min[0]);
}
if(sec[0] == 5 && sec[1] == 9) {
	animation($("#min1"),min[1]);
}
else {
	$("#min1").html(min[1]);
}
if(sec[1] == 9) {
	animation($("#sec0"),sec[0]);
}
else {
	$("#sec0").html(sec[0]);
}
animation($("#sec1"),sec[1]);	
setTimeout(get_timer,1000);
}
else {
	$("#clock").html("<span id='stop'>Время вышло!!!</span>");
}

}
function animation(vibor,param) {
	vibor.html(param)
	.css({'marginTop':'-20px','opacity':'0'})
	.animate({'marginTop':'0px','opacity':'1'});
}
get_timer();
});







$(document).ready(function () {

	function get_timer() {

	var date_new = dateEnd; // June 3,2012 02:00

	var date_t = new Date(date_new);
	var date = new Date();
	var timer = date_t - date;
	if(date_t > date) {
		var day = parseInt(timer/(60*60*1000*24));
		if(day < 10) {
			day = '0' + day;
		}
		day = day.toString();
		var hour = parseInt(timer/(60*60*1000))%24;
		if(hour < 10) {
			hour = '0' + hour;
		}
		hour = hour.toString();
		var min = parseInt(timer/(1000*60))%60;
		if(min < 10) {
			min = '0' + min;
		}
		min = min.toString();
		var sec = parseInt(timer/1000)%60;
		if(sec < 10) {
			sec = '0' + sec;
		}
		sec = sec.toString();
		if(day[1] == 9 && 
			hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#day01"),day[0]);
	}
	else {
		$("#day01").html(day[0]);
	}
	if(hour[0] == 2 && 
		hour[1] == 3 && 
		min[0] == 5 && 
		min[1] == 9 && 
		sec[0] == 5 && 
		sec[1] == 9) {
		animation($("#day11"),day[1]);
}
else {
	$("#day11").html(day[1]);
}
if(hour[1] == 3 && 
	min[0] == 5 && 
	min[1] == 9 && 
	sec[0] == 5 && 
	sec[1] == 9) {
	animation($("#hour01"),hour[0]);
}
else {
	$("#hour01").html(hour[0]);
}
		//Äëÿ åäèíèö ÷àññîâ	
		if(min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#hour11"),hour[1]);
	}
	else {
		$("#hour11").html(hour[1]);
	}
	if(min[1] == 9 && 
		sec[0] == 5 && 
		sec[1] == 9) {
		animation($("#min01"),min[0]);
}
else {
	$("#min01").html(min[0]);
}
if(sec[0] == 5 && sec[1] == 9) {
	animation($("#min11"),min[1]);
}
else {
	$("#min11").html(min[1]);
}
if(sec[1] == 9) {
	animation($("#sec01"),sec[0]);
}
else {
	$("#sec01").html(sec[0]);
}
animation($("#sec11"),sec[1]);	
setTimeout(get_timer,1000);
}
else {
	$("#clock").html("<span id='stop'>Время вышло!!!</span>");
}

}
function animation(vibor,param) {
	vibor.html(param)
	.css({'marginTop':'-20px','opacity':'0'})
	.animate({'marginTop':'0px','opacity':'1'});
}
get_timer();
});









$(document).ready(function () {

	function get_timer() {

	var date_new = dateEnd; // June 3,2012 02:00

	var date_t = new Date(date_new);
	var date = new Date();
	var timer = date_t - date;
	if(date_t > date) {
		var day = parseInt(timer/(60*60*1000*24));
		if(day < 10) {
			day = '0' + day;
		}
		day = day.toString();
		var hour = parseInt(timer/(60*60*1000))%24;
		if(hour < 10) {
			hour = '0' + hour;
		}
		hour = hour.toString();
		var min = parseInt(timer/(1000*60))%60;
		if(min < 10) {
			min = '0' + min;
		}
		min = min.toString();
		var sec = parseInt(timer/1000)%60;
		if(sec < 10) {
			sec = '0' + sec;
		}
		sec = sec.toString();
		if(day[1] == 9 && 
			hour[0] == 2 && 
			hour[1] == 3 && 
			min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#day013"),day[0]);
	}
	else {
		$("#day013").html(day[0]);
	}
	if(hour[0] == 2 && 
		hour[1] == 3 && 
		min[0] == 5 && 
		min[1] == 9 && 
		sec[0] == 5 && 
		sec[1] == 9) {
		animation($("#day113"),day[1]);
}
else {
	$("#day113").html(day[1]);
}
if(hour[1] == 3 && 
	min[0] == 5 && 
	min[1] == 9 && 
	sec[0] == 5 && 
	sec[1] == 9) {
	animation($("#hour013"),hour[0]);
}
else {
	$("#hour013").html(hour[0]);
}
		//Äëÿ åäèíèö ÷àññîâ	
		if(min[0] == 5 && 
			min[1] == 9 && 
			sec[0] == 5 && 
			sec[1] == 9) {
			animation($("#hour113"),hour[1]);
	}
	else {
		$("#hour113").html(hour[1]);
	}
	if(min[1] == 9 && 
		sec[0] == 5 && 
		sec[1] == 9) {
		animation($("#min013"),min[0]);
}
else {
	$("#min013").html(min[0]);
}
if(sec[0] == 5 && sec[1] == 9) {
	animation($("#min113"),min[1]);
}
else {
	$("#min113").html(min[1]);
}
if(sec[1] == 9) {
	animation($("#sec013"),sec[0]);
}
else {
	$("#sec013").html(sec[0]);
}
animation($("#sec113"),sec[1]);	
setTimeout(get_timer,1000);
}
else {
	$("#clock").html("<span id='stop'>Время вышло!!!</span>");
}

}
function animation(vibor,param) {
	vibor.html(param)
	.css({'marginTop':'-20px','opacity':'0'})
	.animate({'marginTop':'0px','opacity':'1'});
}
get_timer();
});






