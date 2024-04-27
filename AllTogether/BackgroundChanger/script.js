document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    document.querySelector('body').style.backgroundColor = 'red';
    alert(`You clicked on button ${event.target.innerText}`);
});