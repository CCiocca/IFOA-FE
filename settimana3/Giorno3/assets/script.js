/*
1-schiacciando bottone il testo che è dentro a input viene acquisito  .value in costante
e viene poi passato in html
dove? all'interno della ul come li
*/


let arrayTasks= [];
const addBtn = document.querySelector('#bottone')
const nuovoTask = document.querySelectord('#nuovo');


addBtn.addEventListener('click', function(){
    if (nuovoTask.value !== ''){
        aggiungiTask();
        aggiornaArray();
        cancellaCampo();
    } else {
        alert ('inserire task');
        return;
    }

})




const aggiungiTask = () => {
//   let nuovoTask = document.getElementById('nuovo');
let nuovoPunto = document.createElement('li');
  nuovoPunto.innerText = nuovoTask.value;

  let nuovoBtn = document.createElement('button');
  nuovoBtn.innerText = 'elimina';

  spazioLista.appendChild(nuovoPunto);
  spazioLista.appendChild(nuovoBtn);

//siamo gia in ambiente for each, perche ripete l'azione ogni volta che schiaccio aggiungi

let arrayTasks= [];
arrayTasks.push(nuovoTask.value)


  //pulisci il campo dopo aver aggiunto
  nuovoTask.setAttribute
}

aggiungiTask();



nuovoBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // elimina sia task che rispettivo bottone
})
