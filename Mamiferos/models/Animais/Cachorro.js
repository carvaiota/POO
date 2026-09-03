import Animal from "./Animal.js";

class Cachorro extends Animal{
    
   
     constructor(nome,peso,idade,sede){

        super(nome,peso,idade,sede)
     }


    EmitirSom(){

        console.log("Au!AUUUUU!!!")
    }

    BeberAgua(){
        console.log ("o cachorro esta bebendo agua!!")
        if(this.sede <= 0) {
            throw new Error("Acabou de tomar agua, cachorro leso");
            }
        this.sede =1
    }


    Sede(){
        return this.sede
    }
}

export default Cachorro