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

//Funcao para quando o usuario fora do alcance do menu ele possa clicar e ir para o top
function up() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// funcao para mostrar o botao quando chegar em uma determinada posicao
function showButtonTop(){
    if(window.scrollY === 0){
        document.querySelector('#btn--up').style.display = 'none'
    }
    else {
        document.querySelector('#btn--up').style.display = 'block'
    }
}
window.addEventListener('scroll', showButtonTop);

// Botao darkmode

const html = document.querySelector('html')
const checkbox = document.querySelector('#btn-mode')

checkbox.addEventListener('change', function(){
    html.classList.toggle('dark-mode-active')
})