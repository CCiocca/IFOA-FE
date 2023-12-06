//ESERCIZIO 1

// pulsante salva deve salvare in local storage all'on click

// pulsante rimuovi deve rimuovere dal local storage all'on click IF presente il nome dell'utente

// mostra sopra l'input il valore precedentemente salvato, se presente

const campoNomeUtente = document.getElementById("nomeUtente");
const btnSalva = document.getElementById("btnSalva");
const btnRimuovi = document.getElementById("btnRimuovi");
const listaUtenti = document.getElementById("listaUtenti");


btnSalva.onclick = function (){
    localStorage.setItem("nomeUtente", campoNomeUtente.value);
    // campoNomeUtente.value = "";
    mostraUtenti();
};

btnRimuovi.onclick = function (){
    if (localStorage.getItem("nomeUtente")!== null) {
    localStorage.removeItem("nomeUtente");
    // campoNomeUtente.value = "";
}
};


function mostraUtenti() {
    if (localStorage.getItem("nomeUtente")!== null){
      listaUtenti.innerHTML = campoNomeUtente.value;
}}



//ESERCIZIO 2
// usando session Storage, crea un contatore che conta tempoc  che passa, si aggiorna ogni secondo
// aggiornando pag val prosegue, chiudendo ricomincia

        // const tempo = document.getElementById("tempo");

        // let contatore = 0;

// set interval che agigunge 1 al contatore ogni 1000ms , contatore che viene pushato in session storage?
        // setInterval(function () {
        //         contatore++;
        //         sessionStorage.setItem("contatore", contatore);  //ogni secondo mi aggiorna il timer nel session storage
        //         tempo.innerHTML = sessionStorage.getItem("contatore"); //me lo printa in tempo
        //     }, 1000);

// aggiornando pag val prosegue, chiudendo ricomincia, vuol dire che il val di contatore è push in session storage


i= sessionStorage.getItem("count") ? parseInt(sessionStorage.getItem("count")) : 0;
const conta = function () {
    i = i + 1
    document.getElementById("timer").innerText = i + " secondi di sessione"
    sessionStorage.setItem("count", i)
  }

  setInterval(conta, 1000)   //ogni secondo stampa e salva




