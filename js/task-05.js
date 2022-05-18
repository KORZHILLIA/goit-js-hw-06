const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', inputHandler);

function inputHandler(event) {
  const inputValue = event.currentTarget.value;
  output.textContent = inputValue || "Anonymous";
}