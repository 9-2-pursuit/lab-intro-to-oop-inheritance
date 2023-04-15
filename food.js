// Create class below


class Food {
    constructor(name, daysToSpoil, fresh) {
        this.name = name || "";
        this.daysToSpoil = daysToSpoil || NaN;
        this.fresh = fresh || true
    }
    prepare() {
        console.log(`${this.name} is being prepared`)
    }
    isFresh() {
       this.daysToSpoil < 1 ? console.log(`${this.name} has spoiled.`) :
        console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
    }
    aDayPasses() {
        this.daysToSpoil-= 1
        this.isFresh(this.daysToSpoil);
    }

}


// Do not edit below this line
module.exports = Food;
