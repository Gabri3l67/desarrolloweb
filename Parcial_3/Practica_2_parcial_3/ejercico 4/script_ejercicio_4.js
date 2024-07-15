function calcularLetraDNI() {
    var dni = document.getElementById('dni').value;
    if (dni < 0 || dni > 99999999 || isNaN(dni)) {
        alert("Introduce un número válido entre 0 y 99999999");
        return;
    }
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var letra = letras[dni % 23];
    document.getElementById('letraDNI').innerText = "La letra de tu DNI es: " + letra;
}
