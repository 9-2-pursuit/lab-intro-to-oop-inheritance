// Create class below
class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full; 
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet(){
        console.log(`Hello, I'm ${this.name}`)
    }
    status(){
        console.log(`${this.energy}, ${this.full}, ${this.mood}, ${this.sick}`)
    }
    eat(){
        this.full = this.full + 2;
        this.energy = this.energy - 1
if(this.full > 10){
    this.sick = true;
}
    }
    medicate(){
        if(this.sick){
            this.full = 9;
            this.energy = this.energy - 3;
            this.sick = false
        }
        else {
            this.energy = this.energy - 1
            console.log("I don't want medicine")
        }
    }
    
    play() {
        if (this.sick) {
            this.mood -= 1;
            this.energy -= 1;
          } else if (this.mood > 9) {
            console.log("I'm too happy to play!");
            this.energy -= 2;
            this.full -= 1;
          } else if (this.energy <= 3) {
            console.log("I'm too tired to play!");
            this.energy -= 1;
          } else {
            this.mood += 2;
            this.energy -= 1;
            this.full -= 1;
          }
      
      }
    sleep(){
        this.energy += 4;
        this.full -= 3
    }
    timePasses(){
      
        if (this.sick === false)
        {
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
        }
        else if (this.sick === true)
        {
            
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        }
    }
    badGuardian(){
        console.log(`${this.name} has been rehomed.`)
        if (this.energy <= 0 || this.mood <= 0 || this.full <= 0 ){
            this.rehomed = true;
        }
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
