import { GASOLINA, ETANOL, Combustivel } from './combustivel.js';
import { Posto } from './posto.js';

document.getElementById('postoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const resultados = [];

    for (let i = 1; i <= 3; i++) {
        const nome = form[`nome${i}`].value;
        const gasolina = parseFloat(form[`gasolina${i}`].value);
        const etanol = parseFloat(form[`etanol${i}`].value);

        const posto = new Posto(
            nome,
            new Combustivel(GASOLINA, gasolina),
            new Combustivel(ETANOL, etanol)
        );

        resultados.push(posto.sugereCombustivel());
    }

    document.getElementById('resultado').innerHTML = resultados.join('<br>');
});