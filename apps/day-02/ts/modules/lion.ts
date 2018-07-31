import Animal from './animal';

export default class Lion extends Animal {
  constructor(name, private color) {
    super(name);
  }

  showDetails() {
    console.log('The name of the lion is', this.name);
    console.log('It\'s color is', this.color);
  }
  
  speak() {
    console.log(this.name + ' roars.');
  }
}
