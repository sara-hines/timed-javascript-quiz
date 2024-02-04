// I selected and stored elements in variables to be used for functionality and styling later.
var startQuiz = document.querySelector("button");
var btnContainer = document.querySelector(".btn-container");
var titleContainer = document.querySelector(".title-container");
var headerContainer = document.querySelector(".header-container");
var medText = document.querySelector(".med-text");
var bodyText = document.querySelector(".body-text");
var questionsText = document.querySelector(".questions");
// The below line is necessary so that there is a container for the questions to be generated inside, but that container will not disrupt the styling of the start page. 
questionsText.style.display = "none";
var viewScoresLink = document.getElementById("view-scores");
var counterEl = document.querySelector(".counter"); 
// I created variables for the current index, score, and seconds of quiz time remaining, all set to 0, to initiate the values necessary for score-keeping and time-keeping.
var currentIndex = 0;
var score = 0;
var secondsLeft = 90;


// I created an array of objects, each object storing the question text and multiple choice answers for that question. This provides an efficient way to update the question and available answers iteratively using dot notation. 
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
        text: "7. How could you select an element which which stores a recipe for crepes and has a class of \"directions\"?",
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
        text: "9. We need to style an h2 which is stored in a variable named headings. How can we apply a class named \"fancy\" to the h2?",
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
        text: "14. How could you combine an array named moonPhase with an array named solarEvent, given the contents of moonPhase should appear at the end?",
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


// The below function sets the timer and interval in order to decrement and display the seconds remaining until the 90 seconds allotted for the quiz have passed. When the time remaining is 0 (or less than 0--a possibility, because incorrect answers cause a time penalty), the allDone function is called to allow the user to view and save their score.
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


// The below event listener on the "Start Quiz" button begins the quiz timer and removes the following: the container holding the quiz title, the quiz directions, and the "Start Quiz" button. The first question is rendered to the page, and answer buttons are generated by looping through the options key using dot notation. The necessary containers, classes, and ids are added for styling purposes.
startQuiz.addEventListener("click", function() {
    setCounter();
    titleContainer.remove();
    medText.remove();
    startQuiz.remove();
    var q1Container = document.createElement("div");
    q1Container.setAttribute("id", "q1-container");
    var q1Text = document.createElement("p");
    q1Text.textContent = questions[currentIndex].text;
    q1Text.classList.add("questions");
    q1Text.setAttribute("id", "question1");
    bodyText.appendChild(q1Container);
    q1Container.appendChild(q1Text);
    for(i = 0; i < 4; i++) {
        createBtn(questions[currentIndex].options[i]);
    }
})


// Function creatBtn is passed the text for the multiple choice answers in order to generate answer buttons. A "click" event listener is added to each answer button; this generates the new question and answer buttons via the goToNext function.
function createBtn (text) {
    var newBtn = document.createElement("button");
    newBtn.textContent = text;
    newBtn.classList.add("btn");
    newBtn.addEventListener("click", goToNext);
    btnContainer.append(newBtn);
}


// There is a different set of changes to elements and styling which needs to happen when the "Start Quiz" button is clicked versus when any answer button is clicked. Function goToNext is needed to handle the change from question 1 to question 2, as well as the advancement to each subsequent question. 
function goToNext(event) {
    q1Text = document.getElementById("question1");
    if (q1Text) {
        q1Text.remove();
    }
    // Function goToNext compares the text content of the chosen answer button to the value of the "correct" key that identifies the correct answer for the question. If the user chose the correct answer, their score is increased by 1. If the user chose one of the incorrect answers, their time remaining is decreased by 10 seconds. 
    var chosenAnswer = event.target.textContent;
    var correctAnswer = questions[currentIndex].correct;
    // If the currentIndex is less than the length of the questions array of objects minus 1 (because question 1 has already been answered), the currentIndex will be incremented by 1, and the question and answers for the new index will be displayed. 
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        questionsText.style.display = "unset";
        questionsText.textContent = questions[currentIndex].text;
        questionsText.classList.add("questions");
        btnContainer.innerHTML = "";
        for (i = 0; i < 4; i++) {
            createBtn(questions[currentIndex].options[i]);
        }   
        if (chosenAnswer == correctAnswer) {
                score = score + 1;
        } else {
                secondsLeft = secondsLeft - 10;
        }
    // On the last question (question 15), the score-keeping and time-keeping still need to be impacted by user input, but no new questions or answers need to be displayed, and function allDone needs to be called instead to allow the user to view and save their score. 
    } else if (currentIndex = questions.length) {
        if (chosenAnswer == correctAnswer) {
                score = score + 1;
        } else {
                secondsLeft = secondsLeft - 10;
        }
        allDone();
    }    
}

