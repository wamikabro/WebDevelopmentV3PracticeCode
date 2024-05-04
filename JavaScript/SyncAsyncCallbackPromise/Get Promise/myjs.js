 const getPromise = (number) => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise.")
        if(number > 2)
            resolve("selected.");
        else {
            reject("rejected.");
        }
    });
 }



let promise = getPromise(3);

promise.then(
    (res) => {
        console.log(res);
    }
).catch(
    (error) => {
        console.log(error)
    }
);


