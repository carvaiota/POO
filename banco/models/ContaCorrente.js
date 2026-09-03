import ContaAbstrata from "./ContaAbstrata.js"

class ContaCorrente extends ContaAbstrata{
    #taxaSaque

    constructor(numero,cliente){
        super (numero, cliente)
        this.#taxaSaque = 0.1
    }
    sacar(valor){
    let valorTaxa = valor * this.#taxaSaque
    let valorTotal = valor * valorTaxa
    super.sacar(valorTotal)

    }
}

export default ContaCorrente