function changeNewStore(imgName)
{
    document.getElementById("offlineStoreFirst").style.display = "none";
    document.getElementById("offlineStoreSecond").style.display = "";
    document.getElementById("offlineStoreThird").style.display = "none";
    document.getElementById("offlineStoreFourth").style.display = "none";

    document.getElementById("navSecond").classList.remove('active');
    document.getElementById("navThird").classList.remove('active');
    document.getElementById("navFirst").classList.add('active');

    document.getElementById("linkContent").textContent="最新门店";
}

function changeAllStore(imgName)
{
    document.getElementById("offlineStoreFirst").style.display = "";
    document.getElementById("offlineStoreSecond").style.display = "none";
    document.getElementById("offlineStoreThird").style.display = "none";
    document.getElementById("offlineStoreFourth").style.display = "none";

    document.getElementById("navFirst").classList.remove('active');
    document.getElementById("navThird").classList.remove('active');
    document.getElementById("navSecond").classList.add('active');

    document.getElementById("linkContent").textContent="全部门店";
}

function changePolicyStore(imgName)
{
    document.getElementById("offlineStoreFirst").style.display = "none";
    document.getElementById("offlineStoreSecond").style.display = "none";
    document.getElementById("offlineStoreThird").style.display = "none";
    document.getElementById("offlineStoreFourth").style.display = "";

    document.getElementById("navSecond").classList.remove('active');
    document.getElementById("navFirst").classList.remove('active');
    document.getElementById("navThird").classList.add('active');

    document.getElementById("linkContent").textContent="优惠政策";
}

window.onload = function() {
    changeNewStore("shop");
  };