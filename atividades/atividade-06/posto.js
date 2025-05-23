// posto.js
export class Posto {
    constructor(nome, gasolina, etanol) {
        this.nome = nome;
        this.gasolina = gasolina;
        this.etanol = etanol;
    }

    sugereCombustivel() {
        const proporcao = this.etanol.preco / this.gasolina.preco;
        const porcentagem = (proporcao * 100).toFixed(2);
        const mensagem = proporcao < 0.7
            ? `No posto ${this.nome}, é mais vantajoso abastecer com ETANOL (${porcentagem}% do preço da gasolina).`
            : `No posto ${this.nome}, NÃO é vantajoso abastecer com ETANOL (${porcentagem}% do preço da gasolina).`;
        return mensagem;
    }
}