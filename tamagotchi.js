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
    console.log(`Hello, I'm ${this.name}!`);
  }

  status() {
    let sickMessage = sick ? "I am sick" : "I am not sick";
    console.log(
      `My mood is: ${this.mood} /n I am this full:${
        this.full
      } /n My energy is: ${this.energy} /n ${!sickMessage}`
    );
  }

  
}

// Do not edit below this line
module.exports = Tamagotchi;
