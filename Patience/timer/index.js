//variables

let startstopBtn = document.querySelector("#startstopbtn");
let resetBtn = document.querySelector("#resetbtn");
console.log(startstopBtn);

//variable for time value

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSecond = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "stopped";

//stop watch function

function stopWatch (){
    seconds++ 

    if(seconds/60 === 1){
        seconds = 0;
        minutes++;

        if(minutes/60 === 1){
            minutes = 0;
            hours++;
        }
    }
if( seconds < 10){
    leadingSecond = "0" + seconds.toString();
}else{
    leadingSecond = seconds;
}
if( minutes < 10){
    leadingMinutes = "0" + minutes.toString();
}else{
    leadingMinutes = minutes;
}
if( hours < 10){
    leadingHours = "0" + hours.toString();
}else{
    leadingHours = seconds;
}
let displayTimer = document.getElementById("timer").innerText = leadingHours + ":" + leadingMinutes + ":" +leadingSecond ;
    
}
//window.setInterval(stopWatch ,1000)
startstopBtn.addEventListener("click", function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch ,1000);
        document.getElementById("startstopbtn").innerHTML = '<i class="fa fa-pause" id="pause"></i>';
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById("startstopbtn").innerHTML = "<i class='fa fa-play' id='play'></i>";
        timerStatus = "stopped";
    }
})
resetBtn.addEventListener("click", function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("timer").innerHTML = "00:00:00";
})