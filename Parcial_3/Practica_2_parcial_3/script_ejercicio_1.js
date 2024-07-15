function verificarEdad() {
    var edad = document.getElementById('edad').value;
    var mensaje = edad >= 18 ? "Ya puedes conducir." : "Aún no puedes conducir.";
    document.getElementById('resultado').innerText = mensaje;
}
function verificarEdad() {
    var edad = document.getElementById('edad').value;
    var mensaje = edad >= 18 ? "Ya puedes conducir." : "Aún no puedes conducir.";
    var resultado = document.getElementById('resultado');
    resultado.innerText = mensaje;
    resultado.classList.remove('show-result'); // Eliminar la clase para reiniciar la animación
    setTimeout(() => { // Un breve retraso para que la transición se note
        resultado.classList.add('show-result');
    }, 10);
}
