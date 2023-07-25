export class Producto {
    private identificador: number
    private nombre: string
    private tipo: string
    private precio: number
    private pais: string
    private cantidad: number

    constructor(id:number,name:string,tipo:string,precio:number,country:string,cant:number) {
        this.identificador = id
        this.nombre = name
        this.tipo= tipo
        this.precio= precio
        this.cantidad= cant
    }


    public getidentificador(identificador: number)
}