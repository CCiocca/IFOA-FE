let numero1;
let numero2;
let operazione;
let risultato;


function eventHandler(){
    numero1 = document.getElementById('numero1').value
    numero2 = document.getElementById('numero2').value
    nuoperazionemero1 = document.getElementById('operazione').value

    if(controlla()) {calcola();
    } else {
        return;
    }
}

function controlla(){
    if(numero1==='' || numero2===''|| operazione==='' ) {alert('Inserire')}
    return
}