/* 下一页*/
	function nextPage(type){
		alert(type)
		pageNo=$("#nextPage").val();
		if(type=="jpg"){
			getData(pageNo);
		}else{
			getvideo(pageNo);
		}
		
	}
	
	/* 上一页 */
	function prePage(type){
		pageNo=$("#prePage").val();
		if(type=="jpg"){
			getData(pageNo);
		}else{
			getvideo(pageNo);
		}
	}
	
	/* 跳转 */
	function jump(type){
		var pageNo=$("#box").val();
		if(type=="jpg"){
			getData(pageNo);
		}else{
			getvideo(pageNo);
		}
	}

	function getData(pageNo){
		alert(pageNo)
		mui.ajax({
			type:'GET',
			data:{
				"pageNo":pageNo,
				"pageSize":20,
				"type":"jpg"
			},
			url:returnapi()+"/v1/showallforpage",
			success:function(data){
				var jdata=JSON.parse(data.data)
				
				$("#image-list").empty();
				$("#videLinkTemplate").tmpl({links:jdata.list}).appendTo("#image-list");
				var prePage=jdata.prePage;
				 $("#prePage").val(prePage); 
				 var nextPage=jdata.nextPage;
				 $("#nextPage").val(nextPage);
				/* localStorage.setItem("nextPage",jdata.nextPage); */
			},
			error:function(){
				mui.alert("加载数据失败");
			}
		})
	}

	function getvideo(pageNo) {
		alert(pageNo)
		$.ajax({
			type:'GET',
			data:{
				"pageNo":pageNo,
				"pageSize":20,
				"type":"mp4"
			},
			url:returnapi()+"/v1/showallforpage",
			success:function(data){
				var jdata=JSON.parse(data.data);
				$("#videLink").empty();
				$("#videLinkTemplate").tmpl({links:jdata.list}).appendTo("#videLink");
				var prePage=jdata.prePage;
				 $("#prePage").val(prePage); 
				 var nextPage=jdata.nextPage;
				 $("#nextPage").val(nextPage);
			},
			error:function(){
				alert("加载视频列表失败");
			}
		})
	}