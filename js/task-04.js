// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
    counter: document.querySelector('#value'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
}

const { counter, incrementBtn, decrementBtn } = refs;

let counterValue = 0;

incrementBtn.addEventListener('click', incrementBtnHandler);

decrementBtn.addEventListener('click', decrementBtnHandler);

function incrementBtnHandler() {
    counterValue++;
    counter.textContent = counterValue;
}

function decrementBtnHandler() {
    counterValue--;
    counter.textContent = counterValue;
}