function returnapi(){
	var ipAddress=localStorage.getItem("serverIp");
	/* alert(ipAddress) */
	if(ipAddress==null){
		ipAddress="http://37.love521.store:90/videoServer";
	}
/* 	alert(ipAddress) */
	return ipAddress;
}

