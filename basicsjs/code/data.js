// primitive
// 7 types string boolean number null undefined symbol bigInt

// reference types

// array objects functions 


// let myYoutubename = "hiteshchoudharydotcom";
// let anothername = myYoutubename;
// anothername= "chaiaurcode";

// console.log(myYoutubename) ;
// console.log(anothername) ;
// let userOne = {
//     email: "user@googte. com",
//     upi: "user@ybl" }
// let userTwo= userOne;

// userTwo.email= "hitesh@googte.com"

// console.log(userOne.email) ;
// console.log(userTwo.email) ;


// strings

const name= "hitesh"

const repoCount = 100
// console.log(name + repoCount + " Value");
console.log( `Hello my name is ${name} and my repo count is ${repoCount}`) ;
const gameName= new String( 'hitesh-hc-sher')



console.log (gameName[0] ) ;

console.log (gameName.length) ;
console.log (gameName.toUpperCase()) ;
console.log (gameName.charAt(4)) ;
console.log (gameName.indexOf('t')) ;



const newString= gameName.substring(0, 4)
console.log (newString) ;

const anotherString= gameName.slice(-8, 4)
console.log (anotherString) ;
const newString0ne = "     hitesh"
console.log (newString0ne);
console.log (newString0ne.trim());

const url ="https://hitesh.com/hitesh%2Øchoudhary"
console.log(url.replace('%20','-') )
console.log (url.includes( 'sundar' ) )
console.log (gameName. split( '-'));