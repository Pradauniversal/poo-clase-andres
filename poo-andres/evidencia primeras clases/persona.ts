export class Persona{
    private nombre: string;
    private edad: number;
    private telefono: number;
    private direccion: string;
    private ciudad: string;

    constructor(name:string, year:number, tel:number, dir:string, city:string){
        this .nombre= name;
        this .edad= year;
        this .telefono = tel;
        this .direccion = dir;
        this .ciudad= city;

    }


public getNombre() : string {
    return this.nombre
}
public getEdad() : number {
    return this.edad
}
public getTelefono() : number {
    return this.telefono
}
public getDireccion() : string {
    return this.direccion
}
public getCiudad() : string {
    return this.ciudad
}


public setNombre(nombre : string) {
    this.nombre = nombre;
}
public setEdad(edad : number) {
    this.edad = edad;
}
public setTelefono(telefono : number) {
    this.telefono = telefono;
}
public setDireccion(direccion : string) {
    this.direccion = direccion;
}
public setCiudad(ciudad : string) {
    this.ciudad = ciudad;
}

public mostrardatos(){
    console.log("\nnombre: "+ this.nombre +
                "\nedad: " + this.edad +
                 "\ntelefono: "+ this.telefono+
                  "\ndireccion: "+ this.direccion+
                   "\nciudad: "+ this.ciudad);
    
}

public mayormenor(){
    if (this.edad<18) {
        console.log("es menor de edad.");
        
        
    } else {
        console.log("es mayor de edad.");
        
        
    }
}

// /**
//  * datosPersona
//  */
// console.log("estos son los datos");

// public datosPersona() {
//     console.log("estos son los datos");
    
    
// }

}