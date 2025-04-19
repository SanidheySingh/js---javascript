//primitives
//7 types : string , number , boolean , null , undefined , symbol , bigint


const score = 100
const score2 = 100.3

const isLoggedIn = false
const userName = null
let userEmail ;

const id = Symbol("123")
const id2 = Symbol("123")
console.log(id); // Symbol(123)
console.log(id === id2);    // false

const bigNumber = 123456789012340n
console.log(bigNumber); // 12345678967890n
// console.log(typeof bigNumber); // bigint


// references (Non primitives)

//array , objects , functions 
const heroes = ["thor", "ironman", "hulk"] //arrays inka  datatype object hota hai
console.log(heroes); // [ 'thor', 'ironman', 'hulk' ]
console.log(typeof heroes); // object
const hero = {
    name: "thor",
    age: 1000,
    isAvenger: true
} // objects INKA datatype object hota hai
const myFunction = function () {
    console.log("hello world");
}// function inka datatype funcion


//stack (primitive) , heap(Non-primitive)

let myName  = "Hello world"
let anotherName = myName

anotherName = "chai aur code "
console.log(myName);
console.log(anotherName);


let userOne ={
    email:"asdhifbhifd",
    upi:"jksvkjsd"
}
let userTwo = userOne
userTwo.email = "jsdvhisdvhsiv"
userTwo.upi = "shdvujs"
console.log(userOne.email);
console.log(userOne.email);