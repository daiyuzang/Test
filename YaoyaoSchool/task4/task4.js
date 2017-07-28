var start = document.getElementById("start");
var go = document.getElementById("go");
var left = document.getElementById("go-Left");
var right = document.getElementById("go-Right");
var back = document.getElementById("backing");
$(".top").hide();
$("#start").click(function(){
	console.log("fff");
	var i = 0, j = 0, li = 0, ri = 0, num = 0;
	$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='top'></div>");
	$("#go-Left").click(function(){
		li++;
		if (li >= ri) {
			num = li - ri;
			if (num % 4 == 1) {
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='left'></div>");
			}else if(num % 4 == 2){
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='bottom'></div>");
			}else if(num % 4 == 3){
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='right'></div>");
			}else if(num % 4 == 0){
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='top'></div>");
			}
		}else{
			if (num % 4 == 1) {
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='right'></div>");
			}else if(num % 4 == 2){
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='bottom'></div>");
			}else if(num % 4 == 3){
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='left'></div>");
			}else if(num % 4 == 0){
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='top'></div>");
			}
		}
			
			
	});
	$("#go-Right").click(function(){
		ri++;
		console.log(num);
		if (ri >= li) {
			num = ri - li;
			if (num % 4 == 1) {
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='right'></div>");
			}else if(num % 4 == 2){
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='bottom'></div>");
			}else if(num % 4 == 3){
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='left'></div>");
			}else if(num % 4 == 0){
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='top'></div>");
			}
		}else{
			num = li - ri;
			if (num % 4 == 1) {
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='left'></div>");
			}else if(num % 4 == 2){
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='bottom'></div>");
			}else if(num % 4 == 3){
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='right'></div>");
			}else if(num % 4 == 0){
				$("#td" + (45 + i * 10 + j)).empty();
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='top'></div>");
			}
		}	
	});
	$("#backing").click(function(){
		if ($("#td" + (45 + i * 10 + j)).children().is(".top")) {
			$("#td" + (45 + i * 10 + j)).empty();
			$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='bottom'></div>");
		}else if($("#td" + (45 + i * 10 + j)).children().is(".left")){
			$("#td" + (45 + i * 10 + j)).empty();
			$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='right'></div>");
		}else if($("#td" + (45 + i * 10 + j)).children().is(".right")){
			$("#td" + (45 + i * 10 + j)).empty();
			$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='left'></div>");
		}else if($("#td" + (45 + i * 10 + j)).children().is(".bottom")){
			$("#td" + (45 + i * 10 + j)).empty();
			$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='top'></div>");
		}
	})

	$("#go").click(function(){
		//console.log (45 + i * 10 + j);
		if ($("#td" + (45 + i * 10 + j)).children().is(".top")) {
			$("#td" + (45 + i * 10 + j)).removeClass("background").empty();
			i--;
			//console.log(i);
			$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='top'></div>");
			if(i == -5){
				i = -4;
				$("#td" + (45 + i * 10 + j)).append("<div class='top'></div>");
			}
			//console.log(i);
		}else if ($("#td" + (45 + i * 10 + j)).children().is(".bottom")) {
			$("#td" + (45 + i * 10 + j)).removeClass("background").empty();
			i++;
			//console.log(i);
			$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='bottom'></div>");
			if(i == 6){
				i = 5;
				$("#td" + (45 + i * 10 + j)).append("<div class='bottom'></div>");
			}
		}else if($("#td" + (45 + i * 10 + j)).children().is(".left")){
			$("#td" + (45 + i * 10 + j)).removeClass("background").empty();
			j--;
			//console.log(j);
			if(j == -5){
				j = -4;
				$("#td" + (45 + i * 10 + j)).append("<div class='left'></div>");
			}else{
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='left'></div>");
			}
		}else if($("#td" + (45 + i * 10 + j)).children().is(".right")){
			$("#td" + (45 + i * 10 + j)).removeClass("background").empty();
			j++;
			//console.log(j);
			if(j == 6){
				j = 5;
				$("#td" + (45 + i * 10 + j)).append("<div class='right'></div>");
			}else{
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='right'></div>");
			}
		}
	});
	
});
