import { Carro } from "./clases/carro";

let carroSandra: Carro = new Carro(2023,"LWR 260", "renault",5,"rojo")
let carroCharles: Carro = new Carro(2023,"por 001",  "ford",5, "blanco")
let carroDebrahian: Carro = new Carro(2028,"VIH 007", "TEZLA",8,"negro")

carroCharles.encender();
let placaCarroDebrahian: string = carroDebrahian.getPlaca()
console.log(placaCarroDebrahian);
console.log(carroDebrahian.getPlaca());
console.log(carroSandra.getPlaca());


carroDebrahian.setPlaca("herpes 123")
console.log(carroDebrahian.getPlaca());


console.log("carro charles ", carroCharles,"carro brahian ",carroDebrahian,"carro sandra ",carroSandra);



