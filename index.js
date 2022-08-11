function add(a,b){
    return a+b;
}
console.log(add(2,3));

function subtract(a,b){
    return a-b;
}
console.log(subtract(2,3));

function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));

function divide(a,b){
    return a / b;
}
console.log(divide(2,3));

function increment(a){
    return a+= 1;
}
console.log(increment(2));

function decrement(a){
    return a-= 1;
}
console.log(decrement(2));

function makeInt(a){
    return parseInt( a, 10);
}
console.log(makeInt("2",10));
console.log(makeInt("0x2328",10));
console.log(makeInt("sldkjflksjf",10));


function preserveDecimal(a){
    return parseFloat(a);
}

console.log(preserveDecimal("2.222"));
console.log(preserveDecimal("sldkjflksjf"));