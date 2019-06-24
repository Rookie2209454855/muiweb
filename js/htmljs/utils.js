/***
 * 分页js
 */
var pageNo=1;//配置初始页码
var pageSize=20;//配置显示条数

var _callback;
var _param;
repage();
function fenye(ele,data,callback) {
    layui.use('laypage', function(){
        var laypage = layui.laypage;
        //执行一个laypage实例
        laypage.render({
            elem: ele
            ,count: data.record
            ,limits:[10, 20, 30, 40, 50,100]
            ,layout: ['count','prev', 'page', 'next', 'limit', 'skip']
            ,jump: function(obj,first){
                if(!first){
                    _callback = callback;
                    _param=obj;
                    doIt();
                }
            }
        });
    });
}

function doIt(){
    _callback(_param);
}

/***
 * alert提示
 * @param msg
 */
function showalert(msg) {
    layui.use('layer', function() {
        var layer = layui.layer;
        layer.open({
            title: '在线调试'
            ,content: '可以填写任意的layer代码'
        });
    })
}




function reapi(){
	return "http://127.0.0.1:9090/videoServer";
}

/**加载分页插件**/
function repage(){
 var _pages= "<div class='mui-numbox'>"
 +"<button class='mui-btn mui-btn-numbox-minus' type='button'>-</button>"
 +"<input class='mui-input-numbox' type='number' id='forjum' value='1'>"
 +"<button class='mui-btn mui-btn-numbox-plus' type='button'>+</button></div>"
 +"<div class='mui-btn mui-btn-primary' id='jumppage'>跳转</div>";
var pages=$("#pages");
 if(pages.length>0){
 	pages.append(_pages)
 }
 	
}


function jumpage(_calback){
	$("#jumppage").click(function(){
		pageNo=$("#forjum").val();
		_calback();
	})
}
/*跳页*/

