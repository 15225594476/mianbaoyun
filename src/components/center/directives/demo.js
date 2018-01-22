/**
 * Created by wyunfei on 2017/12/26.
 */

var reg = angular.module('center');
//校验手机号码格式
reg.directive('demo', function () {
    return {
        restrict:"ECMA",
        controller:["$scope","myRegister",function($scope,myRegister,$state){
            //检验手机号码;
            $scope.Phone = function () {
                if($scope.name === ""){
                    $scope.dete = "手机号码不能为空";
                    $scope.pdd = false;
                    return;
                }
                if ($scope.name.length === 11){
                    //判断手机号是否正确
                    if ((/^1(3|4|5|7|8)\d{9}$/.test($scope.name))){
                        $scope.dete = "";
                        //检验该手机号 是否已被注册
                        myRegister.getCode
                        ("http://www.mianbaoyun.cn/mobile/app/user/checkUserName.htm","userName="+$scope.name+"")
                            .then(function successCallback(res){
                                //判定请求过来的res.data.body.isRegister是Y还是N，Y：注册过,N:没注册过
                                if(res.data.body.isRegister==="Y"){
                                    //判断他是注册页面还是找回密码的页面
                                    if($scope.yang===1){
                                        $scope.dete="该号码已经注册过";
                                        //清空默认格式
                                        setTimeout(function(){
                                            $scope.dete = "";
                                        },1000);
                                    }else{
                                        $scope.Numbb="10217";
                                        $scope.src='http://www.mianbaoyun.cn/mobile/app/message/picCode.htm?mobile=' + $scope.name + '&templateNo='+$scope.Numbb+'';
                                        $scope.pdd = true;
                                        return;
                                    }
                                }else{
                                    if($scope.yang===1){
                                        $scope.Numbb="10216";
                                        //显示图形验证码
                                        $scope.src='http://www.mianbaoyun.cn/mobile/app/message/picCode.htm?mobile=' + $scope.name + '&templateNo='+$scope.Numbb+'';
                                        $scope.pdd = true;
                                    }else{
                                        $scope.dete="兄弟,该号码还没注册呢！";
                                    }
                                }
                            });
                    }
                }else {
                    $scope.dete = "手机号码格式不正确";
                    $scope.pdd = false;
                }
            };
            //点击图形验证码切换api
            $scope.pGG = function(){
                console.log($scope.Numbb);
                myRegister.getCode
                ("http://www.mianbaoyun.cn/mobile/app/message/picCode.htm","mobile="+$scope.name+"","templateNo="+$scope.Numbb+"")
                    .then(function(res){
                        $scope.src = res.config.url+"&"+Math.random();
                    });
            };
        }]
    };
});

