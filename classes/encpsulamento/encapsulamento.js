class Pessoa {
    #nome;
    #idade;
    #cpf;

    constructor(nome, idade, cpf) {
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
    }

    get nome() {
        return this.#nome;
    }

    //set nome(Valor) {
        //this.#nome = Valor;
    //}

    apresentar() {
        console.log(
            `Meu nome é ${this.#nome}, idade ${this.#idade}, CPF ${this.#cpf}`
        );
    }
}

const p1 = new Pessoa("carvalho", 20, "1234567898");

p1.nome = "roberto";

console.log(p1.nome);
p1.apresentar();

//get(this.nome)