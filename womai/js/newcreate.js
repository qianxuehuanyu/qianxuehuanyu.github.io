/**
 * Created by Administrator on 2016/11/4 0004.
 */

(function () {

    function checkChange(){
        var checkChange=document.getElementById("checkChange");
        var ma_input=checkChange.getElementsByClassName("ma_input")[0];
        var i=checkChange.getElementsByTagName("i")[0];
        //console.log(i,ma_input);
        ma_input.style.display= ma_input.style.display=="block"?"none":"block";
        i.style.display= i.style.display=="block"?"none":"block";
    }
    window.checkChange=checkChange;
//===========================
    var Email=document.getElementById("Email");
    var EmailLabel=document.getElementById("EmailLabel");
    var inEmail=new womai.onfocus_onblur(Email,EmailLabel,"email");
    var loginId=document.getElementById("loginId");
    var loginIdLabel=document.getElementById("loginIdLabel");
    var inloginId=new womai.onfocus_onblur(loginId,loginIdLabel,"username");
    var password=document.getElementById("password");
    var passwordLabel=document.getElementById("passwordLabel");
    var inpassword=new womai.onfocus_onblur(password,passwordLabel,"password");
    var password2=document.getElementById("password2");
    var password2Label=document.getElementById("password2Label");
    var inpassword2=new womai.onfocus_onblur(password2,password2Label,"password2");
    var validateCode=document.getElementById("validateCode");
    var validateCodeLabel=document.getElementById("validateCodeLabel");
    var invalidateCode=new womai.onfocus_onblur(validateCode,validateCodeLabel,"none");
    var invitationCode=document.getElementById("invitationCode");
    var invitationCodeLabel=document.getElementById("invitationCodeLabel");
    var ininvitationCode=new womai.onfocus_onblur(invitationCode,invitationCodeLabel,"none");

})();