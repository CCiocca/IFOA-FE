/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1= 3;
let num2 = 5;
if (num1 > num2) {
  document.getElementById('esercizio1').innerHTML += ' il maggiore è '+ num1;
} else if (num2 > num1){
  document.getElementById('esercizio1').innerHTML += ' il maggiore è '+ num2;
} else {document.getElementById('esercizio1').innerHTML += ' i num sono uguali ';
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 =4
if (num3 !== 5) {
  document.getElementById('esercizio2').innerHTML += ' not equal'; }
  else {document.getElementById('esercizio2').innerHTML += ' equal'; }

  //con ternary operator
  const equal = (num3 !== 5) ? console.log('not equal') : ''
  
  //non riesco a mettere prima es2, mi da 0not equal
//   console.log('not equal')
// }


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num4 = 15;
let resto = num4 % 5 //prof: va bene uguale ma ti coplichi la vita e sprechi una variabile
console.log(resto)

if (resto == 0) {
  document.getElementById('esercizio3').innerHTML += ' divisibile per 5';
    console.log('divisibile per 5');
}





/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let num5= 3;
let num6=5;

if (num5 === 8 || num6 === 8 || num5+num6 ===8 || num5-num6===8 || num6-num5 === 8) {document.getElementById('esercizio4').innerHTML += ' verificato'}
  else{document.getElementById('esercizio4').innerHTML += ' non verificato'}

  //   document.getElementById('esercizio4').innerHTML = 'fa 8'
// }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart= 44

if (totalShoppingCart>50) {
  document.getElementById('esercizio5').innerHTML += 'spedizione gratuita'
} else {document.getElementById('esercizio5').innerHTML += 'spediione 10€'}


//correzione, tecnica di e commerce per tenere separati spedizione e totale
let spedizione = 10; //
let totale = totalShoppingCart //perche do per scontato che i costi di spedizione non ci siano
if (totalShoppingCart <50) {
  totale += spedizione;
}

document.getElementById('esercizio5').innerHTML += 'costo totale: € ' + totale


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

//se ammontare del carrello -20% è sotto 50 hai 10 euro spedizione sopra gratuita

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCartBlackFriday= totalShoppingCart *0.8 //-20% significa moltiplicare per 0,8
if (totalShoppingCartBlackFriday<50) {
    document.getElementById('esercizio6').innerHTML += ' spedizione 10€'
} else {document.getElementById('esercizio6').innerHTML += ' spedizione gratuita'}
document.getElementById('esercizio5').innerHTML = totalShoppingCartBlackFriday

//totale calcolabile come su



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let variabile= 'ciao'

if (typeof variabile === 'number'){
  document.getElementById('esercizio8').innerHTML += ' ' +variabile + ' è un numero'
  console.log("numero")
}else {document.getElementById('esercizio8').innerHTML += ' ' +variabile + ' non è un numero'
  console.log("non è un numero")}


  /* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num10 = 15
let resto2 = num10 % 2
console.log(resto)

if (resto == 0) {
  document.getElementById('esercizio9').innerHTML += ' pari';
    console.log('dispari');
}

/* correzione prof
if (num10%2===0) {
  document.getElementById('esercizio9').innerHTML = 'pari';
    console.log('dispari');
}
*/



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
  if (val < 5) {
    document.getElementById('esercizio10').innerHTML += ' meno di 5'
      console.log("Meno di 5");
    } 
    else if (val < 10) {
      document.getElementById('esercizio10').innerHTML += ' meno di 10'
      console.log("Meno di 10");
    } 
    else {
      document.getElementById('esercizio10').innerHTML += ' Uguale a 10 o maggiore'
      console.log(" Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city= 'Toronto';
document.getElementById('esercizio11').innerHTML += ' ' + me.city;
console.log(me.city)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName

document.getElementById('esercizio12').innerHTML += ' ' + me.lastName;
console.log(me.last)