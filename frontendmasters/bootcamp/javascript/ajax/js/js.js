const BREEDS_URL = 'https://dog.ceo/api/breeds/image/random';

function addDoggo (){
    fetch(BREEDS_URL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            const newImg = document.createElement('img');
            newImg.src = data.message;
            newImg.alt = 'Cute doggo';
    
            document.querySelector('.doggos').appendChild(newImg);
    
        })
}

document.querySelector('.add-doggo').addEventListener("click", addDoggo);