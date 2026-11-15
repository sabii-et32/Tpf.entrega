function guardarDatos(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let escuela = document.getElementById("escuela").value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("escuela", escuela);

    window.location.href = "cuestionario.html";
}
