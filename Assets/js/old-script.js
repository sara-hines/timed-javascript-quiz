var startQuiz = document.querySelector("button");
// Appending an element means adding it inside a container, so I created the buttonContainer to have a container in which to append the button elements for the answer options.
var buttonContainer = document.querySelector(".button-container");
var largeText = document.getElementById("large-text");
var medText = document.querySelector(".med-text");
var bodyText = document.querySelector(".body-text");


var questions = [
    {
        text: "Commonly used data types DO NOT include: ",
        options: [
            "1. strings",
            "2. booleans",
            "3. alerts", 
            "4. numbers"
        ]
    },
    {
        text: "The condition in an if / else statement is enclosed with _____.",
        options: [
            "1. quotes", 
            "2. curly brackets", 
            "3. parenthesis", 
            "4. square brackets"
        ]
    },
    {
        text: "Arrays in JavaScript can be used to store _____.",
         options: [
            "1. numbers and strings", 
            "2. other arrays", 
            "3. booleans", 
            "4. all of the above"
        ]
    },
    {
        text: "String values must be enclosed within _____ when being assigned to variables.",
        options: [
            "1. commas", 
            "2. curly brackets", 
            "3. quotes", 
            "4. parenthesis"
        ]
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. JavaScript", 
            "2. terminal/bash", 
            "3. for loops", 
            "4. console.log"
        ]
    },
    {
        text: "How could you check the data type of a variable named typesOfPlants?",
        options: [
            "1. console.log(typeof typesOfPlants);",
            "2. console.log(typesOfPlants.dataType());",
            "3. console.log(typesOfPlants.data());",
            "4. console.log(typeof typesOfPlants());"
        ]
    },
    {
        text: "Given that we need to store and manipulate an element which contains directions to make crepes, and the element has a class of \"directions\", how could we select this element?",
        options: [
            "1. var directions = document.querySelector(.\"crepe\");",
            "2. var crepe = document.querySelector(\".directions\");",
            "3. var crepe = document.selectElement(\".directions\");",
            "4. var crepe = document.querySelector(\"#directions\");"
        ]
    },
    {
        text: "Given that we have an unordered list selected and stored in a variable named cars, and we need to create and append a new list item with the text \"Silver Thunderbird\", how could we achieve this?",
        options: [
            "1. var myCar = document[5].createElement(\"li\");\nmyCar.text[0] = \"Silver Thunderbird\";\ncars.append(myCar);",
            "2. var myCar = document.createElement(\"li\");\nmyCar.textContent = \"Silver Thunderbird\";\ncars.append(myCar);",
            "3. var myCar = document.newElement(\"li\");\nmyCar.textContent = \"Silver Thunderbird\";\ncars.add(myCar);",
            "4. var myCar = createElement(\"li\");\nmyCar.textContent = \"Silver Thunderbird\";\ncars.append(myCar);"
        ]
    },
    {
        text: "Given that we need to style an h2 we currently have selected and stored in a variable named headings, and we have a class named \"fancy\" which would apply the desired styling, how can we achieve this?",
        options: [
            "1. headings.classes.add(\"fancy\");",
            "2. headings.styling.class(\"fancy\");",
            "3. headings.classList.add(\"fancy\");",
            "4. headings.make(\"fancy\");",
        ]
    },  
    {
        text: "Which of the below are acceptable ways to declare a variable in JavaScript?",
        options: [
            "1. var myVariable = 10;",
            "2. let myVariable = 10;",
            "3. const myVariable = 10;",
            "4. all of the above",
        ]
    },
    {
        text: "What is the difference between == and === in JavaScript?",
        options: [
            "1. == performs a strict equality comparison, while === performs a loose equality comparison.",
            "2. == compares the values of two variables, while === compares both the values and the types.",
            "3. == assigns a variable, while === performs a strict equality comparison.",
            "4. There is no difference between == and === in JavaScript."
        ]
    },
    {
        text: "What is the purpose of the localStorage object in JavaScript?",
        options: [
            "1. to store data locally in the browser",
            "2. to perform mathematical calculations", 
            "3. to handle user input", 
            "4. to create loops and conditionals"
        ]
    },
    {
        text: "Which of the following would create a valid JavaScript object literal?",
        options: [
            "1. var cat = [name: \"Aster\", coloring: \"black\", age: 12]",
            "2. const cat = {name: \"Aster\", coloring: \"black\", age: 12}",
            "3. const cat = [\"Aster\", \"black\", 12]",
            "4. let cat = {name: \"Aster\"; coloring: \"black\"; age: 12}"
        ]
    },
    {
        text: "How could you combine an array named moonPhase with an array named solarEvent, given that the contents of moonPhase should appear after the contents of solarEvent?",
        options: [
            "1. var sunAndMoon = solarEvent.concat(moonPhase);",
            "2. var sunAndMoon = moonPhase.concat(solarEvent);",
            "3. var sunAndMoon === solarEvent.concat(moonPhase);",
            "4. var sunAndMoon == solarEvent[combine.moonPhase];"
        ]
    },
    {
        text: "How could you create a for loop to iterate through and console log each element of an array called users, which is contains 999 elements?",
        options: [
            "1. for (var i = 0; i < 1000; i++) {\nconsole.log(users[i]);\n};",
            "2. for (var i = 0; i++; i < users.length) {\nconsole.log(users[i]);\n};",
            "3. for (var i = 1; i++; i < users.length) {\nconsole.log(users[i]);\n};",
            "4. for (var i = 0; i < users.length; i++) {\nconsole.log(users[i]);\n};"
        ]
    }
]

