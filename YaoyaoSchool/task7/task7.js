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
var arr = [], copy = [], num = [];

function array(){
	for(var j = 0; j < tds.length; j++){
		data[j] = tds[j].innerHTML;
	}
	for(var i = 0; i < tds.length / 5; i++){
		arr[i] = [];
		copy[i] = [];
		num[i] = [];
	}

	var k = 0;
	for(var i = 0; i < tds.length / 5; i++){
		for (var j = 0; j < 5; j++) {
			arr[i][j] = data[k];
			copy[i][j] = data[k];
			num[i][j] = data[k];
			k++;
		}
	}
}

function tdsInner(m){
	for(var i = 0; i < (tds.length / 5); i++){
		for(var k = 0; k < (tds.length / 5); k++){
			if(arr[i][m]  === copy[k][m] && arr[i][0] === copy[k][0]){
				console.log(k);
				for(var j = 0; j < 5; j++){
					num[i][j] = copy[k][j];
				}
			}
		}
	}
	var l = 0;
	for (var i = 0; i < (tds.length / 5); i++){
		for(var j = 0; j < 5; j++){
			tds[l].innerHTML = num[i][j];
			l++;
		}
	}
}
function low2high(m) {
	array();
	for (var i = 0; i < (tds.length / 5) - 1; i++) {
		if (parseInt(arr[i][m]) > parseInt(arr[i + 1][m])) {
			temp = arr[i][m];
			arr[i][m] = arr[i + 1][m];
			arr[i + 1][m] = temp;

			name = arr[i][0];
			arr[i][0] = arr[i + 1][0];
			arr[i + 1][0] = name;
			console.log(arr[i][0]);
		}
	}
	//console.log(arr);
	tdsInner(m);
}

function high2low(m) {
	array();
	for (var i = 0; i < (tds.length / 5) - 1; i++) {
		if (parseInt(arr[i][m]) < parseInt(arr[i + 1][m])) {
			temp = arr[i][m];
			arr[i][m] = arr[i + 1][m];
			arr[i + 1][m] = temp;

			name = arr[i][0];
			arr[i][0] = arr[i + 1][0];
			arr[i + 1][0] = name;
			console.log(arr[i][0]);
		}
	}
	//console.log(arr);
	tdsInner(m);
}

chnl2hBtn.onclick = function(){
	low2high(1);
}
mathl2hBtn.onclick = function(){
	low2high(2);
}
engl2hBtn.onclick = function(){
	low2high(3);
}
alll2hBtn.onclick = function(){
	low2high(4);
}

chnh2lBtn.onclick = function(){
	high2low(1);
}
mathh2lBtn.onclick = function(){
	high2low(2);
}
engh2lBtn.onclick = function(){
	high2low(3);
}
allh2lBtn.onclick = function(){
	high2low(4);
}