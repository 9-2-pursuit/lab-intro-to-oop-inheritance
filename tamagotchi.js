// Create class below
//////////////Class Tamagotchi/////////////

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
  ///////////////////////Methods//////////////////////////////
  greet = () => {
    console.log(`Hello, I'm ${this.name}!`);
  };

  status = () => {
    console.log(
      `********************\n` +
        `My mood is: ${this.mood}\n` +
        `I am this full: ${this.full}\n` +
        `My energy is: ${this.energy}\n` +
        `I'm not ${this.sick}\n` +
        `********************`
    );
  };

  eat = () => {
    this.full += 2;
    this.energy -= 1;
    if (this.full > 10) {
      this.sick = true;
    }
  };

  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
      this.sick = false;
    } else {
      console.log("Refusal to take medicine");
      this.energy -= 1;
    }
  }

  play() {
    if (this.sick) {
      console.log("I am not feeling well, I cannot play");
      this.mood -= 1;
      this.energy -= 1;
    } else if (this.mood > 9) {
      console.log("I am too happy to play");
      this.energy -= 2;
      this.full -= 1;
    } else if (this.energy <= 3) {
      console.log("I am too tired to play");
      this.energy -= 1;
    } else {
      this.mood += 2;
      this.energy -= 1;
      this.full -= 1;
    }
  }

  sleep() {
    console.log("ME ESTOY EJECUTANDO SIN PROBLEMA");
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
      this.full -= 1;
      this.energy -= 1;
    }
  }

  badGuardian() {
    console.log(`${this.name} has been rehomed.`);
    if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
      this.rehomed = true;
    }
  }
}

///////new instances//////
const miTamagotchi = new Tamagotchi("Tamagotchi-1", 10, 9, 1, false, false);
const otherTamagotchi = new Tamagotchi("Tamagotchi-2");

// INSTANCIANDO LA CLASE
console.log(otherTamagotchi);

// Probando metodo badGuardian
console.log(otherTamagotchi.badGuardian());

// Do not edit below this line
module.exports = Tamagotchi;
