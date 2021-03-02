// Chiedo la mail (prompt)
var mailPersonale = prompt("Inserisci la tua mail")
//Creo lista di mail che possono accedere
var listaMail = ["fabio@gmail.com", "stefab@icloud.com", "nafer@gmail.com"];

var soldatino = false; //Controller degli elementi del ciclo


// Controllo che la mail del prompt sia uguale ad una della lista
for (var i = 0; i < listaMail.length; i++) {
  if (listaMail[i] == mailPersonale) {
    soldatino = true
  }
}


// Stampo un messaggio di conferma
if (soldatino) {
  console.log("Accesso effettuato");
} else {
  console.log("Accesso negato, riprovare con un'altra mail");
}
