var inputValue = document.getElementById("value");
var btn = document.getElementById("verify");
var pShow = document.getElementsByClassName("reminder")[0];
btn.onclick = function(){
	console.log("fsdfs");
	if (inputValue.value == "") {
		pShow.innerHTML = "姓名不能为空";
		pShow.style.color = "red";
		inputValue.style.borderColor = "red";
	}
	else if(inputValue.value.length >= 4 && inputValue.value.length <= 16){
		pShow.innerHTML = "名称格式正确";
		pShow.style.color = "green";
		inputValue.style.borderColor = "green";
	}
	else{
		pShow.style.color = "red";
		inputValue.style.borderColor = "red";
	}
}