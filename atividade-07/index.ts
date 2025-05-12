import { GASOLINA, ETANOL, Combustivel } from './combustivel';
import { Posto } from './posto';

const posto1 = new Posto(
    "Posto Shell",
    new Combustivel(GASOLINA, 5.99),
    new Combustivel(ETANOL, 4.19)
);

const posto2 = new Posto(
    "B2",
    new Combustivel(GASOLINA, 6.29),
    new Combustivel(ETANOL, 4.49)
);

const posto3 = new Posto(
    "Ipiranga",
    new Combustivel(GASOLINA, 5.79),
    new Combustivel(ETANOL, 3.99)
);

const resultados = [
    posto1.sugereCombustivel(),
    posto2.sugereCombustivel(),
    posto3.sugereCombustivel()
];

console.log(resultados.join('\n'));