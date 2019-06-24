
$(document).ready(function(){
	showLink();

	function showLink() {
		mui.ajax({
			type:'GET',
			data:{
				"pageNo":pageNo,
				"pageSize":pageSize,
				"type":"jpg"
			},
			url:reapi()+"/v1/showallforpage",
			success:function(data){
				var jdata=JSON.parse(data.data)
				$("#image-list").empty();
				$("#videLinkTemplate").tmpl({links:jdata.list}).appendTo("#image-list");
				$("#totalpage").text("共"+data.totalPages+"页")
			},
			error:function(){
				mui.alert("加载视频列表失败");
			}
		})
	}
	
	//调用跳页方法
	jumpage(showLink);
	
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
	function delImg(imgg,imageid) {
		console.log(imgg)
	    $.ajax({
			type:'GET',
			data:{
				"vid":imageid
			},
			url:reapi()+"/v1/delbyvideoid",
			success:function(){
				var s=imgg;
				var node1=s.parentNode;
				node1.parentNode.removeChild(node1);
			},
			error:function(){
	            showalert("删除失败，请联系管理员!！");
			}
		})
	}




