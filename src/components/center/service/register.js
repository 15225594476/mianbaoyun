/**
 * Created by wyunfei on 2017/12/27.
 */
var demoApi = angular.module('center');

demoApi.service('myRegister', function ($http) {
    this.getCode = function (con,a,b,c,d) {
        var args = con+"?"+a+"&"+b+"&"+c+"&"+d;   // 请求的API
        return $http.post(args);
    };
});