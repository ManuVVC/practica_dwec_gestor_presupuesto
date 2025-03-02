'use strict';

export {mostrarDatoEnId, mostrarGastoWeb, mostrarGastosAgrupadosWeb};

function mostrarDatoEnId(idElemento, valor) {
    let elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.textContent = valor;
    }
}

function mostrarGastoWeb(idElemento,gasto) {    
    let elemento = document.getElementById(idElemento);
    if (elemento) {
        let divGasto = document.createElement('div');
        divGasto.className='gasto';
        divGasto.innerHTML = `
            <div class="gasto-descripcion">${gasto.descripcion}</div>
            <div class="gasto-fecha">${gasto.fecha}</div>
            <div class="gasto-valor">${gasto.valor}€</div>
            <div class="gasto-etiquetas">
                ${gasto.etiquetas.map(etiqueta => `<span class="gasto-etiquetas-etiqueta">${etiqueta}</span>`).join("")}
            </div>
        `;
        elemento.appendChild(divGasto);
    }
}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo) {
    let elemento = document.getElementById(idElemento);

    if (elemento) {
        let divAgrupacion = document.createElement("div");
        divAgrupacion.className = "agrupacion";

        let titulo = document.createElement("h3");
        titulo.textContent = `Gastos agrupados por ${periodo}`;
        divAgrupacion.appendChild(titulo);

        Object.entries(agrup).forEach(([clave, valor]) => {
            let divDato = document.createElement("div");
            divDato.className = "agrupacion-dato";
            divDato.innerHTML = `
                <span class="agrupacion-dato-clave">${clave} -- </span>
                <span class="agrupacion-dato-valor">${valor}€</span>
            `;
            divAgrupacion.appendChild(divDato);
        });

        elemento.appendChild(divAgrupacion);
    }
}