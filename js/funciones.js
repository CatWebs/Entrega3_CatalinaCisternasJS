/*function mostrarTrabajadores() {
    for (const iterator of trabajadoresDisponibles) {
        const nombre = iterator.nombre;
        const precio = iterator.precio;
        const id = iterator.id;
        const porcentaje = iterator.porcentaje;
        let frasePresentar = ("Trabajador N°"+id+"\nSu nombre es "+nombre+", tiene un valor de $"+precio+ " y un incremento de producción del "+porcentaje);
        arrayPresentar.push(frasePresentar);
        let fraseListado = `${id}. ${nombre}`;
        arrayFraseListado.push(fraseListado);
    };
    frasePresentacion = arrayPresentar.join("\n");
    fraseListadoPorId = arrayFraseListado.join("\n");
};
*/

// En esta función creo la mini card que muestra a los trabajadores adquiridos (con los que puedo jugar)
function crearCardAdquirido(trabajador){
    const container = document.getElementById("misTrabajadores");
    const card = document.createElement("div");
    card.className = "cardAdquiridos";
    card.id = "cardAdquirido";
    
    const imagen = document.createElement("img");
    const srcComponente = trabajador + 1;
    imagen.src = `./media/${srcComponente}.png`;

    const slurm = document.createElement("p");
    slurm.innerText = "Slurm Vendida: ";
    
    const dinero = document.createElement("p");
    dinero.innerText = "Dinero generado esta ronda: ";

    card.appendChild(imagen);
    card.appendChild(slurm);
    card.appendChild(dinero);
    container.appendChild(card);

};

// En esta función pusheo el nuevo trabajador y de paso le creo una card (La de la línea 26)
function agregandoTrabajador(id) { 
    trabajadoresAdquiridos.push(trabajadoresDisponibles[id]);
    console.log(trabajadoresAdquiridos);
    crearCardAdquirido(id);
    let titulo = document.getElementById("tituloMisTrabajadores");
    titulo.innerText = "Trabajadores Adquiridos";
}

//Con esta función incorporo la de agregarTrabajador de la línea 51 y además busco al que compré, lo quito de disponible y resto su precio.
function comprarTrabajador(id){
    agregandoTrabajador(id - 1);
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



function sueldoTrabajador() {
    let sueldo;
    let indicador;
    indicador = trabajadoresAdquiridos.length;
    sueldo = trabajadoresAdquiridos[indicador-1].precio;
    datosJugador.cajaRegistradora = parseInt(datosJugador.cajaRegistradora-sueldo);
}

function elegirTrabajador(opcion){
    switch (opcion) { 
        case 1:
            if (trabajadoresAdquiridos.includes(zoidberg)) {
                alert("Lo siento, ya tienes este trabajador, por favor prueba con otro");
            } else {
                agregandoTrabajador(0);
                sueldoTrabajador();
            }
            break;
        case 2:
            if (trabajadoresAdquiridos.includes(bender)) {
                alert("Lo siento, ya tienes este trabajador, por favor prueba con otro");
            } else {
                agregandoTrabajador(1);
                sueldoTrabajador();
            }
            break;
        case 3:
            if (trabajadoresAdquiridos.includes(fry)) {
                alert("Lo siento, ya tienes este trabajador, por favor prueba con otro");
            } else {
                agregandoTrabajador(2);
                sueldoTrabajador();
            }
            break;
        case 4:
            if (trabajadoresAdquiridos.includes(amy)) {
                alert("Lo siento, ya tienes este trabajador, por favor prueba con otro");
            } else {
                agregandoTrabajador(3);
                sueldoTrabajador();
            }
            break;                           
        case 5:
            if (trabajadoresAdquiridos.includes(hermes)) {
                alert("Lo siento, ya tienes este trabajador, por favor prueba con otro");
            } else {
                agregandoTrabajador(4);
                sueldoTrabajador();
            }
            break;    
        case 6:
            if (trabajadoresAdquiridos.includes(leela)) {
                alert("Lo siento, ya tienes este trabajador, por favor prueba con otro");
            } else {
                agregandoTrabajador(5);
                sueldoTrabajador();
            }
            break;                       
        default:
                alert("Lo siento, esa opción no es válida, por favor intenta nuevamente");
        break;
    }
}

function ventaTrabajadores(){
    for (let i = 0; i < trabajadoresAdquiridos.length; i++) {
        let productividad = trabajadoresAdquiridos[i].productividad;
        trabajadoresAdquiridos[i].cantidadRonda = parseInt(((Math.random()*10)+1) * productividad);
        trabajadoresAdquiridos[i].ventaRonda = trabajadoresAdquiridos[i].cantidadRonda * 5000;
        alert("Trabajador "+ trabajadoresAdquiridos[i].nombre + " Vendió "+trabajadoresAdquiridos[i].cantidadRonda +" Slurms generando un total de $" + trabajadoresAdquiridos[i].ventaRonda);
        };
}