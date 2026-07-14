// 1. Function
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Sameer"));


// 2. Arrow Function
const greet = (name) => {
    return "Hello " + name;
};

console.log(greet("Sameer"));

// Short Form

const greet = name => "Hello " + name;

// 3. Object

const user = {
    name: "Sameer",
    age: 22,

    greet() {
        console.log(this.name);
    }
};

user.greet();
// 4. Closure

function counter() {

    let count = 0;

    return function () {

        count++;

        console.log(count);

    };

}

const increment = counter();

increment();

increment();
// 5. call()

const user = {
    name: "Sameer"
};

function greet(city) {
    console.log(this.name, city);
}

greet.call(user, "Jaipur");
// 6. apply()

const user = {
    name: "Sameer"
};

function greet(city) {
    console.log(this.name, city);
}

greet.apply(user, ["Jaipur"]);

// 7. bind()

const user = {
    name: "Sameer"
};

function greet() {
    console.log(this.name);
}

const fn = greet.bind(user);

fn();

// 8. Constructor Function

function User(name, age) {

    this.name = name;

    this.age = age;

}

const u1 = new User("Sameer", 22);

console.log(u1);
// 9. Prototype

function User(name) {

    this.name = name;

}

User.prototype.sayHi = function () {

    console.log("Hi " + this.name);

};

const u1 = new User("Sameer");

u1.sayHi();
// 10. Class

class User {

    constructor(name) {

        this.name = name;

    }

    greet() {

        console.log(this.name);

    }

}

const u1 = new User("Sameer");

u1.greet();
// 11. Inheritance

class Animal {

    constructor(name) {

        this.name = name;

    }

    eat() {

        console.log("Eating");

    }

}

class Dog extends Animal {

    constructor(name) {

        super(name);

    }

    bark() {

        console.log("Barking");

    }

}

const d = new Dog("Bruno");

d.eat();

d.bark();
// 12. Promise

const promise = new Promise((resolve, reject) => {

    resolve("Success");

});

promise

.then((data) => {

    console.log(data);

})

.catch((error) => {

    console.log(error);

});
// 13. Promise Chaining

Promise.resolve("A")

.then((data) => {

    console.log(data);

    return "B";

})

.then((data) => {

    console.log(data);

    return "C";

})

.then((data) => {

    console.log(data);

});

// 14. Async / Await

async function getData() {

    const data = await Promise.resolve("Hello");

    console.log(data);

}

getData();

// 15. Fetch API

async function getUsers() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);

}

getUsers();

// 16. try...catch

try {

    console.log("Try Block");

}

catch (error) {

    console.log(error);

}
// 17. setTimeout()

console.log("Start");

setTimeout(() => {

    console.log("Hello");

}, 2000);

console.log("End");



// ⭐ 15 Interview Definitions (One Line)
// Prototype       → Shared methods store karta hai.

// Constructor     → Object banane ka blueprint.

// new             → Object create + this bind + prototype link.

// Class           → Constructor Function ka modern syntax.

// extends         → Parent ko inherit karta hai.

// super()         → Parent constructor call karta hai.

// Closure         → Outer variable ko yaad rakhta hai.

// this            → Calling context ko refer karta hai.

// call()          → Immediately execute + comma arguments.

// apply()         → Immediately execute + array arguments.

// bind()          → New function return karta hai.

// Promise         → Future value represent karta hai.

// async           → Function ko Promise bana deta hai.

// await           → Promise complete hone ka wait karta hai.

// fetch()         → Server se data lane ke liye Promise return karta hai.