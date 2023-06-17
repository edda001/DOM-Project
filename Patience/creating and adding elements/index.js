// Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Elements

ul.append(li)

// Modifying the text

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);
