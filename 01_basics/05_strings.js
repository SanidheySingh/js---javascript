const name = "hello"
const repCount = 2

//console.log(name + repCount+ "value");
// not Use this

// use this

console.log(`I am saying ${name }  and my repcount is ${repCount}`);


const gameName  = new String('hello- my - world')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    hello    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://sanidhey.com/sanidhey%20singh"
console.log(url.replace('%20' , '__' ));

console.log(url.includes('sunadar'))

console.log(gameName.split('-'));