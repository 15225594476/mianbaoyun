/**
 * Created by wyunfei on 2017/12/27.
 */
var register = angular.module('center');
register.factory('myAtion2', function () {
    return {
        name:"111",
        //文本框动画效果
        show:function(){
            //文本框动画效果
            var ppd = 0;
            var oP = document.getElementsByClassName("Text");
            var D = document.querySelectorAll(".anmiT_zz");
            var B = document.querySelectorAll(".box");
            var cls = document.querySelector(".anmiT_d");
            var abb = 0;
            for(var i=0 ;i<oP.length ;i++){
                oP[i].index=i;
                var tfb = true;
                oP[i].onfocus=function(){
                    console.log(6);
                    if(abb===0){
                        //创建div标签
                        var a = document.createElement("div");
                        //放内容
                        a.innerHTML="<div id=\"anmiT\">\n\t\t\t\t\t\t<div class=\"anmiT_a\"></div>\n\t\t\t\t\t</div>";
                        //添加
                        D[this.index].appendChild(a);
                        //删除
                        setTimeout(function(){
                            a.innerHTML='';
                        },2000);
                    }else{
                        if(tfb===true){
                            //设置开关,避免多次获取焦点 多次创建标签 出现bug
                            tfb = false;
                            if(this.index===0){
                                //添加属性 让方块移动
                                cls.className="anmiT_d anmiT_d_2";
                                //创建div标签
                                var aA = document.createElement("div");
                                //内容
                                aA.innerHTML="<div id=\"anmiT\">\n\t\t\t\t\t\t\t\t<div class=\"anmiT_a_2\"></div>\n\t\t\t\t\t\t\t</div>";
                                //在标签添加内容
                                D[this.index].appendChild(aA);
                                //等动画执行完毕 删除添加的标签
                                setTimeout(function(){
                                    D[0].innerHTML='';
                                    tfb = true;
                                },2300);
                            }else{
                                //让方块移动
                                cls.className="anmiT_d anmiT_d_3";
                                //创建div标签
                                var Aa = document.createElement("div");
                                //div标签放内容
                                Aa.innerHTML="<div id=\"anmiT\">\n\t\t\t\t\t\t\t\t<div class=\"anmiT_a_2\"></div>\n\t\t\t\t\t\t\t</div>";
                                //在标签添加内容
                                D[this.index].appendChild(Aa);
                                //等动画执行完毕 删除添加的标签
                                setTimeout(function(){
                                    D[1].innerHTML='';
                                    tfb = true;
                                },2300);
                            }
                        }
                    }
                    abb++;
                    if(abb===4){
                        abb=1;
                        console.log(abb);
                    }
                };
            }
        }
    };
});
