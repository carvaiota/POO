class Animal {
    nome
    peso
    idade
    sede



     constructor(nome,peso,idade){
        this.nome = nome
        this.peso = peso
        this.idade = idade
        this.sede = 0


     }

     Peso(){
        return this.peso
    }


     Comer(){
        console.log ("O animal esta comerndo" +this.peso)
         this.peso += 1
     }

     Dormir (){
        console.log("o animal esta dormindo")
     }

     EmitirSom(){
        console.log("Som do animal")
     }
    
     Sede(){
        const godrink = [this.sede ]
    }


     Correr (){
        console.log ("cachorro esta correndo" )
        this.sede +=1

        


     }
     
     BeberAgua(){
        console.log ("o animal esta bebendo agua!!")
        if(this.sede > 3 ) {
            throw new error("Acabou de tomar agua, cachorro leso");
            }
        this.sede -=1
    }
}

export default Animal