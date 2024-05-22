let a = 'a';

function change(){
    let a = 'A'; // it got ignored 
    console.log(a); // it is still small a
}

change(); // it changed the let a  

console.log(a); // it will print A instead of a now

// Now using IIFE (Immidiately Invoked Function Expression)
(function change(){
    let a = 'A';
    console.log(a); // it became capital A because
    // it has nothing to do with outside world.
})();

// the real global a is still small
console.log(a);

