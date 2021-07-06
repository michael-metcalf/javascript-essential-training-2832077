/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const jurassicPark = new Book(
  "Jurassic Park",
  "Michael Crichton",
  "hardcover",
  367,
  true,
  "Yes."
);

const nineteenEightyFour = new Book(
  "1984",
  "George Orwell",
  "softcover",
  323,
  true,
  "Yes."
);

const janeEyre = new Book(
  "Jane Eyre",
  "Charlotte Bronte",
  "softcover",
  415,
  false,
  "I'm not sure."
);

const theCatcherInTheRye = new Book(
  "The Catcher in the Rye",
  "J.D. Salinger",
  "softcover",
  275,
  true,
  "Yes."
);

const republic = new Book(
  "'Republic'",
  "Plato",
  "softcover",
  346,
  true,
  "Yes."
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

console.log("The person who wrote 'Jurassic Park' is:", jurassicPark.author);
console.log("I have read '1984':", nineteenEightyFour.read);
console.log("Would I recommend 'Jane Eyre?", janeEyre.recommend);
console.log("The binding on my copy of 'The Catcher in the Rye' is:", theCatcherInTheRye.binding);
console.log(republic.halfPageCount());

