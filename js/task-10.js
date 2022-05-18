const boxesContainer = document.querySelector('#boxes');
const amount = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]')

createBtn.addEventListener('click', createBtnClickHandler);
destroyBtn.addEventListener('click', destroyBtnClickHandler);

function destroyBtnClickHandler() {
  boxesContainer.innerHTML = "";
  amount.value = 0;
}

function createBtnClickHandler() {
  const amountValue = parseInt(amount.value);
  createBoxes(amountValue);
}

function createBoxes(amount) {
  let res = '';
  for (let i = 0; i < amount; i += 1) {
    const currentColor = getRandomHexColor();
    const currentDimension = i * 10 + 30;
    res += `<div class="additional-div" style="width: ${currentDimension}px; height: ${currentDimension}px; background-color: ${currentColor}"></div>`;
  }
    boxesContainer.insertAdjacentHTML("afterbegin", res);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
