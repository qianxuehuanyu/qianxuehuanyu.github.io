/**
 * Created by 66436 on 2017/9/11.
 */

//Create the renderer


var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;
var renderer= autoDetectRenderer(
    256, 256,
    {antialias: false, transparent: false, resolution: 1}
);
var _w,_h;
var videoA1Mp4=document.getElementById("videoA1Mp4");
videoA1Mp4.addEventListener('loadedmetadata', function () {
    _w=videoA1Mp4.videoWidth;
    _h=videoA1Mp4.videoHeight;

});
//renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);
//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

var stage = new Container();

loader
    .add(["images/a1.mp4"])
    .add(["images/background.png","images/demoforverri.png","images/moon.png","images/earth.png",
        "images/timg.jpg","images/hander.png","images/touchtop.png","images/linght.png"])
    .add(["images/romate_change/10010.png",
        "images/romate_change/10011.png",
        "images/romate_change/10012.png",
        "images/romate_change/10013.png",
        "images/romate_change/10014.png",
        "images/romate_change/10015.png",
        "images/romate_change/10016.png",
        "images/romate_change/10017.png",
        "images/romate_change/10018.png",
        "images/romate_change/10019.png",
        "images/romate_change/10020.png",
        "images/romate_change/10021.png",
        "images/romate_change/10022.png",
        "images/romate_change/10023.png",
        "images/romate_change/10024.png",
        "images/romate_change/10025.png",
        "images/romate_change/10026.png",
        "images/romate_change/10027.png",
        "images/romate_change/10028.png",
        "images/romate_change/10029.png",
        "images/romate_change/10030.png",
        "images/romate_change/10031.png",
        "images/romate_change/10032.png",
        "images/romate_change/10033.png",
        "images/romate_change/10034.png",
        "images/romate_change/10035.png",
        "images/romate_change/10036.png",
        "images/romate_change/10037.png",
        "images/romate_change/10038.png",
        "images/romate_change/10039.png",
        "images/romate_change/10040.png",
        "images/romate_change/10041.png",
        "images/romate_change/10042.png",
        "images/romate_change/10043.png",
        "images/romate_change/10044.png",
        "images/romate_change/10045.png",
        "images/romate_change/10046.png",
        "images/romate_change/10047.png",
        "images/romate_change/10048.png",
        "images/romate_change/10049.png",
        "images/romate_change/10050.png",
        "images/romate_change/10051.png",
        "images/romate_change/10052.png",
        "images/romate_change/10053.png",
        "images/romate_change/10054.png",
        "images/romate_change/10055.png",
        "images/romate_change/10056.png",
        "images/romate_change/10057.png",
        "images/romate_change/10058.png",
        "images/romate_change/10059.png",
        "images/romate_change/10060.png",
        "images/romate_change/10061.png",
        "images/romate_change/10062.png",
        "images/romate_change/10063.png",
        "images/romate_change/10064.png",
        "images/romate_change/10065.png",
        "images/romate_change/10066.png",
        "images/romate_change/10067.png",
        "images/romate_change/10068.png",
        "images/romate_change/10069.png",
        "images/romate_change/10070.png"])
    .add(["images/break_back/10050.png",
        "images/break_back/10051.png",
        "images/break_back/10052.png",
        "images/break_back/10053.png",
        "images/break_back/10054.png","images/break_back/10055.png",
"images/break_back/10056.png","images/break_back/10057.png","images/break_back/10058.png","images/break_back/10059.png",
"images/break_back/10060.png","images/break_back/10061.png","images/break_back/10062.png","images/break_back/10063.png",
"images/break_back/10064.png","images/break_back/10065.png","images/break_back/10066.png","images/break_back/10067.png",
"images/break_back/10068.png","images/break_back/10069.png","images/break_back/10070.png","images/break_back/10071.png",
"images/break_back/10072.png","images/break_back/10073.png","images/break_back/10074.png","images/break_back/10075.png",
"images/break_back/10076.png","images/break_back/10077.png","images/break_back/10078.png","images/break_back/10080.png",
"images/break_back/10081.png","images/break_back/10082.png","images/break_back/10083.png","images/break_back/10084.png",
"images/break_back/10085.png","images/break_back/10086.png","images/break_back/10087.png","images/break_back/10088.png",
"images/break_back/10089.png","images/break_back/10090.png","images/break_back/10091.png"])
    .add(["images/romate_back/10175.png",
        "images/romate_back/10176.png",
        "images/romate_back/10177.png",
        "images/romate_back/10178.png",
        "images/romate_back/10179.png",
        "images/romate_back/10180.png",
        "images/romate_back/10181.png",
        "images/romate_back/10182.png",
        "images/romate_back/10183.png",
        "images/romate_back/10184.png",
        "images/romate_back/10185.png",
        "images/romate_back/10186.png",
        "images/romate_back/10187.png",
        "images/romate_back/10188.png",
        "images/romate_back/10189.png",
        "images/romate_back/10190.png",
        "images/romate_back/10191.png",
        "images/romate_back/10192.png",
        "images/romate_back/10193.png",
        "images/romate_back/10194.png",
        "images/romate_back/10195.png",
        "images/romate_back/10196.png",
        "images/romate_back/10197.png",
        "images/romate_back/10198.png",
        "images/romate_back/10199.png",
        "images/romate_back/10200.png"
    ])
    .load(setup);
