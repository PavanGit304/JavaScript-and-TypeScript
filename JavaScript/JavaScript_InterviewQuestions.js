
//********************************************** Var,let,const ********************************************
// function Var_let_const(){
// var a=10 // it is re-declared and changes globally.
// let b=20 // it is block-scoped, but arr can be modified internally.so it stays 20 outside the block.
// const c=30 //can't be reassigned, but arr can be modified internally.

// var a=30
// // let b=60  // Error: can't reassign
// // const c=50 // Error: can't reassign
// console.log( a +""+ b +""+c);
// // let, const arr can be modified internally.
// const arr = [1, 2];
// arr.push(3);  // Allowed: modifying array
// console.log(arr);  // [1, 2, 3]
// }


//******************************************* closure ********************************************************************

// function outerFunction() {
//     let outerVariable = 'Hello';
    
//     function innerFunction() {
//       console.log(outerVariable);  // Accesses outerVariable from outerFunction
    
//     return innerFunction;
//   }
  
//   const closureExample = outerFunction();
//   closureExample();  // Outputs: "Hello"   When closureExample() is called, it still remembers outerVariable from outerFunction.
  
  //********************************** Data types ********************************************************************

let name  = 'Vishal'; //String: Represents text (e.g., "hello").
let age = 30; //Number: Represents numbers, including integers and floating-point numbers (e.g., 42, 3.14)
let isStudent = true;//Boolean: Represents a logical value, either true or false
let car = null;
let address; //Undefined: A variable that has been declared but not assigned a value.
let symbol = Symbol("id"); // Symbol: Used to create unique identifiers
let bigInt = 1234567890123456789012345678901234567890n; // BigInt: Used for very large integers

console.log(name, age, isStudent, car, address, symbol, bigInt);