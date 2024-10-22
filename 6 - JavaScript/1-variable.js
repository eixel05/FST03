console.log("Hello World!");

// This is a single line comment

/* This is 
a multiple
line comment
 */ 

let firstName = "John";
console.log("The first name is :", firstName);
// let is mutable/changeable. Mostly used in blocked scope (code block) and can't be used outside of it

var lastName = "Doe";
console.log(lastName);
// var is mutable/changeable. Can be used in a blocked scope and outside of it. Global

const birthday = "01-24-2020";
console.log(birthday);
// const is unmutable/unchangeable. Same as let, mostly used in block scope

firstName = "Justin";
console.log("The first name is :", firstName);

// birthday = "10-19-1991" // uncommenting this will throw an error

// Code blocks are enclosed wit {}

if(true){
    let block = "stone"; // Block scope
    var stone = "lime"; // global scope
    console.log(block);
    console.log(stone);
}

console.log(stone);
// console.log(block) - will throw an error