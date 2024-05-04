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

// profesional way of doing promise chaining
// it increases the readability
getPromise(1).then(() => {
    console.log("Promise 1 Resolved.");
    return getPromise(2); // we returned the promise
}).then(() => { // again call then for the promise that's returned to the chain
    console.log("Promise 2 Resolved");
    return getPromise(3);
}).then(()=>{
    console.log("Promise 3 Resolved.")
})

/*
// This is concept of promise chaining
getPromise(1).then(() => {
    console.log("Promise 1 Resolved.");
    getPromise(2).then(() => {
        console.log("Promise 2 Resolved");
    })
})
*/

/*
// both these promises are working synchonously
// while we wanted promise1 to be completed before 
// promise2 was called.
let promise1 = getPromise(1);

console.log("Fetching Data 1.");
promise1.then((result) => {
  console.log("result: ", result)
});

let promise2 = getPromise(2);
console.log("Fetching Data 2.");
promise2.then((result) => {
  console.log("result: ", result)
});
*/
