const recipes = [
  {
    name: "Garlic Butter Pasta",
    image: "https://picsum.photos/seed/recipe1/400/300",
    minutes: 20,
    description:
      "A quick weeknight pasta tossed in a garlicky brown butter sauce.",
  },
  {
    name: "Sheet-Pan Veggie Fajitas",
    image: "https://picsum.photos/seed/recipe2/400/300",
    minutes: 30,
    description:
      "Peppers and onions roasted with fajita spice, served with warm tortillas.",
  },
  {
    name: "Lemon Herb Roast Chicken",
    image: "https://picsum.photos/seed/recipe3/400/300",
    minutes: 75,
    description: "A whole chicken roasted with lemon, thyme, and rosemary.",
  },
  {
    name: "Chickpea Coconut Curry",
    image: "https://picsum.photos/seed/recipe4/400/300",
    minutes: 35,
    description:
      "A creamy, spiced curry simmered with coconut milk and chickpeas.",
  },
  {
    name: "Classic Beef Chili",
    image: "https://picsum.photos/seed/recipe5/400/300",
    minutes: 50,
    description: "A hearty chili with ground beef, beans, and smoky spices.",
  },
  {
    name: "Caprese Salad Skewers",
    image: "https://picsum.photos/seed/recipe6/400/300",
    minutes: 10,
    description:
      "Cherry tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
  },
  {
    name: "Miso Glazed Salmon",
    image: "https://picsum.photos/seed/recipe7/400/300",
    minutes: 25,
    description: "Salmon fillets broiled with a sweet-savory miso glaze.",
  },
  {
    name: "Loaded Baked Potato Soup",
    image: "https://picsum.photos/seed/recipe8/400/300",
    minutes: 40,
    description: "A creamy potato soup topped with cheese, bacon, and chives.",
  },
  {
    name: "Thai Peanut Noodles",
    image: "https://picsum.photos/seed/recipe9/400/300",
    minutes: 20,
    description: "Cold noodles tossed in a spicy-sweet peanut sauce.",
  },
  {
    name: "Blueberry Oat Muffins",
    image: "https://picsum.photos/seed/recipe10/400/300",
    minutes: 35,
    description:
      "Fluffy muffins packed with blueberries and a crumbly oat topping.",
  },
];

const container = document.getElementById("recipeContainer");

recipes.forEach((recipe) => {
  const card = document.createElement("article");

  card.className = "recipeCard";

  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}">

    <div class="recipeInfo">

      <h2 class="recipeName">
        ${recipe.name}
      </h2>

      <div class="cookTime">
        Cook time: ${recipe.minutes} minutes
      </div>

      <p class="description">
        ${recipe.description}
      </p>

      <div class="tally">

        <div class="tallyDisplay">
          Times Cooked: <span class="count">0</span>
        </div>

        <div class="tallyButtons">
          <button class="minus" type="button">−</button>
          <button class="plus" type="button">+</button>
          <button class="reset" type="button">Reset</button>
        </div>

      </div>

    </div>
  `;

  const countDisplay = card.querySelector(".count");
  const plusButton = card.querySelector(".plus");
  const minusButton = card.querySelector(".minus");
  const resetButton = card.querySelector(".reset");

  let count = 0;
  plusButton.addEventListener("click", () => {
    count++;

    countDisplay.textContent = count;
  });

  minusButton.addEventListener("click", () => {
    if (count > 0) {
      count--;

      countDisplay.textContent = count;
    }
  });

  resetButton.addEventListener("click", () => {
    count = 0;

    countDisplay.textContent = count;
  });

  container.appendChild(card);
});
