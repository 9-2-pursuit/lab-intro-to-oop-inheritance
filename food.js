// Create class below

class Food {
    constructor(name, number, fresh = true) {
        this.name = name;
        this.daysToSpoil = number;
        this.fresh = true; 
    }

    prepare() {
        console.log(`${this.name} is being prepared`)
    }

    isFresh(){
        if(this.fresh === true && this.daysToSpoil > 0) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
    }
    else (
        this.daysToSpoil <= 0) 
    {
        console.log(`${this.name} has spoiled.`)
    }
}
aDayPasses(){
    this.daysToSpoil = this.daysToSpoil - 1
    this.isFresh()
    
}
}
// Do not edit below this line
module.exports = Food;
