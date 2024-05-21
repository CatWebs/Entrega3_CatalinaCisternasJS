function mostrarTrabajadores() {
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

const agregandoTrabajador = (u) => {
    trabajadoresAdquiridos.push(trabajadoresDisponibles[u]);
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