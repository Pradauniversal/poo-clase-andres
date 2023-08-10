import { Cuenta } from "./cuenta banco";

export class CuentaAhorros extends Cuenta {
    private _cuentaActiva: boolean;

    constructor(saldoInicial: number, tasaAnual: number) {
        super(saldoInicial, tasaAnual);
        this._cuentaActiva = saldoInicial >= 10000;
    }

    consignar(cantidad: number): void {
        if (this._cuentaActiva) {
            super.consignar(cantidad);
            this._cuentaActiva = this._saldo >= 10000;
        } else {
            console.log("La cuenta de ahorros está inactiva.");
        }
    }

    retirar(cantidad: number): void {
        if (this._cuentaActiva) {
            super.retirar(cantidad);
            this._cuentaActiva = this._saldo >= 10000;
        } else {
            console.log("La cuenta de ahorros está inactiva.");
        }
    }

    extractoMensual(): void {
        if (this._numRetiros > 4) {
            this._comisionMensual += (this._numRetiros - 4) * 1000;
        }
        super.extractoMensual();
        this._cuentaActiva = this._saldo >= 10000;
    }

    get cuentaActiva(): boolean {
        return this._cuentaActiva;
    }

    imprimir(): void {
        console.log(`Saldo: $${this._saldo.toFixed(2)}`);
        console.log(`Comisión Mensual: $${this._comisionMensual.toFixed(2)}`);
        console.log(`Número de transacciones realizadas: ${this._numConsignaciones + this._numRetiros}`);
    }
}

// Función externa de comprobación
export function comprobarEstadoCuenta(cuenta: CuentaAhorros): void {
    console.log(`La cuenta de ahorros está ${cuenta.cuentaActiva ? 'activa' : 'inactiva'}`);
}
