var message = "Hello TypeScipt";
console.log(message);
// let age: number =31;
// let name1: string="pavan"
// let cond: boolean = true
// let cond1: boolean = false
// console.log(name1 + "\n" +age + "\n" + cond + "\n" + cond1)
// // Array : Represents a list of values . you can specify the type of elements in the array
// let arr: number[]=[1,2,3,4,5]
// let arr1: string[] =["pavan","kumar","reddy"]
// console.log(arr+"\n"+arr1)
// // tuple: A tuple is an array with a fixed size or number of elemts, where each element can have a different type
// let a:[string,number] =["pavan",31]
// console.log(a)
// //Enum:define a set of named values, making your code easier to read and manage. Each value in an enum is a constant and can be either a number or a string.
// enum color{
//     white =1
//     ,red,blue,green
// }
// let myColor=color.white
// console.log(color.white) // it return the index number 
// console.log(myColor)// it reteun list of colors 
// any : The any type can hold any type of value. Its useful when you don't know the type in advance or when you are migrating from Javascript
// let anyRandomValue: any;
// anyRandomValue =10
// anyRandomValue= "pavan"
// anyRandomValue=true
// console.log(anyRandomValue) // it prints all the values 
// // void: it doesnt return anything to function 
// function logMessage(message:string):void {
//     console.log(message)
// }
// // null and undefined
// let u: undefined = undefined
// console.log(u)
// let n: null = null
// console.log(n)
// // object : it represents any non-primitive type like objects, arrays and functions
var person = {
    name: "pavan",
    age: 31
};
console.log(person);
// unknown : The unknown type is similar to 'any' but safer because you must check the type of a variable before you use it
var userinput;
userinput = 10;
userinput = "Hello";
userinput = 10;
userinput = true;
if (typeof userinput === "string") { //=== it checks value and data type 
    console.log(userinput.toUpperCase());
}
// function processInput(input: unknown){
//     if(typeof input === "string"){
//         console.log("String value: ", input.toUpperCase());
//     }
//     // check if the input is a number
//     else if (typeof input === "number"){
//         console.log("Number value: ", input * 2);
// }
// else if (typeof input === "boolean"){
//     console.log("Boolean value: ", !input);
// }
// else {
//     console.log("Invalid input");
// }
// }
// processInput(userinput)
// never: Represents the type of values that never occur. Its used for functions that always throw an error or never return anything
// function thorwError(message: string): never {
//     throw new Error(message);
// }
// // union type : allow a variable to hold more than one type of value
// let age1: number | string
// age1=25
// age1="pavan"
// console.log(age1) // it prints pavan beacuse it follows lifo order last in first out 
// // literal type : TypeScript allows you to specify a variable that can hold a specific set of string values. 
var varName; // it prints down bcz it follows lifo order 
varName = "left";
varName = "right";
varName = "up";
varName = "down";
console.log(varName);
// Function : We can define the types of parameters and the return type of a function
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
function processValue(value) {
    if (value === "string") {
        return value.toLowerCase();
    }
    return value.toString();
}
console.log(processValue("pavan"));
