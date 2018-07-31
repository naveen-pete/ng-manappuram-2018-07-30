function drawRectangle(obj) {
    var l = obj.length;
    var w = obj.width;
    // assume length and width are required to draw rectangle
    console.log('l:', l);
    console.log('w:', w);
}
var r = {
    length: 10,
    width: 20
};
drawRectangle(r);
var c = {
    name: 'arun',
    age: 25,
    length: 20,
    width: 30
};
drawRectangle(c);
