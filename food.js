// Create class below

class Food {
    constructor(name, number, fresh = true) {
        this.name = "Banana";
        this.daysToSpoil = number;
        this.fresh = true; 
    }

    prepare() {
        console.log(`${this.name} is being prepared`)
    }
    isFresh(){
        if(this.fresh === true) {
            console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
    }
}
}
// Do not edit below this line
module.exports = Food;