var headerTitle,background,handerIcon,touchtop,moon,earth,linght;
var kapis0,id;
var anySprite11,anySprite22,anySprite33;
var videoMP4,videoText,timeMS;
timeMS=0;
var yuebingImage,yuebingText1,yuebingText2,yuebingText3,yuebingText4,yuebingText5;

//动画帧 图片集

function setup() {
    headerTitle = new Sprite(resources["images/demoforverri.png"].texture);
    headerTitle.scale.x = 2.5;
    headerTitle.scale.y = 2.5;
    headerTitle.x = window.innerWidth / 2 - headerTitle.width / 2;
    headerTitle.y = window.innerHeight / 5;

    background = new Sprite(resources["images/background.png"].texture);

    handerIcon = new Sprite(resources["images/hander.png"].texture);
    handerIcon.x = window.innerWidth / 2 - handerIcon.width / 2;
    handerIcon.y = window.innerHeight - 120;
    handerIcon.scale.x = 2.5;
    handerIcon.scale.y = 2.5;

    touchtop = new Sprite(resources["images/touchtop.png"].texture);
    touchtop.scale.x = 3;
    touchtop.scale.y = 8;
    touchtop.x = window.innerWidth / 2 - touchtop.width / 2 - 10;
    touchtop.y = window.innerHeight - 400;

    stage.addChild(background);
    stage.addChild(headerTitle);
    stage.addChild(handerIcon);
    stage.addChild(touchtop);
    gameLoop();

    linght= new Sprite(resources["images/linght.png"].texture);
    linght.scale.x=4;
    linght.scale.y=4;
    linght.y=-linght.height;
    linght.x=10;

    moon= new Sprite(resources["images/moon.png"].texture);
    moon.y=window.innerHeight;
    moon.x=0;
    moon.scale.y=window.innerHeight/moon.height;
    moon.scale.x=window.innerHeight/moon.height;

    earth= new Sprite(resources["images/earth.png"].texture);
    earth.x=window.innerWidth-earth.width-5;
    earth.y=window.innerHeight*1.5;

    kapis0=new Sprite(resources["images/romate_change/10010.png"].texture);
    kapis0.scale.x=1.5;
    kapis0.scale.y=1.5;
    kapis0.x=-700;
    kapis0.y=window.innerHeight-kapis0.height;
    stage.addChild(moon);
    stage.addChild(kapis0);
    stage.addChild(earth);
    stage.addChild(linght);


    id=loader.resources["images/romate_change/10010.png","images/romate_change/10011.png",
        "images/romate_change/10012.png","images/romate_change/10013.png","images/romate_change/10014.png","images/romate_change/10015.png",
        "images/romate_change/10016.png","images/romate_change/10017.png","images/romate_change/10018.png","images/romate_change/10019.png",
        "images/romate_change/10020.png","images/romate_change/10021.png","images/romate_change/10022.png","images/romate_change/10023.png",
        "images/romate_change/10024.png","images/romate_change/10025.png","images/romate_change/10026.png","images/romate_change/10027.png",
        "images/romate_change/10028.png","images/romate_change/10029.png","images/romate_change/10030.png","images/romate_change/10031.png",
        "images/romate_change/10032.png","images/romate_change/10033.png","images/romate_change/10034.png","images/romate_change/10035.png",
        "images/romate_change/10036.png","images/romate_change/10037.png","images/romate_change/10038.png","images/romate_change/10039.png",
        "images/romate_change/10040.png","images/romate_change/10041.png","images/romate_change/10042.png","images/romate_change/10043.png",
        "images/romate_change/10044.png","images/romate_change/10045.png","images/romate_change/10046.png","images/romate_change/10047.png",
        "images/romate_change/10048.png","images/romate_change/10049.png","images/romate_change/10050.png","images/romate_change/10051.png",
        "images/romate_change/10052.png","images/romate_change/10053.png","images/romate_change/10054.png","images/romate_change/10055.png",
        "images/romate_change/10056.png","images/romate_change/10057.png","images/romate_change/10058.png","images/romate_change/10059.png",
        "images/romate_change/10060.png","images/romate_change/10061.png","images/romate_change/10062.png","images/romate_change/10063.png",
        "images/romate_change/10064.png","images/romate_change/10065.png","images/romate_change/10066.png","images/romate_change/10067.png",
        "images/romate_change/10068.png","images/romate_change/10069.png", "images/romate_change/10070.png",

        "images/break_back/10050.png","images/break_back/10051.png","images/break_back/10052.png",
        "images/break_back/10053.png","images/break_back/10054.png","images/break_back/10055.png",
        "images/break_back/10056.png","images/break_back/10057.png","images/break_back/10058.png",
        "images/break_back/10059.png","images/break_back/10060.png","images/break_back/10061.png",
        "images/break_back/10062.png","images/break_back/10063.png","images/break_back/10064.png",
        "images/break_back/10065.png","images/break_back/10066.png","images/break_back/10067.png",
        "images/break_back/10068.png","images/break_back/10069.png","images/break_back/10070.png",
        "images/break_back/10071.png","images/break_back/10072.png","images/break_back/10073.png",
        "images/break_back/10074.png","images/break_back/10075.png","images/break_back/10076.png",
        "images/break_back/10077.png","images/break_back/10078.png","images/break_back/10079.png",
        "images/break_back/10080.png","images/break_back/10081.png","images/break_back/10082.png",
        "images/break_back/10083.png","images/break_back/10084.png","images/break_back/10085.png",
        "images/break_back/10086.png","images/break_back/10087.png","images/break_back/10088.png",
        "images/break_back/10089.png","images/break_back/10090.png","images/break_back/10091.png",

        "images/romate_back/10175.png","images/romate_back/10176.png",
        "images/romate_back/10177.png","images/romate_back/10178.png",
        "images/romate_back/10179.png","images/romate_back/10180.png",
        "images/romate_back/10181.png","images/romate_back/10182.png",
        "images/romate_back/10183.png","images/romate_back/10184.png",
        "images/romate_back/10185.png","images/romate_back/10186.png",
        "images/romate_back/10187.png","images/romate_back/10188.png",
        "images/romate_back/10189.png","images/romate_back/10190.png",
        "images/romate_back/10191.png","images/romate_back/10192.png",
        "images/romate_back/10193.png","images/romate_back/10194.png",
        "images/romate_back/10195.png","images/romate_back/10196.png",
        "images/romate_back/10197.png","images/romate_back/10198.png",
        "images/romate_back/10199.png","images/romate_back/10200.png"
        ].textures;

    var u= new SpriteUtilities(PIXI);
    var kapis11= u.frameSeries(10,70, "images/romate_change/100", ".png");
    var kapis22= u.frameSeries(50,91, "images/break_back/100", ".png");
    var kapis33= u.frameSeries(175,200, "images/romate_back/10", ".png");
    anySprite11 = u.sprite(kapis11);
    anySprite22 = u.sprite(kapis22);
    anySprite33 = u.sprite(kapis33);
    anySprite11.scale.x=1.5;
    anySprite11.scale.y=1.5;
    anySprite11.x=-200;
    anySprite11.y=window.innerHeight-anySprite11.height;
    anySprite22.scale.x=1.5;
    anySprite22.scale.y=1.5;
    anySprite22.x=-400;
    anySprite22.y=window.innerHeight-anySprite22.height;
    anySprite33.scale.x=1.5;
    anySprite33.scale.y=1.5;
    anySprite33.x=-400;
    anySprite33.y=window.innerHeight-anySprite33.height;

    var texture = PIXI.Texture.fromVideo("images/a1.mp4");
    videoMP4 = new PIXI.Sprite(texture);
    videoMP4.x=window.innerWidth;
    videoMP4.y=window.innerHeight/10;
    videoMP4.alpha=0;

    videoText = u.text("跳过视频", "38px Futura", "white", window.innerWidth-10, window.innerHeight-100);
    videoText.alpha=0;
    stage.addChild(videoText);

    yuebingText1 = u.text("心中升明月，天涯共此时", "46px Futura", "white", window.innerWidth, window.innerHeight);
    yuebingText2 = u.text("但愿人长久，千里共婵娟", "46px Futura", "white", window.innerWidth, window.innerHeight);
    yuebingText3 = u.text("中秋节到了，VERRI祝您", "46px Futura", "white", window.innerWidth, window.innerHeight);
    yuebingText4 = u.text("中秋快乐！", "46px Futura", "white", window.innerWidth, window.innerHeight);
    yuebingText5 = u.text("购新款男装，赠豪华月饼", "32px Futura", "white", window.innerWidth, window.innerHeight);
    yuebingText1.x=window.innerWidth/2-yuebingText1.width/2;
    yuebingText1.y=-100-4*yuebingText1.height;
    yuebingText2.x=window.innerWidth/2-yuebingText2.width/2;
    yuebingText2.y=-100-3*yuebingText2.height+20;
    yuebingText3.x=window.innerWidth/2-yuebingText3.width/2+2;
    yuebingText3.y=-100-2*yuebingText3.height+40;
    yuebingText4.x=window.innerWidth/2-yuebingText4.width/2;
    yuebingText4.y=-100-1*yuebingText4.height+60;

    yuebingText5.x=window.innerWidth/2-yuebingText5.width/2;
    yuebingText5.y=window.innerHeight/2+50;
    yuebingText5.alpha=0;

    yuebingImage=new Sprite(resources["images/timg.jpg"].texture);
    yuebingImage.scale.x=0.6;
    yuebingImage.scale.y=0.6;
    yuebingImage.x=window.innerWidth/2-yuebingImage.width/2;
    yuebingImage.y=window.innerHeight/2+yuebingText5.height+60;
    yuebingImage.alpha=0;

    stage.addChild(yuebingText1);
    stage.addChild(yuebingText2);
    stage.addChild(yuebingText3);
    stage.addChild(yuebingText4);
    stage.addChild(yuebingText5);
    stage.addChild(yuebingImage);
}


