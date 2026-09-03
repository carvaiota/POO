class Pessoa {

    nome;
    idade ;
    sexo

    constructor (nome, idade, sexo ){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo

    }

    apresentar(){

        console.log(`ola meu nome é ${this.nome} e tenho ${this.idade} `);
    }
    
        falar(){
            console.log("pessoal okk!!!")
        }
  }

        const p1 = new Pessoa("Carvalho",20,"m");
        const p2 = new Pessoa("Daniele",27,"f");
        const p3 = p1
        p1.apresentar()
        p1.falar()
        p2.apresentar()
        p2.falar()
    

  