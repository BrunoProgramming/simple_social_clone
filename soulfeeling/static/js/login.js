function Registor() {
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("confirm").style.display = "";
    document.getElementById("loginTransfer").style.display = "";
    document.getElementById("passWord").setAttribute("placeholder", "设置密码*");
}

function load() {
    document.getElementById("loginBtn").style.display = "";
    document.getElementById("confirm").style.display = "none";
    document.getElementById("loginTransfer").style.display = "none";
}