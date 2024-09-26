// Alias
// Without type Alias
// let person1: {name: string; age: number} = {
//   name: "Pavan",
//   age: 25
// };
var fruits = ["Apple", "Orange"];
var move;
move = "left";
move = "right";
move = 1;
move = "down";
console.log(move); // it prints last value it follows lifo
var addNumbers = function (x, y) {
    return x + y;
};
console.log(addNumbers(10, 20));
// // Using the interface:
var bob = {
    name: "Bob",
    age: 30
};
console.log(bob.age);
// Without generics
function identity(arg) {
    return arg;
}
var output = identity(10);
console.log(output);
// // With Generics
function identity1(arg) {
    return arg;
}
var output1 = identity1(5);
var output2 = identity1("Pavan");
console.log(output1 + "\n" + output2);
// // Using Generics in Functions
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(["Pavan", "Kumar"]);
console.log(numArray + "\n" + strArray);
var Box = /** @class */ (function () {
    function Box(value) {
        this.contentsVar = value; // this it refers current class variables 
    }
    Box.prototype.getContents = function () {
        return this.contentsVar;
    };
    return Box;
}());
var numberBox = new Box(123);
var stringBox = new Box("Hello");
console.log(numberBox.getContents()); // 123
console.log(stringBox.getContents()); // "Hello"
