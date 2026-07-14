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

  // brief about us section
  const aboutUsSection = document.createElement("section");
  aboutUsSection.classList.add("about-us-section");

  const aboutUsTitle = document.createElement("h2");
  aboutUsTitle.textContent = "What Defines Us?";

  const aboutUsText = document.createElement("p");
  aboutUsText.textContent =
    "Since 2026, Consuelo's has been dedicated to crafting artisanal pastries using traditional French techniques and locally sourced organic ingredients. What started as a small passion project in the heart of the city has quickly grown into a beloved destination for those seeking a sweet escape.";

  aboutUsSection.appendChild(aboutUsTitle);
  aboutUsSection.appendChild(aboutUsText);

  // append to content
  container.appendChild(heroSection);
  container.appendChild(favouritesSection);
  container.appendChild(aboutUsSection);
};
