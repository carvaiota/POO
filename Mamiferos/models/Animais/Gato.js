import Animal from "./Animal.js";

class Gato extends Animal {

     constructor(nome,peso,idade,sede){

        super(nome,peso,idade,sede)
     }
    EmitirSom(){
        console.log("miuaaa!!")
    }

    FazerCarinho(){
        console.log("Gato esta ronronando")
    }
 BeberAgua(){
        console.log ("o gato esta bebendo agua!!")
        if(this.sede < 0) {
            throw new error("Acabou de tomar agua, cachorro leso");
            }
        this.sede -=1
    }
    
}

export default Gato