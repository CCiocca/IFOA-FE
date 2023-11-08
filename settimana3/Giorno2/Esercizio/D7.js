/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
//funzione
//evoco titolo pafina
//innerhtml e scrivo il nuovo titolo

const changeTitle = function () {
  const title = document.querySelector('h1');
  title.innerHTML = 'io sono un altro titolo';
};

changeTitle();

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
//funzione
//evoco il titolo
//assegno una classe
const addClassToTitle = function () {
  const title = document.querySelector('h1');
  title.classList.add('myHeading');
};
addClassToTitle();

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function () {
  const pFigliDiv = document.querySelectorAll('div p');
  pFigliDiv.forEach(element => {element.innerHTML= 'io sono il nuovo testo p';
  });
};
changePcontent();

//perche va fatto un ciclo for? se sto selezionando tutti
//perche querySelectorAll mi restituisce un array --> devo chiamare ogni elemento e dirgli che fare nella vita


/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

        //evocare tutti i link
        //dire change property e inserire il nuovo link

const changeUrls = function () {
 const linki =document.querySelectorAll('a:not(footer a)')
 linki.forEach(element => element.href = 'https://www.google.com'    
 );
};

changeUrls()
//non va --> perche so scema e non chiamo le funzioni definite, certo che poi non va

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function (newEl) {
    document.getElementById('secondList').innerHTML += `<li>${newEl}</li>`
};
addToTheSecond('io sono il nuovo li')


/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function (contenuto) {
    document.querySelectorAll('div')[0].innerHTML += `<p>${contenuto}</p>`
};

addParagraph('io sono il nuovo paragrafo nel primo div')

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
    document.getElementById('firstList').style.display='none'
};
hideFirstUl()


/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
    let sfondoGreen = document.querySelectorAll('ul');
    sfondoGreen.forEach(element => {element.style.backgroundColor = 'green'        
    });
};
paintItGreen()

//in alternativa posso assegnare una nuova classe nel css con bgGreen e poi assegnarla a tutti gli elem ul, per evitare gli in line



/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
 let titolo = document.querySelector('h1');
   titolo.onclick = function() {titolo.innertext.slice(0, -1);}; 
};

makeItClickable()
//non va



/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
    let footer = document.querySelector('footer')
    footer.onclick = ()=>{
    let linkFooter = document.querySelector('footer a').getAttribute('href')
    alert (linkFooter)
}
};

revealFooterLink()


// non mi vanno gli on click


/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function (content) {
    let postoTabella = document.getElementById('tableArea')


    //aggiungere 5 righe e colonne (4), un botto de tr e td

};

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */

const deleteVowels = function () {};
