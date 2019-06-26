
$(document).ready(function(){
	showLink();
    /***
	 * 初始化
     */
	function showLink() {
		$.ajax({
			type:'GET',
			data:{
				"pageNo":1,
				"pageSize":20,
				"type":"mp4"
			},
			url:returnapi()+"/v1"+"/showallforpage",
			success:function(data){
				var jdata=JSON.parse(data.data);
				$("#videLink").empty();
				$("#videLinkTemplate").tmpl({links:jdata.list}).appendTo("#videLink");
				var prePage=jdata.prePage;
				var nextPage=jdata.nextPage;
				$("#prePage").val(prePage);
				$("#nextPage").val(nextPage);
			},
			error:function(){
				alert("加载视频列表失败");
			}
		})
	}
})



