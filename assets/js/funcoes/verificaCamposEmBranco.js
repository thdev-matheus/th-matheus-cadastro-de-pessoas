import { inputs } from '../dom/elementos.js';

function verificaCamposEmBranco() {
    const nome = inputs[0].value;
    const sobrenome = inputs[1].value;
    const dataNasc = inputs[2].value;
    const email = inputs[3].value;
    const contato = inputs[4].value;
    const telefone = inputs[5].value;

    if (nome === '' || sobrenome === '' || dataNasc === '' || email === '' || contato === '' || telefone === '') {
        return true;
    } else {
        return false;
    };
};

export { verificaCamposEmBranco };
