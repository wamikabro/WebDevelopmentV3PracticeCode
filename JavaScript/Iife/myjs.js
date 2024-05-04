const getPromise = (number) => {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           if(number < 5)
               resolve("selected.");
           else {
               reject("rejected.");
           }    
       }, 2000);
   });
}

// to make it one time called function we will 
// make it iffe. example below this function.
async function myFunc(){
    const function1 = await getPromise(1); 
    console.log("function 1: ", function1)
    const function2 = await getPromise(2); 
    console.log("function 2: ", function2); 
}   
myFunc();



// but the name for the function is unneeded
// since we won't be able to call it again.
(async function myFunc1(){
    const function1 = await getPromise(1); 
    console.log("function 1: ", function1)
    const function2 = await getPromise(2); 
    console.log("function 2: ", function2); 
})();


// now it's alright
(async function (){
    const function1 = await getPromise(1); 
    console.log("function 1: ", function1)
    const function2 = await getPromise(2); 
    console.log("function 2: ", function2); 
})();

// we can call arrow function or simple function too.
( function (){
    const function1 = getPromise(1); 
    console.log("function 1: ", function1)
    const function2 = getPromise(2); 
    console.log("function 2: ", function2); 
})();

(() => {
    const function1 = getPromise(1); 
    console.log("function 1: ", function1)
    const function2 = getPromise(2); 
    console.log("function 2: ", function2); 
})();

// async arrow function
(async () => {
    const function1 = await getPromise(1); 
    console.log("function 1: ", function1)
    const function2 = await getPromise(2); 
    console.log("function 2: ", function2); 
})();


// one time variables using iife function
(() => {
    let firstName;
    let lastName;
})
// now the varibles created above are already removed 
// it saves the space and global names from unnecessary variable names.
