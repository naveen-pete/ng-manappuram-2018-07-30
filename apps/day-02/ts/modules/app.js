"use strict";
exports.__esModule = true;
var dog_1 = require("./dog");
var lion_1 = require("./lion");
var d = new dog_1["default"]('Tommy');
d.speak();
var l = new lion_1["default"]('Leo', 'Yellow');
l.speak();
l.showDetails();
l.name = 'Leo 1';
l.showDetails();
