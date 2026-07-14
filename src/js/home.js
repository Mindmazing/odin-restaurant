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
  const favouritesSectionTitle = document.createElement("h2");
  favouritesSectionTitle.textContent = "Our Clients Favourites";

  const favouritesSectionMenu = document.createElement("div");
  favouritesSectionMenu.classList.add("favourites-section-menu");
  // append menu items to favourite section
  menuItems.forEach((menuItem) => {
    favouritesSectionMenu.appendChild(createMenuItemCard(menuItem));
  });

  favouritesSection.appendChild(favouritesSectionTitle);
  favouritesSection.appendChild(favouritesSectionMenu);

  // append to content
  container.appendChild(heroSection);
  container.appendChild(favouritesSection);
};
