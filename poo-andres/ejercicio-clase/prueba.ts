import { Comandante } from "./comandante";
import { Soldado } from "./soldado";

let comandante1=new Comandante("yimer","teniente","masculino")
console.log(comandante1.getNombreCom());
let soldado1 = new Soldado("brian", "01-20-21","masculino")
let soldado2 = new Soldado("sandra", "01-20-11","femenino")
let soldado3 = new Soldado("poche", "24-20-22","masculino")

comandante1.ingresarSoldado(soldado1)
comandante1.ingresarSoldado(soldado2)

console.log(comandante1.numeroDeSoldados());

comandante1.ingresarSoldado(soldado3)

console.log(comandante1.numeroDeSoldados());
comandante1.mostrarInformacion()

comandante1.getNombreCom()
let comandante2=new Comandante("jose","capitan","masculino")
console.log(comandante2.mostrarInformacion());

