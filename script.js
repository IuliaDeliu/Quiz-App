const quizData = [
    {
        question: "How many digits are in 1000?",
        a: "Three digits",
        b: "One digit",
        c: "Four digits",
        d: "Two digits",
        correct: "c",
    },
    {
        question: "What is the sum of one digit prime numbers?",
        a: "11",
        b: "13",
        c: "17",
        d: "15",
        correct: "c",
    },
    {
        question: "What is the largest two digits prime number?",
        a: "96",
        b: "97",
        c: "99",
        d: "98",
        correct: "b",
    },
    {
        question: "Name a triangle whose two angles are equal",
        a: "Isosceles triangle",
        b: "None of these",
        c: "Scalene triangle",
        d: "Right angle triangle",
        correct: "a",
    },
    {
        question: "What is the average value of 25, 20, 23 and 22?",
        a: "22.5",
        b: "20",
        c: "24",
        d: "21.5",
        correct: "a",
    },
    {
        question: "How many factors are there in 71?",
        a: "None of these",
        b: "3",
        c: "2",
        d: "1",
        correct: "c",
    },
    {
        question: "2 is a ... number",
        a: "Composite",
        b: "Odd",
        c: "Prime",
        d: "None of these",
        correct: "c",
    },
    {
        question: "Complete the sequence 13, 16, ..., 22",
        a: "19",
        b: "18",
        c: "17",
        d: "20",
        correct: "a",
    },
    {
        question: "4505 / 5 = ...",
        a: "910",
        b: "901",
        c: "190",
        d: "109",
        correct: "b",
    },
    {
        question: "How many hours in 90 minutes?",
        a: "1.30 hours",
        b: "None of these",
        c: "1.5 hours",
        d: "1 hour",
        correct: "c",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You result: ${score}/${quizData.length}</h2><button onClick='location.reload()'>Try again!</button>`
    }

    loadQuiz();
})