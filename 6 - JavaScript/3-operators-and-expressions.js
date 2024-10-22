let numb1 = 10;
let numb2 = 5;

console.log("Addition (+)",numb1 + numb2);
console.log("Subtraction (-)",numb1 - numb2);
console.log("Multiplication (*)",numb1 * numb2);
console.log("Division (/)",numb1 / numb2);
console.log("Exponent (**)",numb1 ** numb2);
console.log("Remainder (%)",numb1 % numb2);

// PEMDAS / BODMAS

let answer = 3 + 4 * (5 - 2) ** 2 /2;
console.log("Answer:",answer);

// String Expression or Concatenation
console.log(20 + " " + "I am the number 20" + "!")

// Comparison Operators

// == /true or false . Doesn't check data type
console.log("Equal to (==):", 5==5);
console.log("Equal to (==):", 5=="5");

// Strictly equal to '===' . Checks the data type as well
console.log("Strictly Equal to (===):", 5==="5");

// Not equal to '!='
console.log("Not Equal to (!=):", 5!=5);
console.log("Not Equal to (!=):", 5!=4);

// Greater than (>)
console.log("Greater than:", 5>3);
console.log("Greater than:", 5>10);

// Less than (<)
console.log("Less than:", 3<5);
console.log("Less than:", 10<5);

// Logical operators
// AND - &&
// OR - ||
// NOT - !

let sunny = true;
let warm = false;

console.log("Is it sunny AND warm?",sunny && warm); //if both variables' value are true, it will print true

console.log("Is it sunny OR warm?",sunny || warm); // if only one of variables' value is true, it will print true

console.log("NOT sunny?",!sunny);

// Assignment Expression
let num3 = 10;
let num4 = 5;

// num3 = num3 + num4;
// console.log(num3);

// Addition assignment (-+)
num3 += num4;
console.log(num3);

// Subtraction assignment (-=)
// Multiplication assignemnt (*=)
// Division assignment (/=)
// Exponent assignment (**=)
// Remainder assignment (%=)