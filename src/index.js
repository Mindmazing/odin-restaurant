import "./css/style.css";
import { displayHome } from "./js/home.js";

const menuInterface = (() => {
  const navBar = document.querySelector("nav");
  const homeBtn = document.querySelector("#home-btn");
  const menuBtn = document.querySelector("#menu-btn");
  const aboutBtn = document.querySelector("#about-btn");
  const orderBtn = document.querySelector("#order-btn");
  const contentContainer = document.querySelector("#content");

  // default to home
  displayHome(contentContainer);

  navBar.addEventListener("click", (event) => {
    contentContainer.replaceChildren();
    switch (event.target) {
      case homeBtn:
        console.log(homeBtn);
        displayHome(contentContainer);
        break;
      case menuBtn:
        console.log(menuBtn);
        break;
      case aboutBtn:
        console.log(aboutBtn);
        break;
      case orderBtn:
        console.log(orderBtn);
        break;
    }
  });
})();
