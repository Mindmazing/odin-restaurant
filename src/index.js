import "./css/style.css";
import { displayMenu } from "./js/menu";

const menuInterface = (() => {
  const navBar = document.querySelector("nav");
  const homeBtn = document.querySelector("#home-btn");
  const menuBtn = document.querySelector("#menu-btn");
  const aboutBtn = document.querySelector("#about-btn");
  const orderBtn = document.querySelector("#order-btn");

  navBar.addEventListener("click", (event) => {
    switch (event.target) {
      case homeBtn:
        console.log(homeBtn);
        displayMenu();
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
