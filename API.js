fetch('https://apimocha.com/infoadicional/info/grupo5/ingenias')

    .then(response => response.json())
    .then(json => showInfo(json));

const showInfo = (informacion) => {
    console.log(informacion);
    let ul = document.getElementById("info");
    for (const info of informacion.infoadicional) {
        let li = document.createElement("li");
        li.innerHTML = " ⓘ " + info.pregunta + " ▶ " + info.respuesta
        ul.appendChild(li)
    }
}

//APLICADO EN LA PÁGINA CURSOS.HTML