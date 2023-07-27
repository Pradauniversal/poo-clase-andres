import { Soldado } from "./soldado"

export class Comandante {
    private nombreCom: string
    private rango: string
    private genero: string
    private listaSoldados: Array<Soldado> = []


    constructor(nombre: string, rango: string, genero: string) {
        this.nombreCom = nombre
        this.rango = rango
        this.genero = genero
        this.listaSoldados = []


    }

    // metodo

    ingresarSoldado(soldado: Soldado) {
        this.listaSoldados.push(soldado)
    }

    numeroDeSoldados() {
        return this.listaSoldados.length
    }

    mostrarInformacion() {
        console.log("el comandante: " + this.nombreCom);


        if (Comandante){
        for (let i = 0; i < this.listaSoldados.length; i++) {
            console.log(this.listaSoldados[i].mostrarSoldado());
       

        }}
        else {
            console.log("no tiene soldados asignados");
            
        }

    }


    public setNombreCom(nombre: string) {
        this.nombreCom = nombre
    }
    public setRango(rango: string) {
        this.rango = rango;
    }
    public setGenero(genero: string) {
        this.genero = genero;
    }
    public getNombreCom() {
        return this.nombreCom
    }
    public getRango() {
        return this.rango
    }
    public getGenero() {
        return this.genero
    }

}