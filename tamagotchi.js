// Create class below
class Tamagotchi{
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }

    greet(){
        console.log(`Hello, I'm ${this.name}`);
    }

    status(){
        console.log(
            `
            My mood is: ${this.mood};\n
            I am this full: ${this.full}\n
            My energy is: ${this.energy}\n
            ${this.sick ? "I am sick" : "I am not sick"};
            `
        )
    } 

    eat(){
        this.full+=2
        this.energy--
        if(this.full > 10){
            this.sick = true;
        }
    }

    medicate(){
        if(this.sick){
            this.full = 9;
            this.energy-=3;
            this.sick = false;
        }
        else if(!this.sick){
            this.energy--;
            console.log("Refuse to take medicine")
        }
    }

    play(){
        this.mood += 2;
        this.full--;
        this.energy--;
        if(this.sick){
            this.mood-=3;
            this.full+=1;
        }
        if(this.mood > 9){
            this.mood-=2;
            this.energy--;
        }
        if(this.energy <= 3){
            console.log("I am too tired to play");
            // this.energy--;
            this.mood-=2;
            this.full++;
        }
    }

    sleep(){
        this.energy+=4;
        this.full-=3;
    }

    timePasses(){
        if(!this.sick){
            this.mood-=2;
            this.full--;
            this.energy--;
        }
        else{
            this.mood-=3;
            this.full-=2;
            this.energy-=2;
        }
    }

    badGuardian(){
        console.log("tamagotchi has been rehomed");
        if(this.energy <= 0){
            this.rehomed = true;
        }
        if(this.mood <= 0){
            this.rehomed = true;
        }
        if(this.full <= 0){
            this.rehomed = true;
        }
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
