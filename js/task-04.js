const currentValue = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
function increaseValue() {
    counterValue += 1;
    currentValue.textContent = counterValue;
};
function decreaseValue() {
    counterValue -= 1;
    currentValue.textContent = counterValue;
};
incrementBtn.addEventListener("click", increaseValue);
decrementBtn.addEventListener("click", decreaseValue);