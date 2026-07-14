export const displayAbout = (container) => {
  const aboutHeroContainer = document.createElement("container");
  aboutHeroContainer.classList.add("hero-section");
  const aboutHeroText = document.createElement("h1");
  aboutHeroText.textContent = "This is Consuelos";
  aboutHeroContainer.appendChild(aboutHeroText);

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

  container.appendChild(aboutHeroContainer);
  container.appendChild(aboutUsSection);
};
