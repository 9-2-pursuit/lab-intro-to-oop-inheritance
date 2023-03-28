// Create class below
class Food {
  constructor(name, daysToSpoil = 1, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    this.daysToSpoil > 0 ? (this.daysToSpoil -= 1) : (this.daysToSpoil = 0);
    this.isFresh();
  }
}

const pizza = new Food("pizza");

pizza.prepare();
pizza.isFresh();
pizza.aDayPasses();

// Do not edit below this line
module.exports = Food;
