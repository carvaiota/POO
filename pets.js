import Gato from "./Mamiferos/models/Animais/Gato.js";
import Cachorro from "./Mamiferos/models/Animais/Cachorro.js";
import Humano from "./Mamiferos/models/Animais/Humano.js";

const g1 = new Gato ("yuki",8,5)
const c1 = new Cachorro("ragnarok",5,6)
const h1 = new Humano ("Carvalho",78,19,"Motoboy",250)
// g1.EmitirSom() 
// c1.EmitirSom()
// g1.Comer()
// console.log(g1.Peso())
// c1.BeberAgua()
// console.log(c1.Sede())
// g1.Comer()
// g1.Dormir()
// c1.BeberAgua()
// c1.Correr()
// console.log(c1.Sede())



h1.Falar();

h1.Trabalhar();
h1.Trabalhar();

console.log("Dinheiro na mão:", h1.MostrarDinheiro());

h1.depositar(150);

console.log("Dinheiro na mão:", h1.MostrarDinheiro());
console.log("Saldo bancário:", h1.consultar());

h1.sacar(50);

console.log("Dinheiro na mão:", h1.MostrarDinheiro());
console.log("Saldo bancário:", h1.consultar());