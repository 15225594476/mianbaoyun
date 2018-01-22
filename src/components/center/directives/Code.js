/**
 * Created by wyunfei on 2017/12/26.
 */

var reg = angular.module('center');
//获取手机验证码
reg.directive('myCode', function () {
    return {
        restrict:"ECMA",
        controller:["$scope","myRegister","$interval",function($scope,myRegister,$interval,$state){
            //获取手机验证码api
            $scope.nameYanzheng = "获取验证码";
            $scope.all=false;
            //点击获取验证码
            $scope.myYanzheng=function(){
                //$scope.yang依靠它判断，是注册还是登陆。1是注册 2是找密码
                if($scope.yang===1){
                    $scope.Numbb=10216;
                }else{
                    $scope.Numbb=10217;
                }
                console.log($scope.yang);
                myRegister.getCode
                ("http://www.mianbaoyun.cn/mobile/app/message/sendMsg.htm","mobile="+$scope.name+"","picCode="+$scope.Yname+"","templateNo="+$scope.Numbb+"")
                    .then(function successCallback(res){
                        //    验证成功，倒计时
                        if(res.data.header.errorCode==="200"){
                            $scope.all=true;
                            var connum = 60;
                            $scope.nameYanzheng=connum+"s";
                            $scope.timer = $interval(apply,1000);
                        }else{
                            $scope.dete="亲!验证码不正确哟";
                            setTimeout(function(){
                                $scope.dete="";
                            },1500);
                        }
                        //函数 倒计时
                        function apply(){
                            connum--;
                            $scope.nameYanzheng=connum+"s";
                            if(connum===0){
                                    $interval.cancel($scope.timer);
                                    console.log(2);
                                $scope.all=false;
                                $scope.nameYanzheng="重新发送";
                            }
                        }
                    });

            };
        }]
    };
});

