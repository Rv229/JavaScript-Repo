//string example
let score = "33abc"

//console.log(typeof(score))
//console.log(typeof score)

let valueInNumber = Number(score);

//console.log(typeof valueInNumber)
//console.log(valueInNumber)


// null expamle
let scorea = null

//console.log(typeof scorea)

let valueInNumbera = Number(scorea)

//console.log(typeof valueInNumbera)
//console.log(valueInNumbera)

//undefined example
let unscore = undefined

//console.log(typeof unscore)
let valueInNumberb = Number(unscore)

//console.log(typeof valueInNumberb)
//console.log(valueInNumberb)

//boolean example

let scoreb = true

//console.log(scoreb)
//console.log(typeof scoreb)

let InNumber = Number(scoreb)

//console.log(typeof InNumber)
//console.log(InNumber)


// "33" => 33
// "33abc" => NaN(Not A Number)
// true => 1 & false => 0


//Boolean
let isLoggedIn = "0"

let booleanIsLoggedIn = Boolean(isLoggedIn);

//console.log(booleanIsLoggedIn)

// 0 => true;  1 => true
// "" => false
// "anything" => true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber)
// console.log(typeof stringNumber)



// ************************ operations ************************* //
let value = 33

let negValue = -value;
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

// console.log("1" + 2)  //  => 12
// console.log(1 + "2")  //  => 12
// console.log(1 + 2 + "2")  // => 32
// console.log("1" + 2 + 2)  // => 122

//          tricky conversions

console.log(true) // => true
console.log(+true) // => 1   conversion could also be done from this but this is not a good practice
console.log(+"")  // => 0    conversion could also be done from this but this is not a good practice

