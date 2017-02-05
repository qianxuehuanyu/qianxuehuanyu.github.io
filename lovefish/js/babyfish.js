/**
 * Created by Administrator on 2016/10/14 0014.
 */
//绘制小鱼
var babyObj= function () {
    this.x;
    this.y;
    this.angle;
    //this.babyEye=new Image();
    //this.babyBody=new Image();
    //this.babyTail=new Image();

    //小鱼动画控制：时间+图片计数
    this.babayTailTimer=0;
    this.babyTailCount=0;

    this.babyEyeTimer=0;
    this.babyEyeCount=0;
    this.babyEyeInterval=1000;

    this.babyBodyTimer=0;
    this.babyBodyCount=0;
};
babyObj.prototype.init= function () {
    this.x=canWidth/2-50;
    this.y=canHeight/2+50;
    //this.babyEye.src="src/babyEye0.png";
    //this.babyBody.src="src/babyFade0.png";
    //this.babyTail.src="src/babyFade0.png";
    this.angle=0;
};
babyObj.prototype.draw= function () {
//ctx1画布上
//渐进移动，大鱼趋向，使用封装好的函数lerpDistance
    this.x =lerpDistance(bigFish.x,this.x,0.99);
    this.y =lerpDistance(bigFish.y,this.y,0.99);
    //正切Math.atan2(y,x)
    var deleteY=bigFish.y-this.y;
    var deleteX=bigFish.x-this.x;
    var beta=Math.atan2(deleteY,deleteX)+Math.PI;
    //lerpangle角度趋向与鼠标的角度
    this.angle=lerpAngle(beta,this.angle,0.5);
    //小鱼 tail count尾巴图片轮播
    this.babayTailTimer+=deleteTime;
    if(this.babayTailTimer>50){
        this.babyTailCount=(this.babyTailCount+1)%8;
        this.babayTailTimer%=50;
    }
    //小鱼眼睛图片轮播
    this.babyEyeTimer+=deleteTime;
    if(this.babyEyeTimer>this.babyEyeInterval){
        this.babyEyeCount=(this.babyEyeCount+1)%2;
        this.babyEyeTimer%=this.babyEyeInterval;
        if(this.babyEyeCount==0){
            this.babyEyeInterval=Math.random()*3000+1000;
        }else{
            this.babyEyeInterval=200;
        }
    }
    //小鱼身体变化线性非循环
    this.babyBodyTimer+=deleteTime;
    if(this.babyBodyTimer>300){
        this.babyBodyCount=(this.babyBodyCount+1);
        this.babyBodyTimer%=300;
        if(this.babyBodyCount>19){
            this.babyBodyCount=19;
            //game over
            data.gameOver=true;
        }
    }

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    //画鱼
    //尾巴变化
    var babyTailCount=this.babyTailCount;//临时变量
    ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width/2+24,-babyTail[babyTailCount].height/2);
    //身体变化
    var babyBodyCount=this.babyBodyCount;
    ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width/2,-babyBody[babyBodyCount].height/2);
    //眼睛变化
    var babyEyeCount=this.babyEyeCount;
    ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width/2,-babyEye[babyEyeCount].height/2);


    //ctx1.drawImage(this.babyTail,-this.babyTail.width/2,-this.babyTail.height/2);
    //ctx1.drawImage(this.babyBody,-this.babyBody.width/2,-this.babyBody.height/2);
    // ctx1.drawImage(this.babyEye,-this.babyEye.width/2,-this.babyEye.height/2);

    ctx1.restore();
};