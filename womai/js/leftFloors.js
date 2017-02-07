/**
 * Created by Administrator on 2016/11/3 0003.
 */
(function () {
    var floatNav=document.getElementById("floatNav");
    var liNums=floatNav.getElementsByTagName("ul")[0].getElementsByTagName("li");
    var floatheader=document.getElementById("floatheader");
    window.onscroll = function() {
//为了保证兼容性，这里取两个值，哪个有值取哪一个　　
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop);
//scrollTop就是触发滚轮事件时滚轮的高度

        if(scrollTop>1700){
            floatNav.style.display="block";
            floatNav.className="float-nav float-navupdown";
        }else if(scrollTop>1605&&scrollTop<1816){
                floatNav.className="float-nav float-navdownup";
        }else{
            floatNav.style.display="none";
        }

        if(scrollTop>800){
            floatheader.style.display="block";
        }else{
            floatheader.style.display="none";
        }

        if(scrollTop>1800&&scrollTop<2500){
            changecurr(0);
        }
        if(scrollTop>2500&&scrollTop<3100){
            changecurr(1);
        }
        if(scrollTop>3100&&scrollTop<3600){
            changecurr(2);
        }
        if(scrollTop>3600&&scrollTop<4200){
            changecurr(3);
        }
        if(scrollTop>4200&&scrollTop<4700){
            changecurr(4);
        }
        if(scrollTop>4700&&scrollTop<5300){
            changecurr(5);
        }
        if(scrollTop>5300&&scrollTop<5800){
            changecurr(6);
        }
        if(scrollTop>5800&&scrollTop<6300){
            changecurr(7);
        }
        if(scrollTop>6300&&scrollTop<6800){
            changecurr(8);
        }
        if(scrollTop>6800&&scrollTop<7300){
            changecurr(9);
        }
        if(scrollTop>7300){
            changecurr(10);
        }


    };

    function changecurr(num){
        for(var i=0;i< liNums.length;i++){
            if(i==num){
                liNums[i].className="curr";
            }else{
                liNums[i].className="";
            }
        }
    }
    //if(scrollTop>1800){
    //    floatNav.style.display="block";
    //}else{
    //    floatNav.style.display="none";
    //}


})();

