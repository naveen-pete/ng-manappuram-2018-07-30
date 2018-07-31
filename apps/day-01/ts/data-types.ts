let name1: string;
name1 = 'hari';

console.log('name1:', name1);

let isDone: boolean  = true;
console.log('isDone:', isDone);

isDone = false;

const age = 25;
console.log('age:', age);

const colors: string[] = ['red', 'green', 'blue'];
console.log('colors:', colors);

const items: any[] = [10, true, 'thrissur'];
console.log('items:', items);

const numbers: Array<number> = [10, 20, 30];
console.log('numbers:', numbers);

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
x[2] = '20';
x[3] = '30';

// Initialize it incorrectly
// x = [10, "hello"]; // Error

// x[3] = true; // Error, 'boolean' isn't 'string | number'












