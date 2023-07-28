import { Persona } from "./persona";

let personaUno = new Persona("charles",30,3245966901,"vda-florencia", "popayan");
let personaDos = new Persona("diego", 31, 3005158764, "BelloHorizonte", "popayan");
let personTres = new Persona("fernando", 30, 3226934575, "cra15-18-63", "popayan");
let personaCuatro = new Persona("gabriela", 32, 257986423, "forthWort-217-11","dallas-tx");
let personaCinco: Persona = new Persona("sophi",16,3243699636,"colinas-apt-15","cali");

console.log(personaCuatro);
console.log(personaDos.getTelefono());
personaCinco.setEdad(24)
console.log(personaCinco.getEdad());
personTres.mostrardatos()

personaCinco.mayormenor()

