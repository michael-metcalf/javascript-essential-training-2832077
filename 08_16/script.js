/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */

// BROKEN, FAILED

import backpackObjectArray from "./components/data.js";

const content = function (backpackObject){
  return `
    <figure class="backpack__image">
      <img src=${backpackObject.image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpackObject.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpackObject.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpackObject.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpackObject.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpackObject.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpackObject.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpackObject.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpackObject.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `
    }
;

const newArticle = backpackObjectArray.map((backpack) => {
  const article = document.createElement("article");
  article.innerHTML = content(backpack);
  article.classList.add("backpack");
  article.setAttribute("id", `${backpack.id}`);
});

const main = document.querySelector(".maincontent");

main.append(newArticle);
