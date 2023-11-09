const categories = document.getElementById("categories");
const items = categories.querySelectorAll("li.item");

console.log('Number of categories: ', items.length)
for (const item of items) {
    const list = item.querySelectorAll("ul");
    console.log('Category: ', item.firstElementChild.textContent);
    for (const element of list) {
        console.log('Elements: ', element.children.length);
    }
};