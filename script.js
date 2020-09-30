const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const startButton = document.getElementById('startBtn');
startButton.addEventListener('click', startQuiz);
const body = document.getElementById("body");
var secondsLeft = 60;
const timer = document.getElementById("timer");
var button = document.querySelectorAll("button");
var questionId = 0;
button.className = "btn btn-primary";
var timerInterval;
var highscores = document.getElementById("highscores");
highscores.addEventListener("click", showHighScores);


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

    showQuestion();
    setTime();
}

// show question

function showQuestion() {
    var currentQuestion = myQuestions[questionId];
    // answer area
    var question = document.createElement("div");
    question.className += ("question");

    // answer buttonA
    var answerA = document.createElement("button");
    answerA.className += "btn-primary";
    answerA.addEventListener('click', () => checkAnswer(currentQuestion.answers.a));

    // answer buttonB
    var answerB = document.createElement("button");
    answerB.className += "btn-primary";
    answerB.addEventListener('click', () => checkAnswer(currentQuestion.answers.b));

    // answer buttonC 
    var answerC = document.createElement("button");
    answerC.className += "btn-primary";
    answerC.addEventListener('click', () => checkAnswer(currentQuestion.answers.c));
    // show question
    question.textContent = currentQuestion.question;
    answerA.textContent = currentQuestion.answers.a;
    answerB.textContent = currentQuestion.answers.b;
    answerC.textContent = currentQuestion.answers.c;
    quizContainer.appendChild(question);
    quizContainer.appendChild(answerA);
    quizContainer.appendChild(answerB);
    quizContainer.appendChild(answerC);
}



// check if answer matches predefined answer in myQuestions
function checkAnswer(answer) {
    let correctLetter = myQuestions[questionId].correctAnswer;
    if (myQuestions[questionId].answers[correctLetter] === answer) {
        alert("correct");
    }
    else {
        alert('incorrect');
        secondsLeft = secondsLeft - 10;
    }
    questionId++; // go to next question.
    quizContainer.innerHTML = ""; // blank out quiz container.
    if (questionId === myQuestions.length) {
        // at end of questions.
        return endQuiz();
    }
    showQuestion();
}


// timer


function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            alert("You lose!")
            secondsLeft = 0;
            return endQuiz();
        }
        console.log(timerInterval);

    }, 1000)
}



function endQuiz() {
    clearInterval(timerInterval);
    console.log("quiz done");
    addToHighScore();
    showHighScores();
}

// highscores 

function addToHighScore() {
    var finalTime = 60 - secondsLeft;
    // request username
    var username = prompt("enter username")

    var thisScore = {
        name: username,
        time: finalTime
    };
    var scores = JSON.parse(localStorage.getItem("scores")); // get list of all scores from storage.
    if (!scores) {
        scores = new Array();
    }
    scores.push(thisScore); // append score to scores array.
    localStorage.setItem("scores", JSON.stringify(scores));
}

// seperate function to show highscores
function showHighScores() {
    var scores = JSON.parse(localStorage.getItem("scores")); // get list of all scores from storage.
    // check to ensure scores it not new/storage is empty.
    var scoreData = document.createElement("ul");
    for (const s in scores) {
        var score = scores[s];
        var content = `${score.name} in ${score.time} seconds`;

        var li = document.createElement("li");
        scoreData.appendChild(li);
        li.innerHTML = content;
    }
    if (resultsContainer.hasChildNodes() === true) {
        resultsContainer.replaceChild(scoreData, resultsContainer.childNodes[0])
    } else {
        resultsContainer.appendChild(scoreData);
    }

}

