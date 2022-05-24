//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const userNumber = parseInt(prompt("Inserisci un numero"));

if (userNumber % 2 === 0) {
  console.log("Il numero " + userNumber + " " + " è un numero pari.");
} else {
  console.log(
    "Il numero " +
      userNumber +
      " non è un numero pari. Ma questo si: " +
      (userNumber + 1)
  );
}
