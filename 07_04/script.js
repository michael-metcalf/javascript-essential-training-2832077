/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const arr = ["cat", "thermos", true, 88, "keyboard"];

let lastItem = arr.pop();
console.log(arr);

arr.unshift(lastItem);
console.log(arr);

console.log(arr.sort());

let foundItem = arr.find(item => item === "keyboard");
console.log(foundItem);

console.log(
  arr.splice(arr.findIndex(item => item == foundItem), 1));

console.log(arr);


