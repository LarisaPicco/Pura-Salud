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

const nombre = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const parrafo = document.getElementById('warnings')

form.addEventListener('submit', e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ /*texto regular por defecto que sirve para validar un email */
    parrafo.innerHTML = ""
    if(nombre.value.length < 6){
       warnings+= `Escribe un nombre con un largo mayor a 6 caracteres <br>`
       entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings+= `El email no es válido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    } else{
        parrafo.innerHTML = "Enviado"
    }
})