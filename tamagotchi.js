// Create class below
// - eat: increases fullness by two, decreases energy by 1,
//   - if eat method makes fullness more than 10, tamagotchi becomes sick (sick = true)

// - medicate:
// - if tamagotchi is sick - set full to 9 - decrease energy by 3
// - if tamagotchi is not sick
//   - console log refusal to take medicine
//     - reduce energy by 1
// - play: increases mood by 2, reduces energy and full by 1,
// - will not play if tamagotchi is sick,
// - if asked to play when sick, reduce mood and energy by 1
// - will not play if mood is above 9, reduce energy by 2 and full by 1
// - will not play if energy is less than or equal to 3
//   - console log "I am too tired to play" - reduce energy by 1
class Tamagotchi {

constructor(name, energy=9, full=8, mood=6, sick=false, rehomed=false){
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
   let isSick = this.sick ? "I am sick" : "I am not sick"
   
    console.log(`My mood is: ${this.mood}, I am this full: ${this.full}, My energy is: ${this.energy} ${isSick}`)
  }

  eat() {
    if
  }

}

// Do not edit below this line
module.exports = Tamagotchi;
