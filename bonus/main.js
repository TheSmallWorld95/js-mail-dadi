// Faccio scegliere un numero da 1 a 6 all'utente
var numeroUtente = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);


// if (numeroUtente>=1 && numeroUtente <= 6) {
//   console.log("Bravo");
// } else {
//   console.log("Non hai inserito un numero da 1 a 6");
// }

// Faccio scegliere un numero da 1 a 6 al computer
var numeroComputer = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);

console.log(numeroUtente);
console.log(numeroComputer);

// Confronto i due numeri scelti e il più alto dei 2 vince

if (numeroUtente > numeroComputer) {
  console.log("Hai vinto");
} else if (numeroUtente < numeroComputer) {
  console.log("Hai perso");
} else {
  console.log("I due numeri sono uguali");
}
