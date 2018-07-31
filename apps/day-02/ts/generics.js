function reverse(items) {
    var toreturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
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
var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    return Customer;
}());
var numbers = [10, 20, 30, 40, 50];
var result = reverse(numbers);
console.log('numbers:', numbers);
console.log('result:', result);
var cities = ['trivandrum', 'kochi', 'thrissur'];
var r = reverse(cities);
console.log('cities:', cities);
console.log('r:', r);
var c1 = new Customer('hari');
var c2 = new Customer('krish');
var c3 = new Customer('shiv');
var customers = [c1, c2, c3];
var res = reverse(customers);
console.log('customers:', customers);
console.log('res:', res);
