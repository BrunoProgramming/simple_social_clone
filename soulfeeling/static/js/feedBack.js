function ShowFeedBackContent(id) {
    if (id == "shop") {
        document.getElementById("shopInfo").style.display = "";
        document.getElementById("deliverInfo").style.display = "none";
        document.getElementById("afterMarketInfo").style.display = "none";
        document.getElementById("feedBackTableInfo").style.display = "none";
        document.getElementById("shop").style.backgroundColor = "cornflowerblue";
        document.getElementById("deliverPolicy").style.backgroundColor = "white";
        document.getElementById("afterMarketPolicy").style.backgroundColor = "white";
        document.getElementById("feedBackTable").style.backgroundColor = "white";
    }
    else if (id == "deliverPolicy") {
        document.getElementById("shopInfo").style.display = "none";
        document.getElementById("deliverInfo").style.display = "";
        document.getElementById("afterMarketInfo").style.display = "none";
        document.getElementById("feedBackTableInfo").style.display = "none";
        document.getElementById("shop").style.backgroundColor = "white";
        document.getElementById("deliverPolicy").style.backgroundColor = "cornflowerblue";
        document.getElementById("afterMarketPolicy").style.backgroundColor = "white";
        document.getElementById("feedBackTable").style.backgroundColor = "white";
    }
    else if (id == "afterMarketPolicy") {
        document.getElementById("shopInfo").style.display = "none";
        document.getElementById("deliverInfo").style.display = "none";
        document.getElementById("afterMarketInfo").style.display = "";
        document.getElementById("feedBackTableInfo").style.display = "none";
        document.getElementById("shop").style.backgroundColor = "white";
        document.getElementById("deliverPolicy").style.backgroundColor = "white";
        document.getElementById("afterMarketPolicy").style.backgroundColor = "cornflowerblue";
        document.getElementById("feedBackTable").style.backgroundColor = "white";
    }
    else {
        document.getElementById("shopInfo").style.display = "none";
        document.getElementById("deliverInfo").style.display = "none";
        document.getElementById("afterMarketInfo").style.display = "none";
        document.getElementById("feedBackTableInfo").style.display = "";
        document.getElementById("shop").style.backgroundColor = "white";
        document.getElementById("deliverPolicy").style.backgroundColor = "white";
        document.getElementById("afterMarketPolicy").style.backgroundColor = "white";
        document.getElementById("feedBackTable").style.backgroundColor = "cornflowerblue";
    }
}

function load() {
    document.getElementById("shopInfo").style.display = "";
    document.getElementById("deliverInfo").style.display = "none";
    document.getElementById("afterMarketInfo").style.display = "none";
    document.getElementById("feedBackTableInfo").style.display = "none";
    document.getElementById("shop").style.backgroundColor = "white";
    document.getElementById("deliverPolicy").style.backgroundColor = "white";
    document.getElementById("afterMarketPolicy").style.backgroundColor = "white";
    document.getElementById("feedBackTable").style.backgroundColor = "white";
}