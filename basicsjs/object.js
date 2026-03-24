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
 
//write a async function to read a file using try and catch in reactjs

// async function readFile(filePath) {
//     try {
//         const fs = require('fs').promises;
//         const data = await fs               
//             .readFile(filePath, 'utf8');
//         console.log(data);
//     } catch (error) {
//         console.error('Error reading file:', error);
//     }

// }

// readFile('example.txt');

// const server = require('http').createServer();
const server = HTMLOutputElement.createServer();

server.on('request', (req, res) => {
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});








