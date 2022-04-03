// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

const input = document.querySelector('#validation-input');

input.addEventListener('blur', inputLengthHandler);

function inputLengthHandler(event) {
    const currentInputLength = event.currentTarget.value.length;
    const defaultInputLength = Number(input.dataset.length);
    if (currentInputLength !== defaultInputLength && input.classList.contains('valid')) {
        input.classList.replace('valid', 'invalid');
    } else if (currentInputLength === defaultInputLength && input.classList.contains('invalid')) {
        input.classList.replace('invalid', 'valid');
    } else if (currentInputLength !== defaultInputLength) {
        input.classList.add('invalid');
    } else {
        input.classList.add('valid');
    }
    
}