import "./css/style.css";
import { displayHome } from "./js/home.js";
import { displayMenu } from "./js/menu.js";

const menuInterface = (() => {
  const navBar = document.querySelector("nav");
  const homeBtn = document.querySelector("#home-btn");
  const menuBtn = document.querySelector("#menu-btn");
  const aboutBtn = document.querySelector("#about-btn");
  const contentContainer = document.querySelector("#content");

  // default to home
  displayHome(contentContainer);

  navBar.addEventListener("click", (event) => {
    contentContainer.replaceChildren();
    switch (event.target) {
      case homeBtn:
        displayHome(contentContainer);
        break;
      case menuBtn:
        displayMenu(contentContainer);
        break;
      case aboutBtn:
        console.log(aboutBtn);
        break;
    }
  });
})();
