import bagelImg from "../assets/images/bagel.png";

export const menuItems = [
  {
    name: "Whole Grain Spelt",
    weight: 390,
    price: 6.0,
  },
  {
    name: "Mt Ida Multigram",
    weight: 300,
    price: 6.0,
  },
  {
    name: "Four Seed Whole Wheat",
    weight: 420,
    price: 5.0,
  },
  {
    name: "Bagel Multigram",
    weight: 100,
    price: 3.0,
  },
  {
    name: "Bagel Sesame",
    weight: 100,
    price: 3.0,
  },
  {
    name: "Puff Pastry",
    weight: 390,
    price: 6.0,
  },
  {
    name: "French Baguette",
    weight: 130,
    price: 6.0,
  },
  {
    name: "The Fred Special",
    weight: 130,
    price: 6.0,
  },
];

export function createMenuItemCard(menuItem) {
  const menuItemContainer = document.createElement("div");
  menuItemContainer.classList.add("menu-item-container");

  const itemImg = document.createElement("img");
  itemImg.src = bagelImg;

  const itemName = document.createElement("h3");
  itemName.textContent = menuItem.name;

  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("menu-item-details");
  const menuitemPrice = document.createElement("p");
  menuitemPrice.textContent = `$${(Math.round(menuItem.price * 100) / 100).toFixed(2)}`;
  const menuitemweight = document.createElement("p");
  menuitemweight.textContent = `${menuItem.weight} g`;

  detailsContainer.appendChild(menuitemPrice);
  detailsContainer.appendChild(menuitemweight);

  menuItemContainer.appendChild(itemImg);
  menuItemContainer.appendChild(itemName);
  menuItemContainer.appendChild(detailsContainer);
  return menuItemContainer;
}
