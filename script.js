function increaseNumber(id){
    let element = document.querySelector(id);
    element.innerText++;
}

function changePic() {
    let pixelNinja = document.querySelector("#first");
    pixelNinja.src = "./imgs/pixel-ninjas-2.png";

}

function changePicBack() {
    let stonePunk = document.querySelector('#first');
    stonePunk.src = "./imgs/stonepunk.png";
}

function alertMessage () {
    alert("This game is supported on Linux");
}