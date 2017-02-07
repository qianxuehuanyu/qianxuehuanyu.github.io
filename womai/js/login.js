/**
 * Created by Administrator on 2016/11/4 0004.
 */
window.womai=window.womai||{};
(function () {
    var clearAll=document.getElementById("clearAll");
    var cartLoginIdLabel=document.getElementById("cartLoginIdLabel");
    var userLoginId=document.getElementById("userLoginId");
    var cartLoginPSLabel=document.getElementById("cartLoginPSLabel");
    var userLoginPS=document.getElementById("userLoginPS");

    cartLoginIdLabel.onclick= function () {
      userLoginId.focus();
    };

    cartLoginPSLabel.onclick= function () {
        userLoginPS.focus();
    };

    var adduserkeyup;
    var addpasswordkeyup;
    userLoginId.onfocus= function () {
        adduserkeyup=window.addEventListener("keyup", function () {
            //console.log("111");
            if(userLoginId.value.length!=0){
                cartLoginIdLabel.style.display="none";
                clearAll.style.display="block";
            }else{
                cartLoginIdLabel.style.display="block";
                clearAll.style.display="none";
            }

        })
    };
    userLoginId.onblur= function () {
        removeEventListener("keyup",adduserkeyup);
        var userLoginIdtext=new womai.userLoginIdtest(userLoginId.value);
    };


    userLoginPS.onfocus= function () {
        addpasswordkeyup=window.addEventListener("keyup", function () {
            //console.log("111");
            if(userLoginPS.value.length!=0){
                cartLoginPSLabel.style.display="none";
                //clearAll.style.display="block";
            }else{
                cartLoginPSLabel.style.display="block";
                //clearAll.style.display="none";
            }

        })
    };
    userLoginPS.onblur= function () {
        removeEventListener("keyup",addpasswordkeyup);
        var userLoginPStext=new womai.userLoginPStest(userLoginPS.value);
    };

    clearAll.onclick= function () {
        userLoginId.value="";
        cartLoginIdLabel.style.display="block";
        clearAll.style.display="none";
    };



})();



































