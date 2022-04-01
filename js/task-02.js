// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients



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

const ul = document.querySelector('#ingredients');

ul.append(...list);