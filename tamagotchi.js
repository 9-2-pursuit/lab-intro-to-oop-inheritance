// Create class below
class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }

  status() {
    let isSick = this.sick ? "I am sick" : "I am not sick";

    console.log(
      `My mood is: ${this.mood} \n I am this full: ${this.full} \n My energy is: ${this.energy} \n ${isSick}`
    );
  }

  eat() {
    this.full += 2;
    this.energy -= 1;

    if (this.full > 10) {
      this.sick = true;
    }
  }

  medicate() {
    if (this.sick === true) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      this.energy -= 1;
      console.log("refusal to take medicine");
    }
  }

  play() {
    if (this.sick) {
      this.mood -= 1;
      this.energy -= 1;
    }
    if (this.mood > 9) {
      this.energy -= 2;
      this.full -= 1;
    }
    if (this.energy <= 3) {
      console.log("I am too tired to play");
      this.energy -= 1;
    }
    if (this.energy > 3 && this.mood < 9 && !this.sick) {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }

  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  timePasses() {
    if (this.sick === true) {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    } else {
      this.mood -= 2;
      this.full -= 1;
      this.energy -= 1;
    }
  }



  badGuardian() {
    if (this.energy <= 0) {
      this.rehomed = true;
    } else if (this.mood <= 0) {
      this.rehomed = true;
    } else if (this.full <= 0) {
      this.rehomed = true;
    }

    console.log("the tamagotchi has been rehomed");
  }
}

// Do not edit below this line
module.exports = Tamagotchi;
