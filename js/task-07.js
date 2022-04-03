// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}

const { input, text } = refs;

input.addEventListener('input', inputMoveHandler);

function inputMoveHandler(event) {
    const currentPosition = event.currentTarget.value;
    text.style.fontSize = `${currentPosition}px`;
}