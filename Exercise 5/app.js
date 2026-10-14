const meals = [
  { day: "Monday", dish: "Thieboudienne", vegetarian: false },
  { day: "Tuesday", dish: "Ndambé", vegetarian: true },
  { day: "Wednesday", dish: "Yassa poulet", vegetarian: false },
  { day: "Thursday", dish: "Couscous aux légumes", vegetarian: true },
  { day: "Friday", dish: "Mafé", vegetarian: false },
  { day: "Friday", dish: "Mafé", vegetarian: false },
];

const menu = document.querySelector("#menu");
const count = document.querySelector("#count");

// TODO 1 — Create and return ONE <li> for a meal:
//   - its text is "Monday: Thieboudienne"   (createElement + textContent)
//   - if the meal is vegetarian, add the class "veg"
function createMealItem(meal) {
  const listItem = document.createElement("li");
  const strong = document.createElement("strong");
  strong.textContent = meal.day;
  listItem.append(strong);
  listItem.append(`: ${meal.dish}`);
  //listItem.textContent = `${meal.day}: ${meal.dish}`;

  if (meal.vegetarian) {
    listItem.classList.add("veg");
  }
  return listItem;
}

// TODO 2 — Loop over meals (for...of) and append each item to the #menu list.
for (const meal of meals) {
  const dish = createMealItem(meal);
  menu.append(dish);
}

// TODO 3 — Write in #count: "5 meals · 2 vegetarian"
// Hint: meals.length, and filter(...).length for the vegetarian ones.
const vegetarianCount = meals.filter((meal) => meal.vegetarian).length;
count.textContent = `${meals.length} meals · ${vegetarianCount} vegetarian`;

// BONUS 4 — Show the day in bold: inside the li, create a <strong> for the day,
// and append the strong and then the text ": dish" to the li.

//**Done when** five meals are listed, the two vegetarian meals are green with 🌱, and the count line is correct.

//**Think.** Add a sixth meal to the `meals` array, without touching the HTML. What changes on the page, and why is building the page from data useful?
