// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const boxes = document.querySelector('#boxes');
const amount = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]')

createBtn.addEventListener('click', createBtnClickHandler);
destroyBtn.addEventListener('click', destroyBtnClickHandler);

function destroyBtnClickHandler() {
  boxes.innerHTML = '';
  amount.value = 0;
}

function createBtnClickHandler() {
  const amountValue = amount.value;
  createBoxes(amountValue);
}

function createBoxes(amount) {
  let divArr = [];
  for (let i = 0; i < amount; i++) {
    let currentColor = getRandomHexColor();
    let currentDimension = i * 10 + 30;
    let newDiv = `<div class="additional-div" style="width: ${currentDimension}px; height: ${currentDimension}px; background-color: ${currentColor}"></div>`;
    divArr.push(newDiv);
  }
    boxes.insertAdjacentHTML('afterbegin', divArr.join(''));
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
