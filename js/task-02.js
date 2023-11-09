const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");

const elements = ingredients.map((ingredient) => `<li class=item>${ingredient}</li>`).join("");
console.log(elements);
list.insertAdjacentHTML("afterbegin", elements);