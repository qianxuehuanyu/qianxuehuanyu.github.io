/**
 * Created by Administrator on 2016/11/7 0007.
 */
window.womai=window.womai||{};
(function () {
    var choosed=document.getElementById("choosed");
    var inusername= $.cookie("username");
    var inchar=inusername+"_value";
    var value= $.cookie(inchar);
    console.log(choosed,inusername,value);
    for(var i=0;i<value;i++) {
        var inul = document.createElement("ul");
        inul.className = "shangpinul inchoosed";
        inul.innerHTML = ' <li style="width: 500px;">' +
            '<input type="checkbox" checked="checked"/>' +
            '<img src="images/348275_0_pic60_7996.jpg"/>'
            + '韩国海牌海苔(进口食品 袋装 20g*2</li>'
            + '<li style="width: 100px;">￥19.00</li>'
            + '<li style="width: 100px;"><input type="number" style="width: 50px;text-align: center;" value="1" min="1"></li>'
            + '<li style="width: 100px;">0.12</li>'
            + '<li style="width: 100px; color: #E9001C;font-weight: bold;">￥19.00</li>'
            + '<li style="width: 100px;"><a style="cursor: pointer;" id="deletechoosed">删除</a></li>';
        choosed.appendChild(inul);
    }















})();