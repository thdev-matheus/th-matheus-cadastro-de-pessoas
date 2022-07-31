import Pessoa from '../classes/pessoa.js';
import { filtros } from '../dom/elementos.js';

function exibeFiltro(filtro) {
    if (filtro === 'Aluno') {
        return Pessoa.filtroAlunos();
    } else if (filtro === 'Facilitador'){
        return Pessoa.filtroFacilitador();
    } else if (filtro === 'Instrutor') {
        return Pessoa.filtroInstrutor();
    } else {
        return Pessoa.filtroTodos();
    };
};

function mostraFiltro(e) {
    e.preventDefault();
    exibeFiltro(filtros.value);
};

export { exibeFiltro, mostraFiltro };
