// question 1
// method 1
// let a = 10 
// let b = 5 

// a = a + b;
// b = a - b;
// a = a -b;

// console.log (a);
// console.log(b)

// method 2  destructuring asignment
// let a = 10;
// let b = 5;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// method 3 temp use

// let a = 10;
// let b = 5;
// let temp = a;
// a = b;
// b = temp;

// console.log(a)
// console.log(b)

// question 2 

// const student = {
//     name: "Sameer",
//     age: 20
// };

// student.name = "Dinesh";

// console.log(student);

// add

// const student = {
//     name :"sameer"
// };

// student.city = "jaipur";

// console.log(student);

// nested objects

// const student = {
//     name: "sameer",
//     address: {
//         city: "jaipur"
//     }
// };

// student.address.city = "mumbai"
// console.log(student)

// array

// const numbers = [10,20,30]

// numbers.push (40);
// console.log(numbers);

// onject 
// question1

// let student = {
//     name : "sameer",
//     age :20,
//     course:  "bca",
//     city : "jaipur",
// };

// for(let key in student){
//     console.log(key,student[key])
// }

// const car = {
//     brand :"bmw",
//     model :"x5",
//     year : 2024
// };

// for (let key in car){
//     console.log(key,car[key])
// };

// const obj = {
//   a: 10,
//   b: 20
// };

// let x = "a";
// let y = "b";

// console.log(obj.a);
// console.log(obj["a"]);
// console.log(obj[x]);
// console.log(obj.y);
// console.log(obj[y]);

// const obj1 = {
//     name : "sameer",
//     age : 23 , 
// }

// const obj2 = {
//     age : 25,
//     city : "jaipur",
// }

// const merged = {
//     ...obj1,...obj2


// }

// console.log(merged)


// const student = {
//     name :"sameer" ,
//     address:{
//         city : "jaipur",
//     }
// };

// const copy = structuredClone(student)


// copy.address.city = "Delhi";

// console.log(student.address.city);
// console.log(copy.address.city);

// const user = {
//     name: "Sameer",
//     age: 23
// };


// propertyountry = "india";

// const {
//     name , age,
//     Country
// } = user;

// console.log(name);
// console.log(age);
// console.log(Country);

// const user = {
//     name : "sameer",
//     age : 21,
// }

// const{
//     name:fullName,
//     age
// } =user;

// console.log(fullName);
// console.log(age);

// const user = {
//     name : "sameer",
//     address:{
//         city:"jaipur",
//         state:"rajsthan",
//     }
// };

// const{
//     address: {
//         city,state
//     }
// } = user;

// console.log(city)
// console.log(state);


// const products =[
//     {id : 1, stock : 10},
//     {id : 2, stock : 20},
//     {id : 3, stock : 15}
// ]
// function updateStock(id, newStock){
//     for (let product of products){

//         if (product.id === id){
//             product.stock = newStock;

//         }

//     }
// };
// updateStock(3,100)
// console.log(products);

// ##fuction
// question1

// function greet(name = "guest"){
//     console.log ("hello",name)

// }

// greet("sameer")
// greet();



// function myMap(arr, callback) {
//     const result = [];

//     for (let num of arr) {
//         result.push(callback(num));
//     }

//     return result;
// }

// function double(num) {
//     return num * 2;
// }

// console.log(myMap([1, 2, 3], double));


// function average(...numbers) {
//     let sum = 0;
//     for (let num of numbers) {
//         sum += num;
//         average = sum/numbers.length;

//     }
//      return sum/numbers.length



// }
//  console.log(average(10,20,30,40))

// function emailValidator(email) {
//     return email.includes("@");
// }

// function passwordValidator(password) {
//     return password.length >= 8

// }

// function formValidator(email, password) {
//     if (emailValidator(email) && passwordValidator(password)) {
//         return "form valid";
//     } else {
//         return "form invalid";
    




// }

// console.log(formValidator("aasim@gmail.com","12334567"))

// }