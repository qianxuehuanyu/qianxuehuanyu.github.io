/**
 * Created by Administrator on 2016/10/13 0013.
 */
var bfObj= function () {
    //大鱼对象
    this.x;
    this.y;
    this.angle;
    //this.bfEye=new Image();
    //this.bfBody=new Image();
    //this.bfTail=new Image();
    
    
};
bfObj.prototype.init= function () {
    //大鱼对象初始化
    this.x=canWidth/2;
    this.y=canHeight/2;
    //this.bfEye.src="src/bigEye0.png";
    //this.bfBody.src="src/bigSwim0.png";
    //this.bfTail.src="src/bigTail0.png";
    this.angle=0;
    //初始化 大鱼动画控制：时间+图片计数
    this.bfTailTimer=0;
    this.bfTailCount=0;
    this.bfEyeTimer=0;
    this.bfEyeCount=0;
    this.bfEyeInterval=1000;
    this.bfBodyCount=0;

};
bfObj.prototype.draw=function(){
//大鱼进行每一帧的绘制
//渐进移动，鼠标趋向，使用封装好的函数lerpDistance
    this.x =lerpDistance(bfx,this.x,0.99);
    this.y =lerpDistance(bfy,this.y,0.99);
    // console.log(this.x,this.y);

    //delatetime每一帧都进行角度变换
    //正切Math.atan2(y,x)
    var deleteY=bfy-this.y;
    var deleteX=bfx-this.x;
    var beta=Math.atan2(deleteY,deleteX)+Math.PI;
    //lerpangle角度趋向与鼠标的角度
    this.angle=lerpAngle(beta,this.angle,0.5);

    ////大鱼 tail count尾巴图片轮播
    this.bfTailTimer+=deleteTime;
    if(this.bfTailTimer>50){
        this.bfTailCount=(this.bfTailCount+1)%8;
        this.bfTailTimer%=50;
    }
    //大鱼眼睛图片轮播
    this.bfEyeTimer+=deleteTime;
    if(this.bfEyeTimer>this.bfEyeInterval){
        this.bfEyeCount=(this.bfEyeCount+1)%2;
        this.bfEyeTimer%=this.bfEyeInterval;
        if(this.bfEyeCount==0){
            this.bfEyeInterval=Math.random()*1500+2000;
        }else{
            this.bfEyeInterval=300;
        }
    }
    

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);

    //尾巴变化
    var bfTailCount=this.bfTailCount;//临时变量
    ctx1.drawImage(bfTail[bfTailCount],-bfTail[bfTailCount].width/2+30,-bfTail[bfTailCount].height/2);
    //身体变化:吃到蓝色果实变为蓝色，吃到橙色变为橙色
    var bfBodyCount=this.bfBodyCount;
    if(data.double==1){
        ctx1.drawImage(bfBodyOrange[bfBodyCount],-bfBodyOrange[bfBodyCount].width/2,-bfBodyOrange[bfBodyCount].height/2);
    }else{
        ctx1.drawImage(bfBodyBlue[bfBodyCount],-bfBodyBlue[bfBodyCount].width/2,-bfBodyBlue[bfBodyCount].height/2);
        //console.log("blue"+bfBodyCount);
    }

    //眼睛变化
    var bfEyeCount=this.bfEyeCount;
    ctx1.drawImage(bfEye[bfEyeCount],-bfEye[bfEyeCount].width/2,-bfEye[bfEyeCount].height/2);
    
    //ctx1.drawImage(this.bfTail,-this.bfTail.width/2+30,-this.bfTail.height/2);
    //ctx1.drawImage(this.bfBody,-this.bfBody.width/2,-this.bfBody.height/2);
    //ctx1.drawImage(this.bfEye,-this.bfEye.width/2,-this.bfEye.height/2);
    ctx1.restore();
};