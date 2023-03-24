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
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }

  aDayPasses() {
    this.daysToSpoil--;
    this.isFresh();
  }
}

// Testing
const salmon = new Food("salmon", 4);
salmon.prepare();
salmon.isFresh();
for (let i = 0; i < 6; i++) {
  salmon.aDayPasses();
}

// Do not edit below this line
module.exports = Food;