// var q1a1 = questions[0].options[0];
// q1a1.className = "incorrect";

// // The below only returns: VM789:3 Uncaught TypeError: Cannot read properties of undefined (reading 'contains') at <anonymous>:3:20
// if (q1a1.classList.contains("incorrect")) {
//     console.log("Class added");
// } else {
//     console.log("Class has not been added");
// }


questions[0].options[0].classList.add("incorrect");
questions[0].options[1].classList.add("incorrect");
questions[0].options[2].classList.add("correct");
questions[0].options[3].classList.add("incorrect");

questions[1].options[0].classList.add("incorrect");
questions[1].options[1].classList.add("incorrect");
questions[1].options[2].classList.add("correct");
questions[1].options[3].classList.add("incorrect");

questions[2].options[0].classList.add("incorrect");
questions[2].options[1].classList.add("incorrect");
questions[2].options[2].classList.add("incorrect");
questions[2].options[3].classList.add("correct");

questions[3].options[0].classList.add("incorrect");
questions[3].options[1].classList.add("incorrect");
questions[3].options[2].classList.add("correct");
questions[3].options[3].classList.add("incorrect");

questions[4].options[0].classList.add("incorrect");
questions[4].options[1].classList.add("incorrect");
questions[4].options[2].classList.add("incorrect");
questions[4].options[3].classList.add("correct");

questions[5].options[0].classList.add("correct");
questions[5].options[1].classList.add("incorrect");
questions[5].options[2].classList.add("incorrect");
questions[5].options[3].classList.add("incorrect");

questions[6].options[0].classList.add("incorrect");
questions[6].options[1].classList.add("correct");
questions[6].options[2].classList.add("incorrect");
questions[6].options[3].classList.add("incorrect");

questions[7].options[0].classList.add("incorrect");
questions[7].options[1].classList.add("correct");
questions[7].options[2].classList.add("incorrect");
questions[7].options[3].classList.add("incorrect");

questions[8].options[0].classList.add("incorrect");
questions[8].options[1].classList.add("incorrect");
questions[8].options[2].classList.add("correct");
questions[8].options[3].classList.add("incorrect");

questions[9].options[0].classList.add("incorrect");
questions[9].options[1].classList.add("incorrect");
questions[9].options[2].classList.add("incorrect");
questions[9].options[3].classList.add("correct");

questions[10].options[0].classList.add("incorrect");
questions[10].options[1].classList.add("correct");
questions[10].options[2].classList.add("incorrect");
questions[10].options[3].classList.add("incorrect");

questions[11].options[0].classList.add("correct");
questions[11].options[1].classList.add("incorrect");
questions[11].options[2].classList.add("incorrect");
questions[11].options[3].classList.add("incorrect");

questions[12].options[0].classList.add("incorrect");
questions[12].options[1].classList.add("correct");
questions[12].options[2].classList.add("incorrect");
questions[12].options[3].classList.add("incorrect");

questions[13].options[0].classList.add("correct");
questions[13].options[1].classList.add("incorrect");
questions[13].options[2].classList.add("incorrect");
questions[13].options[3].classList.add("incorrect");

questions[14].options[0].classList.add("incorrect");
questions[14].options[1].classList.add("incorrect");
questions[14].options[2].classList.add("incorrect");
questions[14].options[3].classList.add("correct");

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

var incorrectAnswer = document.querySelectorAll("button.incorrect"); 
incorrectAnswer.addEventListener("click", function subtractTime() {
    subtractTime();
    secondsLeft = secondsLeft - 10;
})

