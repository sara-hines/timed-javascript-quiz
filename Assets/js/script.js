var startQuiz = document.querySelector("button");
var btnContainer = document.querySelector(".btn-container");
var titleContainer = document.querySelector(".title-container");
var largeText = document.getElementById("large-text");
var medText = document.querySelector(".med-text");
var bodyText = document.querySelector(".body-text");
var questionsText = document.querySelector(".questions");
// The below line is necessary so that there is a container for the questions to be generated inside, but that container will not disrupt the styling of the start page. 
questionsText.style.display = "none";
// questionsText.setAttribute("style", "height: 0px; width: 0px");
var viewScoresLink = document.getElementById("view-scores");
var counterEl = document.querySelector(".counter"); 
// Ultimately, I want the user to have 90 seconds to complete the quiz. I may mess with this value to test functionality, but I think 90 seconds is a good amount of time for them to have at the start.
var currentIndex = 0;
var secondsLeft = 90;
var score = 0;

var questions = [
    {
        text: "1. Commonly used data types DO NOT include: ",
        options: [
            "1. strings",
            "2. booleans",
            "3. alerts", 
            "4. numbers",
        ], 
        correct: "3. alerts",
    },
    {
        text: "2. The condition in an if / else statement is enclosed with _____.",
        options: [
            "1. quotes", 
            "2. curly brackets", 
            "3. parenthesis", 
            "4. square brackets",
        ], 
        correct: "3. parenthesis",
    },
    {
        text: "3. Arrays in JavaScript can be used to store _____.",
         options: [
            "1. numbers and strings", 
            "2. other arrays", 
            "3. booleans", 
            "4. all of the above",
        ],
        correct: "4. all of the above",
    },
    {
        text: "4. String values must be enclosed within _____ when being assigned to variables.",
        options: [
            "1. commas", 
            "2. curly brackets", 
            "3. quotes", 
            "4. parenthesis",
        ], 
        correct: "3. quotes",
    },
    {
        text: "5. A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. JavaScript", 
            "2. terminal/bash", 
            "3. for loops", 
            "4. console.log",
        ], 
        correct: "4. console.log",
    },
    {
        text: "6. How could you check the data type of a variable named typesOfPlants?",
        options: [
            "1. console.log(typeof typesOfPlants);",
            "2. console.log(typesOfPlants.dataType());",
            "3. console.log(typesOfPlants.data());",
            "4. console.log(typeof typesOfPlants());",
        ],
        correct: "1. console.log(typeof typesOfPlants);",
    },
    {
        text: "7. Given that we need to manipulate an element which contains directions to make crepes, and the element has a class of \"directions\", how could we select this element?",
        options: [
            "1. var directions = document.querySelector(.\"crepe\");",
            "2. var crepe = document.querySelector(\".directions\");",
            "3. var crepe = document.selectElement(\".directions\");",
            "4. var crepe = document.querySelector(\"#directions\");",
        ],
        correct: "2. var crepe = document.querySelector(\".directions\");",

    },
    {
        text: "8. Which of the below options would append a list item stored in the variable myCar to an unordered list stored in the variable cars?",
        options: [
            "1. \nmyCar.append(cars);",
            "2. \ncars.append(myCar);",
            "3. \ncars.add(myCar);",
            "4. \ncars.setItem(myCar);",
        ],
        correct: "2. \ncars.append(myCar);",
    },
    {
        text: "9. Given that we need to style an h2 which is stored in a variable named headings, and we have a class named \"fancy\" which would apply the desired styling, how can we achieve this?",
        options: [
            "1. headings.classes.add(\"fancy\");",
            "2. headings.styling.class(\"fancy\");",
            "3. headings.classList.add(\"fancy\");",
            "4. headings.make(\"fancy\");",
        ],
        correct: "3. headings.classList.add(\"fancy\");",
    },  
    {
        text: "10. Which of the below are acceptable ways to declare a variable in JavaScript?",
        options: [
            "1. var myVariable = 10;",
            "2. let myVariable = 10;",
            "3. const myVariable = 10;",
            "4. all of the above",
        ],
        correct: "4. all of the above",
    },
    {
        text: "11. What is the difference between == and === in JavaScript?",
        options: [
            "1. == performs a strict equality comparison, while === performs a loose equality comparison.",
            "2. == compares the values of two variables, while === compares both the values and the types.",
            "3. == assigns a variable, while === performs a strict equality comparison.",
            "4. There is no difference between == and === in JavaScript.",
        ],
        correct: "2. == compares the values of two variables, while === compares both the values and the types.",
    },
    {
        text: "12. What is the purpose of the localStorage object in JavaScript?",
        options: [
            "1. to store data locally in the browser",
            "2. to perform mathematical calculations", 
            "3. to handle user input", 
            "4. to create loops and conditionals",
        ],
        correct: "1. to store data locally in the browser",
    },
    {
        text: "13. Which of the following would create a valid JavaScript object literal?",
        options: [
            "1. var cat = [name: \"Aster\", coloring: \"black\", age: 12];",
            "2. const cat = {name: \"Aster\", coloring: \"black\", age: 12};",
            "3. const cat = [\"Aster\", \"black\", 12];",
            "4. let cat = {name: \"Aster\"; coloring: \"black\"; age: 12};",
        ],
        correct: "2. const cat = {name: \"Aster\", coloring: \"black\", age: 12};",
    },
    {
        text: "14. How could you combine an array named moonPhase with an array named solarEvent, given that the contents of moonPhase should appear after the contents of solarEvent?",
        options: [
            "1. var sunAndMoon = solarEvent.concat(moonPhase);",
            "2. var sunAndMoon = moonPhase.concat(solarEvent);",
            "3. var sunAndMoon === solarEvent.concat(moonPhase);",
            "4. var sunAndMoon == solarEvent[combine.moonPhase];",
        ],
        correct: "1. var sunAndMoon = solarEvent.concat(moonPhase);", 
    },
    {
        text: "15. How could you create a for loop to iterate through and console log each element of an array called users, which is contains 999 elements?",
        options: [
            "1. for (var i = 0; i < 1000; i++) {\nconsole.log(users[i]);\n}",
            "2. for (var i = 0; i++; i < users.length) {\nconsole.log(users[i]);\n}",
            "3. for (var i = 1; i++; i < users.length) {\nconsole.log(users[i]);\n}",
            "4. for (var i = 0; i < users.length; i++) {\nconsole.log(users[i]);\n}",
        ],
        correct: "4. for (var i = 0; i < users.length; i++) {\nconsole.log(users[i]);\n};",
    }
]

