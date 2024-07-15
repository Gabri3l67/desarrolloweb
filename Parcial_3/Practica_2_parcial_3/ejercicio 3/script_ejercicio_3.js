var textos = [];

function agregarTexto() {
    var texto = document.getElementById('texto').value;
    textos.push(texto);
    document.getElementById('texto').value = ''; // Limpiar el campo de texto
}

function mostrarTexto() {
    document.getElementById('concatenado').innerText = textos.join(' - ');
}
