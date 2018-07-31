import Animal from './animal';

class Dog extends Animal {
  constructor(name, private color = 'white') {
    super(name);
  }
  
  speak() {
    console.log(this.name + ' barks.');
  }
}

export default Dog;
