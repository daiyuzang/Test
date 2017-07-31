var wapper = document.getElementById("wapper");
var layer = document.getElementById("layer");
var btn = document.getElementById("btn-out");
var ensure = document.getElementById("ensure");
var cancle = document.getElementById("cancle");
var leftBorder = document.getElementById("left-border");
var rightBorder = document.getElementById("right-border");
var topBorder = document.getElementById("top-border");
var bottomBorder = document.getElementById("bottom-border");


function layerOut(){
	layer.style.display = "block";
	display.style.display = "block";
}

function closeLayer(){
	layer.style.display = "none";
	display.style.display = "none";
}

var param = {
	left: 0,
	top: 0,
	currentX: 0,
	currentY: 0,
	flag: false
}

function getCss(node, key) {
	return document.defaultView.getComputedStyle(node, null)[key];
}
//拖拽函数
function drag(target) {//必须先让layer显示，否则得不到left和top的值！！！！
	//得到原始的浮出层位置
	param.left = getCss(target,"left");
	param.top = getCss(target,"top");
	//console.log(parseInt(param.left));

	//鼠标按下
	target.onmousedown = function(evt) {
		//设置标记为true
		param.flag = true;
		evt.preventDefault();
		param.currentX = evt.clientX;
		//console.log(evt.clientX);
		param.currentY = evt.clientY;
	};
	//鼠标放开
	target.onmouseup = function(evt) {
		//设置标记为false
		//更新弹出层在窗口中的位置数据
		param.flag = false;
		param.left = getCss(target, "left");
		//console.log(param.left);
		param.top = getCss(target, "top");
	};
	//鼠标移动
	target.onmousemove = function(evt){
		if(param.flag){//鼠标按下时才有效
			var nowX = evt.clientX;
			var nowY = evt.clientY;
			//console.log(nowX);
			var distinctX = nowX - param.currentX;
			var distinctY = nowY - param.currentY;
			//console.log(distinctX);
			//console.log(param.left);
			target.style.left = parseInt(param.left) + distinctX + "px";
			//console.log(target.style.left);
			target.style.top = parseInt(param.top) + distinctY + "px";
		}
			
	}

}
var parambox = {
	left: 0,
	top: 0,
	height: 0,
	width: 0
};
var params = {
	left: 0,
	top: 0,
	currentX: 0,
	currentY: 0,
	flag: false
};

function resizeLayer(box,target){
	parambox.left = getCss(box,"left");
	parambox.width = getCss(box,"width");
	params.left = getCss(target,"left");

	target.onmousedown = function(event){
		params.flag = true;

		event.preventDefault();
		params.currentX = event.clientX;
	}

	target.onmousemove = function(event){
			if(params.flag){
				var nowX = event.clientX;

				var distinctX = params.currentX - nowX;
				console.log(distinctX);
				console.log(params.left);
				target.style.left = parseInt(params.left) + distinctX + "px";
				box.style.width = parseInt(parambox.width) + distinctX + "px";
				box.style.left = parseInt(params.left) + distinctX + "px";
				console.log(target.style.left);
				console.log(box.style.left);
			}
		}

	target.onmouseup = function(event){
		params.flag = false;
		params.left = getCss(target,"left");
		parambox.left = getCss(box,"left");
		parambox.width = getCss(box,"width");
	}

	
}


btn.onclick = layerOut;
ensure.onclick = closeLayer;
cancle.onclick = closeLayer;
display.onclick = closeLayer;

drag(layer);
resizeLayer(layer,leftBorder);