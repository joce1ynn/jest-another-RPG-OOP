const Potion = require("./Potion");
const Character = require("./Character");

class Player extends Character {
  constructor(name = "") {
     // call parent constructor here:
    super(name);

    this.inventory = [new Potion("health"), new Potion()];
  }

  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
    };
  }

  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  addPotion(potion) {
    this.inventory.push(potion);
  }

  usePotion(index) {
    const potion = this.inventory.splice(index, 1)[0];

    switch (potion.name) {
      case "agility":
        this.agility += potion.value;
        break;
      case "health":
        this.health += potion.value;
        break;
      case "strength":
        this.strength += potion.value;
        break;
    }
  }
}

module.exports = Player;

// function Player(name = "") {
//   this.name = name;

//   this.health = Math.floor(Math.random() * 10 + 95);
//   this.strength = Math.floor(Math.random() * 5 + 7);
//   this.agility = Math.floor(Math.random() * 5 + 7);
//   this.inventory = [new Potion("health"), new Potion()];

// METHOD 1:  it creates new methods for each player.
// If you have a game that creates 100 Player objects,
// your code will create a hundred getStats() methods.

//   // returns an object with various player properties
//   this.getStats = function () {
//     return {
//       potions: this.inventory.length,
//       health: this.health,
//       strength: this.strength,
//       agility: this.agility,
//     };
//   };

//   // returns the inventory array or false if empty
//   this.getInventory = function () {
//     if (this.inventory.length) {
//       return this.inventory;
//     }
//     return false;
//   };

// inherit prototype methods from Character here:
// Player.prototype = Object.create(Character.prototype);

// Player.prototype.getStats = function() {
//   return {
//     potions: this.inventory.length,
//     health: this.health,
//     strength: this.strength,
//     agility: this.agility
//   };
// }

// METHOD 2
// prototype  only creating the method once on the constructor itself

// NO ARROW FUNCTION. we're limited to using regular function expressions for our constructor methods.
// Player.prototype.getStats = function () {
//   return {
//     potions: this.inventory.length,
//     health: this.health,
//     strength: this.strength,
//     agility: this.agility,
//   };
// };

// Player.prototype.getInventory = function () {
//   if (this.inventory.length) {
//     return this.inventory;
//   }
//   return false;
// };

// Player.prototype.getHealth = function () {
//   return `${this.name}'s health is now ${this.health}!`;
// };

// Player.prototype.isAlive = function () {
//   if (this.health === 0) {
//     return false;
//   }
//   return true;
// };

// Player.prototype.reduceHealth = function (health) {
//   this.health -= health;
//   if (this.health < 0) {
//     this.health = 0;
//   }
// };

// Player.prototype.getAttackValue = function () {
//   const min = this.strength - 5;
//   const max = this.strength + 5;
//   return Math.floor(Math.random() * (max - min) + min);
// };

// Player.prototype.addPotion = function (potion) {
//   this.inventory.push(potion);
// };

// Player.prototype.usePotion = function (index) {
//   const potion = this.getInventory().splice(index, 1)[0];

//   switch (potion.name) {
//     case "agility":
//       this.agility += potion.value;
//       break;
//     case "health":
//       this.health += potion.value;
//       break;
//     case "strength":
//       this.strength += potion.value;
//       break;
//   }
// };
