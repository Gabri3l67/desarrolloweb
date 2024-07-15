function mostrarCalificacion() {
    var nota = parseInt(document.getElementById('nota').value);
    var calificacion;

    // Validar si la nota está fuera del rango 0-10
    if (nota < 0 || nota > 10 || isNaN(nota)) {
        alert("Por favor, introduce una nota válida entre 0 y 10.");
        return; // Salir de la función si la nota no es válida
    }

    if (nota >= 9) {
        calificacion = "Sobresaliente";
    } else if (nota >= 7) {
        calificacion = "Notable";
    } else if (nota >= 5) {
        calificacion = "suficiente";
    } else if (nota >= 3) {
        calificacion = "insuficiente";
    } else {
        calificacion = "Muy deficiente :(";
    }
    document.getElementById('calificacion').innerText = calificacion;
}
