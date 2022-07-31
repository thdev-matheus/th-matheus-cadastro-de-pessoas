import listaCadastrados from '../bancoDeDados/bancoDeDados.js';
import { ul } from '../dom/elementos.js';

class Pessoa {
    constructor (id, nome, sobrenome, dataNasc, email, contato, telefone, cargo) {
        this._id = id
        this._nome = nome.toLowerCase().trim();
        this._sobrenome = sobrenome.toLowerCase().trim();
        this._dataNasc = dataNasc;
        this._email = email.toLowerCase().trim();
        this._contato = contato.toLowerCase().trim();
        this._telefone = telefone;
        this._cargo = cargo;
    };

    static criaAddUsuarioLista(pessoa) {
        const li = document.createElement('li');
        const priPar = document.createElement('p');
        const segPar = document.createElement('p');
        const terPar = document.createElement('p');

        priPar.classList.add('usuario-nome-sobrenome');
        priPar.innerText = `${pessoa._nome} ${pessoa._sobrenome}`;
        segPar.classList.add('usuario-email');
        segPar.innerText = pessoa._email;
        terPar.classList.add('usuario-cargo');
        terPar.innerText = pessoa._cargo;

        li.append(priPar, segPar, terPar);
        ul.append(li);
    };

    static filtroTodos() {
        ul.innerHTML = '';

        listaCadastrados.forEach((cadastrado) => {
            this.criaAddUsuarioLista(cadastrado);
        });
    };
    
    static filtroAlunos() {
        ul.innerHTML = '';

        const alunos = listaCadastrados.filter((cadastrado) => {
            return cadastrado._cargo === 'Aluno';
        });

        alunos.forEach((cadastrado) => {
            this.criaAddUsuarioLista(cadastrado);
        });
    };
    
    static filtroFacilitador() {
        ul.innerHTML = '';

        const facilitadores = listaCadastrados.filter((cadastrado) => {
            return cadastrado._cargo === 'Facilitador';
        });

        facilitadores.forEach((cadastrado) => {
            this.criaAddUsuarioLista(cadastrado);
        });
    };
    
    static filtroInstrutor() {
        ul.innerHTML = '';

        const instrutores = listaCadastrados.filter((cadastrado) => {
            return cadastrado._cargo === 'Instrutor';
        });

        instrutores.forEach((cadastrado) => {
            this.criaAddUsuarioLista(cadastrado);
        });
    };

    verificaEmail() {
        if (listaCadastrados.length === 0) {
            return false;
        };

        return listaCadastrados.some((cadastrado) => {
            return cadastrado._email === this._email;
        });
    };

    verificaMenorDeIdade() {
        let hoje = new Date();
        let nascimento = new Date(this._dataNasc);
        let idade = hoje - nascimento;
    
        if (idade < 567648000000) {
            return true;
        } else {
            return false;
        };
    };
};

export default Pessoa;
