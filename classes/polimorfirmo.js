class Mamifero{
    nome
    peso


    constructor (nome,peso){
        this.nome = nome
        this.peso = peso 
    }

    emitirsom(){
       throw new Error("abstraction")
    }
}

class Gato extends Mamifero{
    constructor (nome,peso){
        super(nome,peso)
    }
    emitirsom(){
        console.log("miau")
    }
}



class Cachorro extends Mamifero{
    constructor (nome,peso){
        super(nome,peso)
    }
    emitirsom(){
        console.log("au au")
    }
}

// const m1 = new Mamifero ("bob", 10)
// m1.emitirsom()  erro por nao definir a classe correta

const g1 = new Gato ("bob", 10)
g1.emitirsom()