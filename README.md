# Timed JavaScript Quiz

## Description 

This project is a timed 15 question quiz on JavaScript fundamentals, and can be used as a learning tool—both the quiz itself, and the code behind it—by people new to JavaScript. When learning any new skill, it is important to review and practice the basics to build a strong foundation, and this quiz provides a helpful review of data types, arrays, objects, for loops, and other foundational concepts. The JavaScript behind the quiz includes numerous event listeners, utilizes setInterval() for time-keeping, accesses key value pairs of an object using dot notation, and uses local storage to persist data. 

As I advance my skills in JavaScript, I'm building more and more user interaction into my projects, and user input drives this entire application. The quiz starts at the click of the start button and advances question by question in response to click events. An input element allows the user to submit their initials to save their final score, and the user can view previously saved scores by clicking "View High Scores" at any time. When viewing high scores, two buttons appear: a "Back to Start" button, which navigates the user back to the start of the quiz, and a "Clear High Scores" button, which clears saved scores. The index.html document contains very few elements and holds little interest; the dynamic creation, modification, and deletion of elements is controlled through JavaScript, demonstrating the extent to which the app depends on user interaction. 

I wanted to use mobile-first responsive design for this project, and I leveraged a combination of responsive/relative sizing units and media queries to achieve this. The resulting design styles from mobile vieport sizes, through smaller and medium viewport sizes, up through larger desktops like my own. Considering the dynamic creation, clearing, and removing of elements, which increased the complexity involved in styling, the application provided an opportunity to deepen my knowledge of CSS. In keeping with the emphasis on user interactivity, I made sure to give cues to the user via hover effects to guide their interaction with the web page. Overall, the application provides an opportunity to engage with foundational concepts in JavaScript in a responsive and interactive manner. 

## Installation 

No installation is required to use this application.

## Usage and Features 

Navigate to the web page at [https://sara-hines.github.io/timed-javascript-quiz/] (https://sara-hines.github.io/timed-javascript-quiz/ 'GitHub Pages Link'). The web page will have the following appearance on mobile, medium devices, and large devices, respectively. 

![mobile1](https://github.com/github/markup/assets/90005274/00834f50-916c-4ac9-a4d2-8c3cc8ecc3d6)

![med1](https://github.com/github/markup/assets/90005274/43f40485-c7a4-48b8-b939-6c24203f1d9c)

![large1](https://github.com/github/markup/assets/90005274/0b480094-12d9-4123-920d-2a0e48c3be99)

Once the "Start Quiz" button has been clicked, the first question and corresponding multiple choice answers will be displayed. Each time the user clicks to answer a question, the next question and set of multiple choice answers will be displayed. The below screenshots are samples of the appearance of questions on mobile, medium devices, and large devices, respectively. 

![mobile2](https://github.com/github/markup/assets/90005274/202b0975-7f3b-4084-8d6b-deb32ba24945)

![med2](https://github.com/github/markup/assets/90005274/fa8188c2-ec16-4b24-9801-af41eb8a4e57)

![large2](https://github.com/github/markup/assets/90005274/31c41fa7-5add-447e-9eda-6e75de96714e)

While the user is taking the quiz, their score will be increased by 1 for each correctly answered question, and their time remaining will be decreased by 10 seconds for each incorrectly answered question. Once the timer is up or the user has answered the final question (question #15), the page will display the message "All done!" which signals the completion of the quiz. The user's final score will be displayed, and they will be prompted to enter their initials to submit their score. 

At any point, the user can click the "View High Scores" text in the top left corner, and any previously saved scores will be retrieved from local storage and rendered to the page. The "Back to Start" button takes the user back to the start of the quiz, and the "Clear High Scores" button clears the scores from local storage and from the page. The following screenshots depict the appearance of the "View High Scores" page on mobile, medium devices, and large devices, respectively.

![mobile5](https://github.com/github/markup/assets/90005274/3bdc08af-3993-4373-a3ca-c047997c9840)

![med5](https://github.com/github/markup/assets/90005274/92465ccd-2af1-42fd-a421-611eb6c00d7e)

![large5](https://github.com/github/markup/assets/90005274/2b6bfa11-d612-4b94-ba84-a6c7378ea692)

Hover effects on all buttons, as well as on the "View High Scores" link, help to guide the user through the interface. When the user hovers over one of these elements, the color will change from yellow to blue and the cursor will change to a pointer. This effect can be viewed on the "Start Quiz" button in the GIF below.

![hover](https://github.com/github/markup/assets/90005274/4eb6c6e0-d47f-4216-beea-ffcca22fbf46)

## Future Development

One piece of functionality still in progress is the ordering of saved scores from highest to lowest in the "High Scores" page. More to come on this soon!

## Acknowledgements and Citations

As part of my training with University of Denver's Full-Stack Coding Bootcamp, I'm very fortunate to have access to a community of teaching assistants, tutors, and other learners. Early on in the project, I met with a tutor, Joem Casusi. Joem helped me to create an array of objects to store questions and answers, helped me to better understand the process to create and append elements in JavaScript, and discussed uses for passing parameters to functions. Later on in the project, I was having unexpected results when attempting to increase the score in response to correct answers and decrease the time remaining in response to incorrect answers. Teaching assistant Nick S. (https://github.com/nickso9) was very helpful in troubleshooting. I had been trying to achieve the score-keeping and time-keeping through event listeners, but Nick guided me to use the same conditional statement without an event listener, which corrected the issue. Nick also helped me to correct an issue with local storage by creating an empty array to push a newly submitted score into, and setting the array to local storage. I am very grateful for Nick and Joem's assistance and guidance, and I wanted to acknowledge them! 


BoltClock. (2011, July 25). Add CSS box shadow around the whole Div. Stack Overflow. https://stackoverflow.com/questions/6821295/add-css-box-shadow-around-the-whole-div (Referenced in order to prevent offsetting a box-shadow.)

christian. (2013, May 23). Preventing multiple clicks on button. Stack Overflow. https://stackoverflow.com/questions/16715075/preventing-multiple-clicks-on-button (Referenced to make an event listener execute only once using {once:true}.)

(2024). CSS Gradients. https://www.w3schools.com/css/css3_gradients.asp

(2024, January 24). Radial-Gradient(). https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient
