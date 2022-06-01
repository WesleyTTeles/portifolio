// >>>>>>>> Inicio Carrosel de Imagens <<<<<<<<

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

// >>>>>>>> Inicio Funcao para quando o usuario fora do alcance do menu ele possa clicar e ir para o top <<<<<<<<<
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

// >>>>>>>> Inicio Botao darkmode <<<<<<<<<

const html = document.querySelector('html')
const checkbox = document.querySelector('#btn-mode')

checkbox.addEventListener('change', function(){
    html.classList.toggle('dark-mode-active')
})


// >>>>>>> Inicio Srcoll para link interno <<<<<<<<<
// identificar o clique do usuario

const menuItems = document.querySelectorAll('.menu li a[href^="#"]') // pegando apenas os link interno e nao os externos

// verificar se foi clicado ou nao
menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault(); // Previnir a acao natural de quando clicar no menu ficar como meusite.com/menu
    const to = getScrollTopByHref(event.target)

    scrollToPositionSmooth(to);
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href') // pegando o atributo 'href'
    return document.querySelector(id).offsetTop; // setando a distancia do id referente ao topo
} 

function scrollToPositionSmooth(to) {
    window.scrollTo({
        top: to,
        behavior: "smooth"
    })
}

// >>>>>>> FIM Srcoll para link interno <<<<<<<<<

// Menu Responsivel 

let show = true

const menu = document.querySelector('.menu')
const menuToggle =document.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden' : 'initial'
    menu.classList.toggle('on', show)
    show = !show;
})

