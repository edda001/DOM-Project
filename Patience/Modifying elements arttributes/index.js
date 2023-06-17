// Modifying the text//creating an element
const ul = document.querySelector("ul");

const li = document.createElement("li");

//Adding Elements
ul.append(li);

//modifying the text
li.innerText = 'X-men';

// Modifying Attributes and classes

li.setAttribute('id', 'main-heading');
li.removeAttribute('id');