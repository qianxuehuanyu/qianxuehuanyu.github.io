/**
 * Created by Administrator on 2016/10/15 0015.
 */
var dataObj= function () {
    this.fruitNum=0;
    this.double=1;
    this.score=0;
    this.gameOver=false;
    this.alpha=0;
};
dataObj.prototype.init= function () {
    this.fruitNum=0;
    this.double=1;
    this.score=0;
    this.gameOver=false;
    this.alpha=0;
};
dataObj.prototype.reset= function () {
    this.fruitNum=0;
    this.double=1;
};
dataObj.prototype.draw= function () {
    var w=can1.width;
    var h=can1.height;
    ctx1.save();
    ctx1.fillStyle="white";
    ctx1.shadowBlur=15;
    ctx1.shadowColor="#eee";
    ctx1.fillText("num:"+this.fruitNum,w/2,h-70);
    ctx1.fillText("double:"+this.double,w/2,h-50);
    ctx1.fillText("scroe:"+this.score,w/2,h-30);
    if(data.gameOver){
        this.alpha+=deleteTime*0.0005;
        if(this.alpha>1){
            this.alpha=1;
            overshow=true;
        }
        ctx1.font="40px Verdana";
        ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
        ctx1.fillText("GAME"+"\n"+"OVER",w/2,h/2);
    }
    ctx1.restore();
};
dataObj.prototype.addScore= function () {
    this.score+=this.fruitNum*100*this.double;
    this.fruitNum=0;
    this.double=1;
};