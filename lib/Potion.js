// The Potion() constructor should take in a name parameter and assign the value property to be a random number between 7 and 12.
// if the potion is a health potion, its value is a number between 30 and 40.

class Potion {
  constructor(name) {
    // function Potion(name) {
    this.types = ["strength", "agility", "health"];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    // Math.random:  a number from 0 to <1
    if (this.name === "health") {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
}

module.exports = Potion;
