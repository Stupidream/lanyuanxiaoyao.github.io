var flag = 0;
function checkuser() {
	if($('password') == "limingka") {
		flag = 1;
		set_cookie();
		window.location.href="limingka.html";
    }
	if($('password') == "yaohuajing") {
		flag = 1;
		set_cookie();
		window.location.href="login.html";
    }
	if($('password') == "shaoguoji") {
		flag = 1;
		set_cookie();
		window.location.href="login.html";
    }
	if($('password') == "yangzhiying") {
		flag = 1;
		set_cookie();
		window.location.href="login.html";
    }
	if($('password') == "liangjiayi") {
		flag = 1;
		set_cookie();
		window.location.href="liangjiayi.html";
    }
	if(flag == 0){
		alert("You do not have access to this site. If you want to request access, please contact the bloggers.");
	}
	return false;
}
		
function $(id) {
    return document.getElementById(id).value;
}
function set_cookie(){
	document.cookie = "username=lanyuan";
}