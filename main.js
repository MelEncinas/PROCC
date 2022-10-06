/*MODO NOCUTRNO*/
const boton = document.querySelector('#switch');
boton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    boton.classList.toggle('active');
})

/*SONIDO DE BOTÓN MODO NOCTURNO*/
var sound = new Audio();
sound.src = "./sonidos/audio1.mp3";



/*FORMULARIO DE REGISTRO*/
var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var email = document.getElementById("email")
var usuario = document.getElementById("usuario")
var contrase = document.getElementById("contraseña")
var cel = document.getElementById("cel")
var form = document.getElementById("form")
var parrafo = document.getElementById("warnings")

function enviarFormulario() {
    console.log("Enviando formulario...")
    console.log(nombre.value)
    console.log(apellido.value)
    console.log(email.value)
    console.log(usuario.value)
    console.log(contrase.value)
    console.log(cel.value)

}

/*El resto de JS está en la página index.html y en cursos.html*/

/* Efecto Maquina de Escribir */
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
loop: true,
delay: 75,
});

typewriter
.typeString('CURSOS DE APOYO GRATUITOS PARA ESTUDIANTES')
.pauseFor(200)
.deleteChars(10)
.start();
