/**
 * Created by wyunfei on 2017/12/28.
 */
var demo = angular.module('center');

demo.controller('myDemo', function ($scope,$http,$interval,myAtion,myRegister,$state){
    //手机号文本框绑定内容
    $scope.name = "";
    //控制show显示隐藏
    $scope.pdd = false;
    //随机数
    $scope.num="";
    //图形验证码路径
    $scope.src="";
    //验证码文本框内容
    $scope.Yname = "";
    //手机验证码文本框
    $scope.SjY="";
    //密码文本框
    $scope.passWoed="";
    $scope.yang=1;
    //文本框画线效果
    myAtion.show();
    //注册按钮api
    $scope.sign=function(){
        myRegister.getCode
        ("http://www.mianbaoyun.cn/mobile/app/user/doRegister.htm","isSubmitCommitment=true","passWord="+$scope.passWoed+"","smsCode="+$scope.SjY+"","userName="+$scope.name+"")
            .then(function(res){
                if(res.data.header.errorCode==="200"){
                    $state.go("signIn")
                }else{
                    $scope.dete="手机验证码错误,请重新输入";
                }
        });
    };
});

