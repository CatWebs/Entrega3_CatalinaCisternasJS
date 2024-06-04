/*TERCERA PREENTREGA

MODIFICAR EL DOM: Ampliar y refina el flujo de trabajo del script en términos de captura de eventos,
procesamiento del simulador y notificación de resultados en forma de slaidas por HTML

- Definir eventos a manejar y su función de respuesta
- Modificar el DOM, ya sea para definir elementos al cargar la página
o para realizar salidas de un procesamiento.
- Almacenar datos (clave-valor) en el storage y recuperarlos.

SE DEBE ENTREGAR

- Implementación con uso de JSON y Storage
- Modificación del DOM y detección de eventos de usuario.

Se busca programar el código esencial para garantizar dinamismo en el HTML con JS
Ya no usamos alert(), confirm() ni prompt(). Ahora modificamos el DOM para las salidas
y capturamos los eventos del usuario sobre inputs y botones para las entradas.

_________________________________________________________________________________*/

//  CONOCIENDO AL JUGADOR
const nombreJugador = document.getElementById("nombreJugador");
nombreJugador.value = "Jugador";

const botonGuardar = document.getElementById("guardarNombreJugador");
botonGuardar.addEventListener("click", guardarNombre);

function guardarNombre () {
    if (nombreJugador.value == ""){
        nombreJugador.value = "Jugador";
    } else {
        nombreJugador.value = nombreJugador.value;
    }
};

