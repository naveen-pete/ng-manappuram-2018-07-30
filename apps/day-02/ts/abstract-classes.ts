abstract class Animal {
  constructor(public name: string) {}
  
  abstract speak();
}

class Dog extends Animal {
  constructor(name, private color = 'white') {
    super(name);
  }
  
  speak() {
    console.log(this.name + ' barks.');
  }
}

class Lion extends Animal {
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

// We cannot instantiate an abstract class
// const a = new Animal('Snowy');
// a.speak();

const d = new Dog('Tommy');
d.speak();

const l = new Lion('Leo', 'Yellow');
l.speak();
l.showDetails();

l.name = 'Leo 1';
l.showDetails();
