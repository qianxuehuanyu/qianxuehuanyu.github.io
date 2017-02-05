/**
 * Created by Administrator on 2016/10/13 0013.
 */
//碰撞检测，如果大鱼和果实的距离足够近就判断为吃掉
function bfFruitsCollision() {
    if (!data.gameOver) {
    for (var i = 0; i < fruit.num; i++) {
        if (fruit.alive[i]) {
            //calLength2取横纵坐标差的平方和
            var l = calLength2(fruit.x[i], fruit.y[i], bigFish.x, bigFish.y);
            if (l < 350) {
                //console.log(l);
                //果实被吃掉、执行吃掉果实的方法
                fruit.dead(i);
                //分数变化,大鱼吃到的果实数量+1
                data.fruitNum++;
                bigFish.bfBodyCount++;
                if (bigFish.bfBodyCount > 7) {
                    bigFish.bfBodyCount = 7;
                }
                if (fruit.fruitType[i] == "blue") {
                    data.double = 2;
                }
                //特效出现
                wave.born(fruit.x[i],fruit.y[i]);
            }
        }
    }
}
}
//大鱼小鱼碰撞判断
function bigBabyCollision(){
    if(bigFish.bfBodyCount!=0&&!data.gameOver){
        var l=calLength2(bigFish.x,bigFish.y,babyFish.x,babyFish.y);
        if(l<600){
            //有吃到果实则小鱼复活

                babyFish.babyBodyCount=0;
                //大鱼的果实数量清零
                //data.reset();
                bigFish.bfBodyCount=0;
                //分数score更新
                data.addScore();
                hale.born(babyFish.x,babyFish.y);
            }
        }
}