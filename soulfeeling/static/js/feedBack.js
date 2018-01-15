var shopImage = shop;
var shopClickImage = shop_click;

var deliverPolicyImage = deliverPolicy;
var deliverPolicyClickImage = deliverPolicy_click;

var afterMarketPolicyImage = afterMarketPolicy;
var afterMarketPolicyClickImage = afterMarketPolicy_click;

var feedBackTableImage = feedBackTable;
var feedBackTableClickImage = feedBackTable_click;


function ShowFeedBackContent(id) {
    if (id == "shop") {
        document.getElementById("shopInfo").style.display = "";
        document.getElementById("deliverInfo").style.display = "none";
        document.getElementById("afterMarketInfo").style.display = "none";
        document.getElementById("feedBackTableInfo").style.display = "none";
        document.getElementById("shop").setAttribute("src", shopClickImage);
        document.getElementById("deliverPolicy").setAttribute("src", deliverPolicyImage)
        document.getElementById("afterMarketPolicy").setAttribute("src", afterMarketPolicyImage)
        document.getElementById("feedBackTable").setAttribute("src", feedBackTableImage)
    }
    else if (id == "deliverPolicy") {
        document.getElementById("shopInfo").style.display = "none";
        document.getElementById("deliverInfo").style.display = "";
        document.getElementById("afterMarketInfo").style.display = "none";
        document.getElementById("feedBackTableInfo").style.display = "none";
        document.getElementById("shop").setAttribute("src", shopIconImage);
        document.getElementById("deliverPolicy").setAttribute("src", deliverPolicy_click)
        document.getElementById("afterMarketPolicy").setAttribute("src", afterMarketPolicyImage)
        document.getElementById("feedBackTable").setAttribute("src", feedBackTableImage)
    }
    else if (id == "afterMarketPolicy") {
        document.getElementById("shopInfo").style.display = "none";
        document.getElementById("deliverInfo").style.display = "none";
        document.getElementById("afterMarketInfo").style.display = "";
        document.getElementById("feedBackTableInfo").style.display = "none";
        document.getElementById("shop").setAttribute("src", shopIconImage);
        document.getElementById("deliverPolicy").setAttribute("src", deliverPolicyImage)
        document.getElementById("afterMarketPolicy").setAttribute("src", afterMarketPolicyClickImage)
        document.getElementById("feedBackTable").setAttribute("src", feedBackTableImage)
    }
    else {
        document.getElementById("shopInfo").style.display = "none";
        document.getElementById("deliverInfo").style.display = "none";
        document.getElementById("afterMarketInfo").style.display = "none";
        document.getElementById("feedBackTableInfo").style.display = "";
        document.getElementById("shop").setAttribute("src", shopIconImage);
        document.getElementById("deliverPolicy").setAttribute("src", deliverPolicyImage)
        document.getElementById("afterMarketPolicy").setAttribute("src", afterMarketPolicyImage)
        document.getElementById("feedBackTable").setAttribute("src", feedBackTableClickImage)
    }
}