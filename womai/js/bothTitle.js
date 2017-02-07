/**
 * Created by Administrator on 2016/11/3 0003.
 */
window.womai=window.womai||{};

(function () {
    function floorTitle(inid){
        var inul=document.getElementById(inid+"_title");
        var inulli=inul.getElementsByTagName("li");
        var inli_one=document.getElementById(inid+"_li1");
        var inli_two=document.getElementById(inid+"_li2");
        var inli=[inli_one,inli_two];
        for(var i=0;i<inulli.length;i++){
            inulli[i].value=i;
        }
        for(var i=0;i<inulli.length;i++){
            inulli[i].onmouseover= function () {
                for(var j=0;j<inulli.length;j++){
                    if(j==this.value){
                        inulli[j].className="cur";
                        inli[j].style.display="block";
                    }else{
                        inulli[j].className="";
                        inli[j].style.display="none";
                    }
                }

            }
        }
    }
    womai.floorTitle=floorTitle;

    function listTitle(){
        var inTitle=document.getElementById("cw_title").getElementsByTagName("li");
        var inUl=document.getElementById("cont_wrap");
        var inLiList=inUl.getElementsByClassName("cont");
        for(var i=0;i<inTitle.length;i++){
            inTitle[i].value=i;
        }
        for(var i=0;i<inTitle.length;i++){
            inTitle[i].onmouseover= function () {
              for(var j=0;j<inTitle.length;j++){
                  if(j==this.value){
                      inTitle[j].className="intitle";
                  }else {
                      inTitle[j].className="outtitle";
                  }
              }

                for(var o=0;o<inLiList.length;o++){
                    if(o==this.value){
                        inLiList[o].style.display="block";
                    }else{
                        inLiList[o].style.display="none";
                    }
                }
            };
        }
    }
    listTitle();
})();