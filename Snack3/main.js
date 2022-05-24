// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione (indice) dispari

const numeriInteri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somma = 0;

for (let i = 0; i < numeriInteri.length; i++) {
  if (i % 2 === 0) {
    somma += numeriInteri[i];
    console.log(somma);
  }
}