//点击事件
var click1=100;var click2=200;var click3=300;var click4=400;var click5=500;var click6=600;
var t = new Tink(PIXI, renderer.view);
var pointer= t.makePointer();
pointer.press = function () {
    if(pointer.hitTestSprite(handerIcon)){
        click1=0;
    }
    if(pointer.hitTestSprite(touchtop)){
        click1=0;
    }
    if(pointer.hitTestSprite(kapis0)){
        if(click2==50){
            click2=0;
        }
    }
    if(pointer.hitTestSprite(anySprite22)){
        if(click3==100){
            click3=0;
        }
    }
    if(pointer.hitTestSprite(videoText)){
        if(click6==600){
            click6=0;
        }
    }
};
pointer.release = function () {
};
pointer.tap = function () {
};


function gameLoop() {
    //Loop this function at 60 frames per second
    if(click1==0){
        touchtop.alpha =0;
        touchtop.width=0;
        handerIcon.alpha=0;
        handerIcon.width=0;
        playInto();
    }else {
        requestAnimationFrame(gameLoop);
    }
    //Move the cat 1 pixel to the right each frame
    touchtop.y-=11;
    handerIcon.y-=10;
    if(handerIcon.y<window.innerHeight/2+180){
        handerIcon.y=window.innerHeight-10;
    }
    if(touchtop.y<window.innerHeight/2){
        touchtop.y=window.innerHeight-120;
    }
    //Render the stage to see the animation
    t.update();
    renderer.render(stage);
}

