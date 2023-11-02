// app vanno parcellizzate
// app deve ricevere attrav form nome e anno di nascita
// calcolare ‘eta
// verificare se è maggiorenne o minorenne
// salutarla indicando la maggiore o minore eta

/*
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CALCOLARE ETA
4. VERIFICA MAGG O MIN ETA 
5. SCRIVERE NELL?HMTL 
6. CANCELLARE IL FORM 

EVENTO SCATENANTE: click (sono quasi sempre)

VARIABILI GLOBALI --> mi servono in piu posti
cost btn (button) NO
nome
anno nascita
stato magg/min

VARIABILI LOCALI --> mi servono in un unico punto del mio codice
*/

let nome;
let anno;
let eta;
let stato;
let errore = document.getElementById('errore');

/* ha fatto varie modifiche troop veloci per essere scritte, vedi file committato
function eventHandler() {
  leggiForm();
  if (controlla ()) {
    errore.innerHTML = '&nbsp;';
    calcolaEta();
    verifica();
    scrivi();
    cancellaForm();
  } else {
    return;
  }
}


function controlla (){
  if (anno >= 1900 && anno <= 2023 && nome != '') {
    errore.innerHTML = "&nbsp;";
    return true
}  else  {
  errore.innerHTML =
    'Attenzione! Compilare tutti i campi e inserire un numero tra 1900 e 2023';
  return false;
}
}

*/

function leggiForm() {
  nome = document.getElementById('nome').value;
  anno = document.getElementById('anno').value;
  console.log(nome, anno); //una volta che vedo che funzione lo elimino
}

function calcolaEta() {
  eta = 2023 - Number(anno);
  console.log(eta);
}

function verifica() {
  stato = eta >= 18 ? 'maggiorenne' : 'minorenne';
  console.log(stato);
}

function scrivi(){
  document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
  document.getElementById('miaVerifica').innerHTML = 'La tua eta è ' + eta + '; sei ' + stato;
  }

  function cancellaForm (){
    document.getElementById('nome').value = '';
    document.getElementById('anno').value = '';
  }

