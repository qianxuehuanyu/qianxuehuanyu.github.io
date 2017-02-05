/**
 * Created by Administrator on 2016/10/13 0013.
 */
var fruitObj=function(){
    this.alive=[];//bool
    this.orange=new Image();
    this.blue=new Image();
    this.x=[];
    this.y=[];
    this.l=[];
    this.spd1=[];
    this.spd2=[];
    this.fruitType=[];
    this.aneNum=[];
};
fruitObj.prototype.num=36;
fruitObj.prototype.init= function () {
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.x[i]=0;
        this.y[i]=0;
        this.aneNum[i]=0;
        this.spd1[i]=0.005+Math.random()*0.01;
        this.spd2[i]=0.01+Math.random()*0.06;
        this.fruitType[i]="";
    }
    this.orange.src="src/fruit.png";
    this.blue.src="src/blue.png";
};
fruitObj.prototype.draw= function () {
    for(var i=0;i<this.num;i++){
        //定位，成长，往上飘动
        if(this.alive[i]){
            if(this.fruitType[i]=="blue"){
                var pic=this.blue;
            }else{
                var pic=this.orange;
            }
            if(this.l[i]<=12){
            var id=this.aneNum[i];
            this.x[i]=ane.headx[id];
            this.y[i]=ane.heady[id];
            this.l[i]+=this.spd1[i]*deleteTime;

        }else{
            this.y[i]-=this.spd2[i]*deleteTime;

        }
        ctx2.drawImage(pic,this.x[i]-this.l[i]/2,this.y[i]-this.l[i]/2,this.l[i],this.l[i]);
        if(this.y[i]<-10){
            this.alive[i]=false;
        }
    }
    }
};
fruitObj.prototype.born= function (i) {
    this.aneNum[i]=parseInt(Math.random()*ane.num);
    this.l[i]=0;
    this.alive[i]=true;
    var rand=Math.random();
    if(rand<0.3){
        this.fruitType[i]="blue";
    }else{
        this.fruitType[i]="orange";
    }
};
fruitObj.prototype.dead= function (i) {
    this.alive[i]=false;
};

function  fruitMoitor(){
    var num=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            num++;
        }
    }
    if(num<20){
        //加入果实
        sendFruit();
        return;
    }
}
function  sendFruit(){
    for(var i=0;i<fruit.num;i++) {
        if (!fruit.alive[i]) {
        fruit.born(i);
        return;
        }
    }
}

//
//fruitObj.prototype.update= function () {
//    var num=0;
//    for(var i=0;i<this.num;i++){
//        if(this.alive[i]){
//            num++;
//        }
//    }
//};