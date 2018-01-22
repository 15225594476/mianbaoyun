/**
 * Created by wyunfei on 2017/12/27.
 */
var register = angular.module('center');
register.factory('myAtion', function () {
    return {
        name:"111",
        //文本框动画效果
        show:function(){
            //文本框动画效果
            var ppd = 0;
            var oP = document.getElementsByClassName("Text");
            var B = document.querySelectorAll(".box");
            for(var i=0 ;i<oP.length ;i++){
                //页面加载的时候触发的
                //创建div标签
                var aAA = document.createElement("div");
                //放内容
                aAA.innerHTML="<div id=\"anmiT\">\n\t\t\t\t\t\t<div class=\"anmiT_a\"></div>\n\t\t\t\t\t</div>";
                //添加
                B[i].appendChild(aAA);
                //删除
                setTimeout(function(){
                    for(var i=0 ;i<oP.length ;i++){
                        B[i].innerHTML='';
                    }
                },2000);

                oP[i].index = i;
                oP[i].onfocus=function(){
                    var ii = this.index;
                    //创建div标签
                    var a = document.createElement("div");
                    //放内容
                    a.innerHTML="<div id=\"anmiT\">\n\t\t\t\t\t\t<div class=\"anmiT_a\"></div>\n\t\t\t\t\t</div>";
                    //添加
                    B[this.index].appendChild(a);
                    //删除
                    setTimeout(function(){
                        B[ii].innerHTML='';
                    },2000);
                };
            }
        }
    };
});
