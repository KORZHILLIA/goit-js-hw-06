const ingredientsContainer = document.querySelector("#ingredients");

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createLi = el => {
  const li = document.createElement('li');
  li.textContent = el;
  li.classList.add('item');
  return li;
}

const list = ingredients.map(createLi);

ingredientsContainer.append(...list);