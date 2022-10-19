//Declarar un Array de objetos(literales, con función constructora o clases), 
//y almacenar el array en formato JSON en el storage

//SIMULANDO QUE ENTRARON UNA CIERTA CANTIDAD DE USUARIOS EN EL DÍA
//SESSION STORAGE
const estadousuario = [
    {id: 1, usuario: "KarenQuiroga", contraseña: 1234},
    {id: 2, usuario: "AbrilBarros", contraseña: 4567},
    {id: 3, usuario: "MelEncinas", contraseña: 8910},
    {id: 4, usuario: "Usuario1", contraseña: 65463}
];

const guardarStorage = (clave,valor) => {sessionStorage.setItem (clave,valor) };
console.log("Usuarios que ingresaron en el día ", JSON.stringify(estadousuario));

for (const usuario of estadousuario) {
    guardarStorage(usuario.id, JSON.stringify(usuario));
}
