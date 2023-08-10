import { Cuenta } from "./cuenta banco";

import { CuentaAhorros } from "./cuenta Ahorro";




const cuentaAhorros = new CuentaAhorros(15000, 5);
cuentaAhorros.consignar(10000);
cuentaAhorros.retirar(30000);
cuentaAhorros.extractoMensual();
cuentaAhorros.imprimir();




// console.log(cuentaAhorros);
console.log(cuentaAhorros);

