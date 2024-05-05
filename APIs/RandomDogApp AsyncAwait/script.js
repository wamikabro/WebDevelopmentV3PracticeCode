const url = "https://dog.ceo/api/breeds/image/random"; // link of Dog API to serve us with different dog images

const container = document.querySelector('.container'); // to get final dog as its child element


async function addNewDog(){
    const response = await fetch(url);
    const processingResponse = await response.json();

    // single line was also possible but less readable.
    // const processingResponse = await (await fetch(url)).json();

    const image = document.createElement("img");
    image.src = processingResponse.message;
    container.appendChild(image);
}

document.querySelector('.button').addEventListener("click", addNewDog);



