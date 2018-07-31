interface RectangleOptions {
  length: number;
  width: number;
  // height?: number;
}

function drawRectangle(obj: RectangleOptions) {
  const l = obj.length;
  const w = obj.width;

  // assume length and width are required to draw rectangle

  console.log('l:', l);
  console.log('w:', w);
}

const r = {
  length: 10,
  width: 20
};

drawRectangle(r);

const c = {
  name: 'arun',
  age: 25,
  length: 20,
  width: 30
};

drawRectangle(c);
