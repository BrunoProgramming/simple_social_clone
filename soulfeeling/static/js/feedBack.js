function ShowFeedBackContent(id) {
    if (id == "shop") {
        document.getElementById("shopInfo").style.display = "";
        document.getElementById("deliverInfo").style.display = "none";
        document.getElementById("afterMarketInfo").style.display = "none";
        document.getElementById("feedBackTableInfo").style.display = "none";
        document.getElementById("shop").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/shopIcon_click.png");
        document.getElementById("deliverPolicy").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/deliverPolicy.png")
        document.getElementById("afterMarketPolicy").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/afterMarketPolicy.png")
        document.getElementById("feedBackTable").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/feedBackTable.png")
    }
    else if (id == "deliverPolicy") {
        document.getElementById("shopInfo").style.display = "none";
        document.getElementById("deliverInfo").style.display = "";
        document.getElementById("afterMarketInfo").style.display = "none";
        document.getElementById("feedBackTableInfo").style.display = "none";
        document.getElementById("shop").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/shopIcon.png");
        document.getElementById("deliverPolicy").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/deliverPolicy_click.png")
        document.getElementById("afterMarketPolicy").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/afterMarketPolicy.png")
        document.getElementById("feedBackTable").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/feedBackTable.png")
    }
    else if (id == "afterMarketPolicy") {
        document.getElementById("shopInfo").style.display = "none";
        document.getElementById("deliverInfo").style.display = "none";
        document.getElementById("afterMarketInfo").style.display = "";
        document.getElementById("feedBackTableInfo").style.display = "none";
        document.getElementById("shop").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/shopIcon.png");
        document.getElementById("deliverPolicy").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/deliverPolicy.png")
        document.getElementById("afterMarketPolicy").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/afterMarketPolicy_click.png")
        document.getElementById("feedBackTable").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/feedBackTable.png")
    }
    else {
        document.getElementById("shopInfo").style.display = "none";
        document.getElementById("deliverInfo").style.display = "none";
        document.getElementById("afterMarketInfo").style.display = "none";
        document.getElementById("feedBackTableInfo").style.display = "";
        document.getElementById("shop").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/shopIcon.png");
        document.getElementById("deliverPolicy").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/deliverPolicy.png")
        document.getElementById("afterMarketPolicy").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/afterMarketPolicy.png")
        document.getElementById("feedBackTable").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/feedBackTable_click.png")
    }
}

function load() {
    document.getElementById("shopInfo").style.display = "";
    document.getElementById("deliverInfo").style.display = "none";
    document.getElementById("afterMarketInfo").style.display = "none";
    document.getElementById("feedBackTableInfo").style.display = "none";
    document.getElementById("shop").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/shopIcon_click.png");
    document.getElementById("deliverPolicy").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/deliverPolicy.png")
    document.getElementById("afterMarketPolicy").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/afterMarketPolicy.png")
    document.getElementById("feedBackTable").setAttribute("src", "/Users/dengshaojun/Mine/Projects/simple_social_clone/soulfeeling/static/image/FeedBack/feedBackTable.png")

}