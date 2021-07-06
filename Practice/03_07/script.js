/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const pen1 = {
  type: "ballpoint",
  color: "yellow",
  multipleInkColors: true,
  inkColors: ["black", "red", "blue"],
  hasInk: {
    black: false,
    red: true,
    blue: true,
  },
  rubberGrip: true,
}

const pen2 = {
  type: "fountain",
  color: "dark blue",
  multipleInkColors: false,
  inkColors: ["blue"],
  hasInk: {
    blue: false,
  },
  rubberGrip: false,
}

console.log(`Pen 1 has ${pen1.inkColors.length} colors: ${pen1.inkColors[0]}, ${pen1.inkColors[1]}, and ${pen1.inkColors[2]}.`);
console.log("Pen 2 is a", pen2.type, "pen.");