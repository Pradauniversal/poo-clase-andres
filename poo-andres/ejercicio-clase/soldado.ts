export class Soldado{
    private nombreSol:string
    private fechaIngreso:string
    private genero:string

constructor(nombre:string,fecha:string,genero:string){



this.nombreSol=nombre
this.fechaIngreso=fecha
this.genero=genero 
}

/**
 * mostrarSoldado
 */
public mostrarSoldado() {
    return "nombre: "+ this.nombreSol +
    "\n fecha de ingreso: "+ this.fechaIngreso+
    "\n genero: "+ this.genero
}

public setNombreSol(nombre : string) {
    this.nombreSol = nombre;
}
public setFechaIngreso(fecha : string) {
    this.fechaIngreso=fecha;
}
public setGenero(genero : string) {
    this.genero = genero;
}
public getNombreSol(nombre : string) {
   return this.nombreSol = nombre;
}
public getFechaIngreso(fecha : string) {
   return this.fechaIngreso = fecha;
}
public getGenero(genero : string) {
   return this.genero = genero;
}

}
