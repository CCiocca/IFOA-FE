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


//ora famo "griglia" dei div contenenti i gg del mese in corso; sta griglia piglia il n di gg per gestire l'array globale creato all'inizio e scriverà i vari div

const creaGriglia = function (numeroGiorni) {
  const calendarDiv = document.getElementById('calendar');
  for (let i = 0; i < numeroGiorni; i++) {

    // creazione griglia e array
    const cellaGiorno = document.createElement('div'); //per ogni giorno, creo un div
    cellaGiorno.classList.add('day'); //cosi gli aggiungo gli stili che ho dato alla classe day in css
    //devo scrivere il numero del giorno
    const valoreCella = document.createElement('h3');
    valoreCella.innerText = i + 1;
    //appendo gli elementi creati
    cellaGiorno.appendChild(valoreCella);
    calendarDiv.appendChild(cellaGiorno);

    //creato il calendar, inserisco nell'array appointments, l'array dei gg del mese
    appointments.push([]); // insrira 30 array vuoti perche sta dentro il for

//eventiìo click su singolo giorno
    cellaGiorno.addEventListener('click', function (e) {
      //rendo clickabili i div dei giorni, se clicco uno, deselez tuti e selez il solo cliccato
      deselezionaCelle(); //deselez cell gia selezionate quindi richiamo deseleziona celle
      cellaGiorno.classList.add('selected'); //aggiungo la classe css per mostrare la selezione del giorno clicato
      giornoAppuntamento(i); //scrivo il gg clickaot nellla selezione giorno del form

      //se ci sono gia eventi nella giornata devo far comparire la lista
      if (appointments[i].length > 0) {
        mostraAppuntamenti(i);
      } else {
        const divAppuntamenti = document.getElementById('appointments');
        divAppuntamenti.style.dysplay = 'none';
      }
    });
  }
//quando carico un mese, eventuali classi selected precedenti devono essere rimosse, altrimneti mi trovero selezionate tutti i giorni del mese precedente che avevano gli appuntamenti

// seleziono tutti gli elementi con classe selected e rimuovo la classe

const deselezionaCelle = function () {
  const celle = document.querySelectorAll('.day');
  celle.forEach((element) => {
    element.classList.remove('selected');
  });
};

// quando clicco giorno , nel div meetingDay dovro leggere la data selezionata
//scompare "clicca si in giorno" e compare un box
const giornoAppuntamento = function (indiceGiorno) {
  console.log(indiceGiorno)
  const giorno = document.getElementById('newMeetingDay');
  giorno.classList.add('hasDay'); //compare box
  giorno.innerText = indiceGiorno + 1; // scrive il gg, + 1 perche gli arrivera l'indice che parte da 0, per avere il totale dei giorni devo part
};

};
creaGriglia(giorniTotali());

const mostraAppuntamenti = function (indiceGiorno) {
  //con questa funz si popola la lista degli appunt con gli appunt del giorno
  //passaggi
  //1-prendere gli appunt giusti
  const appuntamentiGiorno = appointments[indiceGiorno];
  //2-selez lista contenitore
  const lista = document.querySelector('#appointments ul');
  //3- svuotare la lista
  lista.innerHTML = '';

  //4- ciclare gli appunt del giorno e creare un li per ciascuno di essi
  appuntamentiGiorno.forEach((element) => {
    const newLi = document.createElement('li');
    newLi.innerText = element;
    lista.appendChild(newLi);
  });

  //5- la lista è piena ma ancora nascosta
  const divAppuntamenti = document.getElementById('appointments');
  divAppuntamenti.style.display = 'block';
};

//dobbiamo creare nuovi appuntamenti

const meetingForm = document.querySelector('form');
meetingForm.addEventListener('submit', function (e) {
  e.preventDefault(); //previene comportamenti di default del bottone che è di tipo submit, che cerca la action del form
  // 1-giorno dell'appunt, mi serve per puntare il girono giusto
  const selectedDay = document.getElementById('newMeetingDay').innerText;
  console.log(selectedDay);
  //2- ora appuntam selez
  const meetingTime = document.getElementById('newMeetingTime').value;
  //3-nome appuntam
  const meetingName = document.getElementById('newMeetingName').value;
  //4-creo la stringa dell'appintame
  const stringaAppuntamento = `${meetingTime} - ${meetingName}`;
  //5 - scrivo appuntamento dell'array
  const indiceArray = parseInt(selectedDay) - 1; //uso parseint per stare tranquillo perche dai form di solito attivano stringhe
  console.log(indiceArray);
  appointments[indiceArray].push(stringaAppuntamento);

  //per evidenziare presenza appunt creo pallino
  const pallino = document.createElement('div');
  pallino.classList.add('pallino');
  //cerco il div del giorno selezionato
  const divSelezionato = document.querySelector('.selected');
  if (!divSelezionato.querySelector('.pallino')) {
    divSelezionato.appendChild(pallino);
  }
  mostraAppuntamenti(indiceArray);
});
