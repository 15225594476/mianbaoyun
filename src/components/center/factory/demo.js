/**
 * Created by wyunfei on 2017/12/27.
 */
var register = angular.module('center');
register.factory('myDemo', function () {
    return {
        name:"111",
        show:function(){
            alert(666);
        }
    };
});
