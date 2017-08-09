var chnl2hBtn = document.getElementById("chnl2h-btn");
var chnh2lBtn = document.getElementById("chnh2l-btn");
var mathl2hBtn = document.getElementById("mathl2h-btn");
var mathh2lBtn = document.getElementById("mathh2l-btn");
var engl2hBtn = document.getElementById("engl2h-btn");
var engh2lBtn = document.getElementById("engh2l-btn");
var alll2hBtn = document.getElementById("alll2h-btn");
var allh2lBtn = document.getElementById("allh2l-btn");

var trs = document.getElementsByTagName("tr");
var tds = document.getElementsByTagName("td");
var data = [], row = 3;
//row为3+1，因为要去除第一行tr
for(var i = 0; i < row + 1; i++)
	data[i] = [];

for(var i = 1; i < trs.length; i++){
	for(var j = 0; j < tds.length; j++){
		data[i][j] = tds[j].innerHTML;
	}
}

function high2low(data){
	//排序
}

chnl2hBtn.onclick = function(){
//"hhhh"
}