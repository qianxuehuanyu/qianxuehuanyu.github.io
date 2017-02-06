var top1=document.getElementById("top1");
//var top2=document.getElementById("top2");


var c1;				//画布
var ctx1;			//画笔
var ismousedown;	//标志用户是否按下鼠标或开始触摸
var isOk;
var fontem = parseInt(window.getComputedStyle(document.documentElement, null)["font-size"]);//这是为了不同分辨率上配合@media自动调节刮的宽度
//

/* 页面加载后开始初始化画布 */
    function init(){
        "use strict";
            c1=document.getElementById("c1");
            c1.width=c1.clientWidth;
            c1.height=c1.clientHeight;
            ctx1 = c1.getContext("2d");
        //c2=document.getElementById("c2");
        //c2.width=c2.clientWidth;
        //c2.height=c2.clientHeight;
        //ctx2 = c2.getContext("2d");
        isOk=0;
            //初始化
        initCanvas(c1,ctx1);
        //initCanvas(c2,ctx2);
        draw(c1,ctx1,top1);
        //draw(c2,ctx2,top2);

    }
window.onload = function(){
    init();
    alert("提示！在移动端场景下查看最佳！")
    //这里很关键，canvas自带两个属性width、height,我理解为画布的分辨率，跟style中的width、height意义不同。
    //最好设置成跟画布在页面中的实际大小一样
    //不然canvas中的坐标跟鼠标的坐标无法匹配
};

//初始化画布，画灰色的矩形铺满
function initCanvas(can,can2d){
    //网上的做法是给canvas设置一张背景图片，我这里的做法是直接在canvas下面另外放了个div。
    //c1.style.backgroundImage="url(中奖图片.jpg)";
    can2d.globalCompositeOperation = "source-over";
    can2d.fillStyle = '#5d5d5d';
    can2d.fillRect(0,0,can.clientWidth,can.clientHeight);
    can2d.fill();

    can2d.font = "Bold 30px Arial";
    can2d.textAlign = "center";
    can2d.fillStyle = "#333";
    can2d.fillText("→",can.width/2,can.height/2);

    //把这个属性设为这个就可以做出圆形橡皮擦的效果
    //有些老的手机自带浏览器不支持destination-out,下面的代码中有修复的方法
    can2d.globalCompositeOperation = 'destination-out';
}

function draw(can,can2d,parent){
    "use strict";
    //PC端的处理
    can.addEventListener("mousemove",eventMove,false);
    can.addEventListener("mousedown",eventDown,false);
    can.addEventListener("mouseup",eventUp,false);

    //移动端的处理
    can.addEventListener('touchstart', eventDown,false);
    can.addEventListener('touchend', eventUp,false);
    can.addEventListener('touchmove', eventMove,false);

    //鼠标按下 和 触摸开始
    function eventDown(e){
        e.preventDefault();
        ismousedown=true;
    }
//鼠标抬起 和 触摸结束
    function eventUp(e){
        e.preventDefault();
        //得到canvas的全部数据
        var a = can2d.getImageData(0,0,can.width,can.height);
        var j=0;
        for(var i=3;i<a.data.length;i+=4){
            if(a.data[i]==0)j++;
        }

        //当被刮开的区域等于一半时，则可以开始处理结果
        if(j>=((a.data.length/4)*0.7)){
            isOk = 1;
        }
        ismousedown=false;
    }
//鼠标移动 和 触摸移动
    function eventMove(e){
        e.preventDefault();
        if(ismousedown) {
            if(e.changedTouches){
                e=e.changedTouches[e.changedTouches.length-1];
            }
            var topY = parent.offsetTop;
            var oX = can.offsetLeft,
                oY = can.offsetTop+topY;

            var x = (e.clientX - document.body.scrollLeft || e.pageX) - oX || 0,
                y = (e.clientY + document.body.scrollTop || e.pageY) - oY || 0;
            //console.log(oX,x,e.clientX);
            //画360度的弧线，就是一个圆，因为设置了ctx.globalCompositeOperation = 'destination-out';
            //画出来是透明的
            can2d.beginPath();
            can2d.arc(x, y, fontem*1.2, 0, Math.PI * 2,true);
            //下面3行代码是为了修复部分手机浏览器不支持destination-out
            //我也不是很清楚这样做的原理是什么
            can.style.display = 'none';
            can.offsetHeight;
            can.style.display = 'inherit';
            can2d.fill();
        }
        if(isOk){
           parent.style.display="none";
            //console.log("end");
        }
    }
}



