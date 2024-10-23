// Arrays

let fruits = [
  "Banana",
  "Apple",
  "Orange",
  "Pear",
  "Avocado",
  "Durian",
  "Watermelon",
  "Guava",
  "Chico",
];

console.log("Fruits:", fruits);
// The console will show the arrays with number beside them, it's called index and it starts with zero.

// Array.length

console.log("Fruits Length:", fruits.length);

// Updating our elements, array[index]
fruits[0] = "Grapes";
console.log("Updated Fruits:", fruits);

// .push() method = add elements to the array
fruits.push("Berry", "Soursop");
console.log("Added more fruits:", fruits);
console.log("Fruits Length:", fruits.length);

// .pop() method = remove the last entry
// fruits.pop("Berry");
fruits.pop() // Will remove the last entry
console.log("Removed some fruits:", fruits);
console.log("Fruits Length:", fruits.length);

// .splice() method - inserting in between entries.
// 1st - Start position
// 2nd - remove elements
// 3rd - Add elements
fruits.splice(1,2);
fruits.pop()
// 1 is the starting element, 0 is how many elements in the array to be removed 3 the entry to be added
console.log("uses Splice Method:",fruits);
console.log("uses Splice Method:", fruits.length);

// .includes() method: true / false

console.log("Is Grapes available?",fruits.includes("Grapes")); // Case sensitive
console.log("Is Apple available?", fruits.includes("Apple"));

// .forEach()
fruits.forEach(function(fruits){
    console.log("Fruit:",fruits);
})