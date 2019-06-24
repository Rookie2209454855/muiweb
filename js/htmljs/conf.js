function showDisk() {
		$.ajax({
			type:'GET',
			dataType: "json",
			url:reapi()+"/v1/resultdisks",
			success:function(data){
				var jdata=JSON.parse(data.data)
				console.log(data);
				$("#disks").empty();
				$("#disksTemplate").tmpl({_disks:jdata}).appendTo("#disks");
			},
			error:function(){
                showalert("加载磁盘列表失败");
			}
		})
	}
	
	$("#scanning").click(function () {
		$("#disks").attr("disabled","disabled");
		var dir=$("#disks").val();
		if(dir!=0){
			$.ajax({
				type:'GET',
				data:{
					"dir":dir
				},
				dataType: "json",
				url:reapi()+"/init",
				success:function(data){
					$("#disks").removeAttr("disabled");
					alert("已添加"+data+"条视频!");
					showLink();
				},
				error:function(){
                    showalert("添加磁盘文件失败");
				}
			})
		}
	});
