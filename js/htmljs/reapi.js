/* 返回api */
function returnapi(){
	var ipAddress=localStorage.getItem("serverIp");
	if(ipAddress==null){
		ipAddress="http://37.love521.store:90/videoServer";
	}
	return ipAddress;
}


/***
 * 分页js
 */
function fenye(pageNums){
	var htmlli="<li class='mui-previous mui-disabled' ><a href='#' >&laquo;</a></li>";				
	for(var i=0;i<pageNums;i++){
		if(i==1){
			htmlli=htmlli+"<li class='mui-active'><a href='#'>1</a></li>"
		}else{
			htmlli=htmlli+"<li><a href='#'>"+i+"</a></li>";
		}
	}
	htmlli=htmlli+"<li class='mui-next'><a href='#'>&raquo;</a></li>";
	$("#zero").append(htmlli); 
}


