// Create class below
class Food {
    constructor(name, daysToSpoil, fresh) {
        this.name = name;
        this.daysToSpoil = 5;
        this.fresh  = true;
    }

    prepare() {
        console.log(
            `the ${this.name} is being prepared`
        )
    }

    isFresh() {
        if(this.daysToSpoil > 0 && this.fresh) {
        console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`)
        }
        else {
            console.log(`the ${this.name} is spoiled.`)
        }
    }

    aDayPasses() {
        this.daysToSpoil -=1
      console.log(this.isFresh())
    }

}
const pineapples = new Food('pineapples')
const cherries = new Food('cherreis')
cherries.prepare()
pineapples.aDayPasses()
// Do not edit below this line
module.exports = Food;
