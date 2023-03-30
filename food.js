// Create class below
class Food {
    constructor(name, number, fresh = true) {
        this.name = name;
        this.daysToSpoil = number;
        this.isFresh = fresh;
    }

    prepare() {
        console.log(`${this.name} is being prepared`);
    }

    
}
// Do not edit below this line
module.exports = Food;
