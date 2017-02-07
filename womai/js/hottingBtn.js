/**
 * Created by Administrator on 2016/11/3 0003.
 */

(function () {
    //hotting========================
    function hotting() {
        var hotting_LR = document.getElementById("hotting_LR");
        var hottingLeftBtn = document.getElementById("hottingLeftBtn");
        var hottingRightBtn = document.getElementById("hottingRightBtn");
        //console.log(thoseOf_LR);
        //console.log(hottingLeftBtn);
        //console.log(hottingRightBtn);
        hottingLeftBtn.onclick = function () {
            var inleft = hotting_LR.style.left;
            if (inleft != "-972px") {
                hotting_LR.style.left = "-972px";
            } else {
                hotting_LR.style.left = "0px";
            }
        };
        hottingRightBtn.onclick = function () {
            var inleft = hotting_LR.style.left;
            if (inleft != "-972px") {
                hotting_LR.style.left = "-972px";
            } else {
                hotting_LR.style.left = "0px";
            }
        };
    }
    hotting();
//recommend==========
    function recommend(){
        var recommend_LR = document.getElementById("recommend_LR");
        var recommendLeftBtn = document.getElementById("recommendLeftBtn");
        var recommendRightBtn = document.getElementById("recommendRightBtn");
        recommendLeftBtn.onclick= function () {
            var inleft = recommend_LR.style.left;
            if (inleft != "-1210px") {
                recommend_LR.style.left = "-1210px";
            } else {
                recommend_LR.style.left = "0px";
            }
        };
        recommendRightBtn.onclick= function () {
            var inleft = recommend_LR.style.left;
            if (inleft != "-1210px") {
                recommend_LR.style.left = "-1210px";
            } else {
                recommend_LR.style.left = "0px";
            }
        };
    }
    recommend();
})();