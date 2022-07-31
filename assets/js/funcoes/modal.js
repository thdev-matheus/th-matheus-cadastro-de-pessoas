import { modalContainer, modalMensagem, modalBotao } from "../dom/elementos.js";

function retiraModal() {
    modalContainer.classList.remove('mostrar');
};

function modalMenorDeIdade() {
    modalContainer.classList.add('mostrar');
    modalMensagem.innerText = 'Não é possível realizar cadastro de pessoas menores de 18 anos!';

    modalBotao.addEventListener('click', retiraModal);
};

function modalJaExisteNoCadastro() {
    modalContainer.classList.add('mostrar');
    modalMensagem.innerText = 'O e-mail informado já consta em nosso cadastro!';

    modalBotao.addEventListener('click', retiraModal);
};

function modalCamposEmBranco() {
    modalContainer.classList.add('mostrar');
    modalMensagem.innerText = 'Ainda há campos em branco. Favor preenchê-los.';

    modalBotao.addEventListener('click', retiraModal);
};

export { modalMenorDeIdade, modalJaExisteNoCadastro, modalCamposEmBranco };