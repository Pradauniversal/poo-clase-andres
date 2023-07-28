import { Operacion } from "./operaciones";

let primeraOperacion: Operacion = new Operacion(5,7)
let segundaOperacion = new Operacion(6,9)
let terceraOperacion = new Operacion(90,3)
let cuartaOperacion = new Operacion(738,369)


console.log(segundaOperacion.multiplicacion());


console.log(terceraOperacion.division());


console.log(primeraOperacion.suma());


console.log(cuartaOperacion.resta());
