/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */
import Pen from "./Pen.js";
import Backpack from "./Backpack.js";

const pen1 = new Pen(
  "ballpoint",
  "yellow",
  true,
  ["black", "red", "blue"],
  {"black": false, "red": true, "blue": true},
  true
);

const backpack1 = new Backpack(
  "Every-other-day Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("This is pen1:", pen1);
console.log("Pen1's color before:", pen1.penColor);
pen1.changePenColor("green");
console.log("Pen1's color after:", pen1.penColor);

console.log("This is backpack1:", backpack1);
console.log("Before opening backpack1, lidOpen is:", backpack1.lidOpen);
backpack1.toggleLid(true);
console.log("After opening backpack1, lidOpen is:", backpack1.lidOpen);