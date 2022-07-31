import listaCadastrados from '../bancoDeDados/bancoDeDados.js';
import { filtros } from '../dom/elementos.js';
import { verificaCamposEmBranco } from './verificaCamposEmBranco.js';
import { criaPessoa } from './criaPessoa.js';
import { atualizaTotalDeCadastrados } from './atualizaTotalDeCadastrados.js';
import { exibeFiltro } from './exibeFiltro.js';
import { limpaInputs } from './limpaInputs.js';
import { modalMenorDeIdade, modalJaExisteNoCadastro, modalCamposEmBranco } from './modal.js'

function atualizaExibeBancoDeDados(e) {
    e.preventDefault();

    const novaPessoa = criaPessoa();
    
    if (novaPessoa.verificaMenorDeIdade()) {
        limpaInputs();
        return modalMenorDeIdade();
    } else if (novaPessoa.verificaEmail()) {
        limpaInputs();
        return modalJaExisteNoCadastro();
    };
    
    if (verificaCamposEmBranco()) {
        return modalCamposEmBranco();
    };
    
    listaCadastrados.push(novaPessoa);
    atualizaTotalDeCadastrados();
    exibeFiltro(filtros.value);
    limpaInputs();
};

export { atualizaExibeBancoDeDados };
