const url = "https://api.pexels.com/v1/search?query=";
const apiKey = "gdYjjtvro21Pauz1pqQ97w4MTumDq7mbiWY9SiMV9ctiYxsiZSTk5dRb";

const images=[];


function getImages(){
    fetch(url + "mountains", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": apiKey
    }
    })
    .then(response => response.json())
    .then (data => {
        photos=data
        console.log(photos)
        return photos;
    })
    .catch(err => alert(err));
}

let mountains = "mountains";

function loadImages(photos){
    getImages(mountains)
    const containerImages = document.getElementById("containerImages");
    containerImages.innerHTML="";

    photos.forEach(element => {
        let newImage = `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
            
              <img src="${element.src.small}" alt="${element.alt}"class="card-img-top" width="100%" height="225" 
                preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Searched image" />
             
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        `
        containerImages.innerHTML += newImage;
})
};


// window.onload = () => {

// }


/*
da postman
"photos": [
    {
        "id": 3998365,
        "width": 4096,
        "height": 2730,
        "url": "https://www.pexels.com/photo/silhouette-of-newly-wedded-couple-3998365/",
        "photographer": "Thái Huỳnh",
        "photographer_url": "https://www.pexels.com/@thai-hu-nh-2335830",
        "photographer_id": 2335830,
        "avg_color": "#95805A",
        "src": {
            "original": "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png",
            "large2x": "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Silhouette of Newly Wedded Couple"
    },

    {
        "id": 66997,
        "width": 4928,
        "height": 3264,
        "url": "https://www.pexels.com/photo/sunset-over-snow-covered-mountains-66997/",
        "photographer": "NO NAME",
        "photographer_url": "https://www.pexels.com/@no-name-14543",
        "photographer_id": 14543,
        "avg_color": "#576A5E",
        "src": {
            "original": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg",
            "large2x": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Sunset over Snow Covered Mountains"
    },
*/