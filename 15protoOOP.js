// function car(name){
//     this.name = name
// }
// const c1 = new car("bmw");
// console.log(c1.name)

// function user(name){
//     this.name = name

// }

// const u1 = new user("sameer")

// // console.log(name)
// console.log(u1)

// function user (name){
//     this.name = name
// }

// this.sayHello = function(){
//     console.log(("Hello");
// }

// const u1 = new user ("sameer")
// const u2 = new user ("ali")


// function user(name){
//     this.name = name 
// }

// user.prototype.sayHello = function(){
//     console.log("hello",this.name)
// }
// const u1 = new user("sameer")
// const u2 = new user ("ali")

// u1.sayHello()
// u2.sayHello()

// function car (name){
//     this.name = name 
// }

// car.prototype.start = function(){
//     console.log("goda started",this.name)
// }

// const car1 = new car ("scorpio")
// const car2 = new car ("bmw")

// car1.start()
// car2.start()


// function user(name){
//     this.name = name 
// }
// user.prototype.sayHi = function(){
    // console.log("Hi" + this.name)
// }

// const u1 = new user("Sameer")
// const u2 = new user ("Ali")

// u1.sayHi()
// u2.sayHi()

// class Animal {

//     eat() {
//         console.log("Eating");
//     }

// }

// class Dog extends Animal {

//     bark() {
//         console.log("Barking");
//     }

// }

// const d = new Dog();

// d.eat();

// d.bark();

class Animal {

    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }

}

class Dog extends Animal {

    constructor(name, breed) {

        super(name);

        this.breed = breed;

    }

}

const d = new Dog("Tom", "Labrador");

console.log(d.name);

console.log(d.breed);

d.eat();