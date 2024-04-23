function cat() {
    console.log("Traditional Function called.");
}

cat();

let meow = function catt(){
    console.log("Traditional Function stored in variable called.");
}

meow();
// catt(); it won't work

let meowCat = () => {
    console.log("Arrow Function called.");
}

meowCat();

