/**
 * Created by Administrator on 2017/7/4.
 */
$(function() {
	$('body').css({
		'height' : $(window).height()
	}),

	// 点击登录
	$(".submitBtn").click(function() {

		// 请求后台服务
		/**
		 * AJAX - $.post(url,data,function,type) url：必需。请求地址
		 * data：可选。需要传递到服务器端的参数。 参数形式为“键/值”。
		 * function：可选。发送请求成功后的回调函数,在请求完成时被调用。该函数参数依次为响应体和状态。(只有当Response的返回状态是success才是调用该方法)
		 * type：可选。返回数据的类型。可以是：string或json、xml等类型。
		 * 
		 */
		var url = '../jsp/test.jsp';
		var data = {
			play : "ice",//第一个是传入的属性名，第二个是前端获取的值
		};

		
		$.post(url, data, function(result) {

			// alert(result);
			alert(typeof result + " ,返回的内容为  " + result);
			// alert(result.username+" , "+result.password);
			// var jsonReturn = this.result;
			// var jsonReturn = eval("("+result+")");
			// var jsonReturn = $.parseJSON(result);
			if (result != null) {
				var jsonReturn = JSON.parse(result);// 将JSON字符串转换为对象
				//alert(typeof jsonReturn + " 转换后内容  " + jsonReturn);
				// 解析JSON对象
				//alert(jsonReturn.userName + " , " + jsonReturn.password);
				//session
			} else {
				alert("手机号码为：的用户不存在");
			}

		}, "json");

	});

});
