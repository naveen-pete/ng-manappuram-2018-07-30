// Function
function greet(name) {
    console.log('Hi ' + name + ', welcome to TypeScript!');
}
greet('Programmer');
// Function expression syntax
var greet1 = function (name) {
    console.log('hello, ' + name);
};
greet1('hari');
// Arrow function syntax #1
var greet2 = function (name) {
    console.log('Namaste.', name);
};
greet2('arun');
// Arrow function syntax #2
var greet3 = function (name) {
    console.log('Namaste.', name);
};
greet3('rajiv');
// Arrow function syntax #3
var greet4 = function (name) { return console.log('Namaste.', name); };
greet4('dhanya');
// Arrow function with return type
var double = function (n) {
    return n * n;
};
console.log('double(10):', double(10));
// Arrow function with return type
var double1 = function (n) { return n * n; }; // return n * n;
console.log('double1(20):', double(20));
// Optional parameters
var double2 = function (n) {
    if (!n)
        n = 5;
    return n * n;
};
console.log('double2():', double2());
// Default parameters
var double3 = function (n) {
    // if(!n) n = 5;
    if (n === void 0) { n = 7; }
    return n * n;
};
console.log('double3():', double3());
// Rest parameters
var sum = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var s = 0;
    console.log('parameters:', numbers);
    numbers.forEach(function (n) {
        s = s + n;
    });
    return s;
};
console.log('sum():', sum(1, 2, 3, 4, 5));
// Spread
var spreadExample = function () {
    var defaultColors = ['red', 'green', 'blue'];
    var myColors = ['white', 'black'];
    var allColors = myColors.concat(['yellow'], defaultColors, ['purple']);
    console.log('allColors:', allColors);
};
spreadExample();
