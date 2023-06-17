const reviewBtn = document.getElementsByClassName("reveal-btn")
const hiddenContent = document.getElementsByClassName("hidden-content")

function reviewContent(){
    if(hiddenContent.classList.contains("reveal-Btn")){
        hiddenContent.classList.remove("reveal-Btn")
    }else{
        hiddenContent.classList.add('reveal-Btn')
}
}
reviewBtn.addEventListener("click",reviewContent)