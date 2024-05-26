//  VARIABLES PRINCIPALES
// let trabajadoresAdquiridos;
// if(localStorage.getItem("trabajadoresAdquiridos")){
//     trabajadoresAdquiridos = JSON.parse(localStorage.getItem("trabajadoresAdquiridos"));
// }else{
//     trabajadoresAdquiridos = [];
// }
let trabajadoresAdquiridos = [];

//  Función para limpiar los datos del juego
function resetDatos(){
    trabajadoresAdquiridos= [];
    datosJugador.cajaRegistradora = 3000;
    datosJugador.slurmVendida = 0;
    datosJugador.deudaInversion = 500000;
    ventaRonda.ventaTotalRonda = 0;
    ventaRonda.slurmTotalRonda = 0;
    ronda = 1;
    const container = document.getElementById("datosJugador");
    container.innerHTML = "";
    const container2 = document.getElementById("misTrabajadores");
    container2.innerHTML = "";
}

//  Variables globales para el uso de las diferentes funciones
const datosJugador = {
    cajaRegistradora: 3000,
    slurmVendida: 0,
    deudaInversion: 500000
};

const ventaRonda = {
    ventaTotalRonda: 0,
    slurmTotalRonda: 0,
}

let ronda = 1;
let compraExitosa = false;

// Actualizo los datos iniciales del jugador
function generarInterfaz(){
    //  Datos del Jugador
    const container = document.getElementById("datosJugador");
    container.innerHTML = "";

    const rondaP = document.createElement("p");
    rondaP.innerText = `Ronda Actual N°: ${ronda}`;
    const slurm = document.createElement("p");
    slurm.innerText = `Slurm Vendida: ${datosJugador.slurmVendida} unidades`;
    const dinero = document.createElement("p");
    dinero.innerText = `Caja Registradora: $${datosJugador.cajaRegistradora}`;
    const deuda = document.createElement("p");
    deuda.innerText = `Deuda Inversión: $${datosJugador.deudaInversion}`;
    container.appendChild(rondaP);
    container.appendChild(slurm);
    container.appendChild(dinero);
    container.appendChild(deuda);
    //  Interfaz
    const interfaz = document.getElementById("interfaz");
    interfaz.className = "container";
    // En la interfaz lo que hago es quitarle la clase que trae por defecto : "ocultarInterfaz". Así ahora puedo verla.
}

function actualizarInterfazDelJuego(){
    const container = document.getElementById("datosRonda");
    const titulo = document.createElement("h4");
    titulo.className = "text-center";
    titulo.innerText = `Datos Ronda ${ronda}`;
    const slurmRonda = document.createElement("p");
    slurmRonda.innerText = `Slurm Vendida: ${ventaRonda.slurmTotalRonda} unidades`;
    const dineroRonda = document.createElement("p");
    dineroRonda.innerText = `Caja Registradora: $${ventaRonda.ventaTotalRonda}`;
    container.appendChild(titulo);
    container.appendChild(slurmRonda);
    container.appendChild(dineroRonda);
}

// En esta función creo la mini card que muestra a los trabajadores adquiridos (con los que puedo jugar)
function crearCardAdquirido(){
    const container = document.getElementById("misTrabajadores");
    container.innerHTML = "";
    const misTrabajadoresContainer = document.getElementById("misTrabajadores");
    tituloMisTrabajadores.innerText = "Trabajadores Adquiridos";
    misTrabajadoresContainer.appendChild(tituloMisTrabajadores);
    trabajadoresAdquiridos.forEach(el =>{
        const card = document.createElement("div");
        card.className = "cardAdquiridos";
        const srcComponente = el.id;

        const imagen = document.createElement("img");
        imagen.src = `./media/${srcComponente}.png`;

        const slurm = document.createElement("p");
        slurm.className = `slurm${srcComponente}`;
        slurm.innerText = `Slurm Vendida: ${el.cantidadRonda} unidades`;
        
        const dinero = document.createElement("p");
        dinero.className = `dinero${srcComponente}`;
        dinero.innerText = `Dinero generado ronda ${ronda}: $${el.ventaRonda}`;

        card.appendChild(imagen);
        card.appendChild(slurm);
        card.appendChild(dinero);
        
        container.appendChild(card);
    });
};

// En esta función pusheo el nuevo trabajador y de paso le creo una card (La de la línea 26)
function agregandoTrabajador(id) { 
    trabajadoresAdquiridos.push(trabajadoresDisponibles[id]);
    //localStorage.setItem("trabajadoresAdquiridos", JSON.stringify(trabajadoresAdquiridos));
    trabajadoresContainer.innerHTML = "";
    crearCardAdquirido();
    compraExitosa === true;
    comprar.className += " noMostrar";
}

//Con esta función incorporo la de agregarTrabajador de la línea 51 y además busco al que compré, lo quito de disponible y resto su precio.
function comprarTrabajador(id){
    const nuevoTrabajador = trabajadoresDisponibles.find(el => el.id === id); // Para elegir trabajador de disponibles y cambiarlo
    if (trabajadoresAdquiridos.some(el => el.id === id)) {
        nuevoTrabajador.disponible = false; // aquí cambia disponible a falso.
        mostrarTrabajadores();
    } else {
        agregandoTrabajador(id - 1);
        const nuevoAdquirido = trabajadoresAdquiridos.find(el => el.id === id);
        const precio = nuevoAdquirido.precio;
        datosJugador.cajaRegistradora -= precio;
        generarInterfaz();
    }
}