function playInto() {
    //All the game logic goes here
    t.update();
    headerTitle.y-=5;
    moon.y-=15;
    if(moon.y<5){
        moon.y=0;
    }
    linght.y+=10;
    if(linght.y>30){
        linght.y=30
    }
    earth.y-=15;
    if(earth.y<window.innerHeight/2-earth.height/2){
        earth.y=window.innerHeight/2-earth.height/2;
        kapis0.x+=50;
        if(kapis0.x>-200){
            kapis0.x=-200;
            if(click2!=0){
                click2=50;
            }
        }
    }

    if(click2==0){
        kapis0.alpha=0;
        kapis0.width=0;
        stage.addChild(anySprite11);
        anySprite11.animationSpeed=0.5;
        anySprite11.loop=false;
        anySprite11.play();
        var anySprite111=anySprite11.texture.textureCacheIds[0].split('romate_change/')[1].split(".png")[0]||0;
        if(anySprite111>10010){
            if(click3==300){
                click3=200;
            }
        }
        if(anySprite111==10070){
            if(click3==200){
                click3=100;
                anySprite11.alpha=0;
                anySprite11.scale.x=0;
                stage.addChild(anySprite22);
            }
        }
    }

    if(click3==0){
        anySprite22.animationSpeed=0.4;
        anySprite22.loop=false;
        anySprite22.play();
        var anySprite222=anySprite22.texture==undefined?0:anySprite22.texture.textureCacheIds[0].split('break_back/')[1].split(".png")[0]||0;
        if(anySprite222>10050){
            if(click4==400){
                click4=200;
            }
        }
        if(anySprite222==10091){
            if(click4==200){
                anySprite22.alpha=0;
                anySprite22.scale.x=0;
                click4=0;
                stage.addChild(anySprite33);
            }
        }
    }
    if(click4==0){
        anySprite33.animationSpeed=0.2;
        anySprite33.loop=false;
        anySprite33.play();
        var anySprite333=anySprite33.texture==undefined?0:anySprite33.texture.textureCacheIds[0].split('romate_back/')[1].split(".png")[0]||0;
        if(anySprite333>10175){
            if(click5==500){
                click5=250
            }
        }
        if(anySprite333==10200){
            if (click5 == 250) {

                anySprite33.alpha=0;
                anySprite33.scale.x=0;
                click5 = 0
            }
        }
    }

    if(click5==0){
        videoMP4.alpha=0;
        videoA1Mp4.style.display='block';
        videoA1Mp4.addEventListener('ended', function () {
            timeMS=1;
        });
        videoPlay();
        if(timeMS==1){
            click6=0;
        }
    }
    if(click6==0){
        videoMP4.scale.x=0;
        videoA1Mp4.style.display='none';

        videoText.alpha=0;
        videoText.scale.x=0;

        yuebingImage.alpha+=0.05;
        yuebingText5.alpha+=0.05;



        if(yuebingText1.y>140){

        }else{
            yuebingText1.y+=10;
            yuebingText2.y+=10;
            yuebingText3.y+=10;
            yuebingText4.y+=10;
        }
    }
    requestAnimationFrame(playInto);
    renderer.render(stage);
}

function videoPlay(){
    videoMP4.x=0;
    videoMP4.y=window.innerHeight/10;
    videoMP4.alpha+=0.1;

    videoText.x=window.innerWidth/2-videoText.width/2;
    videoText.y=window.innerHeight/5+videoA1Mp4.style.height+50;
    videoText.alpha+=0.1;

    //if(videoMP4.x<window.innerWidth/2-videoMP4.width/2){
    //    videoMP4.x=window.innerWidth/2-videoMP4.width/2;
    //}
    //if(videoText.x<window.innerWidth/2-videoText.width/2){
    //    videoText.x=window.innerWidth/2-videoText.width/2;
    //}
}

function end() {
    //All the code that should run at the end of the game
}