var startButton = document.querySelector("#start");
var viewHighscore = document.querySelector("#highscores");
var timerCount = document.querySelector(".timer");

var secondsLeft = 10;

startButton.addEventListener("click", function() {
console.log("Start Button is clicked!")

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerCount.textContent = "Timer: " + secondsLeft + " seconds left";

        if (secondsLeft === 0) {
        clearInterval(timerInterval);
        }
    }, 1000);
}

setTime();
})

viewHighscore.addEventListener("click", function(){
    console.log("Highscores btn clicked!")
})

