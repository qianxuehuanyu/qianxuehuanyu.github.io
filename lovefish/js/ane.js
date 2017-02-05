/**
 * Created by Administrator on 2016/10/13 0013.
 */
var aneObj=function(){

    this.rootx=[];
    this.headx=[];
    this.heady=[];
    //起始点(原始高)，控制点（原始x，高度移动），结束点（sin，x来回移动，）
    //角度
    this.alpha=0;
    //振幅
    this.amp=[];

};
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
    var h=can1.height;
    for(var i=0;i<this.num;i++){
        this.rootx[i]=i*16+Math.random()*7;
        this.headx[i]=this.rootx[i];
        this.heady[i]=h-300+Math.random()*50;
        this.amp[i]=Math.random()*50+30;
    }
};
aneObj.prototype.draw=function(){
    this.alpha+=deleteTime*0.001;
    var l=Math.sin(this.alpha);//[-1,1]
    ctx2.save();//控制样式save()+restore()
    ctx2.globalAlpha=0.55;
    ctx2.strokeStyle="#4C1671";
    ctx2.lineWidth=16;
    ctx2.lineCap="round";
    for(var i=0;i<this.num;i++){
        //beginPath,moveTo,lineTo,stroke,strokestyle,lineWidth,lineCap(特殊样式),globalAlpha(透明度)
        //底部往上画
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canHeight);
        this.headx[i]=this.rootx[i]+l*this.amp[i]
        ctx2.quadraticCurveTo(this.rootx[i],canHeight-150,this.headx[i],this.heady[i]);
        ctx2.stroke();
    }
    ctx2.restore();
};