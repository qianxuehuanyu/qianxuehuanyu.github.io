/**
 * Created by Administrator on 2016/11/3 0003.
 */
(function () {
    function logincheck(){
        var username=$.cookie("username");
        var item=document.getElementsByClassName("iTem");
        var show=document.getElementsByClassName("username")[0];
        var outlogin=document.getElementsByClassName("username")[1];
        var showname=show.getElementsByTagName("a")[0];
        var plogin=document.getElementsByClassName("login")[0];
        var mybuycar=document.getElementById("mybuycar");
        var inbuycarNums=document.getElementById("inbuycarNums");
        var inmycarbtn=document.getElementById("inmycarbtn");
        var smallcart_cont=document.getElementById("smallcart_cont");
        var infree=smallcart_cont.getElementsByClassName("free")[0];
        //console.log(item,show,showname);
        //console.log(plogin);
        //<span>您还没有登录！</span><a href="javascript:;" rel="nofollow" onclick="">登录</a>
        if(username!=null){
            for(var i=0;i<item.length;i++){item[i].style.display="none";}
            show.style.display="inline";
            outlogin.style.display="inline";
            showname.innerHTML=username;
            plogin.innerHTML=username;
            var invalue=username+"_value";
            mybuycar.innerHTML= $.cookie(invalue);
            inbuycarNums.innerHTML=$.cookie(invalue);
            inmycarbtn.innerHTML=$.cookie(invalue);
            if($.cookie(invalue)==0){
                infree.style.display="block";
            }else{
                infree.style.display="none";
            }
            //console.log(invalue,$.cookie(invalue));
        }else{
            for(var i=0;i<item.length;i++){item[i].style.display="inline";}
            show.style.display="none";
            outlogin.style.display="none";
            showname.innerHTML="";
            plogin.innerHTML='<span>您还没有登录！</span><a href="#" rel="nofollow" onclick="">登录</a>';

        }
    }
    logincheck();

    //window.onbeforeunload=function (){
    //    alert("===onbeforeunload===");
    //    if(event.clientX>document.body.clientWidth && event.clientY < 0 || event.altKey){
    //        $.cookie('username', '', { expires: -1 }); // 删除 cookie
    //    }else{
    //        alert("你正在刷新页面");
    //    }
    //};

    function loginout(){

            $.cookie("username",{},{ expires: -1 });
            location.reload();
    }
    window.loginout=loginout;

})();