// Function allDone displays a message that the quiz is completed, displays the user's score, and generates form elements which allow the user to save their score upon clicking the submit button. Elements which would disrupt the page in meaning or style are cleared, and ids are applied to the new elements to be used for styling purposes.
function allDone() {
    btnContainer.innerHTML = "";
    bodyText.innerHTML = "";
    var allDoneText = document.createElement("h1");
    allDoneText.textContent = "All done!";
    allDoneText.setAttribute("id", "all-done");
    bodyText.appendChild(allDoneText);

    var scoreMessage = document.createElement("p");
    scoreMessage.textContent = "Your final score is " + score + " out of 15.";
    scoreMessage.setAttribute("id", "score-message");
    function createForm() {
        var formEl = document.createElement("form");
        bodyText.appendChild(formEl);

        var submissionContainer = document.createElement("div");
        submissionContainer.setAttribute("id", "submission-container");
        formEl.appendChild(submissionContainer);
        var labelEl = document.createElement("label");
        labelEl.textContent = "Enter Initials: ";
        submissionContainer.appendChild(scoreMessage);
        submissionContainer.appendChild(labelEl);

        var inputEl = document.createElement("input");
        submissionContainer.appendChild(inputEl);

        var submitBtnContainer = document.createElement("div");
        submitBtnContainer.setAttribute("id", "submit-container");
        formEl.appendChild(submitBtnContainer);

        var submitBtnEl = document.createElement("button");
        submitBtnEl.textContent = "Submit";
        submitBtnEl.setAttribute("id", "submit-btn");
        submitBtnEl.addEventListener("click", function(event) {
            event.preventDefault();
            // If there is a variable called inputEl (which stores the users initials when the submit button is clicked), then the user's initials and score should be passed to the function setScores which saves scores to local storage. After the user's initial and score are saved, the window is reloaded to signal that the score was saved and prevent the user from saving the same score twice. 
            if (inputEl != null) {
                var storedScores = {
                    initials: inputEl?.value.trim(),
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


// The user can click the "View High Scores" text at the top left of the page at any time, which will render the scores from local storage to the page. The {once: true} prevents the scores from being re-printed to the page if the user clicks "View High Scores" multiple times in a row.
viewScoresLink.addEventListener("click", renderScores, {once: true});


// Function setScores gets any previously stored scores, parses them since they would have been stringified when storing them originally, adds the user's new score to be saved (by passing in the storedScores object), and sets the resulting stringified array to local storage.
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


// Function renderScores is called when the user clicks "View High Scores," and it clears, creates, and styles elements in order to display scores from local storage.
function renderScores() {
    viewScoresLink.style.visibility = "hidden";
    titleContainer.remove();
    bodyText.innerHTML = "";
    btnContainer.innerHTML = "";
    counterEl.innerHTML = "";
    var scoresTitle = document.createElement("h1");
    scoresTitle.textContent = "High Scores";
    headerContainer.appendChild(scoresTitle);
    medText.textContent = ""; 
    var scoresBtnContainer = document.createElement("div");
    scoresBtnContainer.setAttribute("id", "score-btn-container");

    // The "Back to Start" button, when clicked, reloads the page to take the user back to the start of the quiz.
    var backBtn = document.createElement("button");
    backBtn.textContent = "Back to Start";
    backBtn.setAttribute("id", "back-btn");
    scoresBtnContainer.appendChild(backBtn);
    backBtn.addEventListener("click", function(event) {
        window.location.reload(); 
    })

    // The below lines create and style the "Clear High Scores" button. 
    var clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear High Scores";
    clearBtn.setAttribute("id", "clear-btn");
    scoresBtnContainer.appendChild(clearBtn);

    // Any stored scores are retrieved, and, if there are stored scores, they are rendered to the page as list items in an ordered list. 
    var lastScores = JSON.parse(localStorage.getItem("storedScores"));
    if (lastScores !== null) {
        var olForScores = document.createElement("ol");
        olForScores.classList.add("med-text");
        bodyText.appendChild(olForScores);
        for (i = 0; i < lastScores.length; i++) {
            var liForScores = document.createElement("li");
            liForScores.textContent = lastScores[i].initials + " - " + lastScores[i].scores;
            liForScores.classList.add("li-scores");
            olForScores.appendChild(liForScores);

            // The event listener on the "Clear High Scores" button is only needed if there are stored scores to clear. If there are stored scores, the click event on the button will clear the local storage and the ordered list, removing the stored scores from the page.
            clearBtn.addEventListener("click", function(event) {
                localStorage.clear();
                olForScores.innerHTML = "";
            });
        }
    }
    bodyText.appendChild(scoresBtnContainer);
}



