var inputValue = document.getElementsByClassName("value");
var name = document.getElementsByClassName("name");
var reminder = document.getElementsByClassName("reminder");
for(var j = 0; j < name.length; j++){
	(function(i){
		inputValue[i].onfocus = function(){
			reminder[i].innerHTML = reminderMsg(i);
			reminder[i].style.color = "#CACACA";
			inputValue[i].style.borderColor = "#CACACA";
		}
	})(j);
	(function(i){
		inputValue[i].onblur = function(){
			if (inputValue[i].value == "") {
				reminder[i].innerHTML = wrongMsg(i);
				reminder[i].style.color = "red";
				inputValue[i].style.borderColor = "red";
			}else{
				reminder[i].innerHTML = RegexMatch(i,inputValue[i].value);
				if (reminder[i].innerHTML == "格式正确") {
					reminder[i].style.color = "green";
					inputValue[i].style.borderColor = "green";
				}
				else{
					reminder[i].style.color = "red";
					inputValue[i].style.borderColor = "red";
				}
			}
		}
	})(j);
} 

function reminderMsg(num){
	switch(num){
		case 0: return "必填，字符为4~16字符";
		case 1: return "必填，字符为数字与英文字符";
		case 2: return "再次输入相同密码";
		case 3: return "请输入正确邮箱格式";
		case 4: return "请输入正确手机号码";
	}
}
function wrongMsg(num){
	switch(num){
		case 0: return "名称不能为空";
		case 1: return "密码不能为空";
		case 2: return "再次输入相同密码";
		case 3: return "邮件不能为空";
		case 4: return "号码不能为空";
	}
}
function RegexMatch(num, value){
	switch(num){
		case 0: if(value.length >= 4 && value.length <= 16) return "格式正确";
				else return "格式错误";
		case 1: if(value.search(/(^，|\、|\。|\；|\【|\】)/g) == "-1") return "格式正确";
				else return "格式错误";
		case 2: if(value == inputValue[1].value) return "格式正确";
				else return "格式错误";
		case 3: if((/\S@\S{2,3}\.com/g).test(value)) return "格式正确";
				else return "格式错误";
		case 4: if ((/[0-9]{11}/g).test(value)) return "格式正确";
				else return "格式错误";
	}
}