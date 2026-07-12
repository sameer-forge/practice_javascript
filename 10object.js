// singleton
// Object.create

// object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "sameer",
//     "full name": "sameer khan",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "sameer@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "sameer@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
// const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "sameer",
//             lastname: "khan"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "sf@gmail.com"
//     },
//     {
//         id: 1,
//         email: "sf@gmail.com"
//     },
//     {
//         id: 1,
//         email: "sf@gmail.com"
//     },
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: " js sameerforge",
//     price: "999",
//     courseInstructor: "sameer"
// }

// course.courseInstructor

// const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "sameer",
//     "coursename": "js sameerforge",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]


// let student = {
//     name:"sameer",
//     age : 20,
//     class : 5,
//     isboy : true,
// }


// const user = Object.create(student)
// console.log(user.name)
// console.log(user.class)

// const person = {
//     city :"delhi"
// };

// const user = Object.create(person);

// user.city = "Mumbai" ; 

// console.log(user.city);
// console.log(person.city);

// let person1 = {
//     name: "sameer",
//     lastName: "khan"
// }

// const person2 = { Name: "aman", LastName: "loso" };
// Object.assign(person1, person2);

// console.log(person1)


// const person = {
//     name: "sameer",
//     age: 20,
//     isStudent: true
// }

// const x = person
// x.age = 30

// console.log(x)


const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.test)





