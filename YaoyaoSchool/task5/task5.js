$(".top").hide();
var flag = 0;
$("#start").click(function(){
	flag++;
	var i = 0, j = 0, li = 0, ri = 0, num = 0;
	if (flag == 1) {
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
		});	

		$("#move-Left").click(function(){
			//console.log("gg");
			$("#td" + (45 + i * 10 + j)).removeClass("background").empty();
			j--;
			if(j == -5){
				j = -4;
				$("#td" + (45 + i * 10 + j)).append("<div class='left'></div>");
			}else{
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='left'></div>");
			}
		});
		$("#move-Right").click(function(){
			//console.log("gg");
			$("#td" + (45 + i * 10 + j)).removeClass("background").empty();
			j++;
			if(j == 6){
				j = 5;
				$("#td" + (45 + i * 10 + j)).append("<div class='right'></div>");
			}else{
				$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='right'></div>");
			}
		});
		$("#move-Top").click(function(){
			//console.log("gg");
			$("#td" + (45 + i * 10 + j)).removeClass("background").empty();
			i--;
			$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='top'></div>");
			if(i == -5){
				i = -4;
				$("#td" + (45 + i * 10 + j)).append("<div class='top'></div>");
			}
		});
		$("#move-Bottom").click(function(){
			//console.log("gg");
			$("#td" + (45 + i * 10 + j)).removeClass("background").empty();
			i++;
			$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='bottom'></div>");
			if(i == 6){
				i = 5;
				$("#td" + (45 + i * 10 + j)).append("<div class='bottom'></div>");
			}
		});

		$("#tra-Left").click(function(){
			var attr = $("#td" + (45 + i * 10 + j)).children().attr("class");
			$("#td" + (45 + i * 10 + j)).removeClass("background").empty();
			j--;
			if(j == -5){
				j = -4;
			}
			$("#td" + (45 + i * 10 + j)).append("<div class='"+ attr +"'></div>");
			$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='"+ attr +"'></div>");
			
		});
		$("#tra-Right").click(function(){
			var attr = $("#td" + (45 + i * 10 + j)).children().attr("class");
			$("#td" + (45 + i * 10 + j)).removeClass("background").empty();
			j++;
			if(j == 6){
				j = 5;
			}
			$("#td" + (45 + i * 10 + j)).append("<div class='"+ attr +"'></div>");
			$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='"+ attr +"'></div>");
			
		});
		$("#tra-Top").click(function(){
			var attr = $("#td" + (45 + i * 10 + j)).children().attr("class");
			$("#td" + (45 + i * 10 + j)).removeClass("background").empty();
			i--;
			if(i == -5){
				i = -4;
			}
			$("#td" + (45 + i * 10 + j)).append("<div class='"+ attr +"'></div>");
			$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='"+ attr +"'></div>");
			
		});
		$("#tra-Bottom").click(function(){
			var attr = $("#td" + (45 + i * 10 + j)).children().attr("class");
			$("#td" + (45 + i * 10 + j)).removeClass("background").empty();
			i++;
			if(i == 6){
				i = 5;
			}
			$("#td" + (45 + i * 10 + j)).append("<div class='"+ attr +"'></div>");
			$("#td" + (45 + i * 10 + j)).addClass("background").append("<div class='"+ attr +"'></div>");
			
		});

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
	}else{
		if ($("#td45").children().is(".top")) {
			$("#td45").children().is(".top")
		}
		else{
			$("#td45").empty();
		}
		
	}
	
});
