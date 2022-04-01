const categories = document.querySelector('#categories');

const categoriesItems = categories.children;

const categoriesQuantity = categories.children.length;
console.log(`Number of categories: ${categoriesQuantity}
`)

for(let item of categoriesItems) {
  const categoryHeading = item.firstElementChild.textContent;
  const categoryQuantity = item.firstElementChild.nextElementSibling.children.length;
  console.log(`Category: ${categoryHeading}
Elements: ${categoryQuantity}
`);
}