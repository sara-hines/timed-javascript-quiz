// var startQuiz = document.querySelector("button");

// startQuiz.addEventListener("click", function() {
    
// })

var largeText = document.getElementById("large-text");
var medText = document.querySelector(".med-text");
var bodyText = document.querySelector(".body-text");

var counterEl = document.querySelector(".counter"); 
var secondsLeft = 5;

function setCounter() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        counterEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);

            allDone();
        }
    }, 1000);
}

setCounter();

// finalScore = ...How will we get this?
// medText.textContent = "Your final score is " + finalScore + "."

function allDone() {
    largeText.textContent = "All done!";
    medText.textContent = "Your final score is "
    var startButton = document.getElementById("start-button");
    startButton.remove();
    function createForm() {
        var createFormEl = document.createElement("form");
        bodyText.appendChild("form");
        var createInputEl = document.createElement("input");
        createFormEl.appendChild.createInputEl;
        console.log("function createForm was triggered.")
    }
    createForm();
    
    console.log("function allDone is working!");
}