var name1;
name1 = 'hari';
console.log('name1:', name1);
var isDone = true;
console.log('isDone:', isDone);
isDone = false;
var age = 25;
console.log('age:', age);
var colors = ['red', 'green', 'blue'];
console.log('colors:', colors);
var items = [10, true, 'thrissur'];
console.log('items:', items);
var numbers = [10, 20, 30];
console.log('numbers:', numbers);
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
x[2] = '20';
x[3] = '30';
// Initialize it incorrectly
// x = [10, "hello"]; // Error
// x[3] = true; // Error, 'boolean' isn't 'string | number'
