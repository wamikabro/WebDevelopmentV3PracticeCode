function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallBack){
    sumCallBack(a, b);
}

calculator(10, 20, sum); // sum is callbabck function 
// here because we're passing it in a function
// make sure not to use () parentheses otherwise the function will
// get executed and generate error.