// recupero i dati

const url = "https://striveschool-api.herokuapp.com/books";

fetch(url)
.then (response => response.json()) //json vuole le parentesi perche è un bambino speciale (è un metodo)
.then (console.log ("tutto ok"))
.then (data => popolaHomePage(data));

function popolaHomePage(data){
    data.forEach(libro => {
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.src = libro.img;
        img.classList.add("card-img-top", "immagineCard");
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

        let cardDivBottoni = document.createElement("div");
        cardDivBottoni.classList.add("d-flex", "justify-content-around");
    
        let cardScarta = document.createElement("a");
        cardScarta.classList.add("btn", "btn-primary");
        cardScarta.href = "#";
        cardScarta.innerText = "Scarta";
        // cardScarta.target = "_blank";

        //aggiungo captatore click che fa sparire scheda se schiaccio bottone
        cardScarta.addEventListener("click", function(){
            card.classList.add("d-none")
        });

        let cardCompra = document.createElement("a");
        cardCompra.classList.add("btn", "btn-primary");
        cardCompra.href = "#";
        cardCompra.innerText = "Compra ora";
        // cardCompra.target = "_blank";
        cardScarta.addEventListener("click", compra());

        cardDivBottoni.appendChild(cardScarta);
        cardDivBottoni.appendChild(cardCompra);
        cardBody.appendChild(cardTitle); 
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(cardDivBottoni);
        
        card.appendChild(img);
        card.appendChild(cardBody);

        document.getElementById("rowLibri").appendChild(card);
    });
};


arrayCarrello = [];
localStorage.setItem("arrayCarrello", arrayCarrello)

// prende la card con quel asin e la aggiunge come oggetto al carrello
function compra(){
    
}



//         onclick(cardScarta){
//             cardScarta.classList.add("d-none")
//         }


//     });
// }


// per ogni indice genero una card


// struttura card
/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

/* struttura del dato
 {
        "asin": "1940026091",
        "title": "Pandemic (The Extinction Files, Book 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg",
        "price": 7.81,
        "category": "scifi"
    },
     */