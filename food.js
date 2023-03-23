class Food {
  constructor(name, daysToSpoil = 20, fresh = true) {
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
    this.daysToSpoil = this.daysToSpoil - 1;
    this.isFresh();
  }
}

class BadFood extends Food {
  constructor(name, daysToSpoil, fresh, weapons) {
    super(name, daysToSpoil, fresh);
    this.weapons = weapons;
  }
  prepare() {
    const randomBool = Math.random() > 0.5;
    if (randomBool) {
      console.log(`I am ${this.name} and my calories are too high to count!`);
    } else {
      console.log(`I am ${this.name} and you are just a passing trend!`);
    }
  }

  fight(opponent) {
    const random0to2 = Math.floor(Math.random() * 3);
    opponent.daysToSpoil -= this.weapons[random0to2].hitPoints;
    console.log(
      `${this.name} attacked ${opponent.name}. ${opponent.name} is down ${opponent.daysToSpoil} , but I am still up ${this.daysToSpoil}!`
    );
  }

  heal() {
    this.daysToSpoil += 3;
    console.log(
      `${this.name} was  healed. daysToSpoil is now ${this.daysToSpoil}`
    );
  }

  block() {
    console.log(`I, ${this.name}, learned kung fu. You can't hurt me.`);
  }

  fightHealOrBlock(opponent) {
    console.log(`${this.name}'s turn`);
    const random0to2 = Math.floor(Math.random() * 3);
    random0to2 == 0
      ? this.fight(opponent)
      : random0to2 == 1
      ? this.heal()
      : this.block();
  }

  announceWinner(opponent) {
    if (this.daysToSpoil > opponent.daysToSpoil) {
      console.log(`${this.name} won!`);
    } else {
      console.log(`${opponent.name} won!`);
    }
  }
}
const weaponsForDonut = [
  {
    name: "Sprinkle Spray",
    hitPoints: 3,
  },
  {
    name: "Icing Deluge",
    hitPoints: 4,
  },
  {
    name: "Sugar Shock",
    hitPoints: 5,
  },
];

const weaponsForPizza = [
  {
    name: "Mouth Burn",
    hitPoints: 3,
  },
  {
    name: "Hot Pepper Storm",
    hitPoints: 4,
  },
  {
    name: "Cheese Grease",
    hitPoints: 5,
  },
];

const pizza = new BadFood("pizza", 25, true, weaponsForPizza);
console.log(pizza);
pizza.prepare();

console.log("\n" + "*".repeat(40) + "\n");

const donut = new BadFood("donut", 30, true, weaponsForDonut);
console.log(donut);
donut.prepare();

console.log("\n" + "*".repeat(40) + "\n");

while (pizza.daysToSpoil > 0 && donut.daysToSpoil > 0) {
  pizza.fightHealOrBlock(donut);
  donut.fightHealOrBlock(pizza);
  console.log("\n" + "*".repeat(40) + "\n");
}

pizza.announceWinner(donut);

module.exports = Food;
