'use stirct';
import * as gestionPresupuesto from "./gestionPresupuesto.js";
import * as gestionPresupuestoWeb from "./gestionPresupuestoWeb.js";

gestionPresupuesto.actualizarPresupuesto(1500);
gestionPresupuestoWeb.mostrarDatoEnId("presupuesto", gestionPresupuesto.mostrarPresupuesto());

let gastos = [
    new gestionPresupuesto.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida"),
    new gestionPresupuesto.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida"),
    new gestionPresupuesto.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte"),
    new gestionPresupuesto.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina"),
    new gestionPresupuesto.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros"),
    new gestionPresupuesto.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros"),
];

/*gestionPresupuesto.anyadirGastos(gastos);*/
gastos.forEach(gasto => gestionPresupuesto.anyadirGasto(gasto));

gestionPresupuestoWeb.mostrarDatoEnId("gastos-totales", "Total de Gastos: " + gestionPresupuesto.calcularTotalGastos() + " €");
gestionPresupuestoWeb.mostrarDatoEnId("balance-total", "Balance actual de: " + gestionPresupuesto.calcularBalance() + " €");

gestionPresupuesto.listarGastos().forEach(gasto => gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-completo", gasto));


let parametro = gestionPresupuesto.filtrarGastos({
    fechaDesde: "2021-09-01",
    fechaHasta: "2021-09-30",
});
parametro.forEach(gasto => gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-filtrado-1", gasto));

let parametro2 = gestionPresupuesto.filtrarGastos({valorMinimo: 50});
parametro2.forEach(gasto => gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-filtrado-2", gasto));

let parametro3 = gestionPresupuesto.filtrarGastos({valorMinimo: 200, etiquetas: ["seguros"] });
parametro3.forEach(gasto => gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-filtrado-3", gasto));

let parametro4 = gestionPresupuesto.filtrarGastos({valorMaximo: 50, etiquetas: ["comida","transporte"] });
parametro4.forEach(gasto => gestionPresupuestoWeb.mostrarGastoWeb("listado-gastos-filtrado-4", gasto));

gestionPresupuestoWeb.mostrarGastosAgrupadosWeb(
    "agrupacion-dia",
    gestionPresupuesto.agruparGastos("dia"),
    "día"
);

gestionPresupuestoWeb.mostrarGastosAgrupadosWeb(
    "agrupacion-mes",
    gestionPresupuesto.agruparGastos("mes"),
    "mes"
);

gestionPresupuestoWeb.mostrarGastosAgrupadosWeb(
    "agrupacion-anyo",
    gestionPresupuesto.agruparGastos("anyo"),
    "año"
);