
Psudocode for Quiz
//Events
1. User clicks on "start quiz"
5. User clicks on an answer
9. Timer reaches 0
13. User enters in initials
17. highscore html page loads(16a)
21. user clicks on return to quiz(16c)
25. user clicks on "view highscores"
28. user clicks on "try again"(16b)
31. user clicks on "settings"
35. user clicks save on modal
39. user clicks reset scores
//Handlers
2. handles user click on start quiz
6. handles user click on answer
10.handles timer reaching 0
14.handles user input of initials
18.handles highscore html page load(16a) 
22/29.handles user click to return to quiz html(16c)(16b)
26.handles user click on view highscores
32. handles user click on "settings"
36. handles user click on save
40. handles user click on reset scores
//States
3. timer begins counting down
7. user score is increased, or time is deducted based on selection, 
11.timer stops counting down.
15. user initials and score are stored in local storage 
19. local storage contains info to populate table(16a)
23/30. quiz settings reset, timer resets, score resets.(16c)(16b)
27. html page is changed to highscore html
33. a modal appears to collect user prefrences for quiz
37. settings are saved to local storage
41. local storage deletes user data from local storage
//UI
4. The DOM is populated with a question and answers
8. The DOM is populated with a new questions and answers (repeats untill timer < 0)
    a green correct or red incorrect shows on the screen
    a correct chime or incorrect chime plays on the screen
12. The DOM is populated with a game over screen, 
    the timer shows 0 and shows an option to enter in initials.
16/27. The DOM changes HTML to Highscore page and presents user with a
    a. highscore table that shows initials and scores of different users.
    b. button to try again,
    c. link to return to the quiz,
    d. settings button.
    e. Reset highscores button.
20. High score populates with local storage data(16a)
24. The DOM is populated with a link to highscore, 
    timer that shows how many seconds are left,
    Coding quiz title and instructions,
    and a button that starts quiz
34.THe Modal appear and gives quiz settings and option to save
38.The modal disapears and options will be applied on the next quiz start press
42.The DOM refreshes highscores table with nothing due to nothing stored in local storage.



    <div class="btn-group-vertical button">

        <h1>
            <p strong> simple coding question placeholder</p>
        </h1>



        <button type="button" class="btn btn-secondary buttonPlace1">question...................</button>
        <br>
        <button type="button" class="btn btn-secondary buttonPlace2">small question</button>
        <br>
        <button type="button" class="btn btn-secondary buttonPlace3">3</button>
        <br>
        <button type="button" class="btn btn-secondary buttonPlace4">4</button>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>
    <link href="script.js" rel="javaScript">
    </link>


function buildQuiz() {
    // output stores the html output (questions/answer choices)
    const output = [];

    // for each question...                                                                         
    myQuestions.forEach(
        //--data value--, --data index--                                                                        // Arrow functions allow us to write shorter function syntax
        (currentQuestion, questionNumber) => {
            // variable to store the list of possible answers
            const answers = [];

            // for each available answer...
            for (letter in currentQuestion.answers) {                                                                   // The in operator returns true if the specified property is in the specified object or its prototype chain.

                // ...add an html button
                // Radio buttons let a user select only one of a limited number of choices
                answers.push(                                                                                          // template literals are ${} for strings. Have to be inside back ticks
                    `<label>
                   <input type="radio" name="question${questionNumber}" value="${letter}">                                     
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            // add this question and its answers to the output                                                          
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
            // takes generated html and shows it on the page                                                           // The join() method returns the array as a string.
            quizContainer.innerHTML = output.join('');
        }
    )
}

// display quiz right away
buildQuiz();



function showResults(i) {
    currentQuestion = myQuestions[i]
    var question = document.createElement("div");
    var answerA = document.createElement("div");
    var answerB = document.createElement("div");
    var answerC = document.createElement("div");
    question.textContent = currentQuestion.question;
    answerA.textContent = currentQuestion.answers.a;
    answerB.textContent = currentQuestion.answers.b;
    answerC.textContent = currentQuestion.answers.c;
    quizContainer.appendChild(question)
    quizContainer.appendChild(answerA)
    quizContainer.appendChild(answerB)
    quizContainer.appendChild(answerC)

}
showResults(0)








    





======================================================





