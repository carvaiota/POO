import Animal from "./Animal.js";

class Humano extends Animal {

    profissao;
    #dinheiro;
    #saldo = 0;

    constructor(nome, peso, idade, profissao) {
        super(nome, peso, idade);

        this.profissao = profissao;
        this.#dinheiro = 0;
    }

    Trabalhar() {
        console.log(`${this.nome} está trabalhando como ${this.profissao}`);

        this.#dinheiro += 100;

        console.log(`${this.nome} recebeu R$100 de salário.`);
    }

    Comprar(valor) {
        if (valor <= 0) {
            throw new Error("Valor inválido");
        }

        if (this.#dinheiro < valor) {
            throw new Error("Dinheiro insuficiente");
        }

        this.#dinheiro -= valor;

        console.log(`${this.nome} comprou algo por R$${valor}`);
    }

    MostrarDinheiro() {
        return this.#dinheiro;
    }

    Falar() {
        console.log(`Olá, meu nome é ${this.nome} e sou ${this.profissao}`);
    }

    depositar(valor) {
        if (valor <= 0) {
            throw new Error("Valor inválido");
        }

        if (this.#dinheiro < valor) {
            throw new Error("Você não possui esse dinheiro em mãos");
        }

        this.#dinheiro -= valor;
        this.#saldo += valor;

        console.log(`R$${valor} foi depositado na conta.`);
    }

    sacar(valor) {
        if (valor <= 0) {
            throw new Error("Valor inválido");
        }

        if (this.#saldo < valor) {
            throw new Error("Saldo insuficiente");
        }

        this.#saldo -= valor;
        this.#dinheiro += valor;

        console.log(`R$${valor} foi sacado da conta.`);
    }

    consultar() {
        return this.#saldo;
    }
}

export default Humano;