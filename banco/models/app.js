    import Cliente  from "./cliente.js"
    import ContaPoupanca from "./ContaPoupanca.js";
    import  ContaCorrente from "./ContaCorrente.js";


    const cliente1 = new Cliente (
        "Carvalho", 
        "123.456.789-00", 
        "carvaiota@gmail.com" 
    );


    const cliente2 = new Cliente (
        "roberto", 
        "123.456.789-00", 
        "carvaiota@gmail.com" 
    );



    const Conta1 = new ContaCorrente ("123", cliente1)
    const Conta2 = new ContaCorrente ("345", cliente2)
    const conta3 = new ContaPoupanca ("234 ", cliente2)

    conta3.aplicarRendimentos (10)

    conta3.depositar(120)
    console.log (conta3.consultar())
    conta3.aplicarRendimentos (10)
    console.log (conta3.consultar())
   

