// Defining Global Variables

const questions = [
    {
        question: "What does the abbreviation, CSS, mean?",
        answers: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Computational Style Sheets",
            "Cursive Style Sheets",
        ],
        correct: "Cascading Style Sheets"
    },
    {
        question: "What does the abbreviation, HTML, mean?",
        answers: [
            "HyperText Markup Language",
            "HotText Makeup Language",
            "HoverTitle Makeup Language",
            "Horchata Tea Milk Latte",
        ],
        correct: "HyperText Markup Language"

    },
    {
        question: "Which of the following below is a programming language?",
        answers: [
            "Spacey",
            "Javascript",
            "GroundFloor",
            "PicutreFrame",
        ],
        correct: "Javascript"

    },
    {
        question: "What is an example of a Code Editor",
        answers: [
            "Yoga Flow",
            "Bearing Gifts",
            "Visual Studio Code",
            "Forget Me Not",
        ],
        correct: "Visual Studio Code"
    }
];

const startButton = document.getElementById('start-button')
const headers = document.getElementById('hiding')
const questionContainerElement = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')
const timeEL = document.getElementById("time")
const formEl = document.querySelector(".form")
const userInput = document.getElementById("initials-input")
const submitBtn = document.getElementById("submit-btn")
const scoreEl = document.getElementById("score")

let index = 0;
let score = 0
let time = 60
let timer;
let highScoreArr = []

// Defining Global Variables Ends

// Start Code-Quiz Function

function startGame() {
    headers.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    displayQuestions()
    startTimer()
}

// Start Code-Quiz Function Ends

// Display Questions Function

function displayQuestions() {
    if (index === questions.length) {
        endQuiz()
    }

    questionEl.textContent = questions[index].question
    answerButtonsEl.innerHTML = ""
    for (let i = 0; i < questions[index].answers.length; i++) {
        const btn = document.createElement("button")
        btn.setAttribute("class", "btn")
        btn.textContent = questions[index].answers[i]
        answerButtonsEl.append(btn)

    }

// Display Questions Function Ends

// Start Timer Function

}
function startTimer() {
    timer = setInterval(function () {
        time--
        timeEL.textContent = time

        if (time == 0) {
            endQuiz()
        }
    }, 1000)
}

// Start Time Function Ends

// Check Answer Function

function checkAnswer(answer) {
    if (answer === questions[index].correct) {
        index++
        score++
        displayQuestions()
    } else {
        index++
        time -= 10
        displayQuestions()
    }
}

// Check Answer Function Ends

// End Quiz Function 

function endQuiz() {
    clearInterval(timer)
    questionContainerElement.classList.add("hide")
    formEl.classList.remove("hide")
    scoreEl.textContent = score
}

// End Quiz Function Ends

// Store Initials and Highscore Function

function storage(initials) {
    highScoreArr = JSON.parse(localStorage.getItem("highScores")) || []

    if (initials !== "") {

        const user = {
            initials: initials,
            score: score
        }

        highScoreArr.push(user)
        localStorage.setItem("highScores", JSON.stringify(highScoreArr))
        window.location.assign("score.html")
    }
}

// Store Initials and Highscore Function Ends

// Start Quiz Button

startButton.addEventListener('click', startGame);

// Start Quiz Button Ends

// Answer Question Verification

answerButtonsEl.addEventListener('click', () => {
    let userChoice = this.event.target.textContent
    checkAnswer(userChoice);
})

// Answer Question Verification Ends

// Log Initials and Highscore Function

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const userInitials = userInput.value
    storage(userInitials);
})

// Log Initials and Highscore Function Ends