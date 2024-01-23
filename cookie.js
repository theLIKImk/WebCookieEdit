function checkcookie(){
	document.cookie="check=cookie;";
	if (document.cookie=="") {
		return false;
	}
	cookieadd("check",null,0);
	return true;
}

function cookieadd(name,val,min){
	var now=new Date();
	now.setMinutes(now.getMinutes()+min);
	document.cookie = name.trim() + "=" + val + ";expires=" + now.toUTCString();
}

function cookierm(name){
	cookieadd(name,"",0);
}

function cookieget(name){
	var cookieArr = document.cookie.split(';'); 
	for (var i = 0; i < cookieArr.length; i++) {
		var cookiePair = cookieArr[i].split('=');
		if (name.trim() == cookiePair[0].trim()) {
			return cookiePair[1];
		}
	}
	return null;
}