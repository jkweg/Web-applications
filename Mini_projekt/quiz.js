const quizData = [
    {
        question: "Ile szczytów wchodzi w skład Korony Ziemi?",
        answers: ["9" , "11"  , "7"],
        correct: 2
    },
    {
        question: "Jaka jest najwyższa z gór w Koronie Ziemi?",
        answers: ["Mount-Everest" , "Mont Blanc" , "Kilimandżaro"],
        correct: 0
    },

    {
        question: "Jak nazywa sie najwyższy szczyt Ameryki Północnej",
        answers: ["Rysy" , "Denali" , "Mount Vinson"],
        correct: 1
    }
];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

document.getElementById("start-button").onclick = startQuiz;
document.getElementById("restart-button").onclick = restartQuiz;

function startQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("quizbutton");
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}
function checkAnswer(index) {
  if (index === quizData[currentQuestion].correct) {
    score++;
    alert("✅ Dobrze!");
  } else {
    alert("❌ Zła odpowiedź!");
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  resultEl.textContent = `Zdobyłeś ${score} z ${quizData.length} punktów!`;
}

function restartQuiz() {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  currentQuestion = 0;
  score = 0;
}