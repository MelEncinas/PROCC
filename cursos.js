let opinion = prompt("¿Qué te parecen nuestros cursos? Ingresa 1 para ★★★★★, 2 para ★★★★, 3 para ★★★, 4 para ★★, 5 para ★");
console.log(opinion)
if (opinion == "") {
    alert("No ingresaste tu opinión")
}
else
    if (opinion === "1") {
        alert("Tu calificación fue de ★★★★★, nos alegramos que sean de tu agrado y utilidad")
    }
    else
        if (opinion === "2") {
            alert("Tu calificación fue de ★★★★, nos alegramos de que te gusten")
        }
        else
            if (opinion === "3") {
                alert("Tu calificación fue de ★★★, lamentamos que no cumplan tus expectativas")
            }
            else
                if (opinion === "4") {
                    alert("Tu calificación fue de ★★, gracias por tu honestidad, seguiremos mejorando")
                }
                else
                    if (opinion === "5") {
                        alert("Tu calificación fue de ★, lamentamos que no sean de tu agrado. Seguiremos mejorando")
                    }

//--COMIENZO ARRAY--//
const cursos = ["Oratoria", "Redacción", "Comprensión", "Computación", "Programación"];
let curso1 = cursos[0];
let curso2 = cursos[1];
let curso3 = cursos[2];
let curso4 = cursos[3];
let curso5 = cursos[4];

console.log("Nuestro primer curso es: ", curso1);
console.log("Nuestro segundo curso es: ", curso2);
console.log("Nuestro tercer curso es: ", curso3);
console.log("Nuestro cuarto curso es: ", curso4);
console.log("Nuestro quinto curso es: ", curso5);

console.log("Contamos con ", cursos.length, " cursos en total");