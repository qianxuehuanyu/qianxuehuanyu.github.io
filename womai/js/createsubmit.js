/**
 * Created by Administrator on 2016/11/5 0005.
 */
window.womai=window.womai||{};
(function () {
    var submitBtn=document.getElementById("submitBtn");
    var newcreateform=document.getElementById("newcreateform");

    newcreateform.addEventListener("submit", function (e) {
        var key="right";
        e.preventDefault();
        var inMsg=document.getElementsByClassName("input_error");
        for(var i=0;i<inMsg.length;i++){
            if(inMsg[i].style.display=="inline"){
                key="error";
            }
        }
        if(key=="error"){
            alert("请修改错误！");
        }else{
            var E_P=document.getElementById("Email").value;
            var username=document.getElementById("loginId").value;
            var password=document.getElementById("password").value;
            var validateCode=document.getElementById("validateCode").value;
            var sending={email:"",username:username,password:password,phone:"",validateCode:validateCode};
            var p=/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
            var ptest=p.exec(E_P);
            if(ptest==null){
                sending.phone=E_P;
            }else{
                sending.email=E_P;
            }

            $.ajax({  
                url: "/register",
                type: "POST",
                dataType: "jsonp",
                data: sending
        }).done(function (data) {
                console.log(data);
                switch (data.status){
                    case 0:{
                        alert(data.message);
                        $.cookie("username",username,{expires:1});
                        window.open("http://localhost:3000/womai.html","_top");
                    }break;
                    case 1:{
                        alert(data.message);
                        location.reload();
                    }break;
                    case 2:{
                        alert(data.message);
                        location.reload();
                    }break;
                    case 3:{
                        alert(data.message);
                        location.reload();
                    }break;
                    case 4:{
                        alert(data.message);
                        location.reload();
                    }break;
                }

            }).fail(function () {
                alter("抱歉，网络状态差，请重试！");
            });
        }
    });













})();