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

function normalFunction(){
    return "I am normal function.";
}
async function myFunc(){
    const function1 = await getPromise(1); // it will store result
    console.log("function 1: ", function1)
    const function2 = await getPromise(2); // it will store result
    console.log("function 2: ", function2); 

    // although it's inside async function
    // but since it's called without await,
    // it will just execute like synchronous functions. 
    // except the fact that it will still respect the await above it.
    const function3 = normalFunction(); 
    console.log("function 3: ", function3);
}   

// let function4 = await getPromise(4); // it will store promise

myFunc();