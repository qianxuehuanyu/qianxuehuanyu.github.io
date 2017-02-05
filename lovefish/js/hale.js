/**
 * Created by Administrator on 2016/10/16 0016.
 */
//大鱼喂小鱼特效，类似于wave
var haleObj= function () {
    this.x=[];
    this.y=[];
    this.alive=[];
    this.r=[];
    //位置，是否可以使用，半径，颜色
};
haleObj.prototype.num=10;
haleObj.prototype.init= function () {
    for(var i=0;i<this.num;i++){
        this.x[i]=0;
        this.y[i]=0;
        this.alive[i]=false;
        this.r[i]=0;
    }
};
haleObj.prototype.draw= function () {
    ctx1.save();
    ctx1.lineWidth=2;
    ctx1.shadowBlur=10;
    ctx1.shadowColor="rgba(255,138,86,1)";
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            //绘制
            this.r[i]+=deleteTime*0.02;
            if(this.r[i]>100){
                this.alive[i]=false;
                break;
            }
            var alpha=1-this.r[i]/100;
            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
            ctx1.closePath();
            ctx1.strokeStyle="rgba(255,138,86,"+alpha+")";
            ctx1.stroke();
            //console.log("draw");
        }
    }
    ctx1.restore();
};
haleObj.prototype.born= function (x,y) {
    for(var i=0;i<this.num;i++){
        if(!this.alive[i]){
            //完成选择
            this.alive[i]=true;
            this.r[i]=5;
            this.x[i]=x;
            this.y[i]=y;
            //console.log("born");
            //跳出循环
            return;
        }
    }
};

