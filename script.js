const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const startButton = document.getElementById('startBtn');
startButton.addEventListener('click', startQuiz);
const body = document.getElementById("body");
const timer = document.getElementById("timer");
var button = document.querySelectorAll("button");
button.className = "btn btn-primary";


// list of possible questions
    let currentQuestionId = 0;
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
            question: "Which of the following is the correct syntax to display “Welcome” in an alert box using JavaScript?",
            answers: {
                a: "alertbox(“Welcome”);",
                b: "<alert(“Welcome”);>",
                c: "<msg(“Welcome”);>"
            },
            correctAnswer: "b"
        },
        {
            question: "Using _______ statement is how you test for a specific condition.",
            answers: {
                a: "<Switch>",
                b: "<For>",
                c: "<If>"
            },
            correctAnswer: "c"
        }
    ];

// start quiz
    function startQuiz() {
        var start = document.getElementById('startDiv');
        var quiz = document.getElementById('quiz');

        start.className = "invisible";
        quiz.className = "visible";

        showQuestion(0);
        setTime();
    }

// show question
    function showQuestion(questionId) {
        var currentQuestion = myQuestions[questionId];
        // answer area
        var question = document.createElement("div");
        question.className += ("question");

        // answerA
        var answerA = document.createElement("button");
        answerA.className += "btn-primary";
        // answerA.addEventListener('click', myQuestions[1]);

        // answerB
        var answerB = document.createElement("button");
        answerB.className += "btn-primary";
        // answerA.addEventListener('click', showNextQuestion[2];

        // answerC 
        var answerC = document.createElement("button");
        answerC.className += "btn-primary";
        // answerA.addEventListener('click', showNextQuestion("c"));


        question.textContent = currentQuestion.question;
        answerA.textContent = currentQuestion.answers.a;
        answerB.textContent = currentQuestion.answers.b;
        answerC.textContent = currentQuestion.answers.c;
        quizContainer.appendChild(question);
        quizContainer.appendChild(answerA);
        // answerA.addEventListener("click", function(e) {
        //     if (e.target && e.target.id) {
        //       e.target.className = "foo"; // new class name here
        //       alert("clicked " + e.target.innerText);
        //     }
        //   });
        quizContainer.appendChild(answerB);
        quizContainer.appendChild(answerC);
    }

// show next question
/* the last question needs to stop time and display time left */
    function showNextQuestion(answer) {
        // judge answer/ if correct, show next question
        var question = myQuestions[currentQuestionId];
        if (question.correctAnswer === answer) {
            //  user chose correct
        } else
            // deduct time show next question 
            secondsLeft = -10;
        alert("wrong answer")
        showNextQuestion();
    }

    if (currentQuestionId < myQuestions.length) {
        currentQuestionId++;
    }
    showQuestion(currentQuestionId);


// timer
    // var timer is already declared
    var secondsLeft = 60;
    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timer.textContent = timerInterval;

            if (secondsLeft <= 0) {
                alert("You lose!")
                secondsLeft = 0;
            }
            console.log(timerInterval);

        }, 1000)
    }

// local storage

/*
request users initials 
store timerInterval variable in local storage
show previous highscores
*/
    function Highscore() {
// request username
    var username = prompt("enter username")
    localStorage.setItem("Username", username);
// store time left
    localStorage.setItem("Time", timerInterval);
// show previous highscores
    const highscoreName = localStorage.getItem("Username");
    const highscoreTime = localStorage.getItem("time");
// display previous high scores from local storage???
    }

