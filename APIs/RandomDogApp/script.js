const url = "https://dog.ceo/api/breeds/image/random"; // link of Dog API to serve us with different dog images

const container = document.querySelector('.container'); // to get final dog as its child element

// get new dog
function addDog(){
    const promise = fetch(url); // fetch from url
    promise // promise that data will come
        .then(function(response){
            const processingResponse = response.text(); // another promise to do
            return processingResponse; // return promise to do .then
        }).then(function(processedRespsonse){
            const dogObject = JSON.parse(processedRespsonse) // finally we got our dog BLOB, let's parse it into an image URL.
            const image = document.createElement("img") // use DOM to create Image Element of HTML
            image.src = dogObject.message; // the object that we received contains message, which is the URL of dog image
            container.appendChild(image);
        }).catch(function(error){
            console.log('there\'s some issue')
        })
}

document.querySelector('.button').addEventListener("click", addDog);



