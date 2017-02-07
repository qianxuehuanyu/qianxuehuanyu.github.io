/**
 * Created by Administrator on 2016/11/4 0004.
 */
window.womai=window.womai||{};
(function () {
    function userLoginIdtest(value){
        var userLoginId_error=document.getElementById("userLoginId_error");
        var p,key= 1;var ptest;
        p=/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        ptest=p.exec(value);
        if(ptest==null){key*=1;}else{key*=0;};
        p=/^1[3|4|5|8][0-9]\d{8}$/;
        ptest=p.exec(value);
        if(ptest==null){key*=1;}else{key*=0;};
        p=/^[a-z0-9_-]{3,16}$/;
        ptest=p.exec(value);
        if(ptest==null){key*=1;}else{key*=0;};
        if(key==1){
            userLoginId_error.style.display="inline";
            userLoginId_error.innerHTML="格式错误！";
        }else{
            userLoginId_error.style.display="none";
            userLoginId_error.innerHTML="";
        }
    }
    womai.userLoginIdtest=userLoginIdtest;

    function userLoginPStest(value){
        var userLoginPS_error=document.getElementById("userLoginPS_error");
        var p=/^[a-z0-9_-]{6,18}$/;
        var ptest=p.exec(value);
        if(ptest==null){
            userLoginPS_error.style.display="inline";
            userLoginPS_error.innerHTML="密码格式错误！"
        }else{
            userLoginPS_error.style.display="none";
            userLoginPS_error.innerHTML="";
        }
    }
    womai.userLoginPStest=userLoginPStest;

})();