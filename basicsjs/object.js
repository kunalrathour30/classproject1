// object literals
// .......................................



let person = {
    name: "kunal",
    "full name":"Kunal GURJAR",
    age: 30,
    isStudent: true,
    add: "sre"
};

console.log(person.name); 
console.log(person["name"]);  
console.log(person["full name"]);
// if i want to declare or print symbol i have to use only square bracket in both

// console.log(person)

// person.name="kunallll"
// Object.freeze(person);
// person.name = "kunall"
// console.log(person)
// person.greetings =function(){
//     console.log("hlo")
// }

// console.log(person.greetings())


// ...................................................... 
// singleton objects
// let num1 = parseInt(prompt("enter the number"));
// function kalaa(num1){

//     return num1;
// }
// const readline = require('readline-sync');

// let age = readline.questionInt("Enter your age: ");
// console.log("You are " + age + " years old.");


function greet(){
    return "hello";
}

greet()

let fruits=["apple","banana"];
fruits.push("mango");

fruits
