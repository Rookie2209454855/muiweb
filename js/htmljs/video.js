	var vid=window.location.href.split("=")[1];
	/* console.log(vid) */
	$.ajax({
			type:'GET',
			data:{"id":vid},
			url:reapi()+"/v1/showvideo",
			success:function(data){
				var jdata=JSON.parse(data.data)
				var filee=localStorage.getItem("fileip")+"/"+jdata.uri
				$("#audio_id").append("<source src='"+filee+"'  type='video/mp4'>")
				$("#videoname").text(jdata.videoName);
				/* plus.nativeUI.toast(jdata.videoName);
				mui.alert(filee); */
			},
			error:function(){
				mui.alert("加载视频列表失败");
			}
		})
	
			/**
			 * 视频全屏播放旋转目前的逻辑
			 * 视频全屏，即锁定屏幕为横屏。
			 * 视频恢复，则解除屏幕方向的锁定。
			 * 具体的切换，根据自己的实际业务做相应的操作。
			 */
			// Android平台的视频全屏旋转
			var fullScreenOfAndroid = function() {
				if(true) {
					// 最新5+API的支持
					var self = plus.webview.currentWebview();
					self.setStyle({
						videoFullscreen: 'landscape'
					});
				} else {
					// 如果暂未更新sdk，可以先使用差量升级等方式，做出兼容处理；
					// 旧版本下的兼容处理
					document.addEventListener('webkitfullscreenchange', function() {
						var el = document.webkitFullscreenElement; //获取全屏元素
						if(el) {
							plus.screen.lockOrientation('landscape'); //锁死屏幕方向为横屏
						} else {
							plus.screen.unlockOrientation(); //解除屏幕方向的锁定
						}
					});

				}
			};
			// iOS平台的视频全屏旋转
			var fullScreenOfIos = function(videoElem) {
				// 监听的事件与Android平台有很大区别
				videoElem.addEventListener('webkitbeginfullscreen', function() {
					plus.screen.lockOrientation('landscape'); //锁死屏幕方向为横屏
				});
				videoElem.addEventListener('webkitendfullscreen', function() {
					plus.screen.unlockOrientation(); //解除屏幕方向的锁定
				});
			};
			// 涉及到5+API的内容，均在plusready事件后调用；
			document.addEventListener('plusready', function() {
				var osName = plus.os.name;
				if(osName === 'Android') {
					fullScreenOfAndroid();
				} else if(osName === 'iOS') {
					var videoElem = document.getElementById('video');
					fullScreenOfIos(videoElem);
				}
			});
	