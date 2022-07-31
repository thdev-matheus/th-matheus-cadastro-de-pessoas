const inputs = document.querySelectorAll('input');
const cargo = document.getElementById('cargo');
const botaoCadastrar = document.getElementById('register-button');
const totalCadastrados = document.getElementById('total-cadastrados');
const filtros = document.getElementById('cargoOption');
const botaoPesquisar = document.getElementById('search-button');
const ul = document.getElementById('lista-de-cadastrados');
const modalContainer = document.getElementById('modal-container');
const modalMensagem = document.getElementById('modal__mensagem');
const modalBotao = document.getElementById('modal__botao');

export { inputs, cargo, botaoCadastrar, totalCadastrados, filtros, botaoPesquisar, ul, modalContainer, modalMensagem, modalBotao };
