
// Data types
//  Primitive types (like number, string, boolean, null, undefined, symbol, bigint)
// string  - Sequence of characters. Must be in single or double quotes or backticks
// Number
// Boolean
// Null
// Undefined
// Symbol
// Bigint

// let name  = 'Vishal';
// let age = 30;
// let isStudent = true;
// let car = null;
// let address;
// let symbol = Symbol("id"); // symbol
// let bigInt = 1234567890123456789012345678901234567890n; // bigint

// console.log(name, age, isStudent, car, address, symbol, bigInt);

//*******************************  typeof: *******************************************
// typeof:is an operator that is used to determine the data type of a value or variable.

// const firstName = "Vinodh";
// const lastName = "Vishal";
// console.log(firstName, lastName, typeof firstName, typeof lastName);

//******  Primitive data type follows lifo order 
// let x = 10; // Primitive data type follows lifo order last in first out 
// let y = x;  // copying the value of x
// y = 20;
// console.log(y); // 10 ( x is not changed )

//******************************* Reference type****************************************
//reference types refer to objects, arrays, and functions. These types are not stored directly in the variable itself but are stored as a reference or address to the actual value in memory. note:primitive types (like numbers, strings, booleans, etc.), which are stored directly in the variable.
// let arr1 = [1, 2, 3]; // Reference type
// let arr2 = arr1; // copying the reference
// arr2.push(4);
// console.log(arr1, arr2); // [ 1, 2, 3, 9 ] [ 1, 2, 3, 9 ]

//********************************** object type***************************************
// an object is a data type that allows you to store collections of related data and functionality. Objects are made up of key-value pairs, where the keys (also called properties) are strings, and the values can be any type
// const person = { // object type
//   name: "pavan",
//   age:31
// };

// const output = person;
// console.log(output, typeof output, person);

// function sayHello(){  // older version ES5
//   console.log("Hello");
// }

// const output = sayHello;
// console.log(output, typeof output);

// Data Types
// Primitive Types: Stored directly in the "stack", where it is accessed from
// String| Number| Boolean| Null| Undefined| Symbol| BigInt
// Reference Types: Stored in the "heap", where it is accessed from
// Object| Array| Function| RegExp| Date| Error| Map| Set| WeakMap| WeakSet

//Primitive Values are stored on the stack

// const name = "Pavan";
// const age = 30;
// Reference values are stored on the heap

// const person = {
//   name: "Vinodh",
//   age: 28
// }

// let newPerson = person;
// newPerson.name = "Koushik";

// let newName = name;
// newName = "Vishal";
// console.log(name, newName, person, newPerson, typeof name, typeof newName, typeof person, typeof newPerson);

//*************************** Type Conversion ******************************************
// let str = '123';
// let num1 = Number(str); // Explicit conversion from string to number
// console.log(num1, typeof num1);

// let result = "The number is " + 42; // Implicit conversion from number to string
// console.log(result, typeof result);

// Opertaots
// Arithmatic
// + - * / % ** ++ --
// Comparison
// < > <= >= == === != !==
// Logical
// && || !
// Ternary
// ? :
// Assignment
// = += -= *= /= %=
//Logical
// && ||

// exponentiation operator(**). It is used to raise the first operand to the power of the second operand.
// let a = 4
// let b = 5
// let c = (a ** b) // 4^5 = 4 * 4 * 4 * 4 * 4 --> 4 raised to the power of 5

// console.log(c)

//****************************Type Coercion*********************************************
// Type Coercion: Automatic or manual conversion of one data type to another.
// console.log('5' + 5) // 55 (String + Number = String)
// console.log('5' - 5) // 0 (String - Number = Number)
// console.log(true + 2) // 3 (true become 1)
// console.log(false + 2) // true (false = 0)

// let x;

// const name = 'Vinodh';
// const age =28;

// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
// console.log(x)

//******************************Template Literals(Backticks) `${}` **********************
// template literals are strings that are enclosed in backticks (`) and allow you to embed variables and expressions directly into the string using ${}