function setCounter() {
    var timerInterval = setInterval(function() {
        if (secondsLeft > 0) {
            secondsLeft--;
            counterEl.textContent = "Time: " + secondsLeft;
        } else if (secondsLeft <= 0) {
            counterEl.textContent = "";
            clearInterval(timerInterval);
            allDone();
        }
    }, 1000);
}  

startQuiz.addEventListener("click", function() {
    setCounter();
    titleContainer.remove();
    largeText.innerHTML = "";
    startQuiz.remove();
    medText.remove();
    var q1Container = document.createElement("div");
    q1Container.setAttribute("id", "q1-container");
    var q1Text = document.createElement("p");
    q1Text.textContent = questions[currentIndex].text
    q1Text.classList.add("questions");
    q1Text.setAttribute("id", "question1")
    bodyText.appendChild(q1Container);
    q1Container.appendChild(q1Text);

    for(i = 0; i < 4; i++) {
        createbtn(questions[currentIndex].options[i]);
    }
})

function createbtn (text) {
    var newbtn = document.createElement("button");
    newbtn.textContent = text;
    newbtn.classList.add("btn");
    newbtn.addEventListener("click", goToNext);
    btnContainer.append(newbtn);
}

function goToNext(event) {
    q1Text = document.getElementById("question1");
    if (q1Text) {
        q1Text.remove();
    }
    
    var chosenAnswer = event.target.textContent;
    var correctAnswer = questions[currentIndex].correct
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        // The below line effectively removes the display: none previously set on questionsText.
        questionsText.style.display = "unset";
        // The below line changes the text content of the element holding the text of the question to be the value of the text key in the array of objects named questions, for the currentIndex (which identifies the question we're on).
        questionsText.textContent = questions[currentIndex].text;
        questionsText.classList.add("questions");
        btnContainer.innerHTML = "";

        for (i = 0; i < 4; i++) {
            createbtn(questions[currentIndex].options[i]);
        }   

        if (chosenAnswer == correctAnswer) {
                score = score + 1;
        } else {
                secondsLeft = secondsLeft - 10;
        }
    // I added the below because without it, the last question (question 15, currentIndex = 14) does not make any impact on score or secondsLeft depending on how the user answers.
    } else if (currentIndex = questions.length) {
        if (chosenAnswer == correctAnswer) {
                score = score + 1;
        } else {
                secondsLeft = secondsLeft - 10;
        }
        allDone();
    }    
}

