// Create class below

class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    if (this.daysToSpoil < 1) {
      this.fresh = false;
    }
    if (this.fresh) {
      if (this.daysToSpoil > 0) {
        console.log(
          `There ${this.daysToSpoil === 1 ? "is" : "are"} ${this.daysToSpoil} day${this.daysToSpoil === 1 ? "" : "s"} left before ${this.name} spoils.`
        );
      }
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }
  aDayPasses() {
    this.daysToSpoil -= 1;
    this.isFresh();
  }
}

let peach = new Food("peach", 7);
console.log(peach);
peach.prepare();
peach.isFresh();
peach.aDayPasses();
peach.aDayPasses();
peach.aDayPasses();
peach.aDayPasses();
console.log(peach);
peach.aDayPasses();
console.log(peach);
peach.aDayPasses();
peach.aDayPasses();
console.log(peach);

// Do not edit below this line
module.exports = Food;
