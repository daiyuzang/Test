$("#in-school").click(function(){
	$("#job").hide();
	$("#select").show();
});
$("#out-school").click(function(){
	$("#select").hide();
	$("#job").show();
});
$("#city").change(function(){
	var opt = $("#city").val();
	console.log(opt);
	if (opt == "北京") {
		$("#nanjing-univercity").hide();
		$("#shanghai-univercity").hide();
		$("#hangzhou-univercity").hide();
		$("#beijing-univercity").show();
	}else if(opt == "上海"){
		$("#nanjing-univercity").hide();
		$("#hangzhou-univercity").hide();
		$("#beijing-univercity").hide();
		$("#shanghai-univercity").show();
	}else if(opt == "南京"){
		$("#hangzhou-univercity").hide();
		$("#beijing-univercity").hide();
		$("#shanghai-univercity").hide();
		$("#nanjing-univercity").show();
	}else if(opt == "杭州"){
		$("#nanjing-univercity").hide();
		$("#beijing-univercity").hide();
		$("#shanghai-univercity").hide();
		$("#hangzhou-univercity").show();
	}
})