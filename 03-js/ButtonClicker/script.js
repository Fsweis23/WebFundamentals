function toggleloginBtn() {
    var loginBtn = document.getElementById("loginID");
    if (loginBtn.innerHTML === "Login") {
        loginBtn.innerHTML = "Logout";
    } else {
        loginBtn.innerHTML = "Login";
    }
} 

function likeAlert() {
    alert("This page says ninja was liked");
} 

function removeBtn() {
    var removeBtn = document.getElementById("addBtn");
    removeBtn.remove("addBtn");
}