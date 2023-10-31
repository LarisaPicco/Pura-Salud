let menu = document.querySelector('#menu-btn')
let nav = document.querySelector('.nav')

menu.onclick = () =>{
    menu.classList.toggle('fa-times'); /*con el interruptor toggle cambia del icono menu hamburguesa a la cruz, denominada fa-times*/
    nav.classList.toggle('active');
}

window.onscroll = () =>{  /*onscroll call a function when a <div> element is being scrolled*/
    menu.classList.remove('fa-times');
    nav.classList.remove('active')
}