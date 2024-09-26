// const vehicles = ["Car", "Bus", "Truck", "Bike"]
// console.log(...vehicles) // ... (Spread Operator) is used to "spread" the elements of the array into individual arguments.
// const car = vehicles[0]
// const bus = vehicles[1]
// const truck = vehicles[2]
// const bike = vehicles[3]
// console.log(car, bus, truck, bike)

// //Array  Destructuring :it extract values from an array and assign them to variables in a single statement.
// const vehicles = ["Car", "Bus", "Truck", "Bike"];

// // Destructuring the array
// const [first, second, third, fourth] = vehicles;
// console.log(first);  // "Car"
// console.log(second); // "Bus"
// console.log(third);  // "Truck"
// console.log(fourth); // "Bike"

// const vehicles1 = ['mustang', 'f-150', 'expedition', 'corvette'];
// console.log(...vehicles1)

// const [car,, suv,, ] = vehicles1; // extra , remove the value from array
// console.log(car, suv)

// const sampleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Vinodh"];
// const [one, two, three, four, five, six, seven, eight, nine, ten, eleven] = sampleNumbers;

// console.log("My Name is ", eleven)

// const FullName = {
//   firstName: "Vinodh",
//   lastName: "Reddy",
// }
// // Object Destructuring
// const { firstName, lastName } = FullName
// console.log(FullName)

// console.log(1 === "1"); // === value and datatype should same
// // Expected output: true

// console.log('hello' == 'hello');
// // Expected output: true

// console.log('1' == 1);
// // Expected output: true

// console.log(0 == false);
// Expected output: true

// Nested Array: push() method in the way you described, it creates a nested array. it contains another array as one of its elements.
let x;
const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "raspberry"];

// Nesting berries inside fruits

fruits.push(berries); // the push method adds berries as the last element of the fruits array
// console.log(fruits);

// Notice that the last element is an array itself(i.e.., berries)

// x = fruits[3][1]; // it prints blueberry  apple starts with 0 index and berries taken as a 3rd index 

//  console.log(x);

// Nesting Both Arrays into a New Array

// const allFruits = [fruits, berries]; 
// console.log(allFruits);

// // Accessing an Element  in allFruits
// x = allFruits[1][2];
// console.log(x);

// // Concatenating Arrays
// x = fruits.concat(berries);

// console.log(x);

// // Using Spread Operator ...
x = [...fruits, ...berries]; //... (Spread Operator) is used to "spread" the elements of the array into individual arguments.
console.log(x);

// Flattening Array
const arr = [1,2,[3,4,5],6,[7,8], 9, 10, [11, 12, [13, 14]]];

x = arr.flat();//The flat() method in JavaScript removes one level of nested arrays, making everything part of one single array.
console.log(x)

// // static methods of array object
x = Array.isArray(fruits); //If fruits is an array, x will be true
console.log(x);

x = Array.from('12345');//Array.from() string '12345'is converted into an array of individual character '1','2'...

console.log(x);


// Creating an Array from a Set of Values
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);// creates a new array from the arguments you pass to it.
console.log(x);