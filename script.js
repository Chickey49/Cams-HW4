
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


function showResults() { }

// on submit, show results
submitButton.addEventListener('click', showResults);



const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

let myQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<script>",
            b: "<js>",
            c: "<javascript>"
        },
        correctAnswer: "a"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<script>",
            b: "<js>",
            c: "<javascript>"
        },
        correctAnswer: "a"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<script>",
            b: "<js>",
            c: "<javascript>"
        },
        correctAnswer: "a"
    }
];







