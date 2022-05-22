const boxesContainer = document.querySelector("#boxes");
const amount = document.querySelector('[type="number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

let counter = 0;

createBtn.addEventListener("click", createBtnClickHandler);
destroyBtn.addEventListener("click", destroyBtnClickHandler);

function destroyBtnClickHandler() {
  boxesContainer.innerHTML = "";
  amount.value = 0;
  counter = 0;
}

function createBtnClickHandler() {
  const amountValue = parseInt(amount.value);
  boxesContainer.innerHTML += createBoxes(amountValue);
  counter += amountValue + 1;
}

function createBoxes(amount) {
  const arr = new Array(amount);
  arr.fill("");
  const markup = arr
    .map((el, idx) => {
      const currentColor = getRandomHexColor();
      const currentDimension = (idx + counter) * 10 + 30;
      return (
        el +
        `<div class="additional-div" style="width: ${currentDimension}px; height: ${currentDimension}px; background-color: ${currentColor}"></div>`
      );
    })
    .join("");
  return markup;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
