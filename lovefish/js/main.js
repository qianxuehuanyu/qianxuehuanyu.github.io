/**
 * Created by Administrator on 2016/10/12 0012.
 */
document.body.onload=game;
//对象
var can1;
var can2;
//场景
var ctx1;
var ctx2;
//时间间隔问题变量
var lastTime;
var deleteTime;
//背景图片
var bgPic=new Image();
//画布尺寸
var canWidth;
var canHeight;
//海葵
var ane;
//果实
var fruit;
//大鱼
var bigFish;
var bfx;
var bfy;
var bfTail=[];
var bfEye=[];
var bfBodyOrange=[];
var bfBodyBlue=[];

//小鱼
var babyFish;
var babyTail=[];
var babyEye=[];
var babyBody=[];
//分数变量
var data;
//白色圈效果
var wave;
//大鱼喂小鱼特效
var hale;
//游戏入口函数
function game(){
    //逐帧变换的时间检测的初始值
    lastTime=Date.now();
    deleteTime=0;
    //init初始化函数，gameloop随着帧数变换而不断循环的函数，用于画图;
    init();
    gameloop();
}
//初始化
function init(){
    //游戏全局初始化，各类对象初始化，各类全局变量设定初始值
    can1=document.getElementById("canvas1");
    ctx1=can1.getContext('2d');
    can2=document.getElementById("canvas2");
    ctx2=can2.getContext('2d');
    //鼠标监听事件
    can1.addEventListener('mousemove',onMouseMove,false);
    //背景图片
    bgPic.src="src/background.jpg";
    canWidth=can1.width;
    canHeight=can1.height;
    ane=new aneObj();
    ane.init();
    fruit=new fruitObj();
    fruit.init();
    bigFish=new bfObj();
    bigFish.init();
    bfx=canWidth/2;
    bfy=canHeight/2;
    babyFish=new babyObj();
    babyFish.init();
    data=new dataObj();
    //小鱼鱼尾图片初始化
    for(var i=0;i<8;i++){
        babyTail[i]=new Image();
        babyTail[i].src="src/babyTail"+i+".png";
    }
    //小鱼鱼眼图片初始化
    for(var i=0;i<2;i++){
        babyEye[i]=new Image();
        babyEye[i].src="src/babyEye"+i+".png";
    }
    //小鱼身体图片初始化
    for(var i=0;i<20;i++){
        babyBody[i]=new Image();
        babyBody[i].src="src/babyFade"+i+".png";
    }
    //大鱼鱼尾图片初始化
    for(var i=0;i<8;i++){
        bfTail[i]=new Image();
        bfTail[i].src="src/bigTail"+i+".png";
    }
    //大鱼鱼眼图片初始化
    for(var i=0;i<2;i++){
        bfEye[i]=new Image();
        bfEye[i].src="src/bigEye"+i+".png";
    }
    //大鱼身体图片初始化橙色+蓝色
    for(var i=0;i<8;i++){
        bfBodyOrange[i]=new Image();
        bfBodyOrange[i].src="src/bigSwim"+i+".png";
        bfBodyBlue[i]=new Image();
        bfBodyBlue[i].src="src/bigSwimBlue"+i+".png";
    }
    //初始化字体和居中，
    ctx1.font="20px Verdana";
    ctx1.textAlign="center";
    //
    wave=new waveObj();
    wave.init();
    hale=new haleObj();
    hale.init();

}
//游戏帧数变换
function gameloop(){
    //逐帧调用函数
    requestAnimationFrame(gameloop);
    //console.log("111");
    var now=Date.now();
    deleteTime=now-lastTime;
    lastTime=now;
    if(deleteTime>40)deleteTime=40;

    drawBackground();
    ane.draw();
    fruitMoitor();
    fruit.draw();
    ctx1.clearRect(0,0,canWidth,canHeight);
    bigFish.draw();
    babyFish.draw();
    bfFruitsCollision();
    bigBabyCollision();

    data.draw();
    wave.draw();
    hale.draw();
}


function onMouseMove(e){
    if(!data.gameOver){
    if(e.offsetX|| e.layerX){
        bfx= e.offsetX==undefined? e.layerX: e.offsetX;
        bfy= e.offsetY==undefined? e.layerY: e.offsetY;
        //console.log(bfx+":"+bfy);
    }
    }
}