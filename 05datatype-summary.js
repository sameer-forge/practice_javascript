// primitive

// 7 type :String Number Boolean null undifined Symbol BignIt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id =  Symbol ('123')
const anotherId = Symbol ( '123')

console.log( id === anotherId)

const bigNumber =4554655674546n

// refrence (non primitive)

// Array , Objects
 
const heroes = ["shaktiman ","naagraj","doga" ]
let myObj = {
     name:"hitesh",
     age:22,
}

const myFunction = function(){
    console.log("hello wolrd");
}
console.log(typeof bigNumber);

console.log(typeof Function);
console.log (typeof null)
console.log(typeof Symbol)
console.log(typeof false)



//****************************//

// stack (primitive), heap(non primitive)

let myYoutubename = "sameerkhan"
let anothername = myYoutubename
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"sameer.com",
    upi:"user"
}

let userTwo = userOne
userTwo.email = "sameerforge.com"

console.log(userOne.email);
console.log(userTwo.email);