function allDone() {
    btnContainer.innerHTML = "";
    bodyText.innerHTML = "";
    largeText.textContent = "All done!";
    var scoreMessage = document.createElement("p");
    scoreMessage.textContent = "Your final score is " + score + " out of 15."
    scoreMessage.setAttribute("id", "score-message");
    function createForm() {
        var formEl = document.createElement("form");
        bodyText.appendChild(formEl);

        var submissionContainer = document.createElement("div");
        submissionContainer.setAttribute("id", "submission-container");
        formEl.appendChild(submissionContainer);

        var labelEl = document.createElement("label");
        labelEl.classList.add("label");
        labelEl.textContent = "Enter Initials: "
        submissionContainer.appendChild(scoreMessage);
        submissionContainer.appendChild(labelEl);

        var inputEl = document.createElement("input");
        inputEl.setAttribute("id", "initials");
        submissionContainer.appendChild(inputEl);

        var submitBtnContainer = document.createElement("div");
        submitBtnContainer.setAttribute("id", "submit-container");
        formEl.appendChild(submitBtnContainer);

        var submitBtnEl = document.createElement("button");
        submitBtnEl.textContent = "Submit";
        submitBtnEl.setAttribute("id", "submit-btn");
        submitBtnEl.addEventListener("click", function(event) {
            event.preventDefault();
            var initialsEl = document.getElementById("initials");
            if (initialsEl != null) {
                var storedScores = {
                    initials: initialsEl?.value.trim(),
                    scores: score,
                }
                setScores(storedScores);
                window.location.reload(); 
            }     
        });
        submitBtnContainer.appendChild(submitBtnEl); 
    }
    createForm(); 
}

viewScoresLink.addEventListener("click", renderScores, {once: true});

function setScores(storedScores) { 
    // console.log(storedScores);
    var scores = [];
    var lastScores = JSON.parse(localStorage.getItem("storedScores"));
    if (lastScores !== null) {
        scores = lastScores;
    }
    scores.push(storedScores);
    localStorage.setItem("storedScores", JSON.stringify(scores));
}

function renderScores() {
    bodyText.innerHTML = "";
    btnContainer.innerHTML = "";
    counterEl.innerHTML = "";
    largeText.innerHTML = "";
    var scoresTitle = document.createElement("h1");
    // Why is the below line not working anymore? It was working before.
    scoresTitle.textContent = "High Scores";
    titleContainer.appendChild(scoresTitle);
    medText.textContent = ""; 
    var scoresBtnContainer = document.createElement("div");
    scoresBtnContainer.setAttribute("id", "score-btn-container");

    var backBtn = document.createElement("button");
    backBtn.textContent = "Back to Start";
    backBtn.setAttribute("id", "back-btn");
    scoresBtnContainer.appendChild(backBtn);
    backBtn.addEventListener("click", function(event) {
        window.location.reload(); 
    })

    var clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear High Scores";
    clearBtn.setAttribute("id", "clear-btn");
    scoresBtnContainer.appendChild(clearBtn);

    var lastScores = JSON.parse(localStorage.getItem("storedScores"));
    console.log(lastScores);

    if (lastScores !== null) {
        var olForScores = document.createElement("ol");
        olForScores.classList.add("med-text");
        bodyText.appendChild(olForScores);
        for (i = 0; i < lastScores.length; i++) {
            var liForScores = document.createElement("li");
            liForScores.textContent = lastScores[i].initials + " - " + lastScores[i].scores;
            liForScores.classList.add("li-scores");
            olForScores.appendChild(liForScores);
            clearBtn.addEventListener("click", function(event) {
                localStorage.clear();
                olForScores.innerHTML = "";
            });
        }
    }
    bodyText.appendChild(scoresBtnContainer);
}



