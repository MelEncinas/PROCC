//--COMIENZO ARRAY--//
const registromotivacional = ["motivado", "desmotivado", "desafiado", "otro"];

let emocion1 = registromotivacional[0];
let emocion2 = registromotivacional[1];
let emocion3 = registromotivacional[2];
let emocion4 = registromotivacional[3];

console.log(emocion1);
console.log(emocion2);
console.log(emocion3);
console.log(emocion4);

console.log("La longitud de nuestro array inicial es :", registromotivacional.length);

/* SIMULANDO QUE UN USUARIO SELECCIONÓ "OTRO" E INGRESÓ SU EMOCIÓN*/
registromotivacional.push("triste");
console.log(registromotivacional);
let emocion5 = registromotivacional[4];
console.log(emocion5);

/* SIMULANDO QUE UN SEGUNDO USUARIO SELECCIONÓ "OTRO" E INGRESÓ SU EMOCIÓN*/
registromotivacional.push("feliz");
console.log(registromotivacional);
let emocion6 = registromotivacional[5];
console.log(emocion6);

/* SIMULANDO QUE UN TERCER USUARIO SELECCIONÓ "OTRO" E INGRESÓ SU EMOCIÓN*/
registromotivacional.push("ansioso");
console.log(registromotivacional);
let emocion7 = registromotivacional[6];
console.log(emocion7);

console.log("La longitud de nuestro array actualizado es :", registromotivacional.length);
//--FIN ARRAY--//

//-- OBJETO PARA CONTROLAR EL FUNCIONAMIENTO: SIMULANDO QUE USUARIOS INGRESARON EN EL DÍA//
class usuarioingreso {
    constructor(usuario, paginasvisitadas, tiempodenavegacion) {
        this.usuario = usuario;
        this.paginasvisitadas = paginasvisitadas;
        this.tiempodenavegacion = tiempodenavegacion;
    }
    infousuario(usuarioingreso) {
        console.log("El usuario " + this.usuario + " visitó un total de " + this.paginasvisitadas + " páginas, y estuvo en línea " + this.tiempodenavegacion + " horas.");
    }
}
const usuario1 = new usuarioingreso("Abril", 3, 2);
const usuario2 = new usuarioingreso("Karen", 2, 1);
console.log("El usuario " + usuario1.usuario + " visitó un total de " + usuario1.paginasvisitadas + " páginas, y estuvo en línea " + usuario1.tiempodenavegacion + " horas.");
console.log("El usuario " + usuario2.usuario + " visitó un total de " + usuario2.paginasvisitadas + " páginas, y estuvo en línea " + usuario2.tiempodenavegacion + " horas.");
//FIN OBJETO PARA CONTROLAR EL FUNCIONAMIENTO: SIMULANDO QUE USUARIOS INGRESARON EN EL DÍA--//
