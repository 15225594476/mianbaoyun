/**
 * Created by wyunfei on 2017/12/28.
 */
var signIn = angular.module('center');

signIn.controller('SignIn', function ($scope,myAtion2,myRegister) {
        //动画效果
        myAtion2.show();
        $scope.name='';
        $scope.passWoed='';
        //点击登陆按钮
        $scope.Deng=function()  {
            myRegister.getCode
            ("http://www.mianbaoyun.cn/mobile/app/user/dologin.htm","userName="+$scope.name+"","passWord="+$scope.passWoed+"")
                .then(function(res){
                    if(res.data.header.errorCode==="200"){
                        alert("登陆成功");
                    }else{
                        alert("账号或密码错误");
                    }
                });
        };
});
