/**
 * Created by Administrator on 2016/11/4 0004.
 */
window.womai=window.womai||{};
(function () {

    function onfocus_onblur(ininput,ininputlaber,inputtype){

        ininputlaber.onclick= function () {
            ininput.focus();
        };
        var addkeyup;
        ininput.onfocus= function () {
            addkeyup=window.addEventListener("keyup", function () {
                if(ininput.value.length!=0){
                    ininputlaber.style.display="none";
                }else{
                    ininputlaber.style.display="block";
                }
            })
        };

        ininput.onblur= function () {
            removeEventListener("keyup",addkeyup);
            if(inputtype!="none"&&ininput.value.length!=0){
                //console.log(ininput,ininputlaber,inputtype);
               var valueproving=new womai.createproving(ininput.value,inputtype);
                //console.log(valueproving);
            }

        };
    }
    womai.onfocus_onblur=onfocus_onblur;

})();

