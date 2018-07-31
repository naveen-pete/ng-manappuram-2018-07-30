// Static methods
var Plane = /** @class */ (function () {
    function Plane(name, numEngines) {
        this.name = name;
        this.numEngines = numEngines;
        this.enginesActive = false;
    }
    Plane.prototype.startEngines = function () {
        console.log('starting engines for', this.name);
        this.enginesActive = true;
        console.log('   enginesActive:', this.enginesActive);
    };
    Plane.badWeather = function () {
        var planes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            planes[_i] = arguments[_i];
        }
        console.log('badWeather() - begin');
        for (var _a = 0, planes_1 = planes; _a < planes_1.length; _a++) {
            var plane = planes_1[_a];
            plane.enginesActive = false;
        }
        console.log('badWeather() - end');
    };
    return Plane;
}());
var p1 = new Plane('p1', 2);
p1.startEngines();
var p2 = new Plane('p2', 4);
p2.startEngines();
Plane.badWeather(p1, p2);
console.log('p1:', p1);
console.log('p2:', p2);
