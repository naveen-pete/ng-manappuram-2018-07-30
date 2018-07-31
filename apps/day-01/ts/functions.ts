// Function
function greet(name: string) {
  console.log('Hi ' + name + ', welcome to TypeScript!');
}

greet('Programmer');

// Function expression syntax
let greet1 = function (name: string) {
  console.log('hello, ' + name);
};

greet1('hari');

// Arrow function syntax #1
let greet2 = (name: string) => {
  console.log('Namaste.', name);
}

greet2('arun');

// Arrow function syntax #2
let greet3 = name => {
  console.log('Namaste.', name);
}

greet3('rajiv');

// Arrow function syntax #3
let greet4 = name => console.log('Namaste.', name);

greet4('dhanya');

// Arrow function with return type
const double = (n: number): number => {
  return n * n;
}

console.log('double(10):', double(10));

// Arrow function with return type
const double1 = (n: number): number => n * n;   // return n * n;

console.log('double1(20):', double(20));

// Optional parameters
const double2 = (n?: number): number => {
  if(!n) n = 5;

  return n * n;
}

console.log('double2():', double2());

// Default parameters
const double3 = (n: number = 7): number => {
  // if(!n) n = 5;
  
  return n * n;
}

console.log('double3():', double3());

// Rest parameters
const sum = (...numbers: number[]): number => {
  let s = 0;
  console.log('parameters:', numbers);
  numbers.forEach(n => {
    s = s + n;
  })

  return s;
}

console.log('sum():', sum(1, 2, 3, 4, 5));

// Spread
const spreadExample = () => {
  let defaultColors = ['red', 'green', 'blue'];
  let myColors = ['white', 'black'];
  let allColors = [...myColors, 'yellow', ...defaultColors, 'purple'];

  console.log('allColors:', allColors);
}

spreadExample();








