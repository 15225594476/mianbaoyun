/**
 * Created by wyunfei on 2017/12/28.
 */
var signIn = angular.module('center');

signIn.controller('lookFor', function ($scope,$http,myAtion,myRegister,$state) {
    //动画
    myAtion.show();
    //让指令识别是哪个页面
    $scope.yang=2;
    $scope.name="";
    $scope.SjY="";
    $scope.passWoed="";
    //点击找回密码
    $scope.Zh=function(){
        myRegister.getCode
        ("http://www.mianbaoyun.cn/mobile/app/user/forgetPSW.htm","userName="+$scope.name+"","smsCode="+$scope.SjY+"","passWord="+$scope.passWoed+"")
            .then(function(res){
                if(res.data.header.errorCode==="200"){
                    $state.go("signIn")
                }else{
                    $scope.dete="手机验证码有误";
                }
            });
    };
});
