// primitive data types(call by value) -- used to copy from the location we manipulate the copied variable 

// 7 types : Number, String, boolean, BgInt, undefined(thinking to be assigned a value), null, symbol(for assigning a unique value)

const score = 100
const scorevalue = 100.3

const isLoggedIn = false 
const outisdeTemp = null
let userEmail

// console.log(typeof scorevalue);
// console.log(typeof outisdeTemp);

const value = Symbol("123")
const newValue = Symbol("123");
//console.log(typeof value)


// console.log(value === newValue);

// dynamically typed language



const bigNumber  = 239862985238975923n 

// console.log(typeof bigNumber)

// reference (call by reference)
// array, objects, funtions

//array 

const heroesArray = ["Shaktiman", "Doga", "naagraj"]

// console.log(typeof heroesArray)  // object

const myObject = {
    name : "vikas",
    age : 23, 
    location : "Gurugram"
}

// console.log(typeof myObject)  // object
// console.log(heroesArray)    

const myFunction = function (){
    console.log("hellor world");  
}

// console.log(typeof(myFunction()));


// ***************** Memories types ***********************************

// 2 types stack(Primitive)  -- In stack memory we get copy of orignal value
//  heap (non - primitive ) -- we get the orignal value

let myYoutubeChannel = "vikas_singh-dot-com"

anotherYoutubeChannel = myYoutubeChannel

anotherYoutubeChannel = "chai_with_vikas"
console.log(anotherYoutubeChannel)

let userOne = {
    user : "user@google.com",
    upi : "user@ybl"
}

// console.log(userone)

let userTwo = userOne

userTwo.user = "Vikas"
userTwo.email = "Vikas@google.com"

console.log(userTwo)
console.log(userOne)