var homePage = document.querySelector(".homePage");
var startButton = document.querySelector("#start");
var timerCount = document.querySelector(".timer");
var submitInitials = document.querySelector(".row");
var secondsLeft = 50;
var quiz = document.querySelector("#quiz");
var options = document.getElementsByName("options");
var question = document.getElementsByName("question");
var num = 0,
  quiz,
  quizStatus,
  choice,
  chA,
  chB,
  chC,
  correct = 0;
quiz.style.display = "none";
submitInitials.style.display = "none";
// Start button click
startButton.addEventListener("click", function () {
  console.log("Start Game button is clicked!");

  //Clear home page to move to next page after clicking Start Game button
  homePage.style.display = "none";

  // Sets timer countdown
  // Referred to code from Week 4 Activity 8 Timers Intervals solution
  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timerCount.textContent = "Timer: " + secondsLeft + " seconds left";

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        timerCount.textContent = "GAME OVER!";
      }
    }, 1000);
  }
  setTime();
  quiz.style.display="block";
});
//End Start button click

//List of quiz questions
var questions = [
  {
    question: "What number does an array start counting from?",
    a: " Zero",
    b: " One",
    c: " Two",
    answer: " One",
  },
  {
    question: "Where do you place your JS script on your HTML?",
    a: " In the header",
    b: " In the first div tag",
    c: " At the end before the end body tag",
    answer: " At the end before the end body tag",
  },
  {
    question: "What does '===' mean?",
    a: " Not equal to",
    b: " Equal to",
    c: " Divided by",
    answer: " Equal to",
  },
  {
    question: "How do you add an element to the end of an array?",
    a: " length()",
    b: " pop()",
    c: " push()",
    answer: " push()",
  },
  {
    question: "What are the different ways to define a variable in Javascript?",
    a: " v1, v2, v3",
    b: " function()",
    c: " var, const and let",
    answer: " var, const and let",
  },
];
//End of quiz questions list

function get(x) {
  return document.getElementById(x);
}

function renderQuestions() {
  question = questions[num].question;
  chA = questions[num].a;
  chB = questions[num].b;
  chC = questions[num].c;

  quiz.innerHTML = "<h3>" + question + "</h3>";

  quiz.innerHTML +=
    "<label> <input type ='radio' name = 'options' value = 'A'>" +
    chA +
    "</label> <br>";
  quiz.innerHTML +=
    "<label> <input type ='radio' name = 'options' value = 'B'>" +
    chB +
    "</label> <br>";
  quiz.innerHTML +=
    "<label> <input type ='radio' name = 'options' value = ''>" +
    chC +
    "</label> <br> <br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'class='btn btn-success'> Submit Answer </button> <br> <br>";
}

function checkAnswer() {
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      choice = options[i].value;
    }
  }
  // checks if answer matches the correct choice
  if (choice == questions[num].answer) {
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  num++;
  // then the renderQuestion function runs again to go to next question
  renderQuestions();
  
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestions);
