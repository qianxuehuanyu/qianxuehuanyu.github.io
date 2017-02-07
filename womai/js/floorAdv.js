/**
 * Created by Administrator on 2016/11/3 0003.
 */
window.womai=window.womai||{};

(function () {


    function floorAdv(inid) {
        var adv = document.getElementById(inid + "adv");
        var inul = adv.getElementsByTagName("ul")[0];
        var inol = adv.getElementsByTagName("ol")[0];
        var inolli = inol.getElementsByTagName("li");
        var inulli = inul.getElementsByTagName("li");
        var leftBtn=adv.getElementsByClassName("slider-btn")[0].getElementsByTagName("a")[0];
        var rightBtn=adv.getElementsByClassName("slider-btn")[0].getElementsByTagName("a")[1];
        //console.log(leftBtn,rightBtn);
        var key = 0;
        for (var i = 0; i < inolli.length; i++) {
            inolli[i].value = i;
        }
        for (var i = 0; i < inulli.length; i++) {
            inulli[i].value = i;
        }
        for (var i = 0; i < inulli.length; i++) {
            inulli[i].style.left = 483 * (i-1) + "px";
            //console.log(inulli[i].style.left);
        }
        var timechange;
        function advtime() {
            timechange = setInterval(function () {
                for (var i = 0; i < inulli.length; i++) {
                    var px = parseInt(inulli[i].style.left.slice(0, -2));
                    if (px == 483) {
                        key = inulli[i].value;
                    }
                    inulli[i].style.left = (px - 483) + "px";
                    if (px == -483) {
                        inulli[i].style.zIndex = "0";
                        inulli[i].style.left = (483 * (inulli.length - 2)) + "px";
                    } else {
                        inulli[i].style.zIndex = "20";
                    }
                }
                for (var i = 0; i < inolli.length; i++) {
                    if (i == (key) % inolli.length) {
                        inolli[i].className = "lihover";
                    } else {
                        inolli[i].className = "";
                    }
                }
            }, 1500);
        }
        advtime();
        adv.onmouseover= function () {
            clearInterval(timechange);
        };
        adv.onmouseout= function () {
            advtime();
        };
        for(var i=0;i<inolli.length;i++){
            inolli[i].onmouseover= function () {
                for(var j=0;j<inolli.length;j++){
                    if(j==this.value){
                        inolli[j].className="lihover";
                    }else{
                        inolli[j].className="";
                    }
                }
                if(this.value>(key%inolli.length)){
                    for (var i = 0; i < inulli.length; i++) {
                        var px = parseInt(inulli[i].style.left.slice(0, -2));
                        if (px == 483) {
                            key = inulli[i].value;
                        }
                        inulli[i].style.left = (px - 483) + "px";
                        if (px == -483) {
                            inulli[i].style.zIndex = "0";
                            inulli[i].style.left = (483 * (inulli.length - 2)) + "px";
                        } else {
                            inulli[i].style.zIndex = "20";
                        }
                    }
                }
                if(this.value<(key%inolli.length)){
                    for (var i = 0; i < inulli.length; i++) {
                        var px = parseInt(inulli[i].style.left.slice(0, -2));
                        if (px == 483) {
                            key = inulli[i].value;
                        }
                        inulli[i].style.left = (px + 483) + "px";
                    }
                }
            };
        }

        leftBtn.onclick= function () {
            for (var i = 0; i < inulli.length; i++) {
                var px = parseInt(inulli[i].style.left.slice(0, -2));
                if (px == -483) {
                    key = inulli[i].value;
                }
                inulli[i].style.left = (px + 483) + "px";
                if (px == 966) {
                    inulli[i].style.zIndex = "0";
                    inulli[i].style.left ="-483px";
                } else {
                    inulli[i].style.zIndex = "20";
                }
            }

            for (var i = 0; i < inolli.length; i++) {
                if (i == (key) % inolli.length) {
                    inolli[i].className = "lihover";
                } else {
                    inolli[i].className = "";
                }
            }
        };
        rightBtn.onclick= function () {
            for (var i = 0; i < inulli.length; i++) {
                var px = parseInt(inulli[i].style.left.slice(0, -2));
                if (px == 483) {
                    key = inulli[i].value;
                }
                inulli[i].style.left = (px - 483) + "px";
                if (px == -483) {
                    inulli[i].style.zIndex = "0";
                    inulli[i].style.left = (483 * (inulli.length - 2)) + "px";
                } else {

                    inulli[i].style.zIndex = "20";
                }
            }
            for (var i = 0; i < inolli.length; i++) {
                if (i == (key) % inolli.length) {
                    inolli[i].className = "lihover";
                } else {
                    inolli[i].className = "";
                }
            }
        };
    }
    womai.floorAdv=floorAdv;

})();