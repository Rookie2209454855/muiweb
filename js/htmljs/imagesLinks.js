
$(document).ready(function(){
	showLink();


	function showLink() {
		mui.ajax({
			type:'GET',
			data:{
				"pageNo":1,
				"pageSize":20,
				"type":"jpg"
			},
			url:returnapi()+"/v1/showallforpage",
			success:function(data){
				var jdata=JSON.parse(data.data)
				
				$("#image-list").empty();
				$("#videLinkTemplate").tmpl({links:jdata.list}).appendTo("#image-list");
				
				var prePage=jdata.prePage;
				var nextPage=jdata.nextPage;
				
				$("#prePage").val(prePage);
				$("#nextPage").val(nextPage);
				
				/* localStorage.setItem("prePage",jdata.prePage);
				localStorage.setItem("nextPage",jdata.nextPage); */
			},
			error:function(){
				mui.alert("加载视频列表失败");
			}
		})
	}
	
	
	
	mui.previewImage();
	
	mui.init({
	  gestureConfig:{
	   tap: true, //默认为true
	   doubletap: true, //默认为false
	   longtap: true, //默认为false
	   swipe: true, //默认为true
	   drag: true, //默认为true
	   hold:false,//默认为false，不监听
	   release:false//默认为false，不监听
	  }
	});
	

  })
	