function Ajax(method,url,data,successFn,errorFn){
	if(window.XMLHttpRequest){
		var ajax = new XMLHttpRequest();
	}else{
		var ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(method.toLowerCase()=="get"){
		ajax.open("GET",url+"?"+data,true);
		ajax.send(null);
	}else{
		ajax.open("POST",url,true);
		//异步POST请求需要设置以下请求HTTP头
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send(data);
	}
	ajax.onreadystatechange = function(){
		if(ajax.readyState === 4){
			if(ajax.status===200){
				successFn(ajax.responseText);
			}else{
				errorFn&&errorFn(ajax.responseText);
			}
		}
	}
}







