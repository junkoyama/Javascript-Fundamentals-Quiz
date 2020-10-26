var homePage = document.querySelector(".homePage");
var startButton = document.querySelector("#start");
var viewHighscore = document.querySelector("#highscores");
var timerCount = document.querySelector(".timer");
var askQuestions = document.querySelector(".questions");
var secondsLeft = 50;
var questionsIndex = 0;
var score = 0;


// Start button click
startButton.addEventListener("click", function() {
console.log("Start Game button is clicked!");
console.log(questions);

//Clear home page to move to next page after clicking Start Game button
homePage.style.display = "none";

// Sets timer countdown
// Referred to code from Week 4 Activity 8 Timers Intervals solution
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerCount.textContent = "Timer: " + secondsLeft + " seconds left";

        if (secondsLeft === 0) {
        clearInterval(timerInterval);
        timerCount.textContent = "GAME OVER!";
        }
    }, 1000);
}
setTime();

});
//End Start button click

// Click button for high scores
viewHighscore.addEventListener("click", function(){
    console.log("Highscores btn clicked!")
});
//End button for high scores

//List of quiz questions
var questions = [ 
    { q1: "What number does an array start counting from?",
        choices: ["Zero", "One", "Two", "Negative One"],
        correct: [0]
    },
    { q2: "How does HTML read from your Javascript file?",
        choices: ["Magic", "<script src = ''></script>", "addEventListener()", "function()"],
        correct: [1]
    },
    { q3: "What does '===' mean?",
      choices: ["Not equal to", "Equal to", "Divided by", "NaN"],
      correct: [1]
    },
    { q4: "How do you add an element to the end of an array?",
      choices: ["length()", "pop()", "push()", "!=="],
      correct: [2]

    },
    { q5: "What are the different ways to define a variable in Javascript?",
      choices: ["v1, v2, v3", "function()", "var, const and let", "You cannot"],
      correct: [2]
    }
];
//End of quiz questions list


