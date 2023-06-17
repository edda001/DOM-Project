//creating an element
const ul = document.querySelector("ul");

const li = document.createElement("li");

//Adding Elements
ul.append(li);

//modifying the text

const firstListItem = document.querySelector(".list-item");
console.log(firstListItem);

li.innerText = "x-man";