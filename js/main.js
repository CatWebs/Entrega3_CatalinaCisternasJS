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

_________________________________________________________________________________
*/
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
//  DATOS DEL JUGADOR E INTERFAZ DEL JUEGO

const iniciarJuego = document.getElementById("iniciarJuego");
iniciarJuego.onclick = () => comenzar(true);
avisos.innerText = "Avisos: Puedes comprar una vez, sólo antes de iniciar la ronda";
const reiniciarJuego = document.getElementById("finalizarJuego");
reiniciarJuego.onclick = () => comenzar(false);
//  CONDICION INICIAL
function comenzar(parametro){
    if (!parametro) {
        resetDatos();
    } else {
        generarInterfaz();
    }
}

//  MOSTRANDO TRABAJADORES EN EL HTML HACIENDO CLICK EN "COMPRAR TRABAJADOR"
const trabajadoresContainer = document.getElementById("trabajadores");
const comprar = document.getElementById("comprar"); //Esto es llamado en otras funciones
comprar.addEventListener("click", mostrarTrabajadores);


//  DISEÑANDO Y CREANDO FUNCIONALIDAD EN ÁREA DE INTERFAZ

const misTrabajadoresContainer = document.getElementById("misTrabajadores");
let tituloMisTrabajadores = document.createElement("h4");
tituloMisTrabajadores.className = "text-center";
tituloMisTrabajadores.id = "tituloMisTrabajadores";
tituloMisTrabajadores.innerText = "No tienes trabajadores";
misTrabajadoresContainer.appendChild(tituloMisTrabajadores);
    


//  VENTA DE SLURM

const vender = document.getElementById("vender");
vender.addEventListener("click", venderSlurm);























/*
ANTIGUO
console.log(nombreJugador.value);
// INICIO DEL JUEGO
iniciar = confirm(reglas + "\n\nEstas listo?");
if (!iniciar) { 
    alert("Ok " + nombreJugador.value + ", entiendo, no te gustan los riesgos");                   
} else {
    do { 
        mostrarDatos = "Estos son tus datos de jugador:\nDinero: "+datosJugador.cajaRegistradora+"\nSlurm Vendida: " + datosJugador.slurmVendida +"\nRonda actual: " + rondas+"\nTrabajadores actuales: "+trabajadoresAdquiridos.length;
        eleccionRonda = parseInt(prompt(mostrarDatos + "\nDebes elegir cómo iniciarás la ronda. Selecciona alguna alternativa\n1. Comprar Trabajador\n2. Comenzar la venta Slurm\n0. Salir"));
        switch (eleccionRonda) {
            case 0:
                alert("Has salido del Juego.");
                break;
            case 1: //  COMPRAR TRABAJADOR
                mostrarTrabajadores();
                alert("Características de los trabajadores:\n"+frasePresentacion);
                eleccion = parseInt(prompt(`Ingrese ID del trabajador que desea comprar.\n`+fraseListadoPorId));
                /*NOTA: La idea es que los datos de cada trabajador esten en el HTML en su respectiva Card.
                Por otro lado, me hace falta arreglar la compra de trabajadores para que en vez de dejarme comprar cualquiera, me ofrezca sólo los que todavía no tengo. 
                La idea también es que en "Datos de jugador" vea el nombre del trabajador que tengo en vez de la cantidad de trabajadores
                Por otro lado, no debería poder comprar trabajadores si no tengo los fondos suficientes*/
                /*elegirTrabajador(eleccion);
                arrayPresentar.splice(0,arrayPresentar.length);
                arrayFraseListado.splice(0,arrayFraseListado.length);
                // Descuento el sueldo del trabajador de mis fondos (caja registradora)
                /*
                break;
            case 2: //  COMENZAR LA RONDA DE VENTA DE SLURM
            /*NOTA: Se supone que debo comenzar con un trabajador en la primera ronda.
            Y así arreglaría el problema de la ronda sin ventas (el if a continuación)*//*
                if (trabajadoresAdquiridos.length == 0){
                    alert("No tienes trabajadores, por lo que sólo será una ronda sin ventas");
                }else{
                    alert(mostrarDatos);
                }
                ventaTrabajadores();
                for (const iterator of trabajadoresAdquiridos) {
                    datosJugador.cajaRegistradora += iterator.ventaRonda;
                    datosJugador.slurmVendida += iterator.cantidadRonda;
                }
                rondas ++;
                break;
            default:
                alert("Por favor ingresa una opción válida. Vuelve a intentarlo")
                break;
        }
    } while ((rondas < 6) && (eleccionRonda != 0));

    //FINAL DEL JUEGO - REVISIÓN DE COMPUTOS
    if (eleccionRonda == 0){
        alert("Hasta pronto");
    } else {
        ventaTotal = parseInt(datosJugador.cajaRegistradora - datosJugador.deudaInversion);

        if (ventaTotal < 0) {
            alert(nombreJugador.value +", lamento informarte que has perdido. Más suerte la próxima vez\nReuniste $"+datosJugador.cajaRegistradora+" pero le debes $500.000 al juego, por lo tanto quedaste debiendo $"+ventaTotal);
        } else if (ventaTotal == 0) {
            alert(nombreJugador.value +" Has perdido! No generaste dinero.\nReuniste $"+datosJugador.cajaRegistradora+" pero le debes $500.000 al juego, por lo tanto quedaste con $"+ventaTotal);
        } else {
            nombreJugador.value.toUpperCase;
            alert("FELICIDADES "+nombreJugador.value+"! Eres el ganador. Ahora puedes llevarte una Robotzuela y 2 barriles de Slurm!\nReuniste $"+datosJugador.cajaRegistradora+" pero le debes $500.000 al juego, por lo tanto tu ganancia es de $"+ventaTotal);
        } 
    }
    
}
*/