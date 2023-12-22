/*
1) recupero oggetto palla
2) la faccio cadere (randomizzando su asse x da dove compare, poi scende verticale, aggiornando la posizione ogni x tempo, la funzione prendera un param che è la velocita che aumentera col punteggio (4)) + scompare good look
3) onclick sulla palla: palla scompare dalla schermata con evanescenza (transizione) + parte audio +  aumenta di un punto
4) aumenta la velocita man mano che aumenta il punteggio
5) dopo 5 palle perse appare un alert game over

6) per far ripartire la palla una volta arrivata la palla alla fine serve far ripartire la funzione

animaz va fatta con js
*/


const palla = document.getElementById("palla");
let number = document.getElementById("number");

let points = 0;
let loss = 0;
let clicked = false;
let startSpeed = 50;
positionYstart = 0 ;

let audio = new Audio("boom.wav");

// 3) all'onclick (che sta in html) aggiunge un punto, parte audio, transizione palla scompare 
function gestPoints(){
    points++;
    number.innerText= points;
    audio.play();
    palla.style = ('transition-duration:700ms; transform: scale(1.7); opacity:0');
    clicked = true;
}


function makeTheBallFall(){
    let positionX = Math.floor(Math.random()*1080);
    palla.style.left = positionX + "px";

    let positionY = -50;
    const interval = setInterval(fall, speed);

        function fall(){
            positionY ++;
            if (positionY>=window.innerHeight && loss ===5){
                clearInterval(interval);
                alert("Gameover! L")
            
                // se è arrivato alla fine dello schermo e non hai cliccato (controllare che clicked sia in origine messo giusto nell'onclick) aumenta le loss e ricomincia
            } else if (positionY>=window.innerHeight && clicked === false){
                loss++;
                palla.style.left = positionX + "px";
                positionY = -20;
                speed++;
            } else {
                palla.style.top = positionY ++;
            
        }
}}

makeTheBallFall();


//perche sparisce da asse X fissa?


// set interval modifica la posiz y e incrementa di 1



correzione





function start (){
    posY=posYstart;
    posX= posXstart;
    actualSpeed=speed;
    let interval = setInterval(frame ,actualSpeed)

    function frame(){
        if (posY === 100 && losts ===5){
            clearInterval(interval);
            alert("Gameover");
            return;
        } else if(posY ===100 && clicked === true){
            clicked=false;
            posY = posYstart;
            posX = Math.floor(Math.random()*1000);
            palla.style.opacity = 1;
            clearInterval(interval);
            interval = setInterval (frame, actualSpeed)
        }
    }
}