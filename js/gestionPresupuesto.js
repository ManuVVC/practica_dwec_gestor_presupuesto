'use strict';
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global

let presupuesto = 0;
let gastos = [];
let idGasto =0;

function actualizarPresupuesto(valor) {
    // TODO
    if(isNaN(valor)){
        console.log("El valor indicado no es un número.");
        return  -1;
    } else if (valor<0) {
        console.log("El valor ha de ser mayor que 0.");
        return  -1;
    } 
    presupuesto = valor;
    return presupuesto;
}

function mostrarPresupuesto() {
    // TODO
    let texto= `Tu presupuesto actual es de ${presupuesto} €`;
     return texto;
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    // TODO
        this.descripcion=descripcion;
        this.valor= (valor>=0) ? valor : 0 ;
        this.fecha = (fecha) ? Date.parse(fecha) : Date.now();
        this.etiquetas = (etiquetas === null) ?  [] : etiquetas;

        this.mostrarGasto = function(){
            let mensaje = (`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`);
            return mensaje;
        }
        
        this.mostrarGastoCompleto = function(){
            let fecha = new Date(this.fecha);
            let mensaje = (`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\n`);
            mensaje += (`Fecha: ${fecha.toLocaleString()}\n`);
            mensaje+= (`Etiquetas:\n`);
            for (let etiqueta of this.etiquetas){
                mensaje += (`- ${etiqueta}\n`);
            }
            return mensaje;
        }

        this.actualizarDescripcion = function(nuevaDescripcion){
            this.descripcion=nuevaDescripcion;
        }

        this.actualizarValor = function (nuevoValor){
           if (nuevoValor>=0) {
             this.valor = nuevoValor;
           }
        }

        this.actualizarFecha = function(fecha){
            if (!isNaN(Date.parse(fecha))){
                this.fecha= Date.parse(fecha)
            } 
        }

        this.anyadirEtiquetas = function(...nuevasEtiquetas){
            for (let etiqueta of nuevasEtiquetas){
                if(!this.etiquetas.includes(etiqueta)){
                    this.etiquetas.push(etiqueta);
                }
            }
        }

        this.borrarEtiquetas = function(...etiquetasBorrar){
            for (let etiqueta of etiquetasBorrar){
                let id = this.etiquetas.indexOf(etiqueta)
                if (id>=0){
                    this.etiquetas.splice(id,1);
                }
            }
        }

        this.obtenerPeriodoAgrupacion = function(periodo){
            let fecha = new Date(this.fecha).toISOString();
            if(periodo== "dia"){
                return fecha.substring(0,10)
            }
            if (periodo== "mes"){
                return fecha.substring(0,7)
            } 
            if(periodo == "anyo"){
                return fecha.substring(0,4)
            }
        }
}

function listarGastos(){
    return gastos;
}

function anyadirGasto(nuevoGasto){
    nuevoGasto.id=idGasto;
    idGasto++;
    gastos.push(nuevoGasto)
}

function borrarGasto(borraGasto){
    let id = gastos.findIndex(item => item.id == borraGasto);
    
    if (id >= 0)
    {
        gastos.splice(id, 1);
    }    
}

function calcularTotalGastos(){
    let total=0;
    for (let gasto of gastos){
        total+= gasto.valor;
    }
    return total;
}
function calcularBalance(){
    let balance = presupuesto - calcularTotalGastos();
    return balance;
}

function filtrarGastos(parametro){
    let gastosFiltrados = gastos.filter(function (gasto){
        let valido = true;
        if(parametro.fechaDesde){
            if(gasto.fecha < Date.parse(parametro.fechaDesde)){
                valido=false;
            }
        }
        if (parametro.fechaHasta){
            if (gasto.fecha > Date.parse(parametro.fechaHasta)){
                valido = false;
            }
        }
        if (parametro.valorMinimo){
            if(gasto.valor<parametro.valorMinimo){
                valido=false;
            }
        }
        if (parametro.valorMaximo){
            if(gasto.valor>parametro.valorMaximo){
                valido=false;
            }
        }
        if (parametro.descripcionContiene){
            if(!gasto.descripcion.includes(parametro.descripcionContiene)){
                valido=false;
            }
        }
        if (parametro.etiquetasTiene){
            let tiene=true;
            for (let i in parametro.etiquetasTiene)
            {
                for (let j in gasto.etiquetas)
                {
                    if (parametro.etiquetasTiene[i] == gasto.etiquetas[j])
                    {                        
                        tiene = false;
                    }
                }
            }
            if (tiene){
                valido= false;
            }
        }
        return valido;
    });
    return gastosFiltrados;
}
        /*
        
        
        
        */
      


function agruparGastos(){

}
// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos, 
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    filtrarGastos,
    agruparGastos
}
