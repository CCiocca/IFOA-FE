/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/*
per prendere da form:
let l1 = document.getElementById('num1').value;
*/
let l1;
let l2;

function area(l1, l2) {
  let moltipl = l1 * l2;
  console.log(moltipl);
}

area(5, 4);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1=4 
let num2=5
num1 = Math.floor(num1);
num2 = Math.floor(num2);


function crazySum(num1, num2){
    let somma = num1+num2;
    if (num1===num2){
        somma = somma*3
    };
    return somma;
}

console.log(crazySum(3,3))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

typeof num3 == Number;

function crazyDiff(num3) {
  let differenza = num3 - 19;
  if (differenza < 0) {
    differenza = differenza * -1;
  } else if (num3 > 19) {
    differenza = differenza * 3;
  } return;
}

console.log(crazyDiff(21));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let n;
n= Math.floor(n);

function boundary(n){
    
    if (n>= 20 && n<=100){
        return true
    } else if (n===400){
        return true
    } else {
        return false
    };
}

console.log(boundary(45))


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// typeof stringa = String glielo dico direttam in html che quello è text


// let string5 = ' bla bla bla'

function epify(stringa) {
    if (stringa.startsWith ('EPICODE')) {
    return stringa
} else {return 'EPICODE ' + stringa}
};


console.log(epify('EPICODE ciao'))
console.log(epify('corso'))


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// num4 = numero positivo


function check3and7(num4) {
    num4 =Math.abs(num4)
  if (num4 % 3 === 0) {
    console.log('Il numero è un multiplo di 3');
  } else if (num4 % 7 === 0) {
    console.log('Il numero è un multiplo di 7');
  } else {
    console.log('Il numero non è multiplo nè di 3 ne di 7');
  }
}
console.log(check3and7(3));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
1) scompone stringa in Array, in cui ogni carattere ha ha un indice
2) ordinare gli indici in ordine inverso
3) ri-assemblrare la stringa
4)print stringa
*/

function reverseString(stringa) {
    let arrayStringa = array.split ('');
    let arrayCapovolto = arrayStringa.reverse();
    let stringaCapovolta = arrayCapovolto.join();
    return stringaCapovolta
}

console.log(reverseString('Hobbit'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
1) divido le parole, quindi creo un array che contiene diverse parole usando lo spazio come separatore
2) for: per ogni elemento dell'array, l'iniziale (.charAt(0)
) la rendo maiuscola con .toUpperCase ()
3) stampo array mettendo spazio tra una parola e l'a'tra
var string8; // fornita da utente
*/


const string8= 'Ciao a tutti'; //fornita da user

function upperFirst (){
    let parole=string8.split(' '); 
    let risultato =[]
    for (let i=0; i<parole.length; i++ ){
        let prima = parole[i].charAt(0);
        let parolaTagliata = parole[i].slice(1);
        let parolaFinale = prima.toUpperCase() + parolaTagliata;
        risultato.push(parolaFinale);
    };
    return risultato.join(' ');
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 function cutString (stringa){
    return stringa.slice(1, stringa.length -1)
 }

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n){
    let arrayNumeri =[];
    for (let i=0; i<n; i++){
    arrayNumeri.push(Math.floor(Math.random() *11));
} return arrayNumeri;
}

console.log(giveMeRandom(5));