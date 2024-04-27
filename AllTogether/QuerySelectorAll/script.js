const elementsToChange = 
document.querySelectorAll('.my-targetted-item');
for(let i=0; i<elementsToChange.length; i++){
let currentElement = elementsToChange[i];
currentElement.innerText = "JavaScript changed it!";
}