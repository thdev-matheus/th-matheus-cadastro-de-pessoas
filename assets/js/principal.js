import { botaoCadastrar, botaoPesquisar } from './dom/elementos.js';
import { atualizaExibeBancoDeDados } from './funcoes/atualizaExibeBancoDeDados.js.js';
import { mostraFiltro } from './funcoes/exibeFiltro.js';

botaoCadastrar.addEventListener('click', atualizaExibeBancoDeDados);
botaoPesquisar.addEventListener('click', mostraFiltro);
