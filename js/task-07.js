const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}

const { input, text } = refs;

input.addEventListener('input', inputMoveHandler);

function inputMoveHandler(event) {
    const fontSize = event.currentTarget.value;
    text.style.fontSize = `${fontSize}px`;
}