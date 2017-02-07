/**
 * Created by Administrator on 2016/11/6 0006.
 */
window.womai=window.womai||{};
(function () {

    var usernamecookie= $.cookie("username");
    console.log(usernamecookie.username);
    function add(){
        if(usernamecookie==null){
            alter("您还未登录！");
            window.open("http://localhost:3000/login.html");
        }else{
            var invalue=usernamecookie+"_value";
            var num=parseInt($.cookie(invalue));
            num++;
            $.cookie(invalue,num,{expires:1});
        //    ajax 发送到后台保存，前台在登录时提取，存入cookie
            alert("加入购物车成功！")
        }
    }
    function addbuycar(){
        var nums=document.getElementById("nums").value;
        var kinds=document.getElementById("theKind");
        //多类选择用class筛选，然后拼接字符串
        //console.log(nums);
        var the_Kind;
        if(kinds==null){
            the_Kind="默认";
        }else{
            the_Kind=kinds.value;
        }
        if(nums>=1){
            add();
        }else{
            alert("页面信息更新中！请稍后再试")
        }

    }
    window.addbuycar=addbuycar;

})();