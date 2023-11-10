// capire in che mese siamo, per scriverlo in h1, e quanti giorni ha il mese, per generare il n di celle.

const now = new Date();

//per salvare appunt , ci serve array, ogni app è una stringa, ogni giorno puo avere infiniti appunt e ogni mese ha un n giorni variabile
// quindi creiamo array di array, il padre è il mese, array figli sono i giorni

/* es [array novembre
        [1 nov]
        [2 nov]
        ...
        ['09.00 live coding calendario', '14.00 tombola', '18.00 aperitivo']
    ]
nonn sapendo quanti giorni ci sono in un mese*/

const appointments = [];
//dentro pusho tanti sotto array quanti sono i gg del mese corrente

//creo array di mesi in ita senno li vedro in en
const monthNames = [
  'Gennaio',
  'Febbraio',
  'Marzo',
  'Aprile',
  'Maggio',
  'Giugno',
  'Luglio',
  'Agosto',
  'Settembre',
  'Ottobre',
  'Novembre',
  'Dicembre',
];

const scriviMese = function () {
  const title = document.querySelector('h1');
  const indiceMese = now.getMonth();
  const nomeMese = monthNames[indiceMese];
  title.innerText = nomeMese;
};

scriviMese();

// Quanti giorni ha questo mese
// Febbr nei bisesti ha 29 gg, per sapere n giorni miserve anche l'anno

const giorniTotali = function () {
  const anno = now.getFullYear(); //dara 2023
  const mese = now.getMonth(); //dara 10

  //sicc num gg del mese parte da 1, mi basta sapere l'ultimo per sapere quanti ggg ha il mese
  // per sapere l'ultimo giorno del mese successivo e faccio -1 per sapere l'ultimo giorno del mese in corso

  let ultimoGiorno = new Date(anno, mese + 1, 0); //YYYY MM DD gli sto chiedendo il 0 dicembro, per quanto riguarda oggi, ma non esiste quindi sara il 30 novembre
  const numeroGiorni = ultimoGiorno.getDate(); //per tirare fuori solo il nimero
  return numeroGiorni; // è il num di volte per cui dovro ripetere la creazione dei div corrisp ai signoli giorni
};

giorniTotali();

//quando carico un mese, eventuali classi selected precedenti devono essere rimosse, altrimneti mi trovero selezionate tutti i giorni del mese precedente che avevano gli appuntamenti

// seleziono tutti gli elementi con classe selected e rimuovo la classe

const deselezionaCelle = function () {
  const celle = document.querySelectorAll('day');
  celle.forEach((element) => {
    element.classList.remove('selected');
});
};



















// quando clicco giorno , nel div meetingDay dovro leggere la data selezionata
//scompare "clicca si in giorno" e compare un box
const giornoAppuntamento = function (indiceGiorno) {
    const giorno = document.getElementById('newMeetingDay');
    giorno.classList.add('hasDay') //compare box
    giorno.innerText = indiceGiorno+1; // scrive il gg, + 1 perche gli arrivera l'indice
}

//ora famo "griglia" dei div contenenti i gg del mese in corso; sta griglia piglia il n di gg per gestire l'array globale creato all'inizio e scriverà i vari div
