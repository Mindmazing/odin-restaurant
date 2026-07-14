import { menuItems, createMenuItemCard } from "./menu-items.js";

export const displayMenu = (container) => {
  const menuContainer = document.createElement("section");
  const menuContainerText = document.createElement("h2");
  menuContainerText.textContent = "Our Selection";
  menuContainer.style.paddingTop = "10em";
  menuContainer.style.paddingBottom = "10em";
  menuContainerText.style.marginBottom = "2em";

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("favourites-section-menu");

  menuItems.forEach((item) => {
    menuItemsContainer.appendChild(createMenuItemCard(item));
  });

  menuContainer.appendChild(menuContainerText);
  menuContainer.appendChild(menuItemsContainer);

  container.appendChild(menuContainer);
};
