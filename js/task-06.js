const input = document.querySelector("#validation-input");
const validLength = parseInt(input.dataset.length);
const afterBlur = (event) => {
    event.preventDefault();
    if (input.value.length === validLength) {
        input.classList.toggle('valid', true);
        input.classList.toggle('invalid', false);
    } else if (input.value.length !== validLength) {
        input.classList.toggle('valid', false);
        input.classList.toggle('invalid', true);
    }
    else if (input.value === '') {
        input.classList.remove('valid', 'invalid');
    }
};
input.addEventListener("blur", afterBlur);