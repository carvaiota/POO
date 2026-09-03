class ContaAbstrata{
    numero
    cliente
    #saldo

    constructor(numero,cliente,saldo){
        this.numero = numero
        this.cliente = cliente
        this.#saldo = 0 
    }


    depositar(valor){
        if(valor <= 0 ){
            throw new error("valor invalido")
        }

        this.#saldo += valor
    }

    sacar (valor){
        if(valor <= 0){
            throw new Error("valor invalido");
            
        }
        this.#saldo 
    }

    consultar(){
        return this.#saldo
    }

    transferir(valor, ContaDestino){
        this.sacar (valor)
        ContaDestino.depositar (valor)

    }
    
}


export default ContaAbstrata