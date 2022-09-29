const boton = document.querySelector ('#switch');
boton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    boton.classList.toggle('active');
})

var sound = new Audio();
sound.src= "./sonidos/audio1.mp3";