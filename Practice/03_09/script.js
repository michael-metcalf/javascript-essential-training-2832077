/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  lidOpen: false,
  strapLength: {
    left: 26,
    right: 26,
  },
  changeName: function (newName) {
    this.name = newName;
  },
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  changePocketNum: function (newPocketNum) {
    this.pocketNum = newPocketNum;
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("Backpack's original name:", backpack.name);
backpack.changeName("Every-other-day Backpack");
console.log("Backpack's new name:", backpack.name);

console.log("Backpack's original volume:", backpack.volume);
backpack.changeVolume(50);
console.log("Backpack's new volume:", backpack.volume);

console.log("Backpack's original color:", backpack.color);
backpack.changeColor("blue");
console.log("Backpack's new color:", backpack.color);

console.log("Backpack's original number of pockets:", backpack.pocketNum);
backpack.changePocketNum(20);
console.log("Backpack's new number of pockets:", backpack.pocketNum);