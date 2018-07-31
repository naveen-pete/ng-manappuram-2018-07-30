import Dog from './dog';
import Lion from './lion';

const d = new Dog('Tommy');
d.speak();

const l = new Lion('Leo', 'Yellow');
l.speak();
l.showDetails();

l.name = 'Leo 1';
l.showDetails();
