/**
 * Created by Administrator on 2016/10/16 0016.
 */
//大鱼吃果实特效：
//物体池->检测是否有闲置物体->半径逐渐增大，颜色逐渐减弱，反比关系->绘图

var waveObj= function () {
    this.x=[];
    this.y=[];
    this.alive=[];
    this.r=[];
    this.color=[];
    //位置，是否可以使用，半径，颜色
};
waveObj.prototype.num=10;
waveObj.prototype.init= function () {
  for(var i=0;i<this.num;i++){
      this.alive[i]=false;
      this.r[i]=0;
      this.color[i]=1;
  }
};
waveObj.prototype.draw= function () {
    ctx1.save();
    ctx1.lineWidth=2;
    ctx1.shadowBlur=5;
    ctx1.shadowColor="white";
  for(var i=0;i<this.num;i++){
      if(this.alive[i]){
          //绘制
          this.r[i]+=deleteTime*0.03;
          if(this.r[i]>50){
              this.alive[i]=false;
              break;
          }
          var alpha=1-this.r[i]/50;
          ctx1.beginPath();
          ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
          ctx1.closePath();
          if(this.color[i]==1){
              ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
          }else{
              ctx1.strokeStyle="rgba(3,198,253,"+alpha+")";
          }
          ctx1.stroke();
          //console.log("draw");
      }
  }
    ctx1.restore();
};
waveObj.prototype.born= function (x,y) {
    for(var i=0;i<this.num;i++){
        if(!this.alive[i]){
            //完成选择
            this.alive[i]=true;
            this.r[i]=10;
            this.x[i]=x;
            this.y[i]=y;
            if(data.double==2){
                this.color[i]=2;
            }else{
                this.color[i]=1;
            }

            //console.log("born");
            //跳出循环
            return;
        }
    }
};

