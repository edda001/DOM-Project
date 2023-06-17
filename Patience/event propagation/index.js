window.addEventListener("click", function(){
    console.log("window");
},true);
document.addEventListener("click", function(){
    console.log("Document");
},true);
document.querySelector(".div2").addEventListener ("click", function(){
    console.log("Div2");
},{once: true});
document.querySelector(".div1").addEventListener("click", function(){
    console.log("div!");
},true);
document.querySelector(".button").addEventListener("click", function(e){
    e.preventDefault                                                                                                                                                                                       \                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                \\ 
    console.log(e.target.innerText = "Clicked");
},true);

//stop event propgation 
e.stopPropagation()