// Create class below
// Tamagotchi class
class Tamagotchi {
  constructor(name) {
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
    console.log(
      `Energy: ${this.energy}/10 | Fullness: ${this.full}/10 | Mood: ${this.mood}/10 | Sick: ${this.sick}`
    );
  }

  eat() {
    this.full += 2;
    this.energy--;
    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log("I don't need medicine.");
      this.energy--;
    }
  }

  play() {
    if (this.sick) {
      this.mood--;
      this.energy--;
    } else if (this.mood > 9) {
      console.log("I don't feel like playing right now.");
      this.energy -= 2;
      this.full--;
    } else if (this.energy <= 3) {
      console.log("I am too tired to play.");
      this.energy--;
    } else {
      this.mood += 2;
      this.energy--;
      this.full--;
    }
  }

  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  timePasses() {
    if (this.sick) {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    } else {
      this.mood -= 2;
      this.full--;
      this.energy--;
    }
  }

  badGuardian() {
    if (this.energy <= 0 || this.full <= 0 || this.mood <= 0) {
      console.log(`${this.name} has been rehomed.`);
      this.rehomed = true;
    }
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
