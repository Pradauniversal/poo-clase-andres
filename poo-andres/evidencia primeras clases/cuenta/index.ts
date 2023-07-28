import { Cuenta } from "./cuenta";


let comprobacion =new Cuenta("andr", "396963396",9633696939)


console.log(comprobacion.mostrar());
console.log(comprobacion.ingresoDinero(1));
console.log(comprobacion.retiroDinero(939));



comprobacion.mostrar();
comprobacion.ingresoDinero(0.1);
comprobacion.retiroDinero(939);

