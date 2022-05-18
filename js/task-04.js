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
    counterValue += 1;
    counter.textContent = counterValue;
}

function decrementBtnHandler() {
    counterValue -= 1;
    counter.textContent = counterValue;
}