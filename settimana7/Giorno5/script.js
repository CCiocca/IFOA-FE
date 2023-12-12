/*
1) generare prodotti
2) creare homepage da cui si vedono prodotti
3) creare pagina di dettaglio del singolo prodotto
4) creare back end con modulo
*/

// 1) generare prodotti


const url = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjllOWMwNTgzNTAwMTg1MjJkMTEiLCJpYXQiOjE3MDIzNzg3NTYsImV4cCI6MTcwMzU4ODM1Nn0.EGtwAMllqRQXOiB3rnB4kieEAmJXKUd8IpmM1gYIEvI";
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

const products=[];

const productsToPush = 
    {
        "name": "Samsung Galaxy9",
        "description": "Weird cellphone",
        "brand": "Samsung",
        "imageUrl": "https://pixabay.com/it/vectors/telefono-cellulare-smartphone-1377128/",
        "price": 99
    }
;


//homepage

const postProducts = () => {
    fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(productsToPush)
    })
    .then(res => res.json())
    .then(data => 
        console.log(data)
        )
};

// postProducts();


// 2) creare homepage da cui si vedono prodotti


const getProducts = () => {
    fetch(url, {
        headers: headers,
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        populateHomePage(data)})
};


/*
"_id": "65783149c058350018522e9c",
        "name": "Nokia 3310",
        "description": "Indestructible cellphone",
        "brand": "Nokia",
        "imageUrl": "https://example.com/3310.jpg",
        "price": 99,
*/
function populateHomePage(data){
    const containerProducts = document.getElementById("containerProducts");
    containerProducts.innerHTML="";

    data.forEach(element => {
        let newCard = `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                    <img src="${element.imageUrl}" alt="immagine ${element.name}"class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.description}</p>
                        <p class="card-text">${element.brand}</p>
                        <p class="card-text">${element.price} €</p>
                    
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">

                            <button type="button" class="btn btn-sm btn-outline-primary mx-1" data-bs-target="#productDetails" onclick="showDetailsProduct('${element._id}','show')">Dettagli</button>

                            <button type="button" class="btn btn-sm btn-outline-warning mx-1" data-bs-target="#productDetails" onclick="editDetailsProduct('${element._id}','edit')">Modifica</button>

                            <button type="button" class="btn btn-sm btn-outline-danger mx-1" onclick="deleteRecord('${element._id}')">Elimina</button>                                                                                              
                        </div>
                        <small class="text-muted">${element._id}</small>
                        </div>
                    </div>
                
            </div>
          </div>
        `
        containerProducts.innerHTML += newCard;
})
};


getProducts();

// dati singoli: una get con api con id dopo slash

// 3) creare pagina di dettaglio del singolo prodotto
// quando clicchi su detail, si apre la pagina dettagli

// se ricevi un IdleDeadline, sarai in modalita modifica, senno pagina sarai in modalita salva nuovo prodotto


/*
const params = new URLSearchParams(location.search)
const id = params.get("id")


function showDetailsProduct(id){
    // vai alla pagina del prodotto

    window.location.href = "./detail.html?id=" + id;
    console.log(id);
    fetch(url + id, {
        headers: headers,
    })
   .then(res => res.json())
   .then(data => populateDetailPage(data))
};


// come apro nuova pagina?
function populateDetailPage(data){
    
    const containerDetails = document.getElementById("containerDetails");
    containerDetails.innerHTML="";

    let newDetails = `
    <img src="${data.imageUrl}" alt="">
            <div>
                <h5>Nome prodotto: ${data.name}</h5>
                <p>Descrizione: ${data.description}</p>
                <p>Brand: ${data.brand}</p>
                <p>Prezzo: ${data.price}€</p>
            </div>`

    containerDetails.innerHTML = newDetails;

};
*/



// nel back se entri direttam puoi salvare un nuovo prodotto 
// se entri dalla card, puoi modificare il prodotto
// bottone elimina nel form per creare sara nascosto



// 4) creare back office con modulo

const sendNewProduct = (action, id) => {
    const newRecord = {
        "name": document.getElementById('inputName').value,
        "brand": document.getElementById('inputBrand').value,
        "description": document.getElementById('inputDescription').value,
        "price": document.getElementById('inputPrice').value,
        "imageUrl": document.getElementById('inputImageUrl').value,
    }

    const finalUrl = action === 'edit' ? url + id : url

    fetch(finalUrl, {
        method: action === 'edit' ? "PUT" : "POST",
        headers: headers,
        body: JSON.stringify(newRecord)
    })
    .then((response) => response.json())
    .then(data => {
        if (action === 'edit') {
            products.splice(products.findIndex(element => element._id === id), 1, data)
            createTable(products)
        } else {
            products.push(data)
            createTable(products)
        }
        setAlert(action, 200)
    })
    .catch(() => {
        setAlert(action, 400)
})
}
