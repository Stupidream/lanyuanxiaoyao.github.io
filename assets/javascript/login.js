var flag = 0;
function checkuser() {
{% for name in site.users %}
if($('password') == "{{name}}") {
	flag = 1;
    return true;
    }
	{% endfor %}
	if(flag == 0){
	alert("��û�з���Ȩ�ޣ�����ϵlanyuanxiaoyao@qq.com");
	}
	return false;
}
		
function $(id) {
    return document.getElementById(id).value;
}