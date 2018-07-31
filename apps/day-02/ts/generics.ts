function reverse<T>(items: T[]): T[] {
  var toreturn: T[] = [];

  for (let i = items.length - 1; i >= 0; i--) {
      toreturn.push(items[i]);
  }

  return toreturn;
}

// function reverseStrings(items: string[]): string[] {
//   var toreturn: string[] = [];

//   for (let i = items.length - 1; i >= 0; i--) {
//       toreturn.push(items[i]);
//   }

//   return toreturn;
// }

class Customer {
  constructor(public name) {}
}

const numbers = [10, 20, 30, 40, 50];
const result = reverse<number>(numbers);

console.log('numbers:', numbers);
console.log('result:', result);

const cities = ['trivandrum', 'kochi', 'thrissur'];
const r = reverse<string>(cities);

console.log('cities:', cities);
console.log('r:', r);

const c1 = new Customer('hari');
const c2 = new Customer('krish');
const c3 = new Customer('shiv');

const customers = [c1, c2, c3];
const res = reverse<Customer>(customers);

console.log('customers:', customers);
console.log('res:', res);

