var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color) {
        if (color === void 0) { color = 'white'; }
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    Dog.prototype.speak = function () {
        console.log(this.name + ' barks.');
    };
    return Dog;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    Lion.prototype.showDetails = function () {
        console.log('The name of the lion is', this.name);
        console.log('It\'s color is', this.color);
    };
    Lion.prototype.speak = function () {
        console.log(this.name + ' roars.');
    };
    return Lion;
}(Animal));
// We cannot instantiate an abstract class
// const a = new Animal('Snowy');
// a.speak();
var d = new Dog('Tommy');
d.speak();
var l = new Lion('Leo', 'Yellow');
l.speak();
l.showDetails();
l.name = 'Leo 1';
l.showDetails();
