import { Cuenta } from "./cuenta banco";

import { CuentaAhorros } from "./cuenta Ahorro";




const cuentaAhorros = new CuentaAhorros(15000, 5);
cuentaAhorros.consignar(0);
cuentaAhorros.retirar(50000000);
cuentaAhorros.extractoMensual();
cuentaAhorros.imprimir();




// console.log(cuentaAhorros);



