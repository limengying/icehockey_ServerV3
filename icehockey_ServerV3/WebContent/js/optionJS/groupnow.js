$(function() {
	// 请求后台服务
	var urlUserId=comm.getUrlParameter("userid");//解析url中的参数获取userid的值
		var data = {
			userid : urlUserId,
		}
		//alert(JSON.stringify(data));
		// 请求后台保存数据
		$.post(LEARNFROMURL, data, function(result) {
			// 处理后台返回的结果
			var jsonReturn = JSON.parse(result);// 将JSON字符串转换为对象
			if (jsonReturn.result == "0") {
				//alert("姓名："+jsonReturn.userName);
				//在id为groupnow的div中显示所有组别信息
				$("#groupnow").html("姓名："+jsonReturn.groupnow);
				// window.open
			} else if (jsonReturn.result == "-1") {
				alert("当前没有登录用户");
			}
		},"json");
});