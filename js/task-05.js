const outputField = document.querySelector("#name-output");
const inputField = document.querySelector("#name-input");
outputField.textContent = "Anonymous";
inputField.addEventListener("input", (event) => {
    outputField.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        outputField.textContent = "Anonymous";
    }
})