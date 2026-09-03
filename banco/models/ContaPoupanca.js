import ContaAbstrata from "./ContaAbstrata.js";

class ContaPoupanca extends ContaAbstrata {

    aplicarRendimentos(percentual){
        const SaldoAtual = this.consultar()

        const Rendimento = SaldoAtual + (percentual /100)

        this.depositar(Rendimento)
    }

}

export default ContaPoupanca;