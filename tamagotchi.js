// Create class below

class Tamagotchi {
  constructor(name, energy, full, mood, sick, rehomed) {
    this.name = name;
    this.energy = energy || 9;
    this.full = full || 8;
    this.mood = mood || 6;
    this.sick = sick || false;
    this.rehomed = rehomed || false;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }

  status() {
    console.log(
      `My mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${
        this.energy
      }\nI am ${this.sick ? "" : "not "}sick`
    );
  }
}

const pet = new Tamagotchi("Albert", 2, 3, 5, false, true);
pet.status();

// Do not edit below this line
module.exports = Tamagotchi;
