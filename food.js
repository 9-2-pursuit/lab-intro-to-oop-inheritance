// Create class below
class Food {
    constructor(name, number, fresh = true) {
        this.name = name;
        this.daysToSpoil = number;
        this.fresh = fresh;
    }

    prepare() {
        console.log(`${this.name} is being prepared`);
    }

    isFresh(daysToSpoil) {
        if(this.daysToSpoil < 1) {
            console.log(`${this.name} has spoiled.`)
            this.fresh = false;
        } else {
        console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        return this.fresh;
        }
    }

    
    
}
// Do not edit below this line
module.exports = Food;
