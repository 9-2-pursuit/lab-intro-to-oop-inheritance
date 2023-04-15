// Create class below

class Tamagotchi {
  constructor(name, energy, full, mood, sick, rehomed) {
    this.name = name || "";
    this.energy = energy || 9;
    this.full = full || 8;
    this.mood = mood || 6;
    this.sick = sick || false;
    this.rehomed = rehomed || false;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}!`)
  }
  status() {
    function isSick(sick) {
      if (sick) {
        return "I am not sick";
      } else {
        return "I am sick"
      }
    }
    console.log(`My mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${this.energy}\n${isSick(this.sick)}`)
  }
  eat() {
    this.full+=2
    this.energy-=1
    this.full > 10 ? this.sick = true : null
  }
  medicate() {
    if (this.sick) {
        this.full = 9;
        this.energy-=3;
        this.sick = false;
    } else {
        console.log(`${this.name} refuses to take medicine`)
        this.energy-=1;
    }
  }
  play() {
    if(this.sick) {
        this.mood-=1;
        this.energy-=1;
    } else if (this.mood > 9) {
        this.energy-=2;
        this.full-=1;
    } else if (this.energy <= 3) {
        console.log("I am too tired to play")
        this.energy-=1;
    } else {
        this.mood+=2;
        this.energy-=1;
        this.full-=1;
    }
  }

  sleep() {
    this.energy+=4;
    this.full-=3;
  }

  timePasses() {
    if (this.sick) {
        this.mood-=3;
        this.full-=2;
        this.energy-=2;
    } else {
        this.mood-=2;
        this.full-=1;
        this.energy-=1;
    }
  }

    badGuardian() {
        console.log(`${this.name} has been rehomed.`)
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0) {
            this.rehomed = true
        }
    }

}

// Do not edit below this line
module.exports = Tamagotchi;