var correctAnswer = document.querySelectorAll("button.correct");
correctAnswer.addEventListener("click", function addToScore() {
    addToScore();
    score = score + 1;
})

// function createButton(text) {
//     // When createButton is called, we want to create 1 button and give it whatever text we pass into it when the function is called elsewhere.
//     var newButton = document.createElement("button");
//     newButton.textContent = text;
//     // When createButton is called, we want to add the class of "button" in order to apply the styling we need.
//     newButton.classList.add("button", "answer-button");

//     // When createButton is called, we will also append the new button to its container so it shows up on the page.
//     buttonContainer.append(newButton);
//     buttonContainer.addEventListener("click", goToQ2);

//     // var answerButton = document.querySelectorAll(".button");
// }

startQuiz.addEventListener("click", function goToQ1() {
    goToQ1();   
    console.log("function goToQ1 is working"); 
    // The time needs to start counting down once the event listener starts, so we are calling the setCounter() function to make that happen.
    setCounter();
    // The below removes the element used for the title, since it should not show up after the Start Quiz button is clicked and the quiz begins.
    largeText.remove();

    // The below removes the "Start Quiz" button, so the only buttons that appear after the quiz starts are the buttons generated for possible answers. 
    startQuiz.remove();

    // The below modifies the text content of the element that was storing the quiz directions. The value of the text property of the first element inside the questions array is the text that is applied. 
    medText.textContent = questions[0].text;

    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[0].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }  
})

buttonContainer.addEventListener("click", goToQ2());
    
function goToQ2() {
    goToQ2();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[1].text;
    for (i = 0; i < 4; i++) {
    //     event.stopPropagation();
    //     function deleteButtons(event) {
    //         event.stopPropagation();
    //         var deleteButtons = document.querySelector("button");
    //         deleteButtons.remove();
    //     }
    //     deleteButtons();

        var newButton = document.createElement("button");
        newButton.textContent = questions[1].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }
}

buttonContainer.addEventListener("click", goToQ3());

function goToQ3() {
    goToQ3();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[2].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[2].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }  
}

buttonContainer.addEventListener("click", goToQ4());

function goToQ4() {
    goToQ4();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[3].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[3].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    } 
}

buttonContainer.addEventListener("click", goToQ5());

function goToQ5() {
    goToQ5();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[4].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[4].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }
}

buttonContainer.addEventListener("click", goToQ6());

function goToQ6() {
    goToQ6();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[5].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[5].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }
}

buttonContainer.addEventListener("click", goToQ7());

function goToQ7() {
    goToQ7();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[6].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[6].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }
}

buttonContainer.addEventListener("click", goToQ8());

function goToQ8() {
    goToQ8();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[7].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[7].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }
}

buttonContainer.addEventListener("click", goToQ9());

function goToQ9() {
    goToQ9();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[8].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[8].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }
}

buttonContainer.addEventListener("click", goToQ10());

function goToQ10() {
    goToQ10();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[9].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[9].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }
}

buttonContainer.addEventListener("click", goToQ11());

function goToQ11() {
    goToQ11();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[10].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[10].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }
}

buttonContainer.addEventListener("click", goToQ12());

function goToQ12() {
    goToQ12();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[11].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[11].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }
}

buttonContainer.addEventListener("click", goToQ13());

function goToQ13() {
    goToQ13();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[12].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[12].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }
}

buttonContainer.addEventListener("click", goToQ14());

function goToQ14() {
    goToQ14();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[13].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[13].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }
}

buttonContainer.addEventListener("click", goToQ15());

function goToQ15() {
    goToQ15();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    medText.textContent = questions[14].text;
    for (i = 0; i < 4; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = questions[14].options[i];
        newButton.classList.add("button");
        buttonContainer.append(newButton);
    }
}

buttonContainer.addEventListener("click", allDone());


// finalScore = ...How will we get this?
// medText.textContent = "Your final score is " + finalScore + "."

percentScore = Math.floor((score / 15) * 100)

function allDone() {
    largeText.textContent = "All done!";
    medText.textContent = "Your final score is " + score + " out of 15 (" + percentScore + "%)."

    // function createForm() {
    //     var createFormEl = document.createElement("form");
    //     bodyText.appendChild("form");
    //     var createInputEl = document.createElement("input");
    //     createFormEl.appendChild(createInputEl);
    //     console.log("function createForm was triggered.");
    // }
    // createForm();
    
    console.log("function allDone is working!");
}

