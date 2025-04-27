export const GASOLINA = "GASOLINA";
export const ETANOL = "ETANOL";

export class Combustivel {
    tipo: string;
    preco: number;

    constructor(tipo: string, preco: number) {
        this.tipo = tipo;
        this.preco = preco;
    }
}