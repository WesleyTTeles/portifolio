let time = 4000,
    currentImagesIndex = 0,
    images = document.querySelectorAll(".slider img")
    max = images.length;

function nextImage(){
    images[currentImagesIndex].classList.remove("selected")
    currentImagesIndex++
    if(currentImagesIndex >= max)
        currentImagesIndex = 0
    images[currentImagesIndex].classList.add("selected")
}
function start() {
    setInterval(() => {
        nextImage()
    }, time);
}
window.addEventListener("load", start)

