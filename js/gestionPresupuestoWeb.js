'use strict';

export {mostrarDatoEnId, mostrarGastoWeb, mostrarGastosAGrupados};

function mostrarDatoEnId(idElemento, valor) {
    let elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.textContent = valor;
    }
}

function mostrarGastoWeb(idElemento,gasto) {    
}

function mostrarGastosAGrupados(gastos) {
}