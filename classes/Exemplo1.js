class Animal {
    nome;
    especie;
    idade;
    peso;

    constructor (nome,Especie,Idade,Peso){
        
        
        this.nome = nome 
        this.especie = Especie
        this.idade = Idade
        this.peso = Peso
        
    }
 
    apresentar(){

        console.log(`ola meu nome é ${this.nome} e tenho ${this.idade} anos de idade., minha especie é ${this.especie} e  ${this.peso} `);
    }
    
    Comer (){
        this.peso += 1 ;
    }


    aniversario(){
        this.idade += 1;
    }

    falar(){
        console.log ("me chamo Bruno, ta com aquele?");
    }

 


}

class Gato  extends Animal {
        saltar(){
            
        }
 };


 class Cachorro extends Animal
        {};
  


const p1 = new Animal ("Bruno", 5, 68);
 
