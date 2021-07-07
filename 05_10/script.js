/**
 * Challenge: Add a new element
 * - In JavaScript, create a new element to hold a navigation menu
 * - Add an unordered list and a series of no less than five links to the list 
 * - Use single words like “home”, “about”, etc for the list items and set the src attribute to # for simplicity
 * - Add the new navigation element to the DOM directly after the header
 * - Write basic CSS and add classes as necessary to create a horizontal layout for the menu. 
 * - A tip: Use either display flex or display grid to create the horizontal menu.
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
  
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">Everyday Backpack</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  
`;

const main = document.querySelector(".maincontent");

const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Sign Out</a></li>
`;

const mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");
const navList = document.createElement("ul");
navList.innerHTML = navContent;
mainNav.append(navList);

document.querySelector(".siteheader").append(mainNav);

// Do CSS in a style tag in the html file, not like this...
// document.querySelector(".main-navigation").style.display = "flex";
// document.querySelector(".main-navigation").style.flexDirection = "column";
// document.querySelector(".main-navigation").style.backgroundColor = "rebeccapurple";

// WTH were you thinking?...
// const header = document.querySelector("header");

// const newArticle = document.createElement("article");
// newArticle.classList.add("backpack");
// newArticle.setAttribute("id", "everyday");
// newArticle.innerHTML = content;

// const navbar = document.createElement("nav");
// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// const li4 = document.createElement("li");
// const li5 = document.createElement("li");


// navbar.classList.add("navbar");
// li1.classList.add("home");
// document.querySelector(".home").setAttribute("content", "Home");
// li2.classList.add("about");
// document.querySelector(".home").innerHTML("About");
// li3.classList.add("contact");
// document.querySelector(".home").innerHTML("Contact");
// li4.classList.add("faq");
// document.querySelector(".home").innerHTML("FAQ");
// li5.classList.add("signout");
// document.querySelector(".home").innerHTML("Sign Out");

// navbar.style.display = "flex";
// navbar.style.flexDirection = "horizontal";
// navbar.style.backgroundColor = "rebeccapurple";

// main.append(newArticle);
// header.append(navbar);
// navbar.append(ul);
// ul.append(li1);
// ul.append(li2);
// ul.append(li3);
// ul.append(li4);
// ul.append(li5);
