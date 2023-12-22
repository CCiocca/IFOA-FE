//esempio di caosa possono chiedere in colloquio full stack

class PippoPlutoPaperino{
    constructor(arr = null){
        if (arr !== null){
            this.numbers = arr
        }
    }
    check(){
        this.numbers.forEach(el => {
            if ((el%3)===0 && ((el%5)===0)) {
                console.log("Paperino");
            } else if ((el%3)===0){
                console.log("Pippo");
            } else if ((el%5)===0) {
                console.log("Pluto");
            } else {
                console.log(el.toString());
            }
    })}
}

let arrayNumbers =[1,2,3,4,5,6,7,8,9];

const test = new PippoPlutoPaperino();
if(test.hasOwnProperty("numbers")){
    test.check();
} else {
    console.log("Il tuo array è vuoto, stella del cielo")
}



const main = document.getElementById("main");
const uno = document.getElementById("uno");
const due = document.getElementById("due");
const tre = document.getElementById("tre");

main.addEventListener("click", function(e){
    main.style.backgroundColor = "blue"
});

uno.addEventListener("click", function(e){
    main.style.backgroundColor = "blue"
});)