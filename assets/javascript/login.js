var flag = 0;
function checkuser() {
if($('password') == "limingka") {
	flag = 1;
    return true;
    }
	if(flag == 0){
	alert("��û�з���Ȩ�ޣ�����ϵlanyuanxiaoyao@qq.com");
	}
	return false;
}
		
function $(id) {
    return document.getElementById(id).value;
}
function cookie_permissiom(){
	document.cookie = "permission=yes";
}