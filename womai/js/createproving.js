/**
 * Created by Administrator on 2016/11/4 0004.
 */

window.womai=window.womai||{};
(function () {
    var list=[{kind:"email",id:"EmailMsg"},
        {kind:"username",id:"loginIdMsg"},
        {kind:"password",id:"passwordMsg"},
        {kind:"password2",id:"password2Msg"}];
    var password;

    function createproving(value,kinds){
        //console.log(value,kinds);
        var msgid;
        var p;
        for(var i=0;i<list.length;i++){
            if(kinds==list[i].kind){
                msgid=list[i].id;
            }
        }
        var changes=document.getElementById(msgid);
        //console.log(changes);
        switch (kinds){
            case "email":{
                var inkey="";var ptest;
                p=/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
                ptest=p.exec(value);
                if(ptest==null){
                    inkey="";
                }else {
                    inkey="ok";
                    changes.style.display="none";
                    changes.innerHTML = ""
                }
                p=/^1[3|4|5|8][0-9]\d{8}$/;
                ptest=p.exec(value);
                if(ptest==null&&inkey=="") {
                    changes.style.display="block";
                    changes.innerHTML = "请输入正确的邮箱和手机号码"
                }else{
                    changes.style.display="none";
                    changes.innerHTML = ""
            }

            }break;
            case "username":{
                p=/^[a-z0-9_-]{3,16}$/;
                ptest=p.exec(value);
                if (ptest==null){
                    changes.style.display="inline";
                    changes.innerHTML="用户名是由小写英文字母、数字、中文或下划线组成";
                }else{
                    changes.style.display="none";
                    changes.innerHTML = ""
                }
            }break;
            case "password":{
                p=/^[a-z0-9_-]{6,16}$/;
                ptest=p.exec(value);
                if (ptest==null){
                    changes.style.display="inline";
                    changes.innerHTML="密码长度必须为6-16个字符";
                }else{
                    password=value;
                    changes.style.display="none";
                    changes.innerHTML = ""
                }
            }break;
            case "password2":{
                if (value!=password){
                    changes.style.display="inline";
                    changes.innerHTML="两次输入的密码不一致，请重新输入";
                }else{
                    changes.style.display="none";
                    changes.innerHTML = ""
                }
            }break;
        }
    }
    womai.createproving=createproving;




})();