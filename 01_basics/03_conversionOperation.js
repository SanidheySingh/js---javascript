let score = "33abs"

console.log(typeof score); // string
console.log(typeof(score)); 

let valueInNumber = Number(score) // NaN
console.log(valueInNumber); // NaN
console.log(typeof valueInNumber); // number

// "33abs" => Nan
// "33" => 33
// true => 1
// false => 0
let isLoggedIn = 1
let booleanValue = Boolean(isLoggedIn) // true
console.log(booleanValue); // true
console.log(typeof booleanValue); // boolean
// 0 => false
// "" => false
// null => false
// undefined => false
// NaN => false
//"sanidhey" => true

let someNumber = 33
let stringNumber = String(someNumber) // "33"
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string
// 1 => "1"

// ****************Operation ****************
let value = 3
let negativeValue = -value // -3
console.log(negativeValue); // -3
let positiveValue = +value // 3
console.log(positiveValue); // 3

console.log(3 + 4); // 7
console.log("3" + 4); // "34"
console.log(3 + "4"); // "34"
console.log("3" + "4"); // "34"
console.log("3" - 4); // -1
console.log(3 - "4"); // -1
console.log("3" - "4"); // -1
console.log("3" * "4"); // 12
console.log("3" / "4"); // 0.75
console.log("3" % "4"); // 3
console.log("3" ** "4"); // 81
console.log(3 ** 4); // 81
console.log("3" + 2 +2 ); // 322
console.log(3 + 2 +"2"); // 52

let gameScore = 100
gamescore++;
console.log(gameScore); // 101
gameScore += 10 // 111
console.log(gameScore); // 111

