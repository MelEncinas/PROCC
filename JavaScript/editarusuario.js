const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener("submit", validarFormulario)


//mis funciones
function validarFormulario(e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombreEditar").value
    const apellido = document.querySelector("#apellidoEditar").value
    const mail = document.querySelector("#emailEditar").value
    const usuario = document.querySelector("#usuarioEditar").value
    const contrasena = document.querySelector("#contrasenaEditar").value
    const edad = document.querySelector("#edadEditar").value
    const cumple = document.querySelector("#cumpleEditar").value
    const cel = document.querySelector("#celEditar").value

    //const respuesta = document.getElementById("respuestaEditar");
    // respuesta.textContent = `¡Perfecto ${nombre}! Tus datos ya fueron actualizados`

    const respuesta = document.getElementById("respuestaEditar");
    respuesta.textContent = `¡Perfecto! Tus datos actualizados son:`

    const nombreLi = document.getElementById("nombreLi");
    nombreLi.textContent = `Nombre: ${nombre}`

    const apellidoLi = document.getElementById("apellidoLi");
    apellidoLi.textContent = `Apellido: ${apellido}`

    const mailLi = document.getElementById("mailLi");
    mailLi.textContent = `Mail: ${mail}`

    const usuarioLi = document.getElementById("usuarioLi");
    usuarioLi.textContent = `Usuario: ${usuario}`

    const contrasenaLi = document.getElementById("contrasenaLi");
    contrasenaLi.textContent = `Contraseña: ${contrasena}`

    const edadLi = document.getElementById("edadLi");
    edadLi.textContent = `Edad: ${edad}`

    const cumpleLi = document.getElementById("cumpleLi");
    cumpleLi.textContent = `Cumpleaños: ${cumple}`

    const celLi = document.getElementById("celLi");
    celLi.textContent = `Celular: ${cel}`

    const respuestaEd = document.getElementById("respuestaEd");
    respuestaEd.textContent = `¡Listo! Se te enviara un email para que confirmes los cambios`
}