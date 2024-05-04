let promise = new Promise((resolve, reject) => {
    console.log("I am a promise.")

    resolve("success");
});


promise.then((result) => {
    console.log("Promise has been resolved. Result: ", result);
})
.catch((error) => {
    console.log("Promise was rejected with the error: ", error)
});