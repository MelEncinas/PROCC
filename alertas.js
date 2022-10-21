
function alertapersonalizada() {

    fecha = new Date();
    hora = fecha.getHours();

    if (hora >= 0 && hora < 12) {
        titulo = `Buen día ${nombrealert}`;
        imagen = "assets/dia.png";
    }

    if (hora >= 12 && hora < 20) {
        titulo = `Buenas tardes ${nombrealert}`;
        imagen = "assets/atardecer.png";
    }

    if (hora >= 20 && hora < 24) {
        titulo = `Buenas noches ${nombrealert}`;
        imagen = "assets/noche.png";
    }


    Swal.fire({
        title: titulo,  //"nombrealert" extraído de index.html
        text: "Bienvenid@ a PROCC",
        confirmButtonText: "Comenzar",
        footer: "Esperamos que este sitio te sea de mucha ayuda",
        timer: 10000,
        timerProgressBar: 1000,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        customClass: {
            container: "containeralert",
            popup: "popup",
            title: "titlealert",
            footer: "footeralert",

        },
        buttonsStyling: true,
        showCloseButton: true,
        closeButtonAriaLabel: "Cerrar alerta",
        imageUrl: imagen,
        imageWidth: '200px',
        // imageHeight:
        imageAlt: "Día/tarde/noche",
    });
}




