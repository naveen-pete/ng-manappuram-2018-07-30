"use strict";
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
exports.__esModule = true;
var animal_1 = require("./animal");
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
}(animal_1["default"]));
exports["default"] = Lion;
