export const GASOLINA = "GASOLINA";
export const ETANOL = "ETANOL";

export class Combustivel {
    constructor(tipo, preco) {
        this.tipo = tipo;
        this.preco = preco;
    }
}