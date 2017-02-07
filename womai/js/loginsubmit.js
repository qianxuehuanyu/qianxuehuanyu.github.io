/**
 * Created by Administrator on 2016/11/5 0005.
 */
window.womai=window.womai||{};
(function () {
    var submit = document.getElementById("login_submit_btn_real");
    var LoginForm = document.getElementById("LoginForm");
    var cartLoginPSLabel=document.getElementById("cartLoginPSLabel");
    LoginForm.addEventListener("submit", function (e) {
        var key="right";
        e.preventDefault();

        var inMsg=document.getElementsByClassName("input_error");
        for(var i=0;i<inMsg.length;i++){
            if(inMsg[i].style.display=="inline"){
                key="error";
            }
        }
        if(key=="error"){
            alter("请修改错误！");
        }else{
            var userLoginId=document.getElementById("userLoginId").value;
            var userLoginPS=document.getElementById("userLoginPS");
            var sending={email:"",username:"",password:userLoginPS.value,phone:""};
            var p=/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
            var ptest=p.exec(userLoginId);
            if(ptest!=null){
                sending.email=userLoginId;
            }
            p=/^1[3|4|5|8][0-9]\d{8}$/;
            ptest=p.exec(userLoginId);
            if(ptest!=null){
                sending.phone=userLoginId;
            }
            p=/^[a-z0-9_-]{3,16}$/;
            ptest=p.exec(userLoginId);
            if(ptest!=null){
                sending.username=userLoginId;
            }
            $.ajax({
                url: "/login",
                type: "POST",
                dataType: "jsonp",
                data: sending
            }).done(function (data) {
                console.log(data);
                switch (data.status){
                    case 0:{
                        alert(data.message);
                        $.cookie("username",data.username,{expires:1});
                        var invalue=data.username+"_value";
                        $.cookie(invalue,0,{expires:1});
                        window.open("http://localhost:3000/womai.html","_top");
                    }break;
                    case 1:{
                        alert(data.message);
                        location.reload();
                    }break;
                    case 2:{
                        userLoginPS.value="";
                        alert(data.message);
                        cartLoginPSLabel.style.display="block";
                    }break;
                }
            }).fail(function () {
                alter("抱歉，网络状态差，请重试！");
            });
        }
    });
})();