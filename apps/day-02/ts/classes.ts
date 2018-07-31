class Animal {
  // name: string;

  // short cut syntax for creating and assigning the value of properties
  constructor(protected name: string) {
    // this.name = name;
  }
  
  speak() {
    console.log(this.name + 
       ' makes a noise.');

    // this.greet();
  }

  protected greet() {
    console.log('Hello ' + this.name);
  }
}

class Dog extends Animal {
  constructor(name, private color = 'white') {
    super(name);
    // this.color = color;
  }
  
  speak() {
    super.speak();
    console.log(this.name + ' barks.');
    this.greet();
  }
}


const a = new Animal('Snowy');
a.speak();
// a.greet()    // gives an error because greet() is a private method
// console.log('name of animal:', a.name);

const d = new Dog('Tommy');
d.speak();
