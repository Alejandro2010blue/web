// Buscamos el botón y la caja en el documento
const boton = document.getElementById('miBoton');
const caja = document.querySelector('.contenedor-principal');

// Qué pasa cuando hacemos clic
boton.addEventListener('click', () => {
    // Cambiamos colores dinámicamente
    caja.style.borderColor = "#fccf05";
    caja.style.transform = "translateY(-10px)"; // Un pequeño salto
    
    // Cambiamos el texto
    boton.innerText = "¡PROYECTO ACTIVADO!";
    boton.style.boxShadow = "0 0 30px #fccf05";

    // Alerta de éxito
    alert('¡Impresionante, Diego! Has creado una web profesional separando HTML, CSS y JS. 🚀');
});
