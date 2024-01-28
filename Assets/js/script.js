var startQuiz = document.querySelector("button");
// Appending an element means adding it inside a container, so I created the buttonContainer to have a container in which to append the button elements for the answer options.
var buttonContainer = document.querySelector(".button-container");
var largeText = document.getElementById("large-text");
var medText = document.querySelector(".med-text");
var bodyText = document.querySelector(".body-text");
var currentIndex = 0;

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
        text: "7. Given that we need to store and manipulate an element which contains directions to make crepes, and the element has a class of \"directions\", how could we select this element?",
        options: [
            "1. var directions = document.querySelector(.\"crepe\");",
            "2. var crepe = document.querySelector(\".directions\");",
            "3. var crepe = document.selectElement(\".directions\");",
            "4. var crepe = document.querySelector(\"#directions\");",
        ],
        correct: "2. var crepe = document.querySelector(\".directions\");",

    },
    {
        text: "8. Given that we have an unordered list selected and stored in a variable named cars, and we need to create and append a new list item with the text \"Silver Thunderbird\", how could we achieve this?",
        options: [
            "1. var myCar = document[5].createElement(\"li\");\nmyCar.text[0] = \"Silver Thunderbird\";\ncars.append(myCar);",
            "2. var myCar = document.createElement(\"li\");\nmyCar.textContent = \"Silver Thunderbird\";\ncars.append(myCar);",
            "3. var myCar = document.newElement(\"li\");\nmyCar.textContent = \"Silver Thunderbird\";\ncars.add(myCar);",
            "4. var myCar = createElement(\"li\");\nmyCar.textContent = \"Silver Thunderbird\";\ncars.append(myCar);",
        ],
        correct: "2. var myCar = document.createElement(\"li\");\nmyCar.textContent = \"Silver Thunderbird\";\ncars.append(myCar);",
    },
    {
        text: "9. Given that we need to style an h2 we currently have selected and stored in a variable named headings, and we have a class named \"fancy\" which would apply the desired styling, how can we achieve this?",
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
            "1. var cat = [name: \"Aster\", coloring: \"black\", age: 12]",
            "2. const cat = {name: \"Aster\", coloring: \"black\", age: 12}",
            "3. const cat = [\"Aster\", \"black\", 12]",
            "4. let cat = {name: \"Aster\"; coloring: \"black\"; age: 12}",
        ],
        correct: "2. const cat = {name: \"Aster\", coloring: \"black\", age: 12}",
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
            "1. for (var i = 0; i < 1000; i++) {\nconsole.log(users[i]);\n};",
            "2. for (var i = 0; i++; i < users.length) {\nconsole.log(users[i]);\n};",
            "3. for (var i = 1; i++; i < users.length) {\nconsole.log(users[i]);\n};",
            "4. for (var i = 0; i < users.length; i++) {\nconsole.log(users[i]);\n};",
        ],
        correct: "4. for (var i = 0; i < users.length; i++) {\nconsole.log(users[i]);\n};",
    }
]


var counterEl = document.querySelector(".counter"); 
// Ultimately, I want the user to have 90 seconds to complete the quiz. I may mess with this value to test functionality, but I think 90 seconds is a good amount of time for them to have at the start.
var secondsLeft = 90;

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

var score = 0;


startQuiz.addEventListener("click", function() {
    setCounter();
    largeText.remove();
    startQuiz.remove();
    medText.textContent = questions[currentIndex].text;

    for(i = 0; i < 4; i++) {
        createButton(questions[currentIndex].options[i]);
    }
})

function createButton (text) {
    var newButton = document.createElement("button");
    newButton.textContent = text;
    newButton.classList.add("button");
    newButton.addEventListener("click", goToNext)
    buttonContainer.append(newButton)

    if (questions[0].options.textContent === questions[0].correct) {
        newButton.onclick = function addToScore() {
        addToScore();
        score = score + 1;
        console.log("Score increased by 1.");
        }
    } else {
        console.log("Score will not be increased.");
    }
}

function goToNext() {
    if (currentIndex < questions.length - 1) {
        currentIndex++;

        // Change question text
        medText.textContent = questions[currentIndex].text;
        buttonContainer.innerHTML = "";

        for (i = 0; i < 4; i++) {
            createButton(questions[currentIndex].options[i]);
        }
    } else {
        allDone();
    }    
}

// percentScore = Math.floor((score / 15) * 100)

function allDone() {
    largeText.textContent = "All done!";
    // Replace below with: medText.textContent = "Your final score is " + score + " out of 15 (" + percentScore + "%)."
    medText.textContent = "Your final score is __ out of 15."
    buttonContainer.innerHTML = "";
    function createForm() {
        var createFormEl = document.createElement("form");
        bodyText.appendChild(createFormEl);

        var createLabelEl = document.createElement("label");
        createLabelEl.textContent = "Enter Initials:"
        createFormEl.appendChild(createLabelEl);

        var createInputEl = document.createElement("input");
        createFormEl.appendChild(createInputEl);

        var newButtonEl = document.createElement("button");
        newButtonEl.textContent = "Submit";
        createFormEl.appendChild(newButtonEl);
    }
    createForm();
    
    console.log("function allDone is working!");
}
