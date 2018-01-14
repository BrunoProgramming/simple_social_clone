
function ShowFeedBackContent(id) {
    if (id == "shop") {
        document.getElementById("shopInfo").style.display = "";
        document.getElementById("deliverInfo").style.display = "none";
        document.getElementById("afterMarketInfo").style.display = "none";
        document.getElementById("feedBackTableInfo").style.display = "none";
    }
    else if (id == "deliverPolicy") {
        document.getElementById("shopInfo").style.display = "none";
        document.getElementById("deliverInfo").style.display = "";
        document.getElementById("afterMarketInfo").style.display = "none";
        document.getElementById("feedBackTableInfo").style.display = "none";
    }
    else if (id == "afterMarketPolicy") {
        document.getElementById("shopInfo").style.display = "none";
        document.getElementById("deliverInfo").style.display = "none";
        document.getElementById("afterMarketInfo").style.display = "";
        document.getElementById("feedBackTableInfo").style.display = "none";
    }
    else {
        document.getElementById("shopInfo").style.display = "none";
        document.getElementById("deliverInfo").style.display = "none";
        document.getElementById("afterMarketInfo").style.display = "none";
        document.getElementById("feedBackTableInfo").style.display = "";
    }
}

function load() {
    document.getElementById("shopInfo").style.display = "";
    document.getElementById("deliverInfo").style.display = "none";
    document.getElementById("afterMarketInfo").style.display = "none";
    document.getElementById("feedBackTableInfo").style.display = "none";

}