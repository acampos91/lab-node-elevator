const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator ();
let person = new Person ();
elevator.start();
//setTimeout ( () => elevator.stop(), 5000);
