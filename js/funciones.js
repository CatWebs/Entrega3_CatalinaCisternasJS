//  VARIABLES PRINCIPALES
let trabajadoresAdquiridos;
if(localStorage.getItem("trabajadoresAdquiridos")){
    trabajadoresAdquiridos = JSON.parse(localStorage.getItem("trabajadoresAdquiridos"));
}else{
    trabajadoresAdquiridos = [];
}

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

// En esta función creo la mini card que muestra a los trabajadores adquiridos (con los que puedo jugar)
function crearCardAdquirido(trabajador){
    const container = document.getElementById("misTrabajadores");
    const card = document.createElement("div");
    card.className = "cardAdquiridos";
    
    const imagen = document.createElement("img");
    const srcComponente = trabajador + 1;
    imagen.src = `./media/${srcComponente}.png`;

    const slurm = document.createElement("p");
    slurm.className = `slurm${srcComponente}`;
    slurm.innerText = "Slurm Vendida: ";
    
    const dinero = document.createElement("p");
    dinero.className = `dinero${srcComponente}`;
    dinero.innerText = "Dinero generado esta ronda: ";

    card.appendChild(imagen);
    card.appendChild(slurm);
    card.appendChild(dinero);
    
    
    container.appendChild(card);

};

// En esta función pusheo el nuevo trabajador y de paso le creo una card (La de la línea 26)
function agregandoTrabajador(id) { 
    trabajadoresAdquiridos.push(trabajadoresDisponibles[id]);
    localStorage.setItem("trabajadoresAdquiridos", JSON.stringify(trabajadoresAdquiridos));
    crearCardAdquirido(id);
    trabajadoresContainer.innerHTML = "";
    let titulo = document.getElementById("tituloMisTrabajadores");
    titulo.innerText = "Trabajadores Adquiridos";
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
    compraExitosa = false;
    comprar.className = "comprar";
    if (trabajadoresAdquiridos.length == 0){
        avisos.innerText += " No tienes trabajadores. Te recomiendo comprar, de lo contrario no tendras ventas en esta ronda";
    }else{
        avisos.innerText = "Nada nuevo, sin avisos por ahora";
        trabajadoresAdquiridos.forEach(el => {
            el.cantidadRonda = 0;
            el.ventaRonda = 0;
            el.cantidadRonda = parseInt(((Math.random()*10)+1) * el.productividad);
            el.ventaRonda = (el.cantidadRonda * 5000);
        });
        const dineroGenerado = trabajadoresAdquiridos.map((el) => el.ventaRonda);
        console.log(dineroGenerado);
        const totalDinero = dineroGenerado.reduce((acumulador,elemento) => acumulador + elemento, 0);
        console.log(totalDinero);

        const cantidadGenerada = trabajadoresAdquiridos.map((el) => el.cantidadRonda);
        console.log(cantidadGenerada);
        const totalCantidad = cantidadGenerada.reduce((acumulador,elemento) => acumulador + elemento, 0);
        console.log(totalCantidad);
    }
}

/*

function ventaTrabajadores(){
    for (let i = 0; i < trabajadoresAdquiridos.length; i++) {
        let productividad = trabajadoresAdquiridos[i].productividad;
        trabajadoresAdquiridos[i].cantidadRonda = parseInt(((Math.random()*10)+1) * productividad);
        trabajadoresAdquiridos[i].ventaRonda = trabajadoresAdquiridos[i].cantidadRonda * 5000;
        alert("Trabajador "+ trabajadoresAdquiridos[i].nombre + " Vendió "+trabajadoresAdquiridos[i].cantidadRonda +" Slurms generando un total de $" + trabajadoresAdquiridos[i].ventaRonda);
        };
}
*/