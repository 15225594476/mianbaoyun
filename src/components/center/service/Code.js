/**
 * Created by wyunfei on 2017/12/27.
 */
var demoApi = angular.module('center');
//请求验证码的http请求
demoApi.service('myYanzh', function ($http) {
    this.getCode = function (a,b,c,d) {
        var args = "http://www.mianbaoyun.cn/mobile/app/message/sendMsg.htm" +"?"+a+"&"+b+"&"+c+"&"+d;   // 请求的API
        return $http.post(args);
    };
});