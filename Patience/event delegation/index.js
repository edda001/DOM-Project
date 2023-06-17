//it allows users to append a single event listener to a parent element that adds it to all of its present element that adds it to all its present and future descendants that
//match a selector 

document.querySelector("#sports").addEventListener('click', function(e){
    console.log(e.target.getAttribute("id") + "is clicked");

    const target = e.target;
    if (target.matches("li")){
        target.style.backgroundColor = "lightgray"
    }
})

const sport = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "rugby";
newSport.setAttribute("id","rugby");
sport.appendChild(newSport);