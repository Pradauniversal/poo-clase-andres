export class Cuenta{
    private Titular :string
    private NumCuenta: string
    private Efectivo : number

constructor (persona: string, numero: string, dinero: number){
    this.Titular=persona
    this.NumCuenta=numero
    this.Efectivo= dinero
}

public get Persona(){
    return this.Titular
}
public get Numero(){
    return this.NumCuenta
}
public get Dinero(){
    return this.Efectivo
}
public set Persona(persona: string) {
    this.Titular = persona;
}
public set Numero(numero : string) {
    this.NumCuenta = numero;
}
public set Dinero(dinero : number) {
    this.Efectivo = dinero;
}
public mostrar() {
            console.log("los datos de la cuenta son: " + 
            "\ntitular: " + this.Titular  + 
            "\n numero de cuenta: " + this.NumCuenta + 
            "\n efectivo disponible: " + this.Efectivo)
}
public ingresoDinero(dinero:number){
    let ingreso = this.Efectivo + dinero 
    this.Efectivo = ingreso
    console.log("se han ingresado con exito: " + dinero + "$"  + 
    "\n la cuenta ahora tiene: " + ingreso + "$");
}
public retiroDinero(dinero:number){
    if (dinero > this.Efectivo){
        console.log("No se ha podido realizar el retiro de " + dinero +  
        "\n $, fondos insuficientes.");   
    }
    else{
        console.log("anteriormente, se tenian: ", this.Efectivo + "$");
        let retiro = this.Efectivo - dinero 
        this.Efectivo = retiro
        console.log("Actualmente, se han retirado con exito: " + dinero + "$"  + 
        "\n la cuenta ahora tiene: " + retiro + "$");
    }
}


}