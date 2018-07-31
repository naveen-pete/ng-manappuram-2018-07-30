// Static methods
class Plane {
  enginesActive: boolean;

  constructor(public name: string, public numEngines: number) {
    this.enginesActive = false;
  }

  startEngines() {
    console.log('starting engines for', this.name);
    this.enginesActive = true;
    console.log('   enginesActive:', this.enginesActive);
  }

 static badWeather(...planes) {
    console.log('badWeather() - begin');

    for (let plane of planes) {
      plane.enginesActive = false;
    }

    console.log('badWeather() - end');
  }
}

const p1 = new Plane('p1', 2);
p1.startEngines();

const p2 = new Plane('p2', 4);
p2.startEngines();

Plane.badWeather(p1, p2);

console.log('p1:', p1);
console.log('p2:', p2);
