//Get the URL from API
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

//Get the Tag from HTML of the select
const selectTag = document.querySelector('.breeds');

//Get the full information of breeds from API, and return as a json
fetch(BREEDS_URL)
    .then (function (response) {
        return response.json();
    })
//Contruct the select with the options from the response of the API.
    .then (function(data) {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);
        
        //Population the select options with breeds from API, with value, innerTEXT and append to the selectTag from the HTML
        for (let i = 0; i < breedsArray.length; i++){
            const optionTag = document.createElement('option');
            optionTag.value = breedsArray[i];
            optionTag.innerText = breedsArray[i];
            selectTag.appendChild(optionTag);

        }
    });

//Adding the event "change" to any chenges in the selectTag from the HTML and build the URL
selectTag.addEventListener("change", function(event){
       
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`

    //Call the function getDoggo using the parameter url to get the image from the breeds selected.
    getDoggo(url);
    
});

const img = document.querySelector('.dog-img');
const spinnerTag = document.querySelector('.spinner')

//call the dog API again, but now with the breed selected
function getDoggo (url){

    spinnerTag.classList.add("show");
    img.classList.remove("show");
    
    fetch(url)
        .then (function (response){
            return response.json(); //transform into JS object
        })
        .then (function(data){
            //console.log("link", data.message, "status", data.status)
            img.src = data.message; //data.message now is the url imag source
            
            // spinnerTag.classList.remove("show"); -- moved to Event Listener to prevent flash on screen
            // img.classList.add("show"); -- moved to Event Listener to prevent flash on screen
        })
}

img.addEventListener("load", function(){
    spinnerTag.classList.remove("show");
    img.classList.add("show");
})