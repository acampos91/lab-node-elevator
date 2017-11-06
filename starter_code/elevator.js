class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = "up";
    this.setInterval;
  }

  start() {
  this.setInterval = setInterval(() => {
    this.update();
  }, 1000);
  }

  stop() {
    clearInterval(this.setInterval);
  }
  update() {
this.log();
  }
  _passengersEnter(person) {
if(!this.waitingList.length == 0){
  this.passengers.push(person);
  this.waitingList.pop();
  requests.destinationFloor.push(person.originFloor);
  console.log(person.name + "has enter the elevator");
}
  }
  _passengersLeave(person) {
    if(!this.passengers == 0){
      if (person.destinationFloor == this.floor){
        this.passengers.pop(person)
      }
      console.log(person.name + "has left the elevator");
    }

   }

  floorUp() {
  if(this.floor < this.MAXFLOOR){
  this.floor ++;
  console.log(this.log());
   }
  }
  floorDown() {
  if(this.floor > 0){
  this.floor --;
  console.log(this.log());
} else {
  this.floor = 0;
}
   }
  call(person) {
this.waitingList.push(person);
this.requests.push(person.originFloor)
   }
  log() {
    console.log("Direction: " + this.direction + " Floor: " + this.floor)
  }
}

module.exports = Elevator;