// x = `Hello, my name is ${name} and I am ${age} years old`;
// console.log(x)

//************************/ String Properties and Methods*******************************
// const s = new String("Hello world");
// x = typeof s;
// x = s.length;
// console.log(x)
// x =s[0];
// console.log(x)

// Prototype of the string object

// x  = s._proto_;
// console.log(x)
// console.log(x, typeof x)
// x = s.toLowerCase(); // it prints small letters
// console.log(x)
// x = s.toUpperCase(); // it prints capital letters
// console.log(x)
// // Using CharAt()
// x = s.charAt(0);
// console.log(x)

// Finding the index of a character at a specific index

// x  = s.indexOf('d');
// console.log(x)

// Extracting a part of the string with substring ()
// x = s.substring(2,5);  // Returns the substring from index 2 to index 5: 'llo'
// x = s.substring(7 );  // Returns the substring from index 2 to the end of the string: 'llo

// const s = new String("Hello world"); //H is -11 to -6 -->Hello
// console.log(s)

// x =s.slice(-11, -6) 

// console.log(x);

//***************************/ trim() removes whitespace from both ends of a string
// x = s.trim();
// console.log(x);

// x = s.replace('world', 'Vishal'); // it replace the vishal in hello
// console.log(x);
// x = s.valueOf(); // it gets the value of s
// console.log(x);
// x = s.split(''); // it splits the string 
// console.log(x);

// let x;
const num = new Number(5);
// console.log(num);
// x = num.toString(); // it converts int to String 
// console.log(x, typeof x);

// x = num.toFixed(2); // formats the number 5 as '5.00'(2 decimal places)
// console.log(x, typeof x);

// x = num.toPrecision(3); // formats the number 5 as '5.00'(2 decimal places)
// console.log(x , typeof x);

// x = num.toExponential(2); // formats the number 5 as '5.00'(2 decimal places)
// console.log(x , typeof x);

// x = num.toLocaleString('en-US'); // formats the number 5 as '5.00'(2 decimal places)
// console.log(x , typeof x);

// x = num.valueOf(); // it gets the value of num
// console.log(x , typeof x);

// x = Number.MAX_VALUE;  // it gets the max value of number 
// console.log(x , typeof x);

// x = Number.MIN_VALUE; 
// console.log(x , typeof x);
// let x;
// x = Math.sqrt(9);
// console.log(x);

// x = Math.abs(-5);
// console.log(x);

// x =Math.round(4.2);
// console.log(x);

// // x = Math.ceil(4.2);
// // console.log(x);

// x = Math.floor(4.9);
// console.log(x);

// x = Math.pow(2,3);
// console.log(x);

// x = Math.min(3,4,8,1,2,5);
// console.log(x);

// x = Math.max(3,4,8,1,2,5);
// console.log(x);

// x = Math.random();
// console.log(x);

// x = Math.floor(Math.random() * 100);
// console.log(x);

//********************************/ Time methods **************************************

// let d;

// d = new Date();
// console.log(d);

// d = d.toString();

// d = new Date(2024, 7, 28, 21, 17, 30 )

// console.log(d);

// d = Date.now();
// console.log(d);


// d = now.toDateString();
// console.log(d);


// d = d.getTime();
// console.log(d);



// d = new Date(2024, 7, 28, 21, 17, 30 );
// console.log(d);

// d = Math.floor(Date.now() / 1000);
// console.log(d);

// let x;

// let x

// let d = new Date();
// console.log(d);
// x = d.toString();

// console.log(x);

// x = d.getTime();
// console.log(x);

// x = d.valueOf();
// console.log(x);

// x = d.getFullYear();
// console.log(x);

// x = d.getMonth();
// console.log(x);

// x = d.getMonth() + 1;
// console.log(x);

// x = d.getDate();
// console.log(x); 

// x = d.getDay();
// console.log(x);

// x = d.getHours();

// console.log(x);

// x = d.getMinutes();
// console.log(x);

// x = d.getSeconds();
// console.log(x);

// x = d.getMilliseconds();
// console.log(x);