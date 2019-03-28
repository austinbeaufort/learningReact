// 1st React Example I completed on Codepen, link below
// https://codepen.io/tinyhatcoding/pen/oVQPGP


// ******* JAVASCRIPT ES6 REFRESHER ********

// const printMyName = name => {
//     console.log(name);
// }


// ARROW FUNCTIONS
// const printMyName = name => console.log(name);

// printMyName('Max');

// const multiply = number => number * 2;

// console.log(multiply(2));


// EXPORTS AND IMPORTS (MODULES)

// CLASSES 

// class Human {
//     gender = 'male';

//     printGender = () => {
//         console.log(this.gender);
//     }
// }


// class Person extends Human {
//     name = 'Austin';

//     printMyName = () => {
//         console.log(this.name);
//     }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

// CONSTRUCTOR FUNCTION ES6
// constructor() {
//     this.myProperty = 'value'
// }

// ES7 VERSION
// myProperty = 'value'




// SPREAD / REST OPERATORS

// SPREAD => USED TO SPLIT UP ARRAY ELEMENTS OR OBJECT PROPERTIES.
// const newArray = [...oldArray, 1, 2];
// const newObject = {...oldObject, newProp: 5};

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// console.log(newNumbers);

// const person = {
//     name: 'austin'
// }

// const newPerson = {
//     ...person,
//     age: 28
// }

// console.log(newPerson);

// REST => USED TO MERGE A LIST OF FUNCTION ARGUMENTS INTO AN ARRAY.

// const filter = (...args) => {
//     return args.filter(el => el === 1);
// }

// console.log(filter(1, 2, 3));


// DESTRUCTURING
// [a, b] = ['hello', 'max'];
// console.log(a, b);


// const numbers = [1, 2, 3];
// [num1, num2] = numbers;
// console.log(num1, num2);



// ARRAY FUNCTIONS

// const numbers = [1, 2, 3];

// const doubleNumArray = numbers.map(number => number * 2);
// console.log(doubleNumArray);




// PLANNING A REACT APP

// 1. COMPONENT TREE / COMPONENT STRUCTURE

// 2. APPLICATION STATE (DATA)

// 3. COMPONENTS VS. CONTAINERS