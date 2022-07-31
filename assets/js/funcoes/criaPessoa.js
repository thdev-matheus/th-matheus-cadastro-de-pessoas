import listaCadastrados from '../bancoDeDados/bancoDeDados.js';
import Pessoa from '../classes/pessoa.js';
import { inputs, cargo } from '../dom/elementos.js';

function criaPessoa() {
    const id = listaCadastrados.length;
    const nome = inputs[0].value;
    const sobrenome = inputs[1].value;
    const dataNasc = inputs[2].value;
    const email = inputs[3].value;
    const contato = inputs[4].value;
    const telefone = inputs[5].value;

    const pessoa = new Pessoa(id, nome, sobrenome, dataNasc, email, contato, telefone, cargo.value);

    return pessoa;
};

export { criaPessoa };