// Con esta función muestro las Card donde presento a los trabajadores disponibles.
function mostrarTrabajadores() {
    trabajadoresContainer.innerHTML = "";
    trabajadoresDisponibles.forEach(el => {
        const card = document.createElement("div");
        card.className = "card trabajador";
        card.className += ` trabajador${el.id}`;
    
        const titulo = document.createElement("p");
        titulo.className = "card-title";
        titulo.innerText = `Trabajador ${el.id}`;
        titulo.className += ` titulo${el.id}`;
    
        const nombres = document.createElement("p");
        nombres.className = "nombre card-subtitle";
        nombres.innerText = el.nombre;
    
        const precio = document.createElement("p");
        precio.innerText = `Precio: $${el.precio}`;
    
        const bonus = document.createElement("p");
        bonus.innerText = `Bonus: ${el.porcentaje}`;
    
        const imagen = document.createElement("img");
        imagen.src = el.imagen;
        imagen.alt = `imagen de ${el.nombre}`;
        imagen.className = "card-img-bottom";
    
        const comprar = document.createElement("button");
        comprar.innerText = "Comprar";
    
        if(!el.disponible){
            comprar.className = "btn no-disponible";
            comprar.innerText = "Ya lo tienes";
        }else{
            comprar.className = "btn comprar-boton";
            comprar.onclick = () => comprarTrabajador(el.id);
        }
    
        card.appendChild(titulo);
        card.appendChild(nombres);
        card.appendChild(precio);
        card.appendChild(bonus);
        card.appendChild(imagen);
        card.appendChild(comprar);
        trabajadoresContainer.appendChild(card);
    })
}

const avisos = document.getElementById("avisos");

function venderSlurm(){
    //Crear variable del boton para pasar a la siguiente ronda
    const siguienteRonda = document.getElementById("siguienteRonda");
    siguienteRonda.className = "siguienteRonda";
    //Asignar clase comprar.className += " noMostrar"; y vender.className += " noMostrar";
    comprar.className += " noMostrar";
    vender.className += " noMostrar";
    // Primero declaro compra exitosa false para que al salir, pueda volver a comprar
    compraExitosa = false;
    if (ronda <= 10) {
        if (trabajadoresAdquiridos.length == 0){
            avisos.innerText = "Avisos: No tienes trabajadores. Te recomiendo comprar, de lo contrario no tendras ventas en esta ronda";
            ventaRonda.slurmTotalRonda = 0;
            ventaRonda.ventaTotalRonda = 0;
        }else{
            avisos.innerText = "Nada nuevo, sin avisos por ahora";
            trabajadoresAdquiridos.forEach(el => {
                el.cantidadRonda = 0;
                el.ventaRonda = 0;
                el.cantidadRonda = parseInt(((Math.random()*10)+1) * el.productividad);
                el.ventaRonda = (el.cantidadRonda * 5000);
                crearCardAdquirido();
            });
            const dineroGenerado = trabajadoresAdquiridos.map((el) => el.ventaRonda);
            const totalDinero = dineroGenerado.reduce((acumulador,elemento) => acumulador + elemento, 0);
    
            const cantidadGenerada = trabajadoresAdquiridos.map((el) => el.cantidadRonda);
            const totalCantidad = cantidadGenerada.reduce((acumulador,elemento) => acumulador + elemento, 0);
    
            ventaRonda.slurmTotalRonda = totalCantidad;
            ventaRonda.ventaTotalRonda = totalDinero;
            
            actualizarInterfazDelJuego()
        }
        datosJugador.cajaRegistradora += ventaRonda.ventaTotalRonda;
        datosJugador.slurmVendida += ventaRonda.slurmTotalRonda;
        generarInterfaz();
        function otraRonda(){
            comprar.className = "comprar";
            vender.className = "vender";
            siguienteRonda.className = "siguienteRonda noMostrar";
        }
        ronda ++;
        siguienteRonda.addEventListener("click", otraRonda);
        generarInterfaz();
    } else {
        const fin = document.getElementById("finDelJuego");
        siguienteRonda.className = "siguienteRonda noMostrar";
        comprar.className += " noMostrar";
        vender.className += " noMostrar";
        fin.className = "finDelJuego";
        function finalizar(){
            //FINAL DEL JUEGO - REVISIÓN DE COMPUTOS
            ventaTotal = parseInt(datosJugador.cajaRegistradora - datosJugador.deudaInversion);
            if (ventaTotal < 0) {
                avisos.innerText = nombreJugador.value +", lamento informarte que has perdido. Más suerte la próxima vez\nReuniste $"+datosJugador.cajaRegistradora+" pero le debes $500.000 al juego, por lo tanto quedaste debiendo $"+ventaTotal;
            } else if (ventaTotal == 0) {
                avisos.innerText = nombreJugador.value +" Has perdido! No generaste dinero.\nReuniste $"+datosJugador.cajaRegistradora+" pero le debes $500.000 al juego, por lo tanto quedaste con $"+ventaTotal;
            } else {
                nombreJugador.value.toUpperCase;
                avisos.innerText = "FELICIDADES "+nombreJugador.value+"! Eres el ganador. Ahora puedes llevarte una Robotzuela y 2 barriles de Slurm!\nReuniste $"+datosJugador.cajaRegistradora+" pero le debes $500.000 al juego, por lo tanto tu ganancia es de $"+ventaTotal;
            } 
        }
        fin.addEventListener("click", finalizar);
        console.log(ronda);
    }
}