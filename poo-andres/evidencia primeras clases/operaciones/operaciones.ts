export class Operacion{
    private numero1: number
    private numero2: number

    constructor(numeroUno: number, numeroDos: number){
        this.numero1=numeroUno
        this.numero2=numeroDos

    }

    public get NumeroUno(){
        return this.numero1
    }
    
    public get NumeroDos(){
        return this.numero2
    }
     
    public set NumeroUno (numeroUno: number) {
        this.NumeroUno = numeroUno;
    }
    
    public set NumeroDos(numeroDos : number) {
        this.NumeroDos = numeroDos;
    }
    
/**
 * suma
 */
public suma() {
    let resultadoSuma: number = this.numero1 +this.numero2
    console.log("el resultado de la suma es: ", resultadoSuma);
    
}

/**
 * resta
 */
public resta() {
    let resultadoResta: number =this.numero1 - this.numero2
    console.log("el resultado de la resta es: ", resultadoResta);
    
}

/**
 * multiplicacion
 */
public multiplicacion() {
    let resultadoMultiplicacion: number = this.numero1 * this.numero2
    console.log("el resultado de la multiplicacion es: ",resultadoMultiplicacion);
    
}

/**
 * division
 */
public division() {
    let resultadoDivision: number =this.numero1 / this.numero2
    console.log("el resultado de la division es: ", resultadoDivision);
    
}

}