let correctas = 0;
let incorrectas = 0;
let respondidas = 0;

function validarOrg(respuesta, correcta, boton) {

    let botones = boton.parentElement.querySelectorAll("button");

    for (let i = 0; i < botones.length; i++) {
        botones[i].disabled = true;
    }

    respondidas++;

    if (respuesta == correcta) {
        correctas++;
        alert("¡Felicidades! 🎉 Respuesta correcta.");
    } else {
        incorrectas++;
        alert("Respuesta incorrecta.");
    }

    document.getElementById("resultado").innerHTML =
        "<p>Correctas: " + correctas + "</p>" +
        "<p>Incorrectas: " + incorrectas + "</p>";

    if (respondidas == 7) {
        let nota = correctas / 7 * 10;

        alert("Terminaste el cuestionario." +
              "\nCorrectas: " + correctas +
              "\nIncorrectas: " + incorrectas +
              "\nTu nota es: " + nota.toFixed(2));
    }
}

let tabla = document.getElementById("tabla");

for (let fila = 0; fila <= 5; fila++) {
    let linea = "<tr>";

    for (let columna = 0; columna <= 5; columna++) {

        if (fila == 0 && columna == 0) {
            linea = linea + "<th>X</th>";
        } else if (fila == 0) {
            linea = linea + "<th>" + columna + "</th>";
        } else if (columna == 0) {
            linea = linea + "<th>" + fila + "</th>";
        } else {
            linea = linea + "<td>" + (fila * columna) + "</td>";
        }
    }

    linea = linea + "</tr>";
    tabla.innerHTML = tabla.innerHTML + linea;
}