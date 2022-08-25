function cartAlert() {
    alert("Your Cart is empty!");
}

function switchImg(imgElement){
    if(imgElement.src === "http://127.0.0.1:5500/03-js/Exam/images/assets/succulents-1.jpg"){
        imgElement.src = "./images/assets/succulents-2.jpg"
    }else{
        imgElement.src = "./images/assets/succulents-1.jpg"
    }
}

function removeCookieBox(cookieID){
    let elementToRemove = document.querySelector("#"+cookieID)
    elementToRemove.remove();
}