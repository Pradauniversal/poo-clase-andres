import { Cuenta } from "./cuenta banco";

import { CuentaAhorros } from "./cuenta Ahorro";
import { comprobarEstadoCuenta } from "./cuenta Ahorro";




const cuentaAhorros = new CuentaAhorros(15000, 5);
cuentaAhorros.consignar(2000);
cuentaAhorros.retirar(800);
cuentaAhorros.extractoMensual();
cuentaAhorros.imprimir();
comprobarEstadoCuenta(cuentaAhorros);



// console.log(cuentaAhorros);
console.log(comprobarEstadoCuenta);

