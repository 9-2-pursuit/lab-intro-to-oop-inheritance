// Create class below

class Tamagotchi {

    constructor(name, energy, full, mood, sick, rehomed) {
        this.name = name;
        this.energy = 9;
        this.full = 8;
        this.mood = 6;
        this.sick = false;
        this.rehomed = false;
    }
  greet() {
    console.log(`Hello, I'm ${this.name}!`);
  }

  status() {
    console.log(`${this.energy} ${this.full} ${this.mood} ${this.sick}`)
  }

  eat() {
    this.full += 2 
    this.energy -= 1
    if(this.full > 10) {
        this.sick = true;
    }
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
