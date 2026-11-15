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
