class Queue<T> {
  private data = [];
  push = (item: T) => this.data.push(item);
  pop = (): T => this.data.shift();
}

class Customer {
  constructor(public name) {}
}

const q1 = new Queue<number>();
q1.push(1);

const q2 = new Queue<string>();
q2.push('hi');

const q3 = new Queue<Customer>();
q3.push(new Customer('ram'));
