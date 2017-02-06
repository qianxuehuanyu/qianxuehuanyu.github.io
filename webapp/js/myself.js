/**
 * Created by Administrator on 2016/11/15 0015.
 */
var mySwiper = new Swiper('.swiper-container1', {
    direction:'vertical',
    onInit: function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);

    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper);

    },
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next'
});
(function () {
    var musicBtn=document.getElementById("musicBtn");
    var musicBtnimg=musicBtn.getElementsByTagName("img")[0];
    var musicBtnaudio=musicBtn.getElementsByTagName("audio")[0];
    var key=1;
    musicBtn.onclick= function () {
        key=(key+1)%2;
        if(key==0){
            musicBtnaudio.pause();
            musicBtnimg.src="img/musicBtnOff.png"
        }else{
            musicBtnaudio.play();
            musicBtnimg.src="img/musicBtn.png"
        }
    };
    var lightOnOff=document.getElementById("lightOnOff");
    var lightOn=document.getElementById("lightOn");
    var addanimate=document.getElementById("addanimate");
    var addanimateimg=addanimate.getElementsByTagName("img");
    lightOnOff.onclick= function () {
        lightOn.style.display="block";
        addanimate.style.display="block";
        addanimate.className="inadddclick";
        setTimeout(function () {
            addanimateimg[0].style.display="block";
            addanimateimg[0].className="addanimatetitle";

        },1500);
        setTimeout(function () {
            addanimateimg[1].style.display="block";
            addanimateimg[1].className="addanimatetitle";
            addanimateimg[2].style.display="block";
            addanimateimg[2].className="addanimatetitle";
        },4000)

    };
    //
    var prev1=document.getElementById("prev1");
    var prev2=document.getElementById("prev2");
    prev1.style.transform="rotate(180deg)";
    prev2.style.transform="rotate(180deg)";
    var swiper_button_prev=document.getElementsByClassName("swiper-button-prev")[0];
    prev1.onclick= function () {
        swiper_button_prev.click();
    };
    prev2.onclick= function () {
        swiper_button_prev.click();
    };
    var inhline=document.getElementById("inhline");
    var inhlinediv=inhline.getElementsByTagName("div");
    var inhlinespan=inhline.getElementsByTagName("span");
    var inhlineimg=inhline.getElementsByTagName("img");

    //console.log(inhline,inhlinediv);
    for(var i=0;i<inhlinediv.length;i++){
        //console.log(inhlinediv[i]);
        inhlinediv[i].style.transition="all 1s";
        inhlinediv[i].value=i;
        inhlinediv[i].show=false;
        inhlineimg[i].style.height=window.innerWidth*588/320+"px";
        inhlinediv[i].onclick= function () {
            var inv=this.value;
            if(!this.show){
                this.show=!this.show;
                inhlinespan[inv].style.height=inhlineimg[inv].style.height;
            }else {
                this.show=!this.show;
                inhlinespan[inv].style.height="0px";
            }
        };
    }



})();