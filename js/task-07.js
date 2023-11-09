const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
spanText.style.fontSize = '55px'
const changeFontSize = () => {
    const currentSize = parseInt(input.value);
    spanText.style.fontSize = `${currentSize}px`;
};

input.addEventListener("input", changeFontSize);