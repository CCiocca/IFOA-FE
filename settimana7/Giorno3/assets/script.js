// recupero i dati

const url = "https://striveschool-api.herokuapp.com/books"; 

fetch(url)
.then (response => response.json)
.then (data => popolaHomePage(data));

function popolaHomePage(data){
    data.forEach(libro => {
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.src = libro.img;
        img.classList.add("card-img-top");
        img.alt = copertinaLibro;

        let cardBody = documet.createElement("div");
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

        let cardLink = document.createElement("a");
        cardLink.href = "#";
        cardLink.target = "_blank";
        cardLink.classList.add("btn", "btn-primary");
        cardLink.innerText = "Scarta";


        cardBody.append(cardTitle, cardText, cardPrice, cardLink);
        card.append(img, cardBody);

        document.getElementById("rowLibri").appendChild(card);
    }); 
}



//         onclick(cardLink){
//             cardLink.classList.add("d-none")
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