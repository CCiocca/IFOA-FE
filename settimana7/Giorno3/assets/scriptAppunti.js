
const url = "https://striveschool-api.herokuapp.com/books";

fetch(url)
.then (response => response.json())   //json vuole le parentesi perche è un bambino speciale (è un metodo)
.then (console.log ("tutto ok"))
.then (data => popolaHomePage(data));

function popolaHomePage(data){
data.forEach(libro => {
let card = document.createElement("div");
card.classList.add("card");
card.id = libro.asin;

let img = document.createElement("img");
img.src = libro.img;
img.classList.add("card-img-top");
img.alt = "copertinaLibro";

let cardBody = document.createElement("div");
cardBody.classList.add("card-body");

let cardTitle = document.createElement("h5");
cardTitle.classList.add("card-title");
cardTitle.innerText = libro.title;

let cardText = document.createElement("p");
cardText.classList.add("card-text");
cardText.innerText = libro.category;

let cardPrice = document.createElement("p");
cardPrice.classList.add("card-text");
cardPrice.innerText = libro.price

let cardScarta = document.createElement("a");
cardScarta.classList.add("btn", "btn-dark");
cardScarta.href = "#";
cardScarta.innerText = "Scarta";
// cardScarta.target = "_blank";

let cardCompra = document.createElement("a");
cardCompra.classList.add("btn", "btn-primary");
cardCompra.href = "#";
cardCompra.innerText = "Compra ora";
// cardCompra.target = "_blank";


cardBody.appendChild(cardTitle); 
cardBody.appendChild(cardText);
cardBody.appendChild(cardPrice);
cardBody.appendChild(cardScarta);
cardBody.appendChild(cardCompra);
card.appendChild(img);
card.appendChild(cardBody);

document.getElementById("rowLibri").appendChild(card);
});
}
</script>