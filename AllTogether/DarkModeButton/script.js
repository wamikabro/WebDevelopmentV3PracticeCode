let myBody = document.querySelector("Body")

let myButton = document.querySelector('.button');
myButton.addEventListener('click', function () {
    if(myBody.classList.contains('dark-mode'))
        myBody.classList.remove('dark-mode')
    else
        myBody.classList.add('dark-mode')
});

