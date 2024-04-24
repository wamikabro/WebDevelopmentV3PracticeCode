for(let i=0; i<=5; i++)
    console.log(i);


// console.log(i); it will give error because i is out of scope 

console.log("");

for(var i=0; i<=5; i++)
    console.log(i);

console.log(i); // it won't give error because var is global
// that's why we shouldn't use it anymore.
