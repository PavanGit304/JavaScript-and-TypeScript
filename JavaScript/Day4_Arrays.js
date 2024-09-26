// Array Challenges 
// Use some of the methods that we looked at to mutate the following array to the expected result. // Expected result = [6,5,4,3,2,1,0]
const arr = [1,2,3,4,5];

arr.push(6);// adds the value from ending 
arr.unshift(0); // unshift: it adds the values from beginning 
arr.reverse(); // it reverse 
console.log(arr);



// Chellenge 2

// Combine arr1 and arr2 into a new array called arr3 with the following elements 
// Notice that both arr1 and arr2  include the number 5. You will have to find a way to get ride of the extra 5. 

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

let arr3 = arr1.concat(arr2);
console.log(arr3);

//Object literal : create an object using curly braces {}, where properties and methods are defined directly as key-value pairs. It allows you to define and initialize an object in a single step.
const person = {
  name: "John Doe",
  age: 32,
  isAdmin: true,
  address: {
    street: "123 Main St",
    city : 'Boston',
    state : 'MA'
  },
   hobbies: ['music', 'movies', 'sports']
};

//Changing information

person.name = 'pavan';
console.log(person.name);

person.isAdmin = false;
console.log(person.isAdmin);

// Removing Information
delete person.age;
console.log(person.age);

// Adding new information
person.hasChildren = true;
console.log(person.hasChildren);

// Adding functions
person.greet = function() {
  console.log(`Hello my name is ${this.name}`);
}
person.greet();

// Handiling multiple words in keys 
const person2 = { 
  'first name': 'Pavan',
  'last name': 'Bosa',
};

x = person2['first name'];
console.log(x);

//Object spread operator: it copys the properties from one object into another object and its useful for creating new object and that include the properties from existing object 
//Methods in Objects: Function are assigned as properties of an object and it allows object to perform action on its properties defined using function expressions or using concise method syntax.
//In JavaScript methods are function

//Destructuring in JavaScript is a convenient syntax that allows you to extract values from arrays or properties from array/objects and assign them to individual variables in one step. You can also give new names to these variables during the extraction process.
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // Output: 1

// const person = { name: 'Alice', age: 25 };
// const { name, age } = person;
// console.log(name); 