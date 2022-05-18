const input = document.querySelector("#validation-input");
const defaultInputLength = Number(input.dataset.length);

input.addEventListener("blur", inputLengthHandler);

function inputLengthHandler(event) {
  const currentInputLength = event.currentTarget.value.length;
  if (
    currentInputLength !== defaultInputLength &&
    input.classList.contains("valid")
  ) {
    input.classList.replace("valid", "invalid");
  } else if (
    (input.classList.contains("valid") ||
      input.classList.contains("invalid")) &&
    currentInputLength === 0
  ) {
    input.classList.remove("valid") || input.classList.remove("invalid");
  } else if (
    currentInputLength === defaultInputLength &&
    input.classList.contains("invalid")
  ) {
    input.classList.replace("invalid", "valid");
  } else if (currentInputLength !== defaultInputLength) {
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
  }
}