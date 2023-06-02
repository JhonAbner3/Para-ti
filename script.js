// function openEnvelope() {
//     var envelopeContent = document.querySelector('.envelope-content');
//     var openLabel = document.getElementById('open-label');

//     if (envelopeContent.style.display === 'none') {
//         envelopeContent.style.display = 'block';
//         openLabel.style.display = 'none';

//         // Desplazarse hacia abajo al abrir el sobre
//         envelopeContent.scrollTop = envelopeContent.scrollHeight;
//     } else {
//         envelopeContent.style.display = 'none';
//         openLabel.style.display = 'block';
//     }
// }


function openEnvelope() {
    var envelope = document.querySelector('.envelope');
    var flap = document.querySelector('.envelope-flap');
    var content = document.querySelector('.envelope-content');

    flap.style.transform = 'rotateX(-90deg)';

    setTimeout(function() {
        content.style.display = 'block';
    }, 300);
}
function handleYes() {
    // Lógica para el botón "Sí"
    var envelopeContent = document.querySelector('.envelope-content');
    var mensaje = document.createElement('p');
    mensaje.textContent = '¡Gracias por aceptar, me mandas un emoji ♥ !';
    envelopeContent.appendChild(mensaje);
}
function handleNo() {
    // Lógica para el botón "No"
    var envelopeContent = document.querySelector('.envelope-content');
    var mensaje = document.createElement('p');
    mensaje.textContent = 'Entiendo. ya no insisto ❦.';
    envelopeContent.appendChild(mensaje);
    
    var botonNo = document.getElementById('btn-no');
    botonNo.style.display = 'none';
}
