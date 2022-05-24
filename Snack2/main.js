// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

// lista di nomi e cognomi
const surnameList = ["Smith", "Johnson", "Williams", "Brown", "Jones"];
const nameList = ["James", "Robert", "John", "Michael", "David"];

// recuperiamo l'elemento html dove andremo a scrivere i nomi e cognomi
const invitedList = document.getElementById("invitedList");
let invitedListContent;

// creiamo il ciclo dentro al quale generiamo un numero casuale da 1 a 5 che peschera quel indice dalla lista nomi e lista cognomi
for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 5); // generiamo un numero casuale da 1 a 5
  invitedList.innerHTML += `<li> ${surnameList[randomNumber]} ${nameList[randomNumber]}</li>`;
}
