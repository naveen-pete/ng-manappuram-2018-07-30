var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.data = [];
        this.push = function (item) { return _this.data.push(item); };
        this.pop = function () { return _this.data.shift(); };
    }
    return Queue;
}());
var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    return Customer;
}());
var q1 = new Queue();
q1.push(1);
var q2 = new Queue();
q2.push('hi');
var q3 = new Queue();
q3.push(new Customer('ram'));
