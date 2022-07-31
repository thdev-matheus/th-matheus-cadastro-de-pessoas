import listaCadastrados from '../bancoDeDados/bancoDeDados.js';
import { totalCadastrados } from '../dom/elementos.js';


function atualizaTotalDeCadastrados() {
    totalCadastrados.innerText = listaCadastrados.length;
};

export { atualizaTotalDeCadastrados };
