//element .addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');
function alertBtn () {
    alert("I also love java script")
}
buttonTwo.addEventListener('click', alertBtn);

let newBackgroundColor = document.getElementById("box-3");
function changeBgColor(){
    newBackgroundColor.style.backgroundColor = "blue";

}
newBackgroundColor.addEventListener("mouseOver", changeBgColor);