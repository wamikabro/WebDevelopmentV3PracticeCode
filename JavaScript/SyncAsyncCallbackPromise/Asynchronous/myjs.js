console.log("One")
console.log("Two")


setTimeout(()=>{
    console.log("Three")
}, 5000)

console.log("Four")


// output: One Two Four      Three
// Because setTimeout is asynchronous function which didn't stop other things while it was being executed   