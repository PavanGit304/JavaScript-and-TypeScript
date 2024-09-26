        // Alias
        // Without type Alias
        // let person1: {name: string; age: number} = {
        //   name: "Pavan",
        //   age: 25
        // };

        // let person2: {name: string; age: number} = {
        //   name: "Pavan Kumar",
        //   age: 29
        // };

        // with type alias: it gives a name to a specific type of data, so you can refer and reuse 
        // type Person = { 
        //   name: string;
        //   age: number;
        // };

        // let person1: Person = {
        //   name: "Pavan",
        //   age: 25
        // };

        // let person2: Person = {
        //   name: "Pavan Kumar",
        //   age: 29
        // };
        // console.log(person1)

        // type Age = number;
        // type Name = string;

        // let myAge: Age = 25;
        // let myName: Name = "Pavan";
        // console.log(myAge)


        // Type Aliases with Arrays

        type StringArray = string[];
        let fruits: StringArray = ["Apple", "Orange"];

        // Type Aliases with Unions 
        type direction = "left" | "right" | 1 | "down";
        let move: direction;
        move = "left"
        move = "right"
        move = 1
        move = "down"
        console.log(move) // it prints last value it follows lifo
        // Type Aliases with Functions We can create a type alias for functions too

        type Add = (a: number, b: number) => number;
        const addNumbers: Add = (x, y) => {
        return x + y
        }
        console.log(addNumbers(10, 20))

        // What is an Interface?
        // An interface defines a shape or structure that an object must have. It helps you make sure that objects follow a specific

        interface Person {
        name: string;
        age: number;
        }

        // // Using the interface:
        let bob: Person = {
        name: "Bob",
        age: 30
        };

        console.log(bob.age);


        // Without generics

        function identity(arg: any): any {
        return arg;
        }
        let output = identity(10);
        console.log(output);
        // // With Generics
        function identity1<T>(arg: T): T {
        return arg;
        }

        let output1 = identity1<number>(5)

        let output2 = identity1<string>("Pavan")
        console.log(output1 +"\n"+ output2);

        // // Using Generics in Functions
        function getArray<T>(items: T[]): T[] {
        return new Array().concat(items);
        }

        let numArray = getArray<number>([1, 2, 3, 4]);
        let strArray = getArray<string>(["Pavan", "Kumar"]);
        console.log(numArray+"\n"+strArray);

        class Box<T> {
            contentsVar: T;
        
            constructor(value: T) {
            this.contentsVar = value; // this it refers current class variables 
            }
        
            getContents(): T {
            return this.contentsVar;
            }
        }
            
        let numberBox = new Box<number>(123);
        let stringBox = new Box<string>("Hello");
        
        console.log(numberBox.getContents()); // 123
        console.log(stringBox.getContents());  // "Hello"