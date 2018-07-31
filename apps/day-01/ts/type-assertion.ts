let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
// let strLength: number = someValue.length;

console.log('string length:', strLength);

let n: any = '100';
let n1: number = (<number>n);
console.log('n:', typeof n);
console.log('n1:', typeof n1);
