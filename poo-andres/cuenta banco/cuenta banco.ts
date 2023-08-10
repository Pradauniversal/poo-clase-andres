export class Cuenta {
    protected _saldo: number;
    protected _numConsignaciones: number;
    protected _numRetiros: number;
    protected _tasaAnual: number;
    protected _comisionMensual: number;

    constructor(saldoInicial: number, tasaAnual: number) {
        this._saldo = saldoInicial;
        this._numConsignaciones = 0;
        this._numRetiros = 0;
        this._tasaAnual = tasaAnual;
        this._comisionMensual = 0;
    }

    consignar(cantidad: number) {
        this._saldo += cantidad;
        this._numConsignaciones++;
    }

    retirar(cantidad: number) {
        if (cantidad <= this._saldo) {
            this._saldo -= cantidad;
            this._numRetiros++;
        } else {
            console.log("Saldo insuficiente para retirar.");
        }
    }

    calcularInteresMensual() {
        const interesMensual = (this._tasaAnual / 12) / 100 * this._saldo;
        this._saldo += interesMensual;
    }

    extractoMensual() {
        this._saldo -= this._comisionMensual;
        this.calcularInteresMensual();
    }
}
