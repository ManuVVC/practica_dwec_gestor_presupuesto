'use strict';
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;

function actualizarPresupuesto(valor) {
    // TODO
        if(isNaN(valor)){
        return  -1;
        console.log("El valor indicado no es un número.")
    } else if (valor<0) {
        return  -1;
        console.log("El valor ha de ser mayor que 0.")
    } 
    presupuesto = valor;

    return presupuesto;
}

function mostrarPresupuesto() {
    // TODO
    let texto= 'Tu presupuesto actual es de ${presupuesto} €.';
    return texto;
}

function CrearGasto(descripcion,valor) {
    // TODO
        this.descripcion=descripcion;
        this.valor= (valor>=0) ? valor : 0 ;
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
