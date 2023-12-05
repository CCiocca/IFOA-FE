const campoPetName = document.getElementById("petName");
const campoOwnerName = document.getElementById("ownerName");
const campoSpecies = document.getElementById("species");
const campoBreed = document.getElementById("breed");

let lista = document.getElementById("lista");
const button = document.getElementById("add");

const pets = [];

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    controllaProprietario(pet){
        if(this.ownerName === pet.ownerName){
            return true;
        } else {
            return false;
    }
}};

button.onclick = function (){
    let nuovoAnimale = new Pet (
        campoPetName.value,
        campoOwnerName.value,
        campoSpecies.value,
        campoBreed.value
    )

    pets.push(nuovoAnimale);
    renderizzaLista();
    campoPetName.value= "";
    campoOwnerName.value= "";
    campoSpecies.value= "";
    campoBreed.value= "";
}

function renderizzaLista() {
    lista.innerHTML = "";
    pets.forEach(pet => {
        const newLi = document.createElement("li");
        newLi.innerHTML = "Nome: " + pet.petName + " Owner: " + pet.ownerName + " Species: " + pet.species + " Breed: " + pet.breed;
        lista.appendChild(newLi);
})
};

