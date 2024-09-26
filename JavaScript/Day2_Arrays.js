//**************************************************/ Array Literal ***************************************************
const numbers =  [12,45,33,29,102];
// console.log(numbers);

// Array constructor 

const mixed = [12, 'Vishal', true, null, {a: 1, b: 2}, [1,2,3]];// object: {a: 1, b: 2}  Array: [1,2,3]
console.log(mixed[5][1]); //  in 5th index [1,2,3]find 1st index value is 2
// console.log(mixed); // it prints all the index values 

// // Array Constructor 
const fruits = new Array('Apple', 'Orange', 'Mango'); // passing the values inside the constructor 
// console.log(fruits);

// // Get value by index
// x = numbers[0]; // it gets 0 index value 
// x = numbers[0] + numbers[3]; // it adds 0 index and 3rd index values 
// console.log(x);

// // creating a string using a value from the array Template Literals or backticks
// x = `My favorite fruit is an ${fruits[2]}`; // 
// console.log(x);

// x = numbers.length; // it prints array length 
// console.log(x);

//******************************************************Modifying Array Elements***************************************************
// fruits[2] = 'Banana';
// console.log(fruits);

// fruits[1] = 'Kiwi';
// console.log(fruits);

// Adding elements to the end of the array using length 
fruits[fruits.length] = 'Pineapple';
x = fruits
console.log(x);
// console.log(fruits);

//adds a value to the end of the array using push 
// fruits.push('real fruit');
// console.log(fruits);

//adds a value to the beginning of the array using unshift() 
// fruits.unshift('unshift fruit');
// console.log(fruits);

//  removes a value from the end of the array using pop()
// x = fruits.pop(); // it remove last value 
// console.log(x);
// console.log(fruits);

// removes a value from the beginning of the array using shift()
// x = fruits.shift(); // it remove the 1st values 
// console.log(x);
// console.log(fruits);

// // reverse() reverses the order of the array
// fruits.reverse();
// console.log(fruits);

// includes() checks if a value exists in the array
// x = fruits.includes('Mango'); // returns true or false
// console.log(x);

// indexOf() returns the index number 
// x = fruits.indexOf('Mango');
// console.log(x);

// toString() converts the array to a string
// x = numbers.toString();
// console.log(x)

// join() joins the elements of the array
// x = numbers.join("/"); // it add / to every element 
// console.log(x)

// // slice
const arr = [28,38,44,29,109];

// x = arr.slice(1,3); //it returns 1 to 3  values except 1 value
// console.log(x)

// splice() removes or replaces exisiting elements and/or adds new elements
arr.splice(1,2);// it remove 1st index and 2nd index values 
console.log(arr)



