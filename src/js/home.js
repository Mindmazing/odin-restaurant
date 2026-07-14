import { menuItems, createMenuItemCard } from "./menu-items.js";

const contentContainer = document.querySelector("#content");

export const displayHome = (container) => {
  // hero section
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero-section");

  const heroTitle = document.createElement("h1");
  heroTitle.textContent = "The Flavor of Tradition";

  heroSection.appendChild(heroTitle);
  // Customer Favourites
  const favouritesSection = document.createElement("section");

  // append to content
  container.appendChild(heroSection);
};
