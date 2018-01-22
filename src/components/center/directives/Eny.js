/**
 * Created by wyunfei on 2017/12/26.
 */

var reg = angular.module('center');
//密码框的小眼睛
reg.directive('myEny', function () {
    return {
        restrict:"ECMA",
        controller:["$scope",function($scope){
            var Tex = document.getElementsByClassName("Text")[3];//获取文本框
            $scope.Yanhide=true;
            $scope.YanDown=function(){
                if($scope.Yanhide){
                    $scope.Yanhide=false;
                    Tex.type="text";
                }else{
                    $scope.Yanhide=true;
                    Tex.type="password";
                }
            };
        }]
    };
});

