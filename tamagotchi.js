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
      }\nI am ${this.sick ? "" : "not "}sick\n\n`
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
    } else {
      console.log(`refusal to take medicine`);
      this.energy--;
    }
  }
}

const pet = new Tamagotchi("Albert", 2, 3, 5, false, true);
pet.status();

pet.medicate();
while (!pet.sick) {
  pet.eat();
  pet.status();
}
pet.medicate();
pet.status();

// Do not edit below this line
module.exports = Tamagotchi;
