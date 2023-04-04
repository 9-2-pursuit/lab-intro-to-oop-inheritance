// Create class below
//////////////Food/////////////
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  ////////////////////////Methods//////////////////////////////

  prepare = () => {
    console.log(`${this.name} is being prepared`);
  };
  ////////////////////////
  isFresh = () => {
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  };
  ///////////////////////////
  aDayPasses = () => {
    this.daysToSpoil -= 1;
    this.isFresh();
  };
}

///////instances//////
const iceCream = new Food("Ice Cream", 2, true);
const hamburger = new Food("Hamburger", 0, true);
const badBread = new Food("Bread", 1, false);
///running//
iceCream.prepare();
hamburger.prepare();
badBread.prepare();

iceCream.isFresh();
iceCream.aDayPasses();

hamburger.isFresh();
hamburger.aDayPasses();

badBread.isFresh();
badBread.aDayPasses();

// Do not edit below this line
module.exports = Food;
