
function changeDeliverImage(imgName)
{
    document.getElementById("shopInfo").style.display = "none";
    document.getElementById("deliverInfo").style.display = "";
    document.getElementById("afterMarketInfo").style.display = "none";
    document.getElementById("feedBackTableInfo").style.display = "none";

    var image = document.getElementById('shop');
    image.src = shop;

    var image1 = document.getElementById('deliverPolicy');
    image1.src = deliverPolicy_click;

    var image2 = document.getElementById('afterMarketPolicy');
    image2.src = afterMarketPolicy;

    var image3 = document.getElementById('feedBackTable');
    image3.src = feedBackTable;

}

function changeShopImage(imgName)
{
    document.getElementById("shopInfo").style.display = "";
    document.getElementById("deliverInfo").style.display = "none";
    document.getElementById("afterMarketInfo").style.display = "none";
    document.getElementById("feedBackTableInfo").style.display = "none";

    var image = document.getElementById('shop');
    image.src = shop_click;

    var image1 = document.getElementById('deliverPolicy');
    image1.src = deliverPolicy;

    var image2 = document.getElementById('afterMarketPolicy');
    image2.src = afterMarketPolicy;

    var image3 = document.getElementById('feedBackTable');
    image3.src = feedBackTable;

}

function changeMarketImage(imgName)
{
    document.getElementById("shopInfo").style.display = "none";
    document.getElementById("deliverInfo").style.display = "none";
    document.getElementById("afterMarketInfo").style.display = "";
    document.getElementById("feedBackTableInfo").style.display = "none";

    var image = document.getElementById('shop');
    image.src = shop;

    var image1 = document.getElementById('deliverPolicy');
    image1.src = deliverPolicy;

    var image2 = document.getElementById('afterMarketPolicy');
    image2.src = afterMarketPolicy_click;

    var image3 = document.getElementById('feedBackTable');
    image3.src = feedBackTable;

}

function changeBackTableImage(imgName)
{
    document.getElementById("shopInfo").style.display = "none";
    document.getElementById("deliverInfo").style.display = "none";
    document.getElementById("afterMarketInfo").style.display = "none";
    document.getElementById("feedBackTableInfo").style.display = "";

    var image = document.getElementById('shop');
    image.src = shop;

    var image1 = document.getElementById('deliverPolicy');
    image1.src = deliverPolicy;

    var image2 = document.getElementById('afterMarketPolicy');
    image2.src = afterMarketPolicy;

    var image3 = document.getElementById('feedBackTable');
    image3.src = feedBackTable_click;

}

window.onload = function() {
    changeShopImage("shop");
  };