// number and math


const num =new Number(42.3);     

// console.log(`given number is ${num} portotype method ${num.toLocaleString()}`);


// math

const num1= (Math.random()*10)+1;   

// console.log(Math.abs(-4));  //for only negetiv value can be change

// console.log(Math.round(5.6)); // for roundfiger value

// console.log(Math.floor(45.9));  //it can converted foolting value to intger   output 45
const max=10;
const min =20;

console.log(Math.floor(Math.random() * (max -min + 1)) +min);