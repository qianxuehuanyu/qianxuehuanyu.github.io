/**
 * Created by Administrator on 2016/11/3 0003.
 */
window.womai= window.womai || {};
//header部分的轮播

(function () {
    var  imgSrc=["images/1477881101798.jpg",
        "images/1477908445988.jpg",
        "images/1477880282893.jpg",
        "images/1478078902594.jpg",
        "images/1478075297122.jpg",
        "images/1477968332869.jpg",
        "images/1477893528838.jpg",
        "images/1477881660002.jpg"];

    var aHref=["http://sh.womai.com/sale/2016/sxds1611/"
        ,"http://sh.womai.com/sale/2016/jkbnj1611/"
        ,"http://sh.womai.com/sale/2016/jktq1611/"
        ,"http://sh.womai.com/sale/2016/jyr1611/"
        ,"http://sh.womai.com/sale/2016/lyflm1611/"
        ,"http://sh.womai.com/sale/2016/xxtq1611/"
        ,"http://sh.womai.com/sale/2016/fsdq1611/"
        ,"http://sh.womai.com/sale/2016/mydc1611/"];

    var changeColor=["rgb(91, 187, 27)","rgb(78, 152, 227)"
        ,"rgb(187, 112, 255)","rgb(116, 122, 246)"
        ,"rgb(119, 73, 49)","rgb(251, 81, 32)"
        ,"rgb(120, 115, 111)","rgb(255, 145, 198)"];


    var changeImg=document.getElementById("changeImg");
    var img_a= changeImg.getElementsByTagName("a")[0];
    var img_img=img_a.getElementsByTagName("img")[0];
    var img_Anchor=changeImg.getElementsByTagName("div");
    for(var i=0;i<img_Anchor.length;i++){
        img_Anchor[i].value=i;
    }
    //changeImg.style.backgroundColor="red";
    //console.log(imgSrc.length,aHref.length,changeColor.length);
    var key=0;
    var timechange;
    function headerInval(){
        timechange=setInterval(function () {
            changeImg.style.backgroundColor=changeColor[key];
            img_a.href=aHref[key];
            img_img.src=imgSrc[key];
            for(var i=0;i<img_Anchor.length;i++){
                if(i==key){
                    img_Anchor[i].className="onmouse";
                }else{
                    img_Anchor[i].className="outmouse";
                }
            }
            key=(key+1)%8;
        },1800);

    }
    changeImg.onmouseover= function () {
        clearInterval(timechange);
    };
    changeImg.onmouseout= function () {
        headerInval();
    };
    for(var j=0;j<img_Anchor.length;j++){
        img_Anchor[j].onmouseover= function () {
            key=this.value;
            changeImg.style.backgroundColor=changeColor[key];
            img_a.href=aHref[key];
            img_img.src=imgSrc[key];
            for(var o=0;o<img_Anchor.length;o++){
                if(o==key){
                    img_Anchor[o].className="onmouse";
                }else{
                    img_Anchor[o].className="outmouse";
                }
            }
        };
    }

    function leftBtn(){
        key=(key-1+8)%8;
        changeImg.style.backgroundColor=changeColor[key];
        img_a.href=aHref[key];
        img_img.src=imgSrc[key];
        for(var o=0;o<img_Anchor.length;o++){
            if(o==key){
                img_Anchor[o].className="onmouse";
            }else{
                img_Anchor[o].className="outmouse";
            }
        }
    }
    function rightBtn(){
        key=(key+1)%8;
        changeImg.style.backgroundColor=changeColor[key];
        img_a.href=aHref[key];
        img_img.src=imgSrc[key];
        for(var o=0;o<img_Anchor.length;o++){
            if(o==key){
                img_Anchor[o].className="onmouse";
            }else{
                img_Anchor[o].className="outmouse";
            }
        }
    }
    window.headerLeftBtn=leftBtn;
    window.headerRightBtn=rightBtn;
    womai.headerInval=headerInval;
})();